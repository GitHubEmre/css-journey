<template>
    <div class="bg-white-real dark:bg-gray-darker p-8 rounded-md shadow-md dark:text-gray-lighter">
        <span class="text-xl">{{ instruction }}</span>
        <div id="shapes-container" class="mt-8" v-html="rawHtml"></div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ShapesComponent',
    props: {
        instruction: {
            type: String,
            required: true
        },
        rawHtml: {
            type: String,
            required: true
        }
    }
});
</script>