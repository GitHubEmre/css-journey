<template>
    <div class="text-xl flex justify-end items-center gap-2">
        <span>Level :</span>
        <div class="bg-white rounded">
            <button class="cursor-pointer" @click="changeLevel(false)">&lt;</button>
            <span class="mx-2">{{ level }}</span>
            <button class="cursor-pointer" @click="changeLevel(true)">&gt;</button>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    emits: ['changeLevel'],
    name: 'LevelSelectorComponent',
    props: {
        level: {
            type: Number,
            required: true
        }
    },
    methods: {
        changeLevel(isNext: boolean): void {
            this.$emit('changeLevel', isNext);
        }
    },
});
</script>