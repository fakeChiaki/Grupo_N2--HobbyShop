<script setup>
import Header from "../Header.vue";

</script>

<template>
        <Header />
    <div class="Reseña">
       <h2>Reseña el producto</h2>
       <form @submit.prevent="crear">
           <div class="form-group">
               <label for="name">Nombre del Producto</label>
               <input type="text" id="name" v-model="name" placeholder="Inserte Producto." required>
             
           </div>
           <div class="form-group-2">
             
               <label for="descripcion">Descripcion</label>
               <input type="text" id="descripcion" v-model="descripcion" placeholder="Ingrese una descripcion del Producto" required>   
           </div>
           <button class="Submit" type="submit">Registrar cuenta</button>
       </form>
   </div>
</template>

<style scoped>
.Reseña {
   color: white;
   background-color: #103973;
   margin: 0px 13rem;
   padding: 4rem 0 2rem 0;
   margin-top: 65px;
  
   border-radius: 15px;
   font-family: Arial, sans-serif;
}

h2 {
   display: flex;
   justify-content: center;
   background-color: #295A94;
   padding: 15px;
   margin-bottom: 50px;
   border-radius: 15px;
   width: 20%;
   margin: auto;
}

.form-group {
   display: flex;
   align-items: left;
   justify-content: center;
   flex-direction: column;
   margin: 20px 35rem 0 10rem;
}

.form-group-2 {
   display: flex;
   align-items: left;
   justify-content: center;
   flex-direction: column;
   margin: -11.6rem 1rem 0 40rem;
}

label {
   background-color: #528BE6;
   padding: 2px;
   border-radius: 15px;
   margin-right: auto;
   margin-bottom: 15px;
   margin-top: 15px;
   width: 120px;
  height: 30px;
  align-items: center;
  text-align: center;
  
    
}

input {
   color: white;
   background-color: #528BE6;
   border-radius: 15px;
   padding: 10px;
   color: white;
   text-align: left;
   width: 70%;
   border: none;
}

input::placeholder {
   color: black;
   font-weight: 500;
}
.Submit {
    margin-left: 450px;
   margin-top: 180px;
   border-radius: 15px;
   padding: 20px 30px;
   font-size: medium;
   background-color: #00ff73;
   color: rgb(0, 0, 0);
   border: none;
   transition: all .2s ease-in-out; 
}
.Submit:hover{
    transform: scale(1.1);
}
</style>