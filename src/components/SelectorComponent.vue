<template>
    <div v-if="levelWon" class="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm z-50 flex">
        <p class="m-auto text-9xl">Bien joué !</p>
        <div class="firework" v-for="n in 5" :key="n"></div>
    </div>

    <LevelSelectorComponent :level="currentLevel" @change-level="changeLevel" />
    <TableComponent :instruction="instruction" class="mt-8" />
    <div class="flex space-x-8 mt-8">
        <CodeComponent @code-changed="codeChanged" :class="{ 'animate-vibrate': isVibrating }" ref="codeComponent" />
        <HtmlComponent :htmlTags="(htmlTags as HtmlTag[])" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { HtmlTag } from '../models/HtmlTag';
import CodeComponent from './CodeComponent.vue';
import HtmlComponent from './HtmlComponent.vue';
import LevelSelectorComponent from './LevelSelectorComponent.vue';
import selectorLevels from "../data/selector-levels.json";
import TableComponent from './TableComponent.vue';

type SelectorLevel = {
    htmlTags: string[];
    instruction: string;
    expectedAnswer: string;
};

export default defineComponent({
    name: 'SelectorComponent',
    components: {
        CodeComponent,
        HtmlComponent,
        LevelSelectorComponent,
        TableComponent
    },
    setup() {
        const codeComponent = ref<InstanceType<typeof CodeComponent> | null>(null);
        return { codeComponent };
    },
    data() {
        return {
            answerWithRedBorder: null as null | HTMLElement,
            currentLevel: 1,
            expectedAnswer: "",
            expectedElement: undefined as undefined | HTMLElement,
            htmlTags: [] as HtmlTag[],
            instruction: "",
            isVibrating: false,
            levelWon: false
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

                try {
                    const selectedPlate = document.querySelector("#level-template " + code);
                    if (selectedPlate) {
                        const selectedPlateHTMLElement = selectedPlate as HTMLElement;

                        if (selectedPlateHTMLElement === this.expectedElement) { // correct element
                            if (code.trim().includes(this.expectedAnswer)) { // correct css selector
                                this.setBorder(selectedPlateHTMLElement, "solid 2px green");
                                this.winLevel();
                            } else { // wrong css selector
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
            this.resetRedBorder();
            this.resetGreenBorder();

            const levels: Record<string, SelectorLevel> = selectorLevels;
            this.htmlTags = levels[this.currentLevel].htmlTags.map((htmlTag) => new HtmlTag(htmlTag));
            this.instruction = levels[this.currentLevel].instruction;
            this.expectedAnswer = levels[this.currentLevel].expectedAnswer;
            
            const expectedElement = document.querySelector("#table " + this.expectedAnswer);
            if (expectedElement) {
                this.expectedElement = (expectedElement as HTMLElement);
            }

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
            this.updateLevelValues();
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
