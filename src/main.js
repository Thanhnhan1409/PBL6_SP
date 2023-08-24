import './assets/css/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import Notifications from '@kyvg/vue3-notification';
import test from './components/test.vue';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(Notifications);
app.use(router);
app.use(pinia);
app.component('test', test);
app.mount('#app');
