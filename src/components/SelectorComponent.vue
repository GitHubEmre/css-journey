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
                    class="mr-4 bg-white px-2 rounded w-48"
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
    answerToShow: string;
    expectedAnswer: string;
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
            answerWithRedBorder: null as null | HTMLElement,
            attempsNeededToShowAnwser: 3,
            courses: [] as String [],
            currentLevel: 1,
            expectedAnswer: "",
            expectedElement: undefined as undefined | HTMLElement,
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
        setBorder: function (htmlElement: HTMLElement, border: string) {
            htmlElement.style.border = border;
        },
        resetGreenBorder: function(): void {
            if (this.expectedElement) {
                this.setBorder(this.expectedElement, "unset");
            }
        },
        resetRedBorder: function(): void {
            if (this.answerWithRedBorder) {
                this.setBorder(this.answerWithRedBorder, "unset");
                this.answerWithRedBorder = null;
            }
        },
        vibrateCodeComponent: function(): void {
            this.isVibrating = true;
            setTimeout(() => (this.isVibrating = false), 300);
        },
        codeChanged: function(code: string) : void {
            if (code.length > 0) {
                this.resetRedBorder();
                this.numberOfAttemps++;

                try {
                    const selectedPlate = document.querySelector("#level-template " + code);
                    if (selectedPlate) {
                        const selectedPlateHTMLElement = selectedPlate as HTMLElement;

                        if (selectedPlateHTMLElement === this.expectedElement) { // correct element
                            if (code.trim().includes(this.expectedAnswer)) { // correct css selector
                                this.setBorder(selectedPlateHTMLElement, "solid 2px green");
                                this.winLevel();
                            } else { // wrong css selector
                                if (this.alertsComponent) {
                                    this.alertsComponent.addAlert("Le bon élément n'a pas été sélectionné de la bonne manière.");
                                }
                                this.vibrateCodeComponent();
                            }
                        } else { // wrong element
                            this.setBorder(selectedPlateHTMLElement, "solid 2px red");
                            selectedPlateHTMLElement.classList.add("animate-vibrate");
                            setTimeout(() => (selectedPlateHTMLElement.classList.remove("animate-vibrate")), 300);
                            this.answerWithRedBorder = selectedPlateHTMLElement;
                        }
                    } else { // element not found
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
            this.answerToShow = levels[this.currentLevel].answerToShow;
            this.expectedAnswer = levels[this.currentLevel].expectedAnswer;
            this.courses = levels[this.currentLevel].courses;

            this.$nextTick(() => {
                const expectedElement = document.querySelector("#table " + this.expectedAnswer);
                if (expectedElement) {
                    this.expectedElement = (expectedElement as HTMLElement);
                }
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
            this.resetGreenBorder();
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
