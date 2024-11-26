<template>
    <div class="bg-orange-light p-8 rounded-md shadow-md">
        <span class="text-xl">{{ instruction }}</span>
        <div id="table" class="flex justify-around mx-64 mt-8">
            <div class="bg-white w-32 h-32 rounded-full shadow-xl mx-auto" id="white"></div>
            <div class="bg-gray w-32 h-32 rounded-full shadow-xl mx-auto" id="gray"></div>
            <div class="bg-green w-32 h-32 rounded-full shadow-xl mx-auto" id="green"></div>
        </div>
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