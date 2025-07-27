import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeComponent from '@/components/HomeComponent.vue';
import SelectorsComponent from '@/components/selectors/SelectorsComponent.vue';
import TransitionsComponent from '@/components/transitions/TransitionsComponent.vue';

const routes: RouteRecordRaw[] = [
    { path: '/', component: HomeComponent },
    { path: '/selectors', component: SelectorsComponent },
    { path: '/transitions', component: TransitionsComponent },
];

const router = createRouter({
    history: createWebHistory('/css-journey/'),
    routes,
});

export default router;