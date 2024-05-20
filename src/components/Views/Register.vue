<template>
    <div class="register">
        <h2>Register</h2>
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="name">Nombre de Usuario</label>
                <input type="name" id="name" v-model="name" placeholder="Inserte Usuario..." required>

                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" placeholder="ejemplo@gmail.com" required>

                <label for="password">Contraseña</label>
                <input type="password" id="password" v-model="password" placeholder="Ingrese su contraseña..." required>
            </div>
            <div class="form-group-2">
                <label for="confirmPassword">Confirmar Contraseña</label>
                <input type="Password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirme su contraseña..."
                    required>

                <label for="id">RUT</label>
                <input type="id" id="id" v-model="id" placeholder="12.345.678-9" required>

                <label for="phone">Número Telefónico</label>
                <input type="phone" id="phone" v-model="phone" placeholder="+569..." required>
            </div>
            <button type="submit">Registrar cuenta</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            id: "",
            phone: ""
        }
    },
    methods: {
        register() {
            this.$root.isAuthenticated = true;
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('name', this.name);
            localStorage.setItem('email', this.email);
            localStorage.setItem('password', this.password);
            localStorage.setItem('confirmPassword', this.confirmPassword);
            localStorage.setItem('id', this.id);
            localStorage.setItem('phone', this.phone);
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.register {
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
    margin: 10px 35rem 0 10rem;
}

.form-group-2 {
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    margin: -16.6rem 4rem 0 40rem;
}

label {
    background-color: #528BE6;
    padding: 2px;
    border-radius: 15px;
    margin-right: auto;
    margin-bottom: 15px;
    margin-top: 15px;
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

button {
    margin-left: 450px;
    margin-top: 70px;
    border-radius: 15px;
    padding: 20px 30px;
    font-size: medium;
    background-color: #528BE6;
    color: white;
    border: none;
}

</style>