<template>
    <h4>Les transitions en CSS</h4>
    <p>
        Les transitions CSS permettent d'animer les changements de propriétés au lieu de les appliquer instantanément. 
        Cela crée un effet plus fluide et esthétique.
    </p>
    <h6>1. Propriétés des transitions</h6>
    <div>
        <span>Une transition repose sur 4 propriétés principales :</span>
        <ul class="mt-4 space-y-2">
            <li>
                <span class="highlight">transition-property</span> : définit quelle propriété sera animée.
                <br>
                <span>→ Ex: background-color, width, etc.</span>
            </li>
            <li>
                <span class="highlight">transition-duration</span> : définit la durée de l'animation.
                <br>
                <span>→ Ex: 0.5s, 2s, etc.</span>
            </li>
            <li>
                <span class="highlight">transition-timing-function</span> : définit la courbe d'accélération de l'animation.
                <br>
                <span>→ Ex: ease, linear, ease-in-out, etc.</span>
            </li>
            <li>
                <span class="highlight">transition-delay</span> : définit un délai avant le début de l'animation.
                <br>
                <span>→ Ex: 1s, 0s, etc.</span>
            </li>
        </ul>
    </div>
    <h6>2. Différents types de transitions</h6>
    <div>
        <span>Les transitions se différencient principalement par leur timing-function :</span>
        <ul class="mt-4 space-y-2">
            <li>
                <span class="highlight">ease</span> (par défaut) :
                <br>
                <span>Départ lent → rapide → fin lente</span>
            </li>
            <li>
                <span class="highlight">linear</span> :
                <br>
                <span>Vitesse constante</span>
            </li>
            <li>
                <span class="highlight">ease-in</span> :
                <br>
                <span>Début lent → accélération</span>
            </li>
            <li>
                <span class="highlight">ease-out</span> :
                <br>
                <span>Départ rapide → ralentissement</span>
            </li>
            <li>
                <span class="highlight">ease-in-out</span> :
                <br>
                <span>Départ et fin lents, accélération au milieu</span>
            </li>
            <li>
                <span class="highlight">cubic-bezier(x, y, x2, y2)</span> :
                <br>
                <span>Courbe personnalisée</span>
            </li>
        </ul>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ClassCourseComponent'
});
</script>