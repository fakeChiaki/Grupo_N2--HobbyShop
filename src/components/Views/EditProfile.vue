<template>
    <Header />

    <div class="general__container">
        <div class="profile__container">
            <div class="profile__image">
                <img src="/src/assets/img/harold.jpg" alt="profile">
                <div class="profile__image__elements">
                    <button>Seleccionar Archivo</button>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01" />
                    </svg>
                </div>
            </div>
            <div class="form__container">
                <h2>Editar Perfil</h2>
                <form>
                    <div class="form__group">
                        <label>Nombre de Usuario</label>
                        <input type="text" placeholder="Inserte nuevo Usuario...">

                        <label>Correo de Contacto</label>
                        <input type="email" placeholder="Nuevo correo de contacto...">

                        <label>Contraseña</label>
                        <input type="password" placeholder="Ingrese nueva contraseña...">
                    </div>
                    <div class="form__group">
                        <label>Confirmar Contraseña</label>
                        <input type="password" placeholder="Confirme nueva contraseña...">

                        <label>Dirección</label>
                        <input type="text" placeholder="Nueva dirección...">

                        <label>Número Telefónico</label>
                        <input type="text" placeholder="Nuevo número telefónico...">
                    </div>
                </form>
                <div class="button__container">
                    <RouterLink to="/Profile"><button id="green" type="submit">Guardar Cambios</button></RouterLink>
                    <RouterLink to="/Profile"><button id="red" type="submit">Descartar Cambios</button></RouterLink>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import Header from "../Header.vue";


</script>

<style scoped>
.general__container {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100% - 70px);
    border-radius: 15px;
    margin: auto;
}

.profile__container {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: #103973;
    border-radius: 10px;
    gap: 3rem;
    width: 90%;
    height: 95%;
}

.profile__container img {
    width: 400px;
    height: 400px;
    border-radius: 8px;
}

.profile__image__elements {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
}

.profile__image__elements button {
    background-color: #528BE6;
    color: white;
    border: none;
    border-radius: 15px;
    padding: 0.5rem;
    width: 10rem;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease;
}

.profile__image__elements button:hover {
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.01);
}

.form__container {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.form__container h2 {
    background-color: #528BE6;
    padding: 15px;
    border-radius: 15px;
    width: 25%;
}

form {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.form__group {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
}

label {
    background-color: #528BE6;
    padding: 6px;
    border-radius: 15px;
    margin-right: auto;
    margin-bottom: 15px;
    margin-top: 15px;
}

input {
    color: white;
    background-color: #528BE6;
    border: none;
    border-radius: 15px;
    padding: 0.5rem;
    width: 15rem;
}

input::placeholder {
    color: white;
}

.button__container {
    display: flex;
    justify-content: center;
    gap: 9rem;
    margin-top: 50px;
    height: 25px;
}

.button__container a:hover {
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.03);
}

.button__container a #green {
    background-color: #53E142;
    color: white;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    width: 8rem;
    height: 2rem;
}

.button__container a #red {
    background-color: red;
    color: white;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    width: 8rem;
    height: 2rem;
}

</style>