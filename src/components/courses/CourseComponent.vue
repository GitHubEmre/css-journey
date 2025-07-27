<template>
    <div class="flex items-start fixed right-0 lg:static">
        <svg :viewBox="'0 0 ' + (showCourse ? '32 32' : '48 48')" class="w-16 p-4 bg-gray-darker fill-gray-lighter lg:hidden rounded-bl-md cursor-pointer hover:fill-gray-light" @click="showCourse = !showCourse">
            <g v-if="!showCourse">
                <rect x="13" y="41" width="28" height="2"/>
                <path d="M2,42H0V6A6.006,6.006,0,0,1,6,0H20V2H6A4,4,0,0,0,2,6Z"/>
                <path d="M41,48H6A6,6,0,0,1,6,36H41a1,1,0,0,1,1,1V47A1,1,0,0,1,41,48ZM6,38a4,4,0,0,0,0,8H40V38Z"/>
                <rect x="6" y="1" width="2" height="36"/>
                <path d="M14,12H12V7a1,1,0,0,1,1-1h3V8H14Z"/>
                <path d="M16,20H13a1,1,0,0,1-1-1V15h2v3h2Z"/>
                <rect x="12" y="14" width="4" height="2"/>
                <rect x="12" y="23" width="2" height="2"/>
                <rect x="16" y="23" width="2" height="2"/>
                <rect x="9" y="41" width="2" height="2"/>
                <path d="M33,30A15,15,0,1,1,48,15,15.017,15.017,0,0,1,33,30ZM33,2A13,13,0,1,0,46,15,13.015,13.015,0,0,0,33,2Z"/>
                <rect x="40" y="32" width="2" height="5"/>
                <path d="M33,12a3,3,0,1,1,3-3A3,3,0,0,1,33,12Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,33,8Z"/>
                <path d="M37,24H33a1,1,0,0,1-1-1V16H29V14h4a1,1,0,0,1,1,1v7h3Z"/>
            </g>
            <g v-else>
                <path d="M30,29H2V11H3V26a1,1,0,0,0,1,1H15a1,1,0,0,0,.71-.29l.29-.29.29.29A1,1,0,0,0,17,27H28a1,1,0,0,0,1-1V20H27v2H17V18H15v4H5V7h9V5H4A1,1,0,0,0,3,6V9H1a1,1,0,0,0-1,1V29a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V18H30ZM17,24H27v1H17.41L17,24.59ZM5,24H15v.59l-.41.41H5Z"/>
                <path d="M24,17a8,8,0,1,0-8-8A8,8,0,0,0,24,17ZM24,3a6,6,0,1,1-6,6A6,6,0,0,1,24,3Z"/>
                <rect x="23" y="5" width="2" height="4"/><rect x="23" y="11" width="2" height="2"/>
            </g>
        </svg>
        <div :class="showCourse ? 'block' : 'hidden'" class="lg:block bg-gray-darker text-gray-lighter p-4 h-dvh w-72 sm:w-96 space-y-4 overflow-y-auto">
            <component v-for="course in courses" :is="course + 'CourseComponent'" />
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ChildCombinatorCourseComponent from '@/components/courses/selectors/ChildCombinatorCourseComponent.vue';
import CommaCourseComponent from '@/components/courses/selectors/CommaCourseComponent.vue';
import ClassCourseComponent from '@/components/courses/selectors/ClassCourseComponent.vue';
import IdCourseComponent from '@/components/courses/selectors/IdCourseComponent.vue';
import PlusCourseComponent from '@/components/courses/selectors/PlusCourseComponent.vue';
import PseudoClassCourseComponent from '@/components/courses/selectors/PseudoClassCourseComponent.vue';
import SelectorsCombinationCourseComponent from '@/components/courses/selectors/SelectorsCombinationCourseComponent.vue';
import TildeCourseComponent from '@/components/courses/selectors/TildeCourseComponent.vue';
import TransitionTypesCourseComponent from '@/components/courses/transitions/TransitionTypesCourseComponent.vue';
import UniversalSelectorCourseComponent from '@/components/courses/selectors/UniversalSelectorCourseComponent.vue';
import WhiteSpaceCourseComponent from '@/components/courses/selectors/WhiteSpaceCourseComponent.vue';

export default defineComponent({
    name: 'CourseComponent',
    components: {
        ChildCombinatorCourseComponent,
        CommaCourseComponent,
        ClassCourseComponent,
        IdCourseComponent,
        PlusCourseComponent,
        PseudoClassCourseComponent,
        SelectorsCombinationCourseComponent,
        TildeCourseComponent,
        TransitionTypesCourseComponent,
        UniversalSelectorCourseComponent,
        WhiteSpaceCourseComponent
    },
    props: {
        courses: {
            type: Array as PropType<string[]>,
            required: true
        }
    },
    data() {
        return {
            showCourse: false
        }
    }
});
</script>