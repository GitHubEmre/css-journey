<template>
    <h4>Le combinateur enfant direct (<span class="highlight">></span>) dans un sélecteur CSS</h4>
    <p>
        En CSS, le sélecteur <span class="highlight">&gt;</span> permet de cibler uniquement les enfants directs 
        d'un élément parent. Contrairement à l'espace (<span class="highlight">" "</span>), il ne sélectionne pas les 
        descendants à plusieurs niveaux.
    </p>
    <h6>Exemple</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue">div </span>
            <span class="text-blue-light">class</span>
            <span>=</span>
            <span class="text-orange">"parent"</span>
            <span class="text-gray-light">&gt;</span>
        </p>

        <p class="ml-4">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue">p</span>
            <span class="text-gray-light">&gt;</span>
            <span>Enfant direct</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue">p</span>
            <span class="text-gray-light">&gt;</span>
        </p>

        <p class="ml-4">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue">div</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-8">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue">p</span>
            <span class="text-gray-light">&gt;</span>
            <span>Enfant profond</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue">p</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-4">
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue">div</span>
            <span class="text-gray-light">&gt;</span>
        </p>

        <p>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue">div</span>
            <span class="text-gray-light">&gt;</span>
        </p>
    </div>
    <h6>Syntaxe</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p class="text-orange-light">.parent &gt; p <span class="text-yellow">{</span></p>
        <p class="ml-4">
            <span class="text-blue-light">color</span>
            <span>: blue;</span>
        </p>
        <p class="text-yellow">}</p>
    </div>
    <ul class="list-disc ml-5">
        <li>
            Seul le <span class="highlight">&lt;p&gt;</span> qui est un enfant direct de 
            <span class="highlight">.parent</span> sera en bleu.
        </li>
        <li>
            Le <span class="highlight">&lt;p&gt;</span> dans la <span class="highlight">&lt;div&gt;</span> n'est pas affecté.
        </li>
    </ul>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ChildCombinatorCourseComponent'
});
</script>