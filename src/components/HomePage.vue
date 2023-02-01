<script setup lang="ts">
import { ref } from 'vue';
import Dinosaurs from '@/components/Dinosaurs.vue';

</script>

<template>
  <Suspense>
    <template #default>
      <Dinosaurs />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style scoped>

</style>