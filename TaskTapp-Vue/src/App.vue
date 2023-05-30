<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>

<template>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
  </head>
  <div id="container">
  <div class="main">
    <RouterView />
  </div>
  <div id="foot"><Footer></Footer></div>
</div>
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
#container{
  display: grid;
  grid-template-areas: "main"
                      "footer";
  grid-template-rows: 2fr 50px;
 
  width:100%;
  height: auto;
}
#foot{
  padding: 0px;
}


</style>
