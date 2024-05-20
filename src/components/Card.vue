<script>
export default {
  props: {
    id:Number,
    titulo: String,
    precio: String,
    imageUrl: String
  }
}
</script>
<template>

  <button class="component">
    <div class="overlap">
      <img :src="imageUrl" alt="imagen" class="imagen">
    </div>
      <h5 class="titulo">{{ titulo }}</h5>
      <p class="text-wrapper">{{ precio }}</p>
    
    </button>
</template>

<style>
.component {
  background-color: #103973;
  background-size: 100% 100%;
  border-radius: 10px;  
  height: 230px;
  position: relative;
  border: none;
  width: 211px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
transition: all .2s ease-in-out; 
}
.component:hover{
  transform: scale(1.1);  
}
.component .overlap {
  background-color: #00133b;
  border-radius: 10px;
  position: relative;
  top: 10px;
  left: center;
  height: 145px;
  width: 173px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.component .imagen {
  height: 120px;
  position: absolute;
  top: 10px;
  width: 129px;
}
.component .text-wrapper {
  color: #ffffff;
  font-family: "Inter-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  height: 27px;
  left: center;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  top: -6px;
}

.component .titulo {
  color: #ffffff;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 50px;
  left: center;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  top: 20px;
}

</style>
