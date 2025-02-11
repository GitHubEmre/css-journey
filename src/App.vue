<template>
    <main>
        <router-view />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// TODO: Quand on change le niveau, mettre à jour dans le localStorage
// TODO: Fixer le /css-journey/ dans l'url à la place de /css-journey sans / à la fin

export default defineComponent({
    name: 'App',
    mounted() {
        const isDarkMode = localStorage.getItem("isDarkMode");
        if (isDarkMode === "true" || isDarkMode === null) {
            document.getElementById("app")?.classList.add("dark");
        }
    },
});
</script>
