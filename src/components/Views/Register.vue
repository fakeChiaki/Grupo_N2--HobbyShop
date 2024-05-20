<template>
    <div class="register">
        <h2>Register</h2>
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="name" id="name" v-model="name" placeholder="Insert Username..." required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" placeholder="Insert Email..."required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" placeholder="Type Password..."required>
            </div>
            <div class="form-group">
                <label for="password">Confirm Password</label>
                <input type="password" id="password" v-model="password" placeholder="Confirm Password..."required>
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script setup>

</script>

<style scoped>
</style>