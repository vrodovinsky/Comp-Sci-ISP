<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<script setup>
  // location.reload()
</script>

<template>
  <div class="navbar">
    <navbar></navbar>
  </div>

  <main>
    <h1>Your TaskTapp Overview</h1>
    <p>Monitor your progress, upcoming tasks, and latest earnings at a glance</p>
    <div class="boxes-wrapper">
      <div class="sales-widget">
        <div class="header">
          <h3>Total Sales</h3>
          <hr />
        </div>
        <div class="content">
          <div class="left-section">
            <h2>12.2k</h2>
            <span class="negative">-25%</span>
          </div>
          <div class="right-section">
            <canvas class="graphs" id="myChart"></canvas>
          </div>
        </div>
      </div>
      <div class="sales-widget">
        <div class="header">
          <h3>Total Visitors</h3>
          <hr />
        </div>
        <div class="content">
          <div class="left-section">
            <h2>32k</h2>
            <span class="positive">+25%</span>
          </div>
          <div class="right-section">
            <canvas class="graphs" id="visitorChart"></canvas>
          </div>
        </div>
      </div>
      <div class="sales-widget">
        <div class="header">
          <h3>Total Sales</h3>
          <hr />
        </div>
        <div class="content">
          <div class="left-section">
            <h2>12.2k</h2>
            <span class="negative">-25%</span>
          </div>
          <div class="right-section">
            <canvas class="graphs" id="barChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700'); */

main {
  margin-left: 17vw;
}

/* main {
  background: #fff;
  padding: 1em 1.4em;
} */

h1 {
  margin: 0;
}

p {
  font-size: 1.1em;
  line-height: 1.5em;
}

@media only screen and (min-width: 768px) {
  /* body {
    display: grid;
    grid-template-columns: 20% auto;
    padding: 2em;
  } */

  img {
    display: none;
  }

  main {
    padding: 4em;
    background: white url('../assets/images/bg.svg') no-repeat bottom right;
    background-size: 70%;
    height: 100vh;
  }

  #avatar {
    border-radius: 50%;
    background: #fff;
    width: 50px;
    height: 50px;
    margin: 2em auto 1em auto;
  }

  figcaption {
    text-align: center;
    color: #000;
  }

  ul {
    display: block;
    margin-top: 2em;
    position: relative !important;
    background: none !important;
    width: 100% !important;
  }

  ul li a:hover {
    background-color: #fff;
  }

  nav {
    background: none;
  }

  h1 {
    font-size: 3em;
    margin-top: 2em;
  }

  p {
    font-size: 1.5em;
  }
}


.sales-widget {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 100%;
  margin-top: 20px;
  transition: box-shadow 0.3s ease-in-out;
  flex: 0 0 250px;
}

.sales-widget:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.sales-widget .header {
  margin-bottom: 20px;
  text-align: left;
}

.sales-widget .header h3 {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
  color: grey;
}

.sales-widget .header hr {
  border: none;
  border-top: 1px solid #ddd;
  width: 100%;
}

.sales-widget .content {
  display: flex;
}

.sales-widget .left-section {
  flex: 1;
  text-align: left;
  padding-left: 5px;
}

.sales-widget .left-section h2 {
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 5px;
  margin-top: 5px;
}

.sales-widget .left-section .negative {
  font-size: 12px;
  color: red;
}

.sales-widget .left-section .positive {
  font-size: 12px;
  color: green;
}

.sales-widget .right-section {
  flex: 1;
  text-align: center;
}

.graphs {
  position: relative;
  width: 100%;
  height: 100%;
}

.boxes-wrapper {
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  width: 80%;
}

@media (max-width: 767px) {
  .boxes-wrapper {
    flex-direction: column;
    /* align-items: center; */
  }
}


#info {
  display: flex;
  align-items: center;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 100;
}
</style>
