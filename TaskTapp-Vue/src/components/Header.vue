<script setup>
import navBarButtons from '@/components/navigation/navBarButtons.vue'
</script>
<template>
  <nav>
    <ul id="full">
      <ul>
        <li>
          <a href="/"><img src="../assets/logo1.svg" /></a>
        </li>
      </ul>
      <ul>
        <li id="links"><a href="/search">Search Services</a></li>
        <li id="links"><a href="/search">Map Search</a></li>
        <li id="links"><nav-bar-buttons /></li>
      </ul>
    </ul>
  </nav>

  <svg
    class="svgHeader"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="1920"
    height="951.75"
    viewBox="0 0 1920 951.75"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="0.5"
        x2="0.5"
        y2="1"
        gradientUnitas="objectBoundingBox"
      >
        <stop offset="0" stop-color="#32279e" />
        <stop offset="1" stop-color="#b756a3" />
      </linearGradient>
    </defs>
    <path
      id="Path_380"
      data-name="Path 380"
      d="M1199.13,606.015s.819,83.808,0,130.614c7.39,81.407,168.228,80.582,489.2,47.659,639.705-67.148,941.146,61.3,1091.2,436.542s339.6,335.74,339.6,335.74V606.256Z"
      transform="translate(-1199.13 -606.015)"
      fill="url(#linear-gradient)"
    />
  </svg>
</template>

<style>
body,
html {
  height: calc(100% - 2em);
  margin: 0;
  font-family: 'Montserrat';
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.svgHeader {
  display: block;
  width: 100%;
  height: auto;
}

nav {
  position: absolute;
  top: 0;
  z-index: 200;
  width: 100%;
}

nav ul {
  display: flex;
  list-style: none;
}

#full {
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
}

#links {
  margin: 0px 20px;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  /* padding-left: 20px; */
  margin: auto;
}

nav a:hover {
  color: #ccc;
}
</style>
