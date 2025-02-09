<template>
    <h4>Les combinaisons de sélecteurs en CSS</h4>
    <p>
        Les combinaisons de sélecteurs CSS permettent de cibler des éléments spécifiques en combinant plusieurs types de sélecteurs. 
        Cela rend le ciblage précis et aide à appliquer des styles uniquement aux éléments correspondant à plusieurs critères.
    </p>
    <h6>Exemple</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">h1</span>
            <span class="text-blue-light"> class</span>
            <span class="text-white-real">=</span>
            <span class="text-orange-dark">"bold"</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-4 text-white-real">
            Titre important
        </p>
        <p>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">h1</span>
            <span class="text-gray-light">&gt;</span>
        </p>

        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">p</span>
            <span class="text-blue-light"> class</span>
            <span class="text-white-real">=</span>
            <span class="text-orange-dark">"bold"</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-4 text-white-real">
            Paragraphe important
        </p>
        <p>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">p</span>
            <span class="text-gray-light">&gt;</span>
        </p>

        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">h1</span>
            <span class="text-gray-light">&gt;</span>
            <span class="text-white-real">Titre</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">h1</span>
            <span class="text-gray-light">&gt;</span>
        </p>
    </div>
    <h6>Syntaxe</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p class="text-orange-code">h1.bold <span class="text-yellow-dark">{</span></p>
        <p class="ml-4">
            <span class="text-blue-light">color</span>
            <span>: red;</span>
        </p>
        <p class="ml-4">
            <span class="text-blue-light">font-weight</span>
            <span>: bold;</span>
        </p>
        <p class="text-yellow-dark">}</p>
    </div>
    <ul class="list-disc ml-5">
        <li>
            Seul le <span class="highlight">&lt;h1&gt;</span> avec la classe <span class="highlight">bold</span> sera rouge et en gras.
        </li>
        <li>
            Le <span class="highlight">&lt;p&gt;</span> avec la classe <span class="highlight">bold</span> 
            et le <span class="highlight">&lt;h1&gt;</span> sans la classe <span class="highlight">bold</span> ne sont pas affectés.
        </li>
    </ul>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SelectorsCombinationCourseComponent'
});
</script>