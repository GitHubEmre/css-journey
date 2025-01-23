<template>
    <h4>La virgule (<span class="highlight">,</span>) dans un sélecteur CSS</h4>
    <p>
        En CSS, la virgule (<span class="highlight">,</span>) est utilisée pour combiner plusieurs sélecteurs dans une même règle. 
        Cela permet d'appliquer un même style à plusieurs éléments sans avoir à écrire plusieurs blocs CSS séparés.
    </p>
    <h6>Exemple</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue">h1</span>
            <span class="text-gray-light">&gt;</span>
            <span>Bienvenue</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue">h1</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue">h2</span>
            <span class="text-gray-light">&gt;</span>
            <span>Sous-titre</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue">h2</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue">p</span>
            <span class="text-gray-light">&gt;</span>
            <span>Voici un paragraphe.</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue">p</span>
            <span class="text-gray-light">&gt;</span>
        </p>
    </div>
    <h6>Syntaxe</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p class="text-orange-light">h1, h2 <span class="text-yellow">{</span></p>
        <p class="ml-4">
            <span class="text-blue-light">color</span>
            <span>: blue;</span>
        </p>
        <p class="text-yellow">}</p>
    </div>
    <ul class="list-disc ml-5">
        <li>
            Les balises <span class="highlight">&lt;h1&gt;</span> et <span class="highlight">&lt;h2&gt;</span> auront leur texte en bleu.
        </li>
    </ul>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CommaCourseComponent'
});
</script>