import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import './firebase';
import './script/api';
import './script/filters';

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

