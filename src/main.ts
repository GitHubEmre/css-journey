import './styles/firework.css';
import './styles/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import HomeComponent from './components/HomeComponent.vue';
import SelectorComponent from './components/SelectorComponent.vue';
import type { RouteRecordRaw } from 'vue-router';

const baseUrl = '/css-journey';

const routes: RouteRecordRaw[] = [
    { path: '/', redirect: baseUrl },
    { path: baseUrl, component: HomeComponent },
    { path: baseUrl + '/selectors', component: SelectorComponent },
    { path: '/:catchAll(.*)', redirect: '/' }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const app = createApp(App);

// Global error handler for unhandled errors
window.addEventListener('error', (event) => {
    console.error('Unhandled error:', event.error);
});

app.use(createPinia());
app.use(router);

app.mount('#app');