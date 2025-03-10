<template>
    <div class="flex flex-col md:flex-row justify-between md:mr-16 lg:mr-0">
        <router-link to="/css-journey"><button class="bg-green w-full md:w-48 h-8 rounded hover:scale-105 mb-4 md:mb-0">Retour à l'accueil</button></router-link>
        <div class="flex flex-col md:flex-row justify-end">
            <button
                @click="showAnswerClicked"
                :class="numberOfAttempts >= attemptsNeededToShowAnswer ? 'bg-green dark:bg-white animate-vibrate' : 'bg-gray-lighter cursor-not-allowed'"
                class="mr-4 mb-4 md:mb-0 px-2 rounded w-full md:w-64 h-8"
            >
                {{ showAnswer ? answerToShow : "Voir la réponse" }}
            </button>
            <LevelSelectorComponent :level="currentLevel" @change-level="changeLevel" />
        </div>
    </div>
</template>
  
<script lang="ts">
import LevelSelectorComponent from './LevelSelectorComponent.vue';

export default {
    emits: ['changeLevel'],
    name: 'NavbarComponent',
    components: {
        LevelSelectorComponent
    },
    props: {
        answerToShow: {
            type: String,
            default: ""
        },
        numberOfLevels: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            attemptsNeededToShowAnswer: 3,
            currentLevel: 1,
            numberOfAttempts: 0,
            showAnswer: false
        }
    },
    methods: {
        changeLevel(isNext: boolean): void {
            if (isNext) {
                if (this.currentLevel + 1 <= this.numberOfLevels) {
                    this.currentLevel += 1;
                } else {
                    this.currentLevel = 1;
                }
            } else if (this.currentLevel - 1 > 0) {
                this.currentLevel -= 1;
            } else {
                this.currentLevel = this.numberOfLevels;
            }
            this.$emit('changeLevel', this.currentLevel);
        },
        incrementNumberOfAttempts(): void {
            this.numberOfAttempts ++;
        },
        resetValues(): void {
            this.showAnswer = false;
            this.numberOfAttempts = 0;
        },
        showAnswerClicked(): void {
            if (this.numberOfAttempts >= this.attemptsNeededToShowAnswer) {
                this.showAnswer = !this.showAnswer;
            }
        }
    },
};
</script>