<template>
  <div class="page-layout">
    <NavBar />
    <div class="page-layout__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>
