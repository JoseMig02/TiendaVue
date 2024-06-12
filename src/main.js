import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import 'primevue/resources/themes/saga-blue/theme.css'; // Tema de PrimeVue
import 'primevue/resources/primevue.min.css'; // Estilos base de PrimeVue
import 'primeicons/primeicons.css'; // Íconos de PrimeIcons
import Menubar from 'primevue/menubar';
import Tag from 'primevue/tag';
import Carousel from 'primevue/carousel';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/lara-light-purple/theme.css'; // Tema de PrimeVue (puedes cambiarlo por el tema que desees)
import 'primevue/resources/primevue.min.css'; 


Vue.config.productionTip = false;

// Registrar el componente de PrimeVue
Vue.component('Button-item', Button);
Vue.component('Menubar-item', Menubar);
Vue.component('Carrusel-compo', Carousel); // Corregido el nombre del componente Carrusel
Vue.component('Tag-compo', Tag); // Corregido el nombre del componente Tag
Vue.use(PrimeVue);
Vue.use(ToastService);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
