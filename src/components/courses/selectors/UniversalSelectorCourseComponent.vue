<template>
    <h4>Le Sélecteur Universel <span class="highlight">*</span> en CSS</h4>
    <p>
        Le sélecteur universel <span class="highlight">*</span> en CSS permet de 
        sélectionner tous les éléments d'une page, quel que soit leur type.
    </p>
    <h6>Exemple</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">div </span>
            <span class="text-blue-light">class</span>
            <span class="text-white-real">=</span>
            <span class="text-orange-dark">"container"</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        
        <p class="ml-4">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">p</span>
            <span class="text-gray-light">&gt;</span>
            <span>Texte 1</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">p</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-4">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">span</span>
            <span class="text-gray-light">&gt;</span>
            <span>Texte 2</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">span</span>
            <span class="text-gray-light">&gt;</span>
        </p>

        <p>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">div</span>
            <span class="text-gray-light">&gt;</span>
        </p>
    </div>
    <h6>Syntaxe</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p class="text-orange-code">.container * <span class="text-yellow-dark">{</span></p>
        <p class="ml-4">
            <span class="text-blue-light">color</span>
            <span>: blue;</span>
        </p>
        <p class="text-yellow-dark">}</p>
    </div>
    <ul>
        <li>
            Tous les éléments dans <span class="highlight">.container</span> auront un texte bleu.
        </li>
    </ul>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'UniversalSelectorCourseComponent'
});
</script>