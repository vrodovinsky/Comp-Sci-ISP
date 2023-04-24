<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>

<template>
  <RouterView />

  <!-- <Footer /> -->
</template>

<script>
  export default {
    components: {
      Footer
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

  body {
  font-family: 'Montserrat', sans-serif;
}

</style>
