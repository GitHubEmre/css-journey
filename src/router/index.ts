import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';
import SelectorsComponent from '../components/selectors/SelectorsComponent.vue';
import TransitionsComponent from '../components/transitions/TransitionsComponent.vue';

const baseUrl = '/css-journey';

const routes: RouteRecordRaw[] = [
    { path: '/', redirect: baseUrl },
    { path: baseUrl, component: HomeComponent },
    { path: baseUrl + '/selectors', component: SelectorsComponent },
    { path: baseUrl + '/transitions', component: TransitionsComponent },
];

const router = createRouter({
    history: createWebHistory(baseUrl + '/'),
    routes,
});

export default router;