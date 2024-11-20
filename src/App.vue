<template>
    <div id="app">
        <header>
            <nav>
                <ul>
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

<style>
header {
    background: #282c34;
    padding: 1rem;
}
nav ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    justify-content: center;
}
nav a {
    color: white;
    text-decoration: none;
}
main {
    padding: 2rem;
}
</style>