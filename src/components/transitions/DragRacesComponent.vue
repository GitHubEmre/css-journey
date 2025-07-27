<template>
    <div class="w-full mt-8 space-y-8 bg-white-real dark:bg-gray-darker p-8 rounded-md shadow-md">
        <span class="text-xl dark:text-gray-lighter">{{ instruction }}</span>
        <DragRacerComponent
            :flagPosition="flagPosition"
            :raceStarted="raceStarted && isTransitionTypeValid"
            :transitionType="transitionType"
        ></DragRacerComponent>
        <DragRacerComponent
            v-for="dragRace in dragRaces" 
            :carColor="dragRace.carColor"
            :flagPosition="flagPosition"
            :raceStarted="raceStarted"
            :transitionType="dragRace.transitionType"
        />
    </div>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { DragRace } from '@/models/DragRace';
import DragRacerComponent from '@/components/transitions/DragRacerComponent.vue';

export default defineComponent({
    name: 'DragRacesComponent',
    components: {
        DragRacerComponent
    },
    props: {
        dragRaces: {
            type: Array as PropType<DragRace[]>,
            required: true
        },
        flagPosition: {
            type: String,
            required: true
        },
        instruction: {
            type: String,
            required: true
        },
        isTransitionTypeValid: {
            type: Boolean,
            required: true
        },
        raceStarted: {
            type: Boolean,
            required: true
        },
        transitionType: {
            type: String,
            default: ""
        }
    }
});
</script>