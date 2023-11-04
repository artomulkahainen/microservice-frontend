import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { ProductDTO } from '@/services/ProductServiceDtos';

interface CartObject extends ProductDTO {
    count: number;
}

export const useCartStore = defineStore('cart', () => {
    const cart = ref<Record<string, CartObject>>({});

    const addToCart = (product: ProductDTO) => {
        if (!cart.value[product.id]) {
            cart.value = { ...cart.value, [product.id]: { ...product, count: 1 } };
            return;
        }

        cart.value[product.id].count++;
    };

    return { cart, addToCart };
});
