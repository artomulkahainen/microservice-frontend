<script setup lang="ts">
import { RouterView } from 'vue-router';
import TopBar from './components/common/TopBar.vue';
</script>

<template>
    <header>
        <TopBar />
    </header>
    <main>
        <RouterView />
    </main>
</template>
