<template>
    <div class="min-h-screen w-screen flex flex-col items-center justify-center px-8">
        <h1 class="text-center dark:text-gray-lighter text-2xl md:text-5xl">Sélectionner un mode de jeu</h1>
        <div class="mt-8 md:mt-16 grid grid-cols-2 xl:grid-cols-4 gap-8 md:gap-16">
            <router-link v-for="game in games" :to="game.available ? game.url : ''" class="w-min">
                <div class="w-24 h-24 md:w-64 md:h-64 rounded flex items-center text-center" 
                    :class="game.available ? 'bg-green shadow hover:shadow-2xl' : 'bg-gray-lighter cursor-not-allowed'"
                >
                    <h4 class="text-base md:text-2xl w-full">{{ game.name }}</h4>
                </div>
                <p v-if="!game.available" class="text-center text-gray-lighter">À venir...</p>
            </router-link>
        </div>
        <div class="flex items-center cursor-pointer mt-8 md:mt-16" @click="toggleDarkMode">
            <svg viewBox="0 0 512 512" class="h-6 mr-3" :class="isDarkMode ? 'fill-gray-lighter' : 'fill-black'">
                <g>
                    <g>
                    <path d="m256,105.5c-83.9,0-152.2,68.3-152.2,152.2 0,83.9 68.3,152.2 152.2,152.2 83.9,0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0,263.5c-61.4,0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4,0 111.4,50 111.4,111.4 0,61.4-50,111.4-111.4,111.4z"/>
                    <path d="m256,74.8c11.3,0 20.4-9.1 20.4-20.4v-23c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v23c2.84217e-14,11.3 9.1,20.4 20.4,20.4z"/>
                    <path d="m256,437.2c-11.3,0-20.4,9.1-20.4,20.4v22.9c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-22.9c0-11.2-9.1-20.4-20.4-20.4z"/>
                    <path d="m480.6,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h23c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z"/>
                    <path d="m54.4,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h22.9c11.3,0 20.4-9.1 20.4-20.4 0.1-11.3-9.1-20.4-20.3-20.4z"/>
                    <path d="M400.4,82.8L384.1,99c-8,8-8,20.9,0,28.9s20.9,8,28.9,0l16.2-16.2c8-8,8-20.9,0-28.9S408.3,74.8,400.4,82.8z"/>
                    <path d="m99,384.1l-16.2,16.2c-8,8-8,20.9 0,28.9 8,8 20.9,8 28.9,0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-7.9-28.9,0z"/>
                    <path d="m413,384.1c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2z"/>
                    <path d="m99,127.9c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2z"/>
                    </g>
                </g>
            </svg>
            <div class="relative">
                <input type="checkbox" class="checkbox hidden">
                <div class="border border-black dark:border-gray-lighter w-14 h-8 rounded-full"></div>
                <div class="absolute left-1 top-1 bg-black dark:bg-gray-lighter w-6 h-6 rounded-full transition" :class="{'translate-x-full': isDarkMode}"></div>
            </div>
            <svg viewBox="0 0 352.726 352.726" class="h-6 rotate-90 ml-3" :class="isDarkMode ? 'fill-gray-lighter' : 'fill-black'">
                <g>
                    <g>
                        <g>
                            <path d="M245.879,1.526c-5.6-2.8-12-1.6-16.8,2.4s-6.8,10-5.2,16c4,16.4,5.6,33.6,4.4,51.6c-5.2,84-72.8,151.2-156.8,156.4
                                c-17.2,1.2-34.4-0.4-51.6-4c-6-1.6-12,0.4-16,5.6c-4,4.8-4.8,11.2-2.4,16.8c30.4,65.2,95.2,106.4,167.2,106.4c3.2,0,6.8,0,10-0.4
                                c92.4-4.8,168.4-81.2,173.6-173.6C356.679,103.126,315.079,33.526,245.879,1.526z M336.279,177.926c-4.4,84.4-74,154-158.4,158.4
                                c-69.2,3.6-132.8-34.4-161.6-96.8c18.8,4.4,37.6,5.6,56.4,4.4c92-6,166-79.6,172-171.6c1.2-19.6-0.4-38.4-4.8-56.4
                                C302.279,45.126,340.279,108.726,336.279,177.926z"/>
                            <path d="M242.679,277.526c-3.6,2.4-4.4,7.6-2,11.2c1.6,2.4,4,3.6,6.8,3.6c1.6,0,3.2-0.4,4.4-1.2c30.8-21.6,52.8-52.8,60.8-89.2
                                c0.8-4.4-1.6-8.8-6-9.6c-4.4-0.8-8.4,1.6-9.6,6C289.879,230.726,270.679,258.726,242.679,277.526z"/>
                            <path d="M213.479,292.726c-2.4,0.8-4.4,1.6-7.2,2.4c-4.4,1.2-6.8,5.6-5.6,10c1.2,3.6,4.4,6,7.6,6c0.8,0,1.6,0,2.4-0.4
                                c3.6-0.8,6-2,8.8-3.2c4-1.6,6-6.4,4.4-10.4C222.279,292.726,217.479,290.726,213.479,292.726z"/>
                        </g>
                    </g>
                </g>
            </svg>
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

const baseUrl = '/css-journey';

export default defineComponent({
    name: 'HomeComponent',
    data() {
        return {
            games: [{
                available: true,
                name: 'Sélecteurs CSS',
                url: baseUrl + '/selectors'
            }, {
                available: false,
                name: 'Flexbox',
                url: baseUrl + '/flex'
            }, {
                available: false,
                name: 'Grid',
                url: baseUrl + '/grid'
            }, {
                available: true,
                name: 'Transitions',
                url: baseUrl + '/transitions'
            }] as Game[],
            isDarkMode: true
        }
    },
    methods: {
        toggleDarkMode(): void {
            this.isDarkMode = !this.isDarkMode;
            localStorage.setItem("isDarkMode", this.isDarkMode + "");
            document.getElementById("app")?.classList.toggle("dark");
        }
    },
    mounted() {
        const localeStorageIsDarkMode = localStorage.getItem("isDarkMode");
        this.isDarkMode = localeStorageIsDarkMode === "true" || localeStorageIsDarkMode === null;
    },
});
</script>