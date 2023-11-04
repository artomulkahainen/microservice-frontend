<script setup lang="ts">
import ProductCardList from '@/components/Products/ProductCardList.vue';
import { onMounted, ref } from 'vue';
import { getAllProducts } from '@/services/ProductService';
import type { ProductDTO } from '@/services/ProductServiceDtos';

const products = ref<ProductDTO[]>([]);

onMounted(async () => {
    const fetchedData = await getAllProducts();
    products.value = fetchedData;
});
</script>

<template>
    <div class="products-div">
        <h1>Products</h1>
        <ProductCardList :products="products" />
    </div>
</template>

<style scoped>
.products-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em 0em;
}
</style>
