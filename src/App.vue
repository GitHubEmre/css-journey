<template>
    <main>
        <router-view />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
