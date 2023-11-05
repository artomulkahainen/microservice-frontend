<script setup lang="ts">
import type { ProductDTO } from '@/services/productServiceDtos';
import ProgressSpinner from 'primevue/progressspinner';
import ProductCard from './ProductCard.vue';

defineProps<{
    products: ProductDTO[];
}>();
</script>

<template>
    <ProgressSpinner v-if="!products.length" />
    <div v-else class="product-card-list">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<style scoped>
.product-card-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 80%;
}
</style>
