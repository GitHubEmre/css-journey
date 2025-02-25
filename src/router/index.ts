import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';
import SelectorComponent from '../components/SelectorComponent.vue';

const baseUrl = '/css-journey';

const routes: RouteRecordRaw[] = [
    { path: '/', redirect: baseUrl },
    { path: baseUrl, component: HomeComponent },
    { path: baseUrl + '/selectors', component: SelectorComponent },
];

const router = createRouter({
    history: createWebHistory(baseUrl + '/'),
    routes,
});

export default router;