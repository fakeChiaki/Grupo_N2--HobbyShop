import { createRouter, createWebHashHistory } from 'vue-router'

//Componentes a usar acá
import ShoppingCart from '../components/Views/ShoppingCart.vue';
import Profile from '../components/Views/Profile.vue';
import Login from '../components/Views/Login.vue';
import Register from '../components/Views/Register.vue';
import VistaProducto from './../components/Views/VistaProducto.vue'
import Principal from './../components/Views/Principal.vue'
import Resena from './../components/Views/Reseña.vue'
import Publicacion from './../components/Views/Publicacion.vue'
import Carritocompras from './../components/Views/Carritocompras.vue'
//Definir Rutas
const routes = [
{ name: "shoppingCart" ,path: "/ShoppingCart", component: ShoppingCart, meta: { isPrivate: true } },
{ name: "profile" ,path: "/Profile", component: Profile, meta: { isPrivate: true } },
{ name: "login" ,path: "/Login", component: Login, meta: { isPrivate: false } },
{ name: "register" ,path: "/Register", component: Register, meta: { isPrivate: false } },
{ name: "vistaproducto" ,path: "/Vistaproducto/:id", component: VistaProducto, meta: { isPrivate: false } },
{ name: "principal" ,path: "/Principal", component: Principal, meta: { isPrivate: false } },
{ name: "reseña" ,path: "/Resena", component: Resena, meta: { isPrivate: false } },
{ name: "publicacion" ,path: "/Publicacion", component: Publicacion, meta: { isPrivate: false } },
{ name: "carritocompras" ,path: "/Carritocompras", component: Carritocompras, meta: { isPrivate: false } }
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

  export default router;