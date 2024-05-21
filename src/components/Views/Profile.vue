<template>
    <Header />

    <aside>
        <button>Editar Perfil</button>
        <button>Reseñas</button>
        <button>Historial</button>
        <button>Vender Producto</button>
    </aside>

    <div class="container">
        <p>Nombre: </p>
        <p>Email: </p>
        <p>Dirección: </p>
        <p>Número de contacto: </p>
    </div>
</template>

<script setup>
import Header from "../Header.vue";

</script>


<style scoped>
.container {
    display: flex;
    flex-direction: column;
    background-color: red;
    width: 50%;
    margin-left: auto;
}

aside {
    display: flex;
    flex-direction: column;
    width: 10%;
}
</style>