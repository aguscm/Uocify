import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueRouter from 'vue-router';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import './firebase'; //Firebase
import './script/api'; //API de Deezer
import './script/filters'; //Filtros

//VueMeta
Vue.use(VueMeta);

//ROUTER
import { routes } from './router';


//Create the router instance and pass the routes
const router = new VueRouter({
  mode: 'history',
  routes
})

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSearch, faChevronRight, faUser, faSignOutAlt, faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// estilos app
import './styles/main.scss';

import './registerServiceWorker'

// después de las importaciones, le decimos a Vue que las use:
library.add(faBars, faSearch, faChevronRight, faUser, faSignOutAlt, faCompactDisc) // añade iconos de fontawesome a libreria
Vue.component('fa-icon', FontAwesomeIcon) // definimos el componente <fa-icon> para usar los iconos en los templates


Vue.use(BootstrapVue) // instala BootstrapVue
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

