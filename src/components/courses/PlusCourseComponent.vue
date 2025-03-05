<template>
    <h4>Le <span class="highlight">+</span> dans un sélecteur CSS</h4>
    <p>
        Le sélecteur <span class="highlight">+</span> en CSS permet de sélectionner un élément immédiatement après un autre.
    </p>
    <h6>Exemple</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">h1</span>
            <span class="text-gray-light">&gt;</span>
            <span>Un titre</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">h1</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">p</span>
            <span class="text-gray-light">&gt;</span>
            <span>Paragraphe après le titre</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">p</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">p</span>
            <span class="text-gray-light">&gt;</span>
            <span>Autre paragraphe</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">p</span>
            <span class="text-gray-light">&gt;</span>
        </p>
    </div>
    <h6>Syntaxe</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p class="text-orange-code">h1 + p <span class="text-yellow-dark">{</span></p>
        <p class="ml-4">
            <span class="text-blue-light">color</span>
            <span>: blue;</span>
        </p>
        <p class="text-yellow-dark">}</p>
    </div>
    <ul class="list-disc ml-5">
        <li>
            Le premier <span class="highlight">&lt;p&gt;</span> après <span class="highlight">&lt;h1&gt;</span> sera en bleu.
        </li>
        <li>
            Le deuxième <span class="highlight">&lt;p&gt;</span> ne sera pas affecté.
        </li>
    </ul>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PlusCourseComponent'
});
</script>