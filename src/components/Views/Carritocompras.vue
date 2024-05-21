<template>
    <div>
      <Header />
      <div class="carrito">
        <h1>Carrito de Compras</h1>
        <div v-if="carrito.length === 0" class="vacio">
          <p>El carrito está vacío</p>
        </div>
        <div v-else>
          <div class="producto" v-for="(producto, index) in carrito" :key="producto.id">
            <img :src="producto.imageUrl" alt="imagen" class="imagen" />
            <div class="detalles">
              <h3>{{ producto.nombreproducto }}</h3>
              <p>Precio: ${{ producto.precio }}</p>
              <div class="cantidad">
                <button @click="disminuirCantidad(index)">-</button>
                <span>{{ producto.cantidad }}</span>
                <button @click="aumentarCantidad(index)">+</button>
              </div>
              <button class="eliminar" @click="eliminarProducto(producto.id)">Eliminar</button>
            </div>
          </div>
          <div class="total">
            <h2>Total: ${{ total }}</h2>
          </div>
          <button class="comprar" @click="comprar">Comprar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  import axios from 'axios';
  import Header from '../Header.vue';
  
  export default {
    components: {
      Header,
    },
    setup() {
      const carrito = ref([]);
  
      const obtenerCarrito = async () => {
        try {
          const response = await axios.get('http://localhost:3000/carrito');
          carrito.value = response.data;
        } catch (error) {
          console.error('Error al obtener el carrito:', error);
        }
      };
  
      onMounted(obtenerCarrito);
  
      const total = computed(() =>
        carrito.value.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)
      );
  
      const aumentarCantidad = (index) => {
        carrito.value[index].cantidad++;
      };
  
      const disminuirCantidad = (index) => {
        if (carrito.value[index].cantidad > 1) {
          carrito.value[index].cantidad--;
        }
      };
  
      const eliminarProducto = async (id) => {
        try {
          await axios.delete(`http://localhost:3000/carrito/${id}`);
          carrito.value = carrito.value.filter((producto) => producto.id !== id);
        } catch (error) {
          console.error('Error al eliminar el producto del carrito:', error);
        }
      };
  
      const comprar = async () => {
        // Aquí puedes implementar la lógica de compra si es necesario
        // Por ejemplo, enviar los productos al servidor para procesar el pago
        alert('Compra realizada');
        carrito.value = [];
      };
  
      return {
        carrito,
        total,
        aumentarCantidad,
        disminuirCantidad,
        eliminarProducto,
        comprar,
      };
    },
  };
  </script>
  <style scoped>
  .carrito {
    background: #103973;
   
    border-radius: 10px;
    margin: 20px auto;
    
    padding: 20px;
    width: 50%;
    height: 20%;
  }
  .vacio {
    text-align: center;
  }
  .producto {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  .imagen {
    width: 100px;
    height: 100px;
    
    
  }
  .detalles {
    flex-grow: 1;
  }
  .cantidad {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .cantidad button {
    background: #103973;
    color: white;
    border: none;
    padding: 5px;
    cursor: pointer;
  }
  .cantidad span {
    margin: 0 10px;
  }
  .eliminar {
    background: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  .total {
    text-align: right;
    margin-top: 20px;
  }
  .comprar {
    background: #103973;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    display: block;
    margin: 20px auto 0;
  }
  </style>
  