//Route components
import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import SearchResults from './views/SearchResults.vue';
import NotFound from './views/NotFound.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Playlist from './views/Playlist.vue';
import Artist from './views/Artist.vue';

Vue.use(VueRouter) //instala VueRouter


export const routes = [
    {
        path: '',
        name: 'home',
        component: Home,

    },
    {
        path: '/search',
        name: 'search',
        component: SearchResults,

    },
    {
        path: '*',
        name: 'notfound',
        component: NotFound,

    },
    {
        path: '/login',
        name: 'login',
        component: Login,

    },
    {
        path: '/register',
        name: 'register',
        component: Register,

    },
    {
        path: '/playlist/:id',
        name: 'playlist',
        component: Playlist,

    },
    {
        path: '/artist/:id',
        name: 'artist',
        component: Artist,

    },
];



const router = new VueRouter({
    mode: 'history',
    //base: process.env.BASE_URL,
    routes
  })

  export default router

