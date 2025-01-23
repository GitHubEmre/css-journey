<template>
    <AlertsComponent ref="alertsComponent" />
    
    <div v-if="levelWon" class="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm z-50 flex">
        <p class="m-auto text-9xl">Bien joué !</p>
        <div class="firework" v-for="n in 5" :key="n"></div>
    </div>

    <div class="flex pl-8 space-x-8">
        <div class="flex-grow mt-8">
            <div class="flex justify-end">
                <button
                    @click="showAnswerClicked"
                    :class="numberOfAttemps >= attempsNeededToShowAnwser ? 'bg-white' : 'bg-gray-lighter cursor-not-allowed'"
                    class="mr-4 px-2 rounded w-48"
                >
                    {{ showAnswer ? answerToShow : "Voir la réponse" }}
                </button>
                <LevelSelectorComponent :level="currentLevel" @change-level="changeLevel" />
            </div>
            <TableComponent :instruction="instruction" :template="template.join('')" class="mt-8" />
            <div class="flex space-x-8 mt-8">
                <CodeComponent @code-changed="codeChanged" :class="{ 'animate-vibrate': isVibrating }" ref="codeComponent" />
                <HtmlComponent :htmlTags="(htmlTags as HtmlTag[])" />
            </div>
        </div>
        <CourseComponent :courses="courses"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { HtmlTag } from '../models/HtmlTag';
import AlertsComponent from './shared/AlertsComponent.vue';
import CodeComponent from './CodeComponent.vue';
import CourseComponent from './courses/CourseComponent.vue';
import HtmlComponent from './HtmlComponent.vue';
import LevelSelectorComponent from './LevelSelectorComponent.vue';
import selectorLevels from "../data/selector-levels.json";
import TableComponent from './TableComponent.vue';

type SelectorLevel = {
    htmlTags: string[];
    template: string[];
    instruction: string;
    answerKeywords: string[];
    answerToShow: string;
    courses: string[];
};

export default defineComponent({
    name: 'SelectorComponent',
    components: {
        AlertsComponent,
        CodeComponent,
        CourseComponent,
        HtmlComponent,
        LevelSelectorComponent,
        TableComponent
    },
    setup() {
        const codeComponent = ref<InstanceType<typeof CodeComponent> | null>(null);
        const alertsComponent = ref<InstanceType<typeof AlertsComponent> | null>(null);
        return { codeComponent, alertsComponent };
    },
    data() {
        return {
            answerToShow: "",
            answersWithRedBorder: [] as HTMLElement[],
            attempsNeededToShowAnwser: 3,
            courses: [] as string[],
            currentLevel: 1,
            answerKeywords: [] as string[],
            expectedHTMLElements: [] as HTMLElement[],
            htmlTags: [] as HtmlTag[],
            instruction: "",
            isVibrating: false,
            levelWon: false,
            numberOfAttemps: 0,
            template: [] as String[],
            showAnswer: false
        }
    },
    methods: {
        areHtmlElementsEqual: function(arr1: HTMLElement[], arr2: HTMLElement[]): boolean {
            if (arr1.length !== arr2.length) {
                return false;
            }
            return arr1.every((el, index) => el.isEqualNode(arr2[index]));
        },
        setBorder: function (htmlElement: HTMLElement, border: string) {
            htmlElement.style.border = border;
        },
        resetGreenBorders: function(): void {
            this.expectedHTMLElements.forEach(htmlElement => {
                this.setBorder(htmlElement, "unset");
            });
        },
        resetRedBorder: function(): void {
            this.answersWithRedBorder.forEach(htmlElement => {
                this.setBorder(htmlElement, "unset");
            });
            this.answersWithRedBorder = [];
        },
        vibrateCodeComponent: function(): void {
            this.isVibrating = true;
            setTimeout(() => (this.isVibrating = false), 300);
        },
        isAnswerValid: function(answer: string): boolean {
            let isValid = true;
            this.answerKeywords.forEach(keyword => {
                if (!answer.includes(keyword)) {
                    isValid = false;
                }
            });
            return isValid;
        },
        codeChanged: function(code: string) : void {
            if (code.length > 0) {
                this.resetRedBorder();
                this.numberOfAttemps++;

                try {
                    const selectedHTMLElements = Array.from(
                        document.querySelectorAll("#level-template " + code)
                    ) as HTMLElement[];
                    if (selectedHTMLElements.length > 0) {
                        if (this.areHtmlElementsEqual(this.expectedHTMLElements, selectedHTMLElements)) { // correct elements
                            if (this.isAnswerValid(code)) { // correct css selector
                                selectedHTMLElements.forEach(htmlElement => {
                                    this.setBorder(htmlElement, "solid 2px #6A993E");
                                });
                                this.winLevel();
                            } else { // wrong css selector
                                if (this.alertsComponent) {
                                    this.alertsComponent.addAlert("Le ou les bons éléments n'ont pas été sélectionné de la bonne manière.");
                                }
                                this.vibrateCodeComponent();
                            }
                        } else { // wrong elements
                            selectedHTMLElements.forEach(htmlElement => {
                                this.setBorder(htmlElement, "solid 2px #CC3300");
                                htmlElement.classList.add("animate-vibrate");
                            });
                            setTimeout(() => {
                                selectedHTMLElements.forEach(htmlElement => {
                                    htmlElement.classList.remove("animate-vibrate");
                                });
                            }, 300);
                            this.answersWithRedBorder = selectedHTMLElements;
                        }
                    } else { // elements not found
                        this.vibrateCodeComponent();
                    }
                } catch {
                    this.vibrateCodeComponent();
                }
            }
        },
        updateLevelValues(): void {
            const levels: Record<string, SelectorLevel> = selectorLevels;
            this.htmlTags = levels[this.currentLevel].htmlTags.map((htmlTag) => new HtmlTag(htmlTag));
            this.template = levels[this.currentLevel].template;
            this.instruction = levels[this.currentLevel].instruction;
            this.answerKeywords = levels[this.currentLevel].answerKeywords;
            this.answerToShow = levels[this.currentLevel].answerToShow;
            this.courses = levels[this.currentLevel].courses;

            this.$nextTick(() => {
                this.expectedHTMLElements = Array.from(
                    document.querySelectorAll("#table " + this.answerToShow)
                ) as HTMLElement[];
            });

            if (this.codeComponent) {
                this.codeComponent.resetCode();
            }
        },
        changeLevel(isNext: boolean): void {
            if (isNext) {
                if (this.currentLevel + 1 <= Object.keys(selectorLevels).length) {
                    this.currentLevel += 1;
                } else {
                    this.currentLevel = 1;
                }
            } else if (this.currentLevel - 1 > 0) {
                this.currentLevel -= 1;
            } else {
                this.currentLevel = Object.keys(selectorLevels).length;
            }
            this.resetRedBorder();
            this.resetGreenBorders();
            this.numberOfAttemps = 0;
            this.showAnswer = false;
            this.updateLevelValues();
        },
        winLevel(): void {
            this.levelWon = true;
            this.changeLevel(true);
            setTimeout(() => { this.levelWon = false }, 3000);
        },
        showAnswerClicked(): void {
            if (this.numberOfAttemps >= this.attempsNeededToShowAnwser) {
                this.showAnswer = !this.showAnswer;
            }
        }
    },
    mounted() {
        this.updateLevelValues();
    },
});
</script>
