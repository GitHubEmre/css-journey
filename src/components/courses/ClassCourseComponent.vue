<template>
    <h4>Le sélecteur <span class="highlight">.</span> pour les classes</h4>
    <p>Le sélecteur <span class="highlight">.</span> est utilisé pour cibler un ou plusieurs éléments ayant une classe. Contrairement aux IDs, les classes ne sont pas uniques et peuvent être appliquées à plusieurs éléments sur une même page.</p>
    <h6>Exemple</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p><span class="text-gray-light">&lt;</span><span class="text-blue">p</span><span class="text-blue-light"> class</span><span class="text-white">=</span><span class="text-orange">"ma-classe autre-classe" </span><span class="text-gray-light">&gt;</span></p>
        <p class="ml-4 text-white">Lorem ipsum dolor sit amet</p>
        <p><span class="text-gray-light">&lt;/</span><span class="text-blue">p</span><span class="text-gray-light">&gt;</span></p>
    </div>
    <h6>Syntaxe</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p class="text-orange">.ma-classe <span class="text-yellow">{</span></p>
        <p class="text-green ml-4">/* Some CSS code... */</p>
        <p class="text-yellow">}</p>
    </div>
    <ul class="list-disc ml-5">
        <li><span class="highlight">.</span> indique que l'on cible une classe.</li>
        <li><span class="highlight">ma-classe</span> correspond au nom défini dans l'attribut <span class="highlight">class</span> des éléments HTML.</li>
    </ul>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ClassCourseComponent'
});
</script>