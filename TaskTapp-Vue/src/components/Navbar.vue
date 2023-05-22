<script>
// export default{
//   computed: {

//   }
// }
</script>

<template>
  <aside>
    <figure>
      <div id="avatar">
        <img :src="user.picture" />
      </div>
      <figcaption>{{ user.name }}</figcaption>
    </figure>
    <img src="../assets/images/menu.svg" />
    <nav>
      <ul>
        <li class="activeList"><router-link to="/dashboard">DASHBOARD</router-link></li>
        <li><router-link to="earnings&analytics.html">EARNINGS AND ANALYTICS</router-link></li>
        <li><router-link to="#">TASKS & HISTORY</router-link></li>
        <li><router-link to="/profile">PROFILE AND SETTINGS</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body,
html {
  height: calc(100% - 2em);
  margin: 0;
  font-family: 'Montserrat';
}

/* .aside {
  color: #fff;
  display: flex;
  /* grid-template-columns: auto 40px; */
  /* display: flex; 
}
.container {
  justify-content: center;
} */

img {
  width: 40px;
  cursor: pointer;
}

#figure {
  /* height: 200px;*/
  background: #eec9f4;
}

figure {
  /* margin: auto;
    justify-content: center; */
  display: flow-root;
  padding-bottom: 10px;
}

figcaption {
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
}

#avatar {
  margin: auto;
}

nav {
  display: contents;
}

nav ul {
  list-style-type: none;
  /* padding: 0; */
  margin: 0;
}

nav li {
  /* background: #eec9f4; */
}

nav a {
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
  transition: all 0.3s ease;
}

nav a:hover {
  /* background-color: #333; */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: translateX(10px);
}

/* .active {
    position: absolute;
    display: block;
    background: #fff;
    width: 50%;
    left: 0;
    top: 0;
    height: 100%;
} */

ul {
  display: none;
  list-style-type: none;
  margin: 0;
  /* padding: 0; */
}

ul li a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8em;
  /* display: block; */
  padding: 1.5em 3em;
  /* background-color: rgba(255, 255, 255, 0.35); */
  color: #000;
}

.activeList {
  background-color: white;
}

main {
  background: #fff;
  padding: 1em 1.4em;
}

h1 {
  margin: 0;
}

p {
  font-size: 1.1em;
  line-height: 1.5em;
}

@media only screen and (min-width: 768px) {
  body {
    display: grid;
    grid-template-columns: 20% auto;
    padding: 2em;
  }

  img {
    display: none;
  }

  aside {
    background: #dce1f6;
    grid-template-columns: auto;
    grid-template-rows: 20% auto;
    padding: 0;
  }

  main {
    padding: 4em;
    background: white url('TaskTapp-Vue/src/assets/images/bg.svg') no-repeat bottom right;
    background-size: 70%;
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

</style>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue'

const { user } = useAuth0()

const code = JSON.stringify(user.value, null, 2)
</script>