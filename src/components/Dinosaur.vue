<script setup lang="ts">
import { store } from '@/store';

</script>

<template>
  Name: {{ store.dinosaur.name }}
  <br />
  Description: {{ store.dinosaur.description }}
</template>

<style scoped>

</style>