<script setup lang="ts">
import type { ProductDTO } from '@/services/ProductServiceDtos';
import Card from 'primevue/card';
import Button from 'primevue/button';
import { useCartStore } from '@/stores/cart';

const props = defineProps<{
    product: ProductDTO;
}>();

const cartStore = useCartStore();

const addToCart = () => cartStore.addToCart(props.product);
</script>

<template>
    <Card class="product-card-style">
        <template #title>{{ product.name }}</template>
        <template #content>
            <p class="product-text-class">Price: {{ product.price }}$</p>
            <Button label="Add to cart" @click="addToCart" />
        </template>
    </Card>
</template>

<style scoped>
.product-card-style {
    width: 20em;
    margin: 0.5em;
}
.product-text-class {
    margin-bottom: 1em;
}
</style>
