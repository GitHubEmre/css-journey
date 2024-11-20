import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SelectorsTab from './components/SelectorsTab.vue';
import FlexTab from './components/FlexTab.vue';
import GridTab from './components/GridTab.vue';
import AnimationsTab from './components/AnimationsTab.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: '/selectors' },
    { path: '/selectors', name: 'Selectors', component: SelectorsTab },
    { path: '/flex', name: 'Flexbox', component: FlexTab },
    { path: '/grid', name: 'Grid', component: GridTab },
    { path: '/animations', name: 'Animations', component: AnimationsTab },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;