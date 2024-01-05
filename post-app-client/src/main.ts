import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import components from './components/UI';
import store from './store/store';

import BootstrapVue3 from 'bootstrap-vue-3';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import './main.scss';

const app = createApp(App);

components.forEach(comp => {
  app.component(comp.name, comp);
})

app.use(router).use(store).use(BootstrapVue3).mount('#app');
