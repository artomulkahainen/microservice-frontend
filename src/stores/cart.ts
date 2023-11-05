import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { ProductDTO } from '@/services/ProductServiceDtos';

interface CartObject extends ProductDTO {
    count: number;
}

export const useCartStore = defineStore('cart', () => {
    const cart = ref<Record<string, CartObject>>({});

    const getItems = () => Object.values(cart.value);

    const addToCart = (product: ProductDTO) => {
        if (!cart.value[product.id]) {
            cart.value = { ...cart.value, [product.id]: { ...product, count: 1 } };
            return;
        }

        cart.value[product.id].count++;
    };

    const removeFromCart = (id: string) => {
        if (!cart.value[id]) {
            return;
        }

        if (cart.value[id].count === 1) {
            delete cart.value[id];
            return;
        }

        cart.value[id].count--;
    };

    return { cart, getItems, addToCart, removeFromCart };
});
