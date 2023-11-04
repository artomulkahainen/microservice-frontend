<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from 'primevue/button';

const router = useRouter();

const navigateToHome = () => router.push('/');
const navigateToProducts = () => router.push('/products');
const navigateToCart = () => router.push('/cart');
const navigateToLogin = () => window.location.replace('http://www.google.com');
</script>

<template>
    <div class="top-bar-div">
        <nav>
            <Button class="nav-btn-style" @click="navigateToHome" label="Home" />
            <Button class="nav-btn-style" @click="navigateToProducts" label="Products" />
            <Button class="nav-btn-style" @click="navigateToCart" label="Cart" />
            <Button class="nav-btn-style" @click="navigateToLogin" label="Login" />
        </nav>
    </div>
</template>

<style scoped>
.top-bar-div {
    width: 100%;
    background-color: #9dbca5;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nav-btn-style {
    margin: 1em;
}
</style>
