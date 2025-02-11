<template>
    <div class="flex rounded-md shadow-md overflow-hidden w-full font-family-code bg-white-real dark:bg-gray-darker">
        <div class="text-gray-light dark:bg-black flex flex-col p-2 items-end">
            <span v-for="line in lines" :key="line">{{ line }}</span>
        </div>
        <div class="p-2 w-full">
            <div v-for="htmlTag in htmlTags" :class="`ml-${htmlTag.indentationLevel * 4}`" v-html="htmlTag.colorize()"></div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { HtmlTag } from '../models/HtmlTag';

export default defineComponent({
    name: 'CodeComponent',
    props: {
        htmlTags: {
            type: Array as PropType<HtmlTag[]>,
            required: true,
        },
        lines: {
            type: Number,
            default: 12
        }
    },
    watch: {
        htmlTags: {
            handler() {
                this.calculateIndentationLevels();
            }
        }
    },
    methods: {
        calculateIndentationLevels(): void {
            if (this.htmlTags.length > 0) {
                let indentationLevel = 0;
                this.htmlTags.forEach(htmlTag => {
                    if (!htmlTag.isOpeningTag && indentationLevel > 0) {
                        indentationLevel -= 1;
                    }
                    htmlTag.indentationLevel = indentationLevel;
                    if (htmlTag.isOpeningTag) {
                        if (!htmlTag.isSelfClosingTag) {
                            indentationLevel += 1;
                        }
                    }
                });
            } 
        }
    }
});
</script>