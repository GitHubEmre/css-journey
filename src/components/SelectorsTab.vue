<template>
    <div>
        <h1>Apprendre les sélecteurs CSS</h1>
        <p>Cliquez sur les bons éléments pour compléter le défi !</p>

        <div class="challenge">
            <p class="instruction">Sélectionnez tous les éléments avec la classe <code>.important</code></p>
            <div class="elements">
                <div class="important">Élément 1</div>
                <div>Élément 2</div>
                <div class="important">Élément 3</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SelectorsTab',
});
</script>

<style scoped>
.challenge {
    margin-top: 1rem;
    border: 2px solid #ddd;
    padding: 1rem;
}
.elements div {
    padding: 0.5rem;
    margin: 0.5rem;
    background: #f4f4f4;
    cursor: pointer;
}
.important {
    border: 2px solid #4caf50;
    background: #e8f5e9;
}
</style>
