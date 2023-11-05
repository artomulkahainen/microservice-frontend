<script setup lang="ts">
import CartTable from '@/components/Cart/CartTable.vue';
import { useCartStore } from '@/stores/cart';

const cart = useCartStore();

const columns = [
    { key: 'name', name: 'Product name' },
    { key: 'price', name: 'Price' },
    { key: 'count', name: 'Count' }
];
</script>

<template>
    <div class="cart-div">
        <h1>Cart</h1>
        <CartTable :columns="columns" :data="cart.getItems()" />
    </div>
</template>

<style scoped>
.cart-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em 0em;
}
</style>
