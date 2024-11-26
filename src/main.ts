import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/main.css';
import './styles/firework.css';

const app = createApp(App);

app.use(router);
app.mount('#app');