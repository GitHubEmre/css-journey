<template>
    <!-- TODO: Le responsive design de ce composant et de CssIDEComponent n'est pas bon -->
    <div class="mx-auto w-full sm:w-[32rem] relative">
        <CarComponent
            :carColor="carColor"
            class="transition-[margin]"
            :class="raceStarted ? 'ml-[calc(80vw-80px)] sm:ml-[calc(32rem-120px)] duration-[3s]' : 'duration-0'"
            :style="'transition-timing-function: ' + transitionType"
        />
        <svg class="fill-green w-9 absolute -translate-y-9 -translate-x-1/2" :class="'left-' + flagPosition" viewBox="0 0 471.098 471.098">
            <path d="M403.288,153.454L111.732,45.741v-21.27C111.732,10.961,100.779,0,87.261,0C73.743,0,62.79,10.961,62.79,24.471v422.156 c0,13.51,10.952,24.471,24.471,24.471c13.518,0,24.471-10.961,24.471-24.471V275.555l291.557-107.699 c3.012-1.113,5.019-3.981,5.019-7.2C408.307,157.436,406.3,154.57,403.288,153.454z"/>
        </svg>
        <hr class="dark:text-white border-2">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CarComponent from './CarComponent.vue';

export default defineComponent({
    name: 'DragRacerComponent',
    components: {
        CarComponent
    },
    props: {
        carColor: {
            type: String,
            default: "white"
        },
        flagPosition: {
            type: String,
            required: true
        },
        raceStarted: {
            type: Boolean,
            required: true
        },
        transitionType: {
            type: String,
            required: true
        }
    }
});
</script>