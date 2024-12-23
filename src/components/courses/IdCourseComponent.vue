<template>
    <h4>Le sélecteur <span class="highlight">#</span> pour les ID</h4>
    <p>
        Le sélecteur 
        <span class="highlight">#</span> 
        est utilisé pour cibler un élément spécifique ayant un attribut 
        <span class="highlight">id</span> 
        donné dans le HTML. Les ID sont uniques dans une page, ce qui signifie que chaque 
        <span class="highlight">id</span> 
        doit être attribué à un seul élément.
    </p>
    <h6>Exemple</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p><span class="text-gray-light">&lt;</span><span class="text-blue">p</span><span class="text-blue-light"> id</span><span class="text-white">=</span><span class="text-orange">"mon-id"</span><span class="text-gray-light">&gt;</span></p>
        <p class="ml-4 text-white">Lorem ipsum dolor sit amet</p>
        <p><span class="text-gray-light">&lt;/</span><span class="text-blue">p</span><span class="text-gray-light">&gt;</span></p>
    </div>
    <h6>Syntaxe</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p class="text-orange">#mon-id <span class="text-yellow">{</span></p>
        <p class="text-green ml-4">/* Some CSS code... */</p>
        <p class="text-yellow">}</p>
    </div>
    <ul class="list-disc ml-5">
        <li><span class="highlight">#</span> indique que l'on cible un <span class="highlight">id</span>.</li>
        <li><span class="highlight">mon-id</span> correspond à la valeur de l'attribut <span class="highlight">id</span> dans l'élément HTML.</li>
    </ul>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'IdCourseComponent'
});
</script>