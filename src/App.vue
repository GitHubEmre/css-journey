<template>
    <div id="app">
        <header class="bg-orange-light p-4">
            <nav>
                <ul class="flex gap-4 justify-center">
                    <li>
                        <router-link to="/home">Accueil</router-link>
                    </li>
                    <li>
                        <router-link to="/selectors">Sélecteurs CSS</router-link>
                    </li>
                    <li>
                        <router-link to="/flex">Flexbox</router-link>
                    </li>
                    <li>
                        <router-link to="/grid">Grid</router-link>
                    </li>
                    <li>
                        <router-link to="/animations">Animations</router-link>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
});
</script>

<style scoped>
main {
    min-height: calc(100vh - 56px);
    background-image: url('./assets/images/renard-style-dessin-anim--avec-un-chapeau--un-bato.jpg');
    background-size: cover;
    background-position: 0%;
}
</style>