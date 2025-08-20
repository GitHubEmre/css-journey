<template>
    <!-- TODO: Renommer ce composant en CSSCodeComponent, puis créer un composant CodeComponent qu'on utilisera dans CSSCodeComponent et HTMLIDEComponent, le contenu sera définit avec v-slot (je sais pas encore si ça fonctionnerait) -->
    <div
        class="rounded-md shadow-md flex overflow-hidden w-full font-family-code bg-white-real dark:bg-gray-darker"
        :class="{ 'animate-vibrate': isVibrating }"
    >
        <div class="text-gray-light dark:bg-black flex flex-col p-2 items-end">
            <span v-for="line in lines" :key="line" data-testid="line">{{ line }}</span>
        </div>
        <div class="w-full p-2 cursor-text" @click="focusCodeTextArea" data-testid="code-container">
            <div v-if="isSelectorMode" data-testid="selector-mod">
                <input
                    autocomplete="off"
                    class="w-full text-brown dark:text-orange-code bg-gray-lighter dark:bg-gray placeholder-gray-light dark:placeholder-gray-lighter focus:outline-none px-1"
                    placeholder=".css-selector"
                    v-model="code"
                    @keydown="handleKeyDown"
                    ref="codeInput"
                    data-testid="code-input"
                ></input>
                <div class="flex flex-col text-blue-darker dark:text-yellow-dark">
                    <span>&#123;</span>
                    <span class="text-green-dark ml-4">/* Some CSS code... */</span>
                    <span>&#125;</span>
                </div>
            </div> 
            <div v-if="!isSelectorMode && cssSelector && cssProperty" class="flex flex-col text-blue-darker dark:text-yellow-dark" data-testid="property-mod">
                <span class="text-brown dark:text-orange-code">{{ cssSelector }}</span>
                <span>&#123;</span>
                <div class="text-red dark:text-blue-light ml-4 flex flex-wrap">
                    <span class="whitespace-nowrap">{{ cssProperty }}</span>
                    <span class="text-black dark:text-white-real mr-2">:</span>
                    <input
                        autocomplete="off"
                        class="max-w-52 text-blue-dark dark:text-orange-code bg-gray-lighter dark:bg-gray placeholder-gray-light dark:placeholder-gray-lighter focus:outline-none px-1"
                        placeholder="write-something-here"
                        v-model="code"
                        @keydown="handleKeyDown"
                        :disabled="inputDisabled"
                        data-testid="code-input"
                        ref="codeInput"
                    ></input>
                    <span class="text-black dark:text-white-real">;</span>
                </div>
                <span>&#125;</span>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';



export default defineComponent({
    emits: ['codeChanged'],
    name: 'CssIDEComponent',
    setup() {
        const codeInput = ref<HTMLInputElement | null>(null);
        return { codeInput };
    },
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
            this.codeInput?.focus();
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