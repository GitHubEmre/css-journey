<template>
    <TableComponent :instruction="instruction" />
    <div class="flex space-x-8 mt-8">
        <CodeComponent @code-changed="codeChanged" :class="{ 'animate-vibrate': isVibrating }" />
        <HtmlComponent :htmlTags="(htmlTags as HtmlTag[])" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { HtmlTag } from '../models/HtmlTag';
import CodeComponent from './CodeComponent.vue';
import HtmlComponent from './HtmlComponent.vue';
import TableComponent from './TableComponent.vue';

export default defineComponent({
    name: 'SelectorLevelComponent',
    components: {
        CodeComponent,
        TableComponent,
        HtmlComponent
    },
    data() {
        return {
            answerWithRedBorder: "",
            expectedAnswer: "#gray",
            expectedElement: undefined as undefined | HTMLElement,
            htmlTags: [
                new HtmlTag('<div class="table">'),
                new HtmlTag('<circle id="white" class="bg-white"/>'),
                new HtmlTag('<circle id="gray" class="bg-gray" />'),
                new HtmlTag('<circle id="green" class="bg-green" />'),
                new HtmlTag('</div>')
            ],
            instruction: "Sélectionner le cercle gris en utilisant le sélecteur des id.",
            isVibrating: false
        }
    },
    methods: {
        setBorder: function (htmlElement: HTMLElement, border: string) {
            htmlElement.style.border = border;
        },
        resetRedBorder: function(): void {
            if (this.answerWithRedBorder.length > 0) {
                const plateWithBorder = document.querySelector(this.answerWithRedBorder);
                if (plateWithBorder) {
                    this.setBorder(plateWithBorder as HTMLElement, "unset");
                    this.answerWithRedBorder = "";
                }
            }
        },
        vibrateCodeComponent: function(): void {
            this.isVibrating = true;
            setTimeout(() => (this.isVibrating = false), 300);
        },
        codeChanged: function(code: string) : void {
            if (code.length > 0) {
                this.resetRedBorder();

                const selectedPlate = document.querySelector("#table " + code);
                if (selectedPlate) {
                    const selectedPlateHTMLElement = selectedPlate as HTMLElement;

                    if (code.trim() === this.expectedAnswer) { // win
                        this.setBorder(selectedPlateHTMLElement, "solid 2px green");
                    } else {
                        if (selectedPlateHTMLElement === this.expectedElement) { // correct element but wrong css selector
                            this.vibrateCodeComponent();
                        } else { // incorrect element
                            this.setBorder(selectedPlateHTMLElement, "solid 2px red");
                            selectedPlateHTMLElement.classList.add("animate-vibrate");
                            setTimeout(() => (selectedPlateHTMLElement.classList.remove("animate-vibrate")), 300);
                            this.answerWithRedBorder = "#table " + code;
                        }
                    }
                } else { // element not found
                    this.vibrateCodeComponent();
                }
            }
        }
    },
    mounted() {
        const expectedElement = document.querySelector("#table " + this.expectedAnswer);
        if (expectedElement) {
            this.expectedElement = (expectedElement as HTMLElement);
        }
    },
});
</script>
