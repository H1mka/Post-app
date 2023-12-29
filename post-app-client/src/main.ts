import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import components from '@/components/UI';

import BootstrapVue3 from 'bootstrap-vue-3';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import './main.scss';

const app = createApp(App);

app.use(router).use(BootstrapVue3).mount('#app');
