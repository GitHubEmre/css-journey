<template>
    <div class="bg-green rounded overflow-hidden flex items-center">
        <button>
            <svg viewBox="0 0 24 24" class="nav-button-svg" @click="changeLevel(false)">
                <path d="M17.45,2.11a1,1,0,0,0-1.05.09l-12,9a1,1,0,0,0,0,1.6l12,9a1,1,0,0,0,1.05.09A1,1,0,0,0,18,21V3A1,1,0,0,0,17.45,2.11Z"></path>
            </svg>
        </button>
        <span class="w-20 text-center"> Niveau {{ level }}</span>
        <button>
            <svg viewBox="0 0 24 24" class="nav-button-svg" @click="changeLevel(true)">
                <path d="M18.6,11.2l-12-9A1,1,0,0,0,5,3V21a1,1,0,0,0,.55.89,1,1,0,0,0,1-.09l12-9a1,1,0,0,0,0-1.6Z"></path>
            </svg>
        </button>
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

<style scoped>
.nav-button-svg {
    @apply h-8 p-1 fill-gray-light hover:fill-gray;
}
</style>