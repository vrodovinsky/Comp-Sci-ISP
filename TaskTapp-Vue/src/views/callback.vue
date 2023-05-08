<template>
  <div class="page-layout">
    <Header />
    <div class="page-layout__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>
