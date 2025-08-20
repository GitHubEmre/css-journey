<template>
    <AlertsComponent ref="alertsComponent" />
    
    <div v-if="levelWon" class="fixed inset-0 bg-white-real bg-opacity-30 backdrop-blur-sm z-50 flex">
        <p class="m-auto text-9xl">Bien joué !</p>
        <div class="firework" v-for="n in 5" :key="n"></div>
    </div>

    <div class="flex px-8 lg:pr-0">
        <div class="flex-grow my-8 lg:mr-[26rem]">
            <NavbarComponent
                :answerToShow="answerToShow"
                :currentLevel="currentLevel"
                :numberOfLevels="numberOfLevels"
                @change-level="changeLevel"
                ref="navbarComponent"
            />
            <ShapesComponent :instruction="instruction" :rawHtml="htmlRenderCode.join('')" class="mt-8" />
            <div class="flex flex-col md:flex-row mt-8">
                <CssIDEComponent :isSelectorMode="true" @code-changed="codeChanged" ref="cssIDEComponent" />
                <HtmlIDEComponent :htmlTags="(htmlIDECode as HtmlTag[])" class="mt-8 md:mt-0 md:ml-8" />
            </div>
        </div>
        <CourseComponent :courses="courses"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { HtmlTag } from '@/models/HtmlTag';
import AlertsComponent from '@/components/shared/AlertsComponent.vue';
import CourseComponent from '@/components/courses/CourseComponent.vue';
import CssIDEComponent from '@/components/shared/CssIDEComponent.vue';
import HtmlIDEComponent from '@/components/shared/HtmlIDEComponent.vue';
import LevelSelectorComponent from '@/components/shared/LevelSelectorComponent.vue';
import NavbarComponent from '@/components/shared/NavbarComponent.vue';
import selectorsLevels from "@/data/selectors-levels.json";
import ShapesComponent from '@/components/selectors/ShapesComponent.vue';

type SelectorsLevel = {
    answerNecessaryKeywords: string[];
    answerToShow: string;
    courses: string[];
    htmlIDECode: string[];
    htmlRenderCode: string[];
    instruction: string;
};

export default defineComponent({
    name: 'SelectorsComponent',
    components: {
        AlertsComponent,
        CssIDEComponent,
        CourseComponent,
        HtmlIDEComponent,
        LevelSelectorComponent,
        NavbarComponent,
        ShapesComponent
    },
    setup() {
        const alertsComponent = ref<InstanceType<typeof AlertsComponent> | null>(null);
        const cssIDEComponent = ref<InstanceType<typeof CssIDEComponent> | null>(null);
        const navbarComponent = ref<InstanceType<typeof NavbarComponent> | null>(null);
        return { alertsComponent, cssIDEComponent, navbarComponent };
    },
    data() {
        return {
            answerToShow: "",
            answersWithRedBorder: [] as HTMLElement[],
            courses: [] as string[],
            currentLevel: 1,
            answerNecessaryKeywords: [] as string[],
            expectedHTMLElements: [] as HTMLElement[],
            htmlIDECode: [] as HtmlTag[],
            instruction: "",
            levelWon: false,
            numberOfLevels: 0,
            htmlRenderCode: [] as string[]
        }
    },
    methods: {
        areHtmlElementsEqual: function(arr1: HTMLElement[], arr2: HTMLElement[]): boolean {
            if (arr1.length !== arr2.length) {
                return false;
            }
            return arr1.every((el, index) => el.isEqualNode(arr2[index]));
        },
        changeLevel(level: number): void {
            this.currentLevel = level;
            localStorage.setItem("currentSelectorsLevel", "" + level);
            this.resetRedBorder();
            this.resetGreenBorders();
            this.navbarComponent?.resetValues();
            this.updateLevelValues();
            if (this.cssIDEComponent) {
                this.cssIDEComponent.resetCode();
            }
        },
        checkAnswer: function(answer: string): boolean {
            let isValid = true;
            this.answerNecessaryKeywords.forEach(keyword => {
                if (!answer.includes(keyword)) {
                    isValid = false;
                }
            });
            return isValid;
        },
        codeChanged: function(code: string): void {
            if (code.length > 0) {
                this.resetRedBorder();
                this.navbarComponent?.incrementNumberOfAttempts();
                try {
                    const selectedHTMLElements = this.selectHTMLElements("#shapes-container " + code);
                    if (selectedHTMLElements.length > 0) {
                        if (this.areHtmlElementsEqual(this.expectedHTMLElements, selectedHTMLElements)) { // correct elements are selected
                            this.onCorrectSelection(code, selectedHTMLElements);
                        } else { // incorrect elements are selected
                            this.onIncorrectSelection(selectedHTMLElements);
                        }
                    } else { // no element is selected
                        this.cssIDEComponent?.vibrate();
                    }
                } catch {
                    this.cssIDEComponent?.vibrate();
                }
            }
        },
        onCorrectSelection: function(code: string, htmlElements: HTMLElement[]) : void {
            if (this.checkAnswer(code)) { // correct css selector
                htmlElements.forEach(htmlElement => {
                    this.setBorder(htmlElement, "solid 2px #6A993E");
                });
                this.winLevel();
            } else { // wrong css selector
                if (this.alertsComponent) {
                    this.alertsComponent.addAlert("Le ou les bons éléments n'ont pas été sélectionné de la bonne manière.");
                }
                this.cssIDEComponent?.vibrate();
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
        setBorder: function (htmlElement: HTMLElement, border: string) {
            htmlElement.style.border = border;
        },
        updateLevelValues(): void {
            const levels: Record<string, SelectorsLevel> = selectorsLevels;
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
        winLevel(): void {
            this.levelWon = true;
            this.navbarComponent?.changeLevel(true);
            setTimeout(() => { this.levelWon = false }, 3000);
        }
    },
    mounted() {
        this.numberOfLevels = Object.keys(selectorsLevels).length;
        this.currentLevel = parseInt(localStorage.getItem("currentSelectorsLevel") ?? "1");
        this.updateLevelValues();
    }
});
</script>
