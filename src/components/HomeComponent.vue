<template>
    <div class="min-h-screen w-screen flex flex-col items-center justify-center px-8">
        <h1 class="text-center text-gray-lighter text-2xl md:text-5xl">Sélectionner un mode de jeu</h1>
        <div class="mt-8 md:mt-16 grid grid-cols-2 xl:grid-cols-4 gap-8 md:gap-16">
            <router-link v-for="game in games" :to="game.available ? game.url : ''" class="w-min">
                <div class="w-24 h-24 md:w-64 md:h-64 rounded flex items-center text-center" 
                    :class="game.available ? 'bg-green' : 'bg-gray-lighter cursor-not-allowed'"
                >
                    <h4 class="text-base md:text-2xl w-full">{{ game.name }}</h4>
                </div>
                <p v-if="!game.available" class="text-center text-gray-lighter">À venir...</p>
            </router-link>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

type Game = {
    available: boolean;
    name: string;
    url: string;
};

const baseUrl = '/css-journey/';

export default defineComponent({
    name: 'HomeComponent',
    data() {
        return {
            games: [{
                available: true,
                name: 'Sélecteurs CSS',
                url: baseUrl + 'selectors'
            }, {
                available: false,
                name: 'Flexbox',
                url: baseUrl + 'flex'
            }, {
                available: false,
                name: 'Grid',
                url: baseUrl + 'grid'
            }, {
                available: false,
                name: 'Animations',
                url: baseUrl + 'animations'
            }] as Game[]
        }
    },
});
</script>