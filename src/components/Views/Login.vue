<template>
    <div class="login">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" placeholder="Insert Email..." required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" placeholder="Type Password..."required>
            </div>
            <button type="submit">Login</button>
            
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
            this.$root.isAuthenticated = true;
            localStorage.setItem('isLoggedIn', true);
            /*localStorage.setItem('email', this.email);
            localStorage.setItem('password', this.password); */
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped>

</style>