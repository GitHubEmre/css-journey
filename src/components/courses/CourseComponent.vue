<template>
    <div class="bg-gray-darker text-gray-lighter p-4 h-screen w-96 space-y-4 overflow-y-auto">
        <component v-for="course in courses" :is="course + 'CourseComponent'" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ChildCombinatorCourseComponent from './ChildCombinatorCourseComponent.vue';
import CommaCourseComponent from './CommaCourseComponent.vue';
import ClassCourseComponent from './ClassCourseComponent.vue';
import IdCourseComponent from './IdCourseComponent.vue';
import PseudoClassCourseComponent from './PseudoClassCourseComponent.vue';
import SelectorsCombinationCourseComponent from './SelectorsCombinationCourseComponent.vue';
import UniversalSelectorCourseComponent from './UniversalSelectorCourseComponent.vue';
import WhiteSpaceCourseComponent from './WhiteSpaceCourseComponent.vue';

export default defineComponent({
    name: 'CourseComponent',
    components: {
        ChildCombinatorCourseComponent,
        CommaCourseComponent,
        ClassCourseComponent,
        IdCourseComponent,
        PseudoClassCourseComponent,
        SelectorsCombinationCourseComponent,
        UniversalSelectorCourseComponent,
        WhiteSpaceCourseComponent
    },
    props: {
        courses: {
            type: Array as PropType<String[]>,
            required: true
        }
    }
});
</script>