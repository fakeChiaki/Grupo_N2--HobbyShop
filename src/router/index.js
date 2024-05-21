import { createRouter, createWebHashHistory } from 'vue-router'

//Componentes a usar acá
import Home from "../components/Views/Home.vue";
import ShoppingCart from '../components/Views/ShoppingCart.vue';
import Profile from '../components/Views/Profile.vue';
import Login from '../components/Views/Login.vue';
import Register from '../components/Views/Register.vue';

//Definir Rutas
const routes = [
{ name: "home", path: "/", component: Home, meta: { isPrivate: false } },
{ name: "shoppingCart" ,path: "/ShoppingCart", component: ShoppingCart, meta: { isPrivate: true } },
{ name: "profile" ,path: "/Profile", component: Profile, meta: { isPrivate: true } },
{ name: "login" ,path: "/Login", component: Login, meta: { isPrivate: false } },
{ name: "register" ,path: "/Register", component: Register, meta: { isPrivate: false } }
]

//Crear Router
const router = createRouter({ history: createWebHashHistory(), routes, })

router.beforeEach((to, from, next) => {
    const isPrivate = to.meta.isPrivate; 
    const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
    console.log("Privado?", isPrivate, "Autenticado?", isAuthenticated, "Ruta:", to.name);
    if (isPrivate && !isAuthenticated) {
      next({ path: '/Login' }); 
    } else {
      next(); 
    }
  })

  export default router; // Exporta el enrutador para que pueda ser utilizado en main.js