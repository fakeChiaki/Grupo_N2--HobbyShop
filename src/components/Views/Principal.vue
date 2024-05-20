<template>
    <div class="row">
      <card
        v-for="productos in productos"
        :key="productos.id"
        :titulo="productos.titulo"
        :precio="productos.precio"
        :imageUrl="productos.imageUrl"
        class="card"
      />
    </div>
  </template>
  
  <script>
  import Card from '../Card.vue';
 
  import axios from 'axios';
  export default {
    components: {
      Card
    },
    data() {
      return {
        productos: []
      };
    },
    mounted() {
        this.fetchproductos();
    },
    methods: {
        fetchproductos() {
            axios.get('http://localhost:3000/productos')
        .then(response => {
          this.productos = response.data;
        })
        .catch(error => {
          console.error('Error al obtener los productos:', error);
        });
        }
    }

  }
  </script>
  <style scoped>
  .row {
    display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  }
  .card {
    flex: 0 1 calc(33.33% - 20px); /* Ancho aproximado para tres columnas con espacio entre ellas */
  margin-bottom: 20px;
  margin-right: 20px; /* Espacio entre cada tarjeta */

}
.card:nth-child(3n) {
  margin-right: 0; /* Elimina el margen derecho de la última tarjeta en cada fila */
}
  </style>