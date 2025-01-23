<template>
    <div class="bg-gray-dark text-gray-lighter p-4 h-[calc(100vh-56px)] w-96 space-y-4 overflow-y-auto">
        <component v-for="course in courses" :is="course + 'CourseComponent'" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CommaCourseComponent from './CommaCourseComponent.vue';
import ClassCourseComponent from './ClassCourseComponent.vue';
import IdCourseComponent from './IdCourseComponent.vue';
import PseudoClassCourseComponent from './PseudoClassCourseComponent.vue';

export default defineComponent({
    name: 'CourseComponent',
    components: {
        CommaCourseComponent,
        ClassCourseComponent,
        IdCourseComponent,
        PseudoClassCourseComponent
    },
    props: {
        courses: {
            type: Array as PropType<String[]>,
            required: true
        }
    }
});
</script>