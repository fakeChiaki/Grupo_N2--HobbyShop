import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

//Componentes a usar acá
import Home from "./components/Views/Home.vue";
import ShoppingCart from './components/Views/ShoppingCart.vue';
import Profile from './components/Views/Profile.vue';

//Definir Rutas
const routes = [
{ path: "/", component: Home },
{ path: "/ShoppingCart", component: ShoppingCart },
{ path: "/Profile", component: Profile }
]

//Crear Router
const router = createRouter({ history: createWebHashHistory(), routes, })

createApp(App).use(router).mount('#app')
