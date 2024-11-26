<template>
    <div class="rounded-md shadow-md flex overflow-hidden w-full">
        <div class="text-gray-light bg-gray-darker flex flex-col p-2 items-end">
            <span v-for="line in lines" :key="line">{{ line }}</span>
        </div>
        <div class="bg-white dark:bg-gray-dark w-full font-family-code p-2 cursor-text" @click="focusCodeTextArea">
            <input
                autocomplete="off"
                class="w-full text-orange-light bg-white dark:bg-gray placeholder-gray-lighter focus:outline-none"
                id="code-text-area"
                placeholder=".css-selector"
                v-model="code"
                @change="codeChanged"
                @keydown="handleKeyDown"
            ></input>
            <div class="flex flex-col">
                <span class="text-yellow">&#123;</span>
                <span class="text-green ml-4">/* Some CSS code... */</span>
                <span class="text-yellow">&#125;</span>
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
        codeChanged: function(): void {
            this.$emit('codeChanged', this.code);
        },
        handleKeyDown(event: KeyboardEvent): void {
            if (event.key === "Enter") {
                this.codeChanged();
            }
        }
    }
});
</script>