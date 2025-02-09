import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import AnimationsComponent from './components/AnimationsComponent.vue';
// import FlexComponent from './components/FlexComponent.vue';
// import GridComponent from './components/GridComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import SelectorComponent from './components/SelectorComponent.vue';

const baseUrl = import.meta.env.VITE_ENV === 'production' ? '/css-journey/' : '/';

const routes: Array<RouteRecordRaw> = [
    { path: baseUrl, redirect: '/home' },
    // { path: '/animations', name: 'Animations', component: AnimationsComponent },
    // { path: '/flex', name: 'Flexbox', component: FlexComponent },
    // { path: '/grid', name: 'Grid', component: GridComponent },
    { path: baseUrl + 'home', name: 'Home', component: HomeComponent },
    { path: baseUrl + 'selectors', name: 'Selectors', component: SelectorComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;