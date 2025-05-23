<template>
    <h4>Le sélecteur <span class="highlight">:</span> pour les pseudo-classes</h4>

    <h6>1. <span class="highlight">:first-child</span> et <span class="highlight">:last-child</span></h6>
    <p>
        La pseudo-classe <span class="highlight">:first-child</span> cible le premier enfant d'un parent et 
        <span class="highlight">:last-child</span> le dernier.
    </p>
    <h6>Exemple</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">ul</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-4 text-white-real" v-for="i in 3">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">li</span>
            <span class="text-gray-light">&gt;</span>
            <span>Item {{ i }}</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">li</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">ul</span>
            <span class="text-gray-light">&gt;</span>
        </p>
    </div>
    <h6>Syntaxe</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p class="text-orange-code">li:first-child <span class="text-yellow-dark">{</span></p>
        <p class="ml-4">
            <span class="text-blue-light">color</span>
            <span>: </span>
            <span class="text-orange-dark">red</span>
            <span>;</span>
        </p>
        <p class="text-yellow-dark">}</p>
    </div>
    <ul>
        <li>
            Le texte du premier élément <span class="highlight font-family-code">&lt;li&gt;</span> sera rouge.
        </li>
    </ul>

    <h6>2. <span class="highlight">:nth-child(n)</span> et <span class="highlight">:nth-last-child(n)</span></h6>
    <p>
        La pseudo-classe <span class="highlight">:nth-child(n)</span> cible un enfant spécifique selon sa position.
        Elle accepte un nombre pour définir la position de l'enfant 
        mais aussi une formule comme 2n pour séléctionner tous les enfants en position paire.
        La pseudo-classe <span class="highlight">:nth-last-child(n)</span> fonctionne comme 
        <span class="highlight">:nth-child(n)</span> mais part de la fin.
    </p>
    <h6>Exemple</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">ul</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-4 text-white-real" v-for="i in 4">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">li</span>
            <span class="text-gray-light">&gt;</span>
            <span>Item {{ i }}</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">li</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">ul</span>
            <span class="text-gray-light">&gt;</span>
        </p>
    </div>
    <h6>Syntaxe</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p class="text-orange-code">li:nth-child(2n) <span class="text-yellow-dark">{</span></p>
        <p class="ml-4">
            <span class="text-blue-light">color</span>
            <span>: </span>
            <span class="text-orange-dark">green</span>
            <span>;</span>
        </p>
        <p class="text-yellow-dark">}</p>
        <br>
        <p class="text-orange-code">li:nth-last-child(1) <span class="text-yellow-dark">{</span></p>
        <p class="ml-4">
            <span class="text-blue-light">font-style</span>
            <span>: </span>
            <span class="text-orange-dark">italic</span>
            <span>;</span>
        </p>
        <p class="text-yellow-dark">}</p>
    </div>
    <ul>
        <li>
            Les <span class="highlight font-family-code">&lt;li&gt;</span> en position paire seront en vert.
        </li>
        <li>
            Le dernier <span class="highlight font-family-code">&lt;li&gt;</span> sera en italique.
        </li>
    </ul>

    <h6>3. <span class="highlight">:has()</span></h6>
    <p>
        La pseudo-classe <span class="highlight">:has()</span> est une des fonctionnalités les plus puissantes de CSS. 
        Elle permet de cibler un élément <span class="highlight">parent</span> en fonction des éléments 
        <span class="highlight">enfants</span> ou descendants qu'il contient.
    </p>
    <p class="warning">Attention : :has() peut ne pas fonctionner selon le navigateur utilisé et sa version.</p>
    <h6>Exemple</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">ul</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-4 text-white-real" v-for="i in 2">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">li</span>
            <span class="text-gray-light">&gt;</span>
            <span>Item {{ i }}</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">li</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-4 text-white-real">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">li</span>
            <span class="text-gray-light">&gt;</span>

            <br>
            <span class="ml-4">Item 3</span>
            <br>
            
            <span class="text-gray-light ml-4">&lt;</span>
            <span class="text-blue-dark">span </span>
            <span class="text-blue-light">class</span>
            <span>=</span>
            <span class="text-orange-dark">"bold"</span>
            <span class="text-gray-light">&gt;</span>
            <span>New</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">span</span>
            <span class="text-gray-light">&gt;</span>
            
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">li</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">ul</span>
            <span class="text-gray-light">&gt;</span>
        </p>
    </div>
    <h6>Syntaxe</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p class="text-orange-code">li:has(.bold) <span class="text-yellow-dark">{</span></p>
        <p class="ml-4">
            <span class="text-blue-light">font-weight</span>
            <span>: </span>
            <span class="text-orange-dark">bold</span>
            <span>;</span>
        </p>
        <p class="text-yellow-dark">}</p>
    </div>
    <ul>
        <li>
            Les <span class="highlight font-family-code">&lt;li&gt;</span> contenant un élément avec la classe 
            <span class="highlight">.bold</span> auront un texte en gras.
        </li>
    </ul>

    <h6>4. <span class="highlight">:not()</span></h6>
    <p>
        La pseudo-classe <span class="highlight">:not()</span> permet d'exclure des éléments d'un sélecteur.
    </p>
    <h6>Exemple</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">ul</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-4 text-white-real" v-for="i in 2">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">li</span>
            <span class="text-gray-light">&gt;</span>
            <span>Item {{ i }}</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">li</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-4 text-white-real">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">li </span>
            <span class="text-blue-light">class</span>
            <span>=</span>
            <span class="text-orange-dark">"bold"</span>
            <span class="text-gray-light">&gt;</span>
            <span>Item 3</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">li</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">ul</span>
            <span class="text-gray-light">&gt;</span>
        </p>
    </div>
    <h6>Syntaxe</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p class="text-orange-code">li:not(.bold) <span class="text-yellow-dark">{</span></p>
        <p class="ml-4">
            <span class="text-blue-light">font-weight</span>
            <span>: </span>
            <span class="text-orange-dark">normal</span>
            <span>;</span>
        </p>
        <p class="text-yellow-dark">}</p>
    </div>
    <ul>
        <li>
            Les <span class="highlight font-family-code">&lt;li&gt;</span> ne contenant pas la classe 
            <span class="highlight">.bold</span> auront un texte normal.
        </li>
    </ul>

    <h6>5. <span class="highlight">:is()</span></h6>
    <p>
        La pseudo-classe <span class="highlight">:is()</span> permet de simplifier l'écriture des sélecteurs 
        en regroupant plusieurs sélecteurs dans une seule règle CSS. Elle améliore la lisibilité et réduit la répétition du code.
    </p>
    <h6>Exemple</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p>
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">ul</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-4 text-white-real">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">li </span>
            <span class="text-blue-light">class</span>
            <span>=</span>
            <span class="text-orange-dark">"bold"</span>
            <span class="text-gray-light">&gt;</span>
            <span>Item 1</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">li</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-4 text-white-real">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">li </span>
            <span class="text-blue-light">class</span>
            <span>=</span>
            <span class="text-orange-dark">"important"</span>
            <span class="text-gray-light">&gt;</span>
            <span>Item 2</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">li</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p class="ml-4 text-white-real">
            <span class="text-gray-light">&lt;</span>
            <span class="text-blue-dark">li</span>
            <span class="text-gray-light">&gt;</span>
            <span>Item 3</span>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">li</span>
            <span class="text-gray-light">&gt;</span>
        </p>
        <p>
            <span class="text-gray-light">&lt;/</span>
            <span class="text-blue-dark">ul</span>
            <span class="text-gray-light">&gt;</span>
        </p>
    </div>
    <h6>Syntaxe</h6>
    <div class="bg-gray p-1 rounded-md font-family-code">
        <p class="text-orange-code">li:is(.bold, .important) <span class="text-yellow-dark">{</span></p>
        <p class="ml-4">
            <span class="text-blue-light">font-weight</span>
            <span>: </span>
            <span class="text-orange-dark">bold</span>
            <span>;</span>
        </p>
        <p class="text-yellow-dark">}</p>
    </div>
    <ul>
        <li>
            Les <span class="highlight font-family-code">&lt;li&gt;</span> contenant les classes 
            <span class="highlight">.bold</span> et <span class="highlight">.important</span> auront un texte en gras.
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PseudoClassCourseComponent'
});
</script>