<template>
    <div class="bg-orange-light p-8 rounded-md shadow-md">
        <span class="text-xl">{{ instruction }}</span>
        <div id="level-template" class="mx-64 mt-8" v-html="template"></div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TableComponent',
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