import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import SelectorComponent from './components/SelectorComponent.vue';

const baseUrl = '/css-journey/';

const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: baseUrl + 'home' },
    { path: baseUrl, redirect: baseUrl + 'home' },
    { path: baseUrl + 'home', name: 'Home', component: HomeComponent },
    { path: baseUrl + 'selectors', name: 'Selectors', component: SelectorComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;