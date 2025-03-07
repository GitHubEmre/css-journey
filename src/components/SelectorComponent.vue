<template>
    <AlertsComponent ref="alertsComponent" />
    
    <div v-if="levelWon" class="fixed inset-0 bg-white-real bg-opacity-30 backdrop-blur-sm z-50 flex">
        <p class="m-auto text-9xl">Bien joué !</p>
        <div class="firework" v-for="n in 5" :key="n"></div>
    </div>

    <div class="flex px-8 pb-8 lg:pr-0 space-x-8">
        <div class="flex-grow mt-8">
            <div class="flex flex-col md:flex-row justify-between md:mr-16 lg:mr-0">
                <router-link to="/css-journey"><button class="bg-green w-full md:w-48 h-8 rounded hover:scale-105 mb-4 md:mb-0">Retour à l'accueil</button></router-link>
                <div class="flex flex-col md:flex-row justify-end">
                    <button
                        @click="showAnswerClicked"
                        :class="numberOfAttemps >= attempsNeededToShowAnwser ? 'bg-green dark:bg-white animate-vibrate' : 'bg-gray-lighter cursor-not-allowed'"
                        class="mr-4 mb-4 md:mb-0 px-2 rounded w-full md:w-64 h-8"
                    >
                        {{ showAnswer ? answerToShow : "Voir la réponse" }}
                    </button>
                    <LevelSelectorComponent :level="currentLevel" @change-level="changeLevel" />
                </div>
            </div>
            <ShapesComponent :instruction="instruction" :rawHtml="htmlRenderCode.join('')" class="mt-8" />
            <div class="flex flex-col md:flex-row mt-8">
                <CssIDEComponent @code-changed="codeChanged" :class="{ 'animate-vibrate': isVibrating }" ref="cssIDEComponent" />
                <HtmlIDEComponent :htmlTags="(htmlIDECode as HtmlTag[])" class="mt-8 md:mt-0 md:ml-8" />
            </div>
        </div>
        <CourseComponent :courses="courses"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { HtmlTag } from '../models/HtmlTag';
import AlertsComponent from './shared/AlertsComponent.vue';
import CssIDEComponent from './CssIDEComponent.vue';
import CourseComponent from './courses/CourseComponent.vue';
import HtmlIDEComponent from './HtmlIDEComponent.vue';
import LevelSelectorComponent from './LevelSelectorComponent.vue';
import selectorLevels from "../data/selector-levels.json";
import ShapesComponent from './ShapesComponent.vue';

type SelectorLevel = {
    answerNecessaryKeywords: string[];
    answerToShow: string;
    courses: string[];
    htmlIDECode: string[];
    instruction: string;
    htmlRenderCode: string[];
};

export default defineComponent({
    name: 'SelectorComponent',
    components: {
        AlertsComponent,
        CssIDEComponent,
        CourseComponent,
        HtmlIDEComponent,
        LevelSelectorComponent,
        ShapesComponent
    },
    setup() {
        const cssIDEComponent = ref<InstanceType<typeof CssIDEComponent> | null>(null);
        const alertsComponent = ref<InstanceType<typeof AlertsComponent> | null>(null);
        return { cssIDEComponent, alertsComponent };
    },
    data() {
        return {
            answerToShow: "",
            answersWithRedBorder: [] as HTMLElement[],
            attempsNeededToShowAnwser: 3,
            courses: [] as string[],
            currentLevel: 1,
            answerNecessaryKeywords: [] as string[],
            expectedHTMLElements: [] as HTMLElement[],
            htmlIDECode: [] as HtmlTag[],
            instruction: "",
            isVibrating: false,
            levelWon: false,
            numberOfAttemps: 0,
            htmlRenderCode: [] as string[],
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
            if (this.cssIDEComponent) {
                this.cssIDEComponent.resetCode();
            }
        },
        codeChanged: function(code: string) : void {
            if (code.length > 0) {
                this.resetRedBorder();
                this.numberOfAttemps++;
                try {
                    const selectedHTMLElements = this.selectHTMLElements("#shapes-container " + code);
                    if (selectedHTMLElements.length > 0) {
                        if (this.areHtmlElementsEqual(this.expectedHTMLElements, selectedHTMLElements)) { // correct elements are selected
                            this.onCorrectSelection(code, selectedHTMLElements);
                        } else { // incorrect elements are selected
                            this.onIncorrectSelection(selectedHTMLElements);
                        }
                    } else { // no element is selected
                        this.vibrateCssIDEComponent();
                    }
                } catch {
                    this.vibrateCssIDEComponent();
                }
            }
        },
        isAnswerValid: function(answer: string): boolean {
            let isValid = true;
            this.answerNecessaryKeywords.forEach(keyword => {
                if (!answer.includes(keyword)) {
                    isValid = false;
                }
            });
            return isValid;
        },
        onCorrectSelection: function(code: string, htmlElements: HTMLElement[]) : void {
            if (this.isAnswerValid(code)) { // correct css selector
                htmlElements.forEach(htmlElement => {
                    this.setBorder(htmlElement, "solid 2px #6A993E");
                });
                this.winLevel();
            } else { // wrong css selector
                if (this.alertsComponent) {
                    this.alertsComponent.addAlert("Le ou les bons éléments n'ont pas été sélectionné de la bonne manière.");
                }
                this.vibrateCssIDEComponent();
            }
        },
        onIncorrectSelection: function(htmlElements: HTMLElement[]): void {
            htmlElements.forEach(htmlElement => {
                this.setBorder(htmlElement, "solid 2px #CC3300");
                htmlElement.classList.add("animate-vibrate");
            });
            setTimeout(() => {
                htmlElements.forEach(htmlElement => {
                    htmlElement.classList.remove("animate-vibrate");
                });
            }, 300);
            this.answersWithRedBorder = htmlElements;
        },
        setBorder: function (htmlElement: HTMLElement, border: string) {
            htmlElement.style.border = border;
        },
        showAnswerClicked(): void {
            if (this.numberOfAttemps >= this.attempsNeededToShowAnwser) {
                this.showAnswer = !this.showAnswer;
            }
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
        selectHTMLElements: function(cssSelector: string): HTMLElement[] {
            return Array.from(
                document.querySelectorAll(cssSelector)
            ) as HTMLElement[];
        },
        updateLevelValues(): void {
            const levels: Record<string, SelectorLevel> = selectorLevels;
            this.htmlIDECode = levels[this.currentLevel].htmlIDECode.map((htmlIDECode) => new HtmlTag(htmlIDECode));
            this.htmlRenderCode = levels[this.currentLevel].htmlRenderCode;
            this.instruction = levels[this.currentLevel].instruction;
            this.answerNecessaryKeywords = levels[this.currentLevel].answerNecessaryKeywords;
            this.answerToShow = levels[this.currentLevel].answerToShow;
            this.courses = levels[this.currentLevel].courses;

            this.$nextTick(() => {
                this.expectedHTMLElements = Array.from(
                    document.querySelectorAll("#shapes-container " + this.answerToShow)
                ) as HTMLElement[];
            });
        },
        vibrateCssIDEComponent: function(): void {
            this.isVibrating = true;
            setTimeout(() => (this.isVibrating = false), 300);
        },
        winLevel(): void {
            this.levelWon = true;
            this.changeLevel(true);
            setTimeout(() => { this.levelWon = false }, 3000);
        }
    },
    mounted() {
        this.updateLevelValues();
    },
});
</script>
