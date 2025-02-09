<template>
    <h4>L'espace (<span class="highlight">" "</span>) dans un sélecteur CSS</h4>
    <p>
        En CSS, l'espace (<span class="highlight">" "</span>) entre deux sélecteurs permet de cibler 
        les éléments descendants d'un autre élément, peu importe leur position dans la hiérarchie.
    </p>
    <h6>Exemple</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">div </span>
            <span class="text-blue-light">id</span>
            <span>=</span>
            <span class="text-orange-dark">"div-1"</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-4">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">h1</span>
            <span class="text-gray-light">&gt;</span>
            <span>Un titre</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">h1</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">div</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">div </span>
            <span class="text-blue-light">id</span>
            <span>=</span>
            <span class="text-orange-dark">"div-2"</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-4">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">h1</span>
            <span class="text-gray-light">&gt;</span>
            <span>Un titre bleu</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">h1</span>
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
        <p class="text-orange-code">#div-2 h1 <span class="text-yellow-dark">{</span></p>
        <p class="ml-4">
            <span class="text-blue-light">color</span>
            <span>: blue;</span>
        </p>
        <p class="text-yellow-dark">}</p>
    </div>
    <ul class="list-disc ml-5">
        <li>
            La balise <span class="highlight">&lt;h1&gt;</span> présente dans <span class="highlight">#div-1</span> ne sera pas affecté.
        </li>
        <li>
            La balise <span class="highlight">&lt;h1&gt;</span> présente dans <span class="highlight">#div-2</span> sera en bleu.
        </li>
    </ul>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'WhiteSpaceCourseComponent'
});
</script>