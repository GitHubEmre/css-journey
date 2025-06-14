<template>
    <!-- TODO: Renommer ce composant en CSSCodeComponent, puis créer un composant CodeComponent qu'on utilisera dans CSSCodeComponent et HTMLIDEComponent, le contenu sera définit avec v-slot (je sais pas encore si ça fonctionnerait) -->
    <div
        class="rounded-md shadow-md flex overflow-hidden w-full font-family-code bg-white-real dark:bg-gray-darker"
        :class="{ 'animate-vibrate': isVibrating }"
    >
        <div class="text-gray-light dark:bg-black flex flex-col p-2 items-end">
            <span v-for="line in lines" :key="line">{{ line }}</span>
        </div>
        <div class="w-full p-2 cursor-text" @click="focusCodeTextArea">
            <input
                v-if="isSelectorMode"
                autocomplete="off"
                class="w-full text-brown dark:text-orange-code bg-gray-lighter dark:bg-gray placeholder-gray-light dark:placeholder-gray-lighter focus:outline-none px-1"
                id="code-text-area"
                placeholder=".css-selector"
                v-model="code"
                @keydown="handleKeyDown"
            ></input>
            <div v-if="isSelectorMode" class="flex flex-col text-blue-darker dark:text-yellow-dark">
                <span>&#123;</span>
                <span class="text-green-dark ml-4">/* Some CSS code... */</span>
                <span>&#125;</span>
            </div>
            <div v-if="!isSelectorMode && cssSelector && cssProperty" class="flex flex-col text-blue-darker dark:text-yellow-dark">
                <span class="text-brown dark:text-orange-code">{{ cssSelector }}</span>
                <span>&#123;</span>
                <div class="text-red dark:text-blue-light ml-4 flex flex-wrap">
                    <span class="whitespace-nowrap">{{ cssProperty }}</span>
                    <span class="text-black dark:text-white-real mr-2">:</span>
                    <input
                        autocomplete="off"
                        class="max-w-52 text-blue-dark dark:text-orange-code bg-gray-lighter dark:bg-gray placeholder-gray-light dark:placeholder-gray-lighter focus:outline-none px-1"
                        id="code-text-area"
                        placeholder="write-something-here"
                        v-model="code"
                        @keydown="handleKeyDown"
                        :disabled="inputDisabled"
                    ></input>
                    <span class="text-black dark:text-white-real">;</span>
                </div>
                <span>&#125;</span>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    emits: ['codeChanged'],
    name: 'CssIDEComponent',
    props: {
        cssProperty: {
            type: String,
            default: ""
        },
        cssSelector: {
            type: String,
            default: ""
        },
        inputDisabled: {
            type: Boolean,
            default: false
        },
        lines: {
            type: Number,
            default: 12
        },
        isSelectorMode: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            code: "",
            isVibrating: false
        };
    },
    methods: {
        focusCodeTextArea: function(): void {
            const codeTextArea = document.getElementById("code-text-area") as HTMLElement;
            if (codeTextArea) {
                codeTextArea.focus();
            }
        },
        handleKeyDown(event: KeyboardEvent): void {
            if (event.key === "Enter") {
                this.code = this.code.toLowerCase();
                this.$emit('codeChanged', this.code.trim());
            }
        },
        resetCode(): void {
            this.code = "";
        },
        vibrate: function(): void {
            this.isVibrating = true;
            setTimeout(() => (this.isVibrating = false), 300);
        }
    }
});
</script>