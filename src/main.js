import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

//Componentes a usar acá
import Home from "./components/Views/Home.vue";
import ShoppingCart from './components/Views/ShoppingCart.vue';
import Profile from './components/Views/Profile.vue';
import Login from './components/Views/Login.vue';
import Register from './components/Views/Register.vue';
import Principal from './components/Views/Principal.vue';
import VistaProducto from './components/Views/VistaProducto.vue';

//Definir Rutas
const routes = [
{ path: "/", component: Home },
{ path: "/ShoppingCart", component: ShoppingCart },
{ path: "/Profile", component: Profile },
{ path: "/Login", component: Login },
{ path: "/Register", component: Register},
{ path: "/Principal", component:Principal},
{ path: "/VistaProducto/:id", component: VistaProducto}

]

//Crear Router
const router = createRouter({ history: createWebHashHistory(), routes, })

createApp(App).use(router).mount('#app')
