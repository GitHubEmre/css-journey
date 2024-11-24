<template>
    <div id="table" class="w-96 bg-orange-light p-8 rounded-md shadow-md flex flex-col justify-around">
        <div class="bg-white w-16 h-16 rounded-full shadow-xl mx-auto" id="table-item-white"></div>
        <div class="bg-gray w-16 h-16 rounded-full shadow-xl mx-auto" id="table-item-gray"></div>
        <div class="bg-green w-16 h-16 rounded-full shadow-xl mx-auto" id="table-item-green"></div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TableComponent',
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