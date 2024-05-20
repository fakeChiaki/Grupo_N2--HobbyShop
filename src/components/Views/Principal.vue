<template>
    <Header />
    <div class="row">
      <card
        v-for="productos in productos"
        :key="productos.id"
        :nombreproducto="productos.nombreproducto"
        :precio="productos.precio"
        :imageUrl="productos.imageUrl"
        class="card"
      />
    </div>
  </template>
  <script setup>
  import Header from "../Header.vue";
  </script>
  <script>

  import axios from 'axios';
import Card from '../Card.vue';
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
  <style >
  .row {
    
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
  }
  .card {
    flex: 0 1 calc(20% - 20px); 
  margin-bottom: 20px;
  margin-top: 20px;
  margin-right: 20px;

}
.card:nth-child(3n) {
  margin-right: 20px; 
}
  </style>