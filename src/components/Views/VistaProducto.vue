<script>
export default {};
</script>
<template>
  <div class="fondo">
    <div class="fondoimagen">
      <img :src="imageUrl" alt="imagen" class="imagen" />
    </div>
    <div class="columna">
        <span class="figurina-makima-taito">Figurina Makima Taito</span
      ><span class="precio">Precio: 10.000</span
      ><span class="vendedor">Vendedor: Andrés</span>
    </div>
        <span class="descripcion">Descripcion:<br />Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nullam commodo porta pharetra. Aenean eget blandit sem. Fusce sit
      amet tellus erat. Nunc gravida euismod ipsum vel consectetur. Maecenas
      vitae feugiat augue. Sed dapibus pharetra sagittis. Ut commodo consequat
      purus, quis volutpat mi varius a. Sed a molestie lectus. Vestibulum
      interdum augue odio, at porttitor nisl consequat sed.</span
    >
  <button class="compra">Comprar</button>
  </div>
</template>

<style>
.compra {
  background-color: #00993d;
  color: #ffffff;
  border-radius: 10px;
  font-size: 20px;
  position: relative;
  width:200px;
  height: 50px;
  top: 46%;
  left: 80%;

}

.fondo {
    border-radius: 10px;
  background-color: #103973;
  left: center;
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
  top: 1.99%;
  left: 57.34%;
  z-index: 6;
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
  top: 115px;
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
  flex-shrink: 0;
  flex-basis: auto;
  position: absolute;
  width: 426px;
  height: 52px;
  top: 203px;
  
  color: #ffffff;
  font-family: Inter, var(--default-font-family);
  font-size: 20px;
  font-weight: 400;
  line-height: 43.568px;
  text-align: center;
  white-space: nowrap;
  z-index: 11;
}
.vendedor {
    background-color: #00133b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-shrink: 0;
  position: absolute;
  width: 426px;
  height: 52px;
  top: 288px;
  left: 0;
  color: #ffffff;
  font-family: Inter, var(--default-font-family);
  font-size: 20px;
  font-weight: 400;
  line-height: 43.568px;
  text-align: center;
  z-index: 12;
}
    .descripcion {
    display: flex;
    border-radius: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    width: 1170px;
    height: 32.13%;
    top: 50%;
    left: 10%;
    color: #ffffff;
    background-color: #00133b;
    font-family: Inter, var(--default-font-family);
    font-size: 20px;
    font-weight: 400;
    line-height: 38.727px;
    text-align: left;
    padding: 20px;
    }


</style>
