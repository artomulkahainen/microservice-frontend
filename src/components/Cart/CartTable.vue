<script setup lang="ts" generic="T">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import { useCartStore } from '@/stores/cart';

const cart = useCartStore();

defineProps<{
    data: Array<T>;
    columns: Array<{
        key: string;
        name: string;
    }>;
}>();
</script>

<template>
    <template v-if="!data.length">
        <p>No items in cart!</p>
    </template>
    <template v-else>
        <DataTable :value="data" class="cart-table-style">
            <Column v-for="col of columns" :key="col.key" :field="col.key" :header="col.name" />
            <Column header="Actions">
                <template #body="slotProps">
                    <div class="cart-table-buttons">
                        <Button label="Add" @click="() => cart.addToCart(slotProps.data)" />
                        <Button
                            label="Remove"
                            @click="() => cart.removeFromCart(slotProps.data.id)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>
    </template>
</template>

<style scoped>
.cart-table-style {
    min-width: 50em;
}
.cart-table-buttons {
    display: flex;
    gap: 1em;
}
</style>
