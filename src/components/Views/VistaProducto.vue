<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Header from '../Header.vue';

const route = useRoute();
const id = route.params.id;

const nombreproducto = ref('');
const precio = ref('');
const imageUrl = ref('');
const stock = ref('');
const Descripcion = ref('');

const fetchProducto = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/productos/${id}`);
    const producto = response.data;
    nombreproducto.value = producto.nombreproducto;
    precio.value = producto.precio;
    imageUrl.value = producto.imageUrl;
    stock.value = producto.stock;
    Descripcion.value = producto.Descripcion;
  } catch (error) {
    console.error('Error al cargar el producto:', error);
  }
};

onMounted(fetchProducto);
</script>
<template>
  <Header />
  <div class="fondo">
    <div class="fondoimagen">
      <img :src="imageUrl" alt="imagen" class="imagen" />
    </div>
    <div class="columna">
      <span class="figurina-makima-taito">{{nombreproducto}}</span>
      <span class="precio">Precio: {{ precio }}</span>
      <span class="vendedor">Vendedor: Andrés</span>
      <span class="stock">Stock: {{ stock }}</span>
    </div>
    <span class="descripcion"
      >Descripcion:<br />{{ Descripcion }}</span>
    <button class="compra">Comprar</button>
  </div>
</template>

<style>
.compra:hover{
  transform: scale(1.1);  
}
.compra {
  background-color: #00993d;
  color: #ffffff;
  border-radius: 10px;
  font-size: 20px;
  position: relative;
  width: 200px;
  height: 50px;
  top: 46%;
  left: 80%;
  border: none;
transition: all .2s ease-in-out; 
}

.fondo {
  border-radius: 10px;
  background-color: #103973;
  top: 12%;
  left: 10%;
  position: absolute;
  height: 600px;
  width: 1200px;
}
.fondoimagen {
  background-color: #00133b;
  border-radius: 10px;
  position: relative;
  top: 10px;
  left: center;
  height: 45%;
  width: 50%;
  display: flex;
  left: 5%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.imagen {
  height: 120px;
  position: absolute;
  top: 10px;
  width: 129px;
} 
.columna {
  position: absolute;
  top:  -17%;
  left: 57.34%;
  
}
.figurina-makima-taito {
  background-color: #00133b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-basis: auto;
  position: absolute;
  width: 426px;
  height: 52px;
  top: 120px;
  color: #ffffff;
  font-family: Inter, var(--default-font-family);
  font-size: 20px;
  font-weight: 400;
  line-height: 43.568px;
  text-align: center;
  white-space: nowrap;
  z-index: 10;
}
.precio {
  background-color: #00133b;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  position: absolute;
  width: 426px;
  height: 52px;
  top: 190px;
  color: #ffffff;
  font-family: Inter, var(--default-font-family);
  font-size: 20px;
  font-weight: 400;
  line-height: 43.568px;
  text-align: center;
  white-space: nowrap;
  
}
.vendedor {
  background-color: #00133b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: absolute;
  width: 426px;
  height: 52px;
  top: 260px;
  left: 0;
  color: #ffffff;
  font-family: Inter, var(--default-font-family);
  font-size: 20px;
  font-weight: 400;
  line-height: 43.568px;

}
.stock {
  background-color: #00133b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  color: #ffffff;
  font-family: Inter, var(--default-font-family);
  font-size: 20px;
  width: 426px;
  height: 52px;
  top: 330px;
  left: 0;
}

.descripcion {
  display: flex;
  border-radius: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  width: 95%;
  height: 30%;
  top: 50%;
  left: 1%;
  color: #ffffff;
  background-color: #00133b;
  font-family: Inter, var(--default-font-family);
  font-size: 15px;
  font-weight: 400;
  line-height: 38.727px;
  text-align: left;
  padding: 20px;
}
</style>
