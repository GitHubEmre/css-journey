<template>
    <div class="bg-orange-light p-8 rounded-md shadow-md">
        <span class="text-xl">{{ instruction }}</span>
        <div id="level-template" v-html="template"></div>
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
    },
    data() {
        return {
            code: ""
        };
    },
    methods: {
        codeChanged: function(): void {
            this.$emit('codeChanged', this.code);
        }
    }
});
</script>