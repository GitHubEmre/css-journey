<template>
    <div v-if="levelWon" class="fixed inset-0 bg-white-real bg-opacity-30 backdrop-blur-sm z-50 flex">
        <p class="m-auto text-9xl">Bien joué !</p>
        <div class="firework" v-for="n in 5" :key="n"></div>
    </div>

    <div class="flex px-8 lg:pr-0 space-x-8">
        <div class="flex-grow my-8">
            <NavbarComponent
                :answerToShow="answerToShow"
                :numberOfLevels="numberOfLevels"
                @change-level="changeLevel"
                ref="navbarComponent"
            />
            <!-- TODO: Regarder si c'est mieux de faire :dragRaces ou :drag-races -->
            <DragRacesComponent
                :dragRaces="(dragRaces as DragRace[])"
                :flagPosition="flagPosition"
                :instruction="instruction"
                :isTransitionTypeValid="isTransitionTypeValid"
                :raceStarted="raceStarted"
                :transitionType="transitionType"
                class="mt-8"
            />
            <div class="flex flex-col md:flex-row mt-8">
                <CssIDEComponent
                    cssSelector="#white-car"
                    cssProperty="transition-timing-function"
                    :inputDisabled="levelDisabled"
                    @code-changed="codeChanged"
                    :class="{ 'animate-vibrate': isVibrating }"
                    ref="cssIDEComponent"
                />
                <HtmlIDEComponent :htmlTags="(htmlIDECode as HtmlTag[])" class="mt-8 md:mt-0 md:ml-8" />
            </div>
        </div>
        <CourseComponent :courses="courses"/>
    </div>
</template>
  
<script lang="ts">
// TODO: Voir pour les imports si y'a pas moyen de faire autrement qu'avec des ../../...
// TODO: Ajouter la voiture steps(8, start), voir si ça marche avec step end etc
// TODO: Sur smartphone, quand on met une réponse et que les voitures vont à droite, la piste s'agrandit et on doit scroll horizontalement
import { defineComponent, ref } from 'vue';
import { DragRace } from '../../interfaces/DragRace';
import { HtmlTag } from '../../models/HtmlTag';
import CourseComponent from '../courses/CourseComponent.vue';
import CssIDEComponent from '../shared/CssIDEComponent.vue';
import DragRacesComponent from './DragRacesComponent.vue';
import HtmlIDEComponent from '../shared/HtmlIDEComponent.vue';
import LevelSelectorComponent from '../shared/LevelSelectorComponent.vue';
import NavbarComponent from '../shared/NavbarComponent.vue';
import transitionsLevels from "../../data/transitions-levels.json";

type TransitionsLevel = {
    answerNecessaryKeywords: string[];
    answerToShow: string;
    courses: string[];
    dragRaces: DragRace[];
    flagPosition: string;
    htmlIDECode: string[];
    instruction: string;
};

export default defineComponent({
    name: 'TransitionsComponent',
    components: {
        CssIDEComponent,
        CourseComponent,
        DragRacesComponent,
        HtmlIDEComponent,
        LevelSelectorComponent,
        NavbarComponent
    },
    setup() {
        const cssIDEComponent = ref<InstanceType<typeof CssIDEComponent> | null>(null);
        const navbarComponent = ref<InstanceType<typeof NavbarComponent> | null>(null);
        return { cssIDEComponent, navbarComponent };
    },
    data() {
        return {
            answerNecessaryKeywords: [] as string[],
            answerToShow: "",
            courses: [] as string[],
            currentLevel: 1,
            dragRaces: [] as DragRace[],
            flagPosition: "0",
            htmlIDECode: [] as HtmlTag[], // TODO: Vérifier si vaut mieux mettre HtmlTag dans le dossier models ou dans le dossier interfaces
            instruction: "",
            isTransitionTypeValid: false,
            isVibrating: false,
            levelDisabled: false,
            levelWon: false,
            numberOfLevels: 0,
            raceStarted: false,
            transitionType: ""
        }
    },
    methods: {
        changeLevel(level: number): void {
            this.currentLevel = level;
            this.navbarComponent?.resetValues();
            this.updateLevelValues();
            if (this.cssIDEComponent) {
                this.cssIDEComponent.resetCode();
            }
        },
        codeChanged: function(code: string): void {
            if (code.length > 0) {
                this.raceStarted = false;
                setTimeout(() => {
                    this.raceStarted = true;
                }, 1);
                this.navbarComponent?.incrementNumberOfAttempts();
                this.checkTransitionType(code);
                if (this.isTransitionTypeValid) {
                    this.transitionType = code;
                    if (this.checkAnswer(code)) {
                        this.winLevel();
                    }
                } else {
                    this.cssIDEComponent?.vibrate();
                }
            }
        },
        checkAnswer: function(answer: string): boolean {
            let isValid = true;
            if (this.answerNecessaryKeywords.length > 0) {
                this.answerNecessaryKeywords.forEach(keyword => {
                    if (!answer.includes(keyword)) {
                        isValid = false;
                    }
                });
            } else {
                isValid = answer === this.answerToShow;
            }
            return isValid;
        },
        checkTransitionType(transitionType: string): void {
            const correctTransitionTypes = [
                "ease",
                "ease-in",
                "ease-out",
                "ease-in-out",
                "jump-both",
                "jump-end",
                "jump-none",
                "jump-start",
                "linear"
            ];
            this.isTransitionTypeValid = correctTransitionTypes.includes(transitionType);
        },
        updateLevelValues(): void {
            const levels: Record<string, TransitionsLevel> = transitionsLevels;
            this.answerNecessaryKeywords = levels[this.currentLevel].answerNecessaryKeywords;
            this.answerToShow = levels[this.currentLevel].answerToShow;
            this.courses = levels[this.currentLevel].courses;
            this.dragRaces = levels[this.currentLevel].dragRaces;
            this.flagPosition = levels[this.currentLevel].flagPosition;
            this.htmlIDECode = levels[this.currentLevel].htmlIDECode.map((htmlIDECode) => new HtmlTag(htmlIDECode));
            this.instruction = levels[this.currentLevel].instruction;
        },
        winLevel(): void {
            this.levelDisabled = true;
            setTimeout(() => {
                this.levelWon = true;
                this.raceStarted = false;
                this.levelDisabled = false;
                this.navbarComponent?.changeLevel(true);
                setTimeout(() => { this.levelWon = false }, 3000);
            }, 3000); // this timeout value equals to the transition duration of cars which is 3s
        }
    },
    mounted() {
        this.numberOfLevels = Object.keys(transitionsLevels).length;
        this.updateLevelValues();
    }
});
</script>