<template>
    <SelectorLevelComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectorLevelComponent from './SelectorLevelComponent.vue';

export default defineComponent({
    name: 'SelectorsComponent',
    components: {
        SelectorLevelComponent
    }
});
</script>
