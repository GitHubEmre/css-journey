<template>
    <div class="bg-gray-darker p-8 rounded-md shadow-md text-gray-lighter">
        <span class="text-xl">{{ instruction }}</span>
        <div id="level-template" class="mt-8" v-html="template"></div>
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
        template: {
            type: String,
            required: true
        }
    }
});
</script>