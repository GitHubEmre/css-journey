<template>
    <!-- TODO: Renommer ce composant en CSSCodeComponent, puis créer un composant CodeComponent qu'on utilisera dans CSSCodeComponent et HTMLComponent, le contenu sera définit avec v-slot (je sais pas encore si ça fonctionnerait) -->
    <div class="rounded-md shadow-md flex overflow-hidden w-full font-family-code bg-white-real">
        <div class="text-gray-light dark:bg-black flex flex-col p-2 items-end">
            <span v-for="line in lines" :key="line">{{ line }}</span>
        </div>
        <div class="dark:bg-gray-darker w-full p-2 cursor-text" @click="focusCodeTextArea">
            <input
                autocomplete="off"
                class="w-full text-brown bg-white-real dark:bg-gray placeholder-gray-lighter focus:outline-none"
                id="code-text-area"
                placeholder=".css-selector"
                v-model="code"
                @keydown="handleKeyDown"
            ></input>
            <div class="flex flex-col text-blue-darker dark:text-yellow-dark">
                <span>&#123;</span>
                <span class="text-green-dark ml-4">/* Some CSS code... */</span>
                <span>&#125;</span>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    emits: ['codeChanged'],
    name: 'CodeComponent',
    props: {
        lines: {
            type: Number,
            default: 12
        }
    },
    data() {
        return {
            code: ""
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
                this.$emit('codeChanged', this.code);
            }
        },
        resetCode(): void {
            this.code = "";
        }
    }
});
</script>