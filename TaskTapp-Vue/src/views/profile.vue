<script>
import Navbar from '../components/Navbar.vue'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      user: this.$auth0.user,
    }
  },
  methods: {
    updateInfo() {
      const name = document.querySelector("#name").value
      const email = document.querySelector(".email").value
      const phoneNumber = document.querySelector("#phoneNumber").value
      console.log(this.$auth0)
      console.log(this.$auth0.user)
      console.log(JSON.stringify(this.$auth0.user))
      console.log(JSON.stringify())
      axios.put('http://localhost:3000/updateAccount/' + this.$auth0.user._value.sub, {
        "name": name,
        "email": email,
      })
        .then((response) => {
          
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<template>
  <body>
    <!-- <div id="aside">-->

    <Navbar></Navbar>

    <div id="main">
      <h1 id="title" class="is-size-1 has-text-weight-bold pl-3">Account</h1>
      <!-- <section id="section-1"> -->
      <div class="userInfo">
        <div id="username">
          <div class="field">
            <label class="label is-size-4 has-text-weight-semibold">Display Name</label>
            <div class="control">
              <input v-model="user.name" id="name" class="input" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div id="email">
        <h2 class="is-size-4 has-text-weight-semibold">Email</h2>
        <div id="info">
          <input v-model="user.email" class="input email" type="text" />
        </div>
      </div>
    </div>
    <button @click="updateInfo" class="button">Update Info</button>
  </body>
</template>

<style scoped>
body {
  background: #823696; /* Old browsers */
  background: -moz-linear-gradient(45deg, #32279e 0%, #b756a3 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    45deg,
    #32279e 0%,
    #b756a3 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    45deg,
    #32279e 0%,
    #b756a3 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#32279E', endColorstr='#B756A3',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: grid;
  grid-template-columns: 1fr 5fr;
}

#aside {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  /* z-index: 100; */

  display: grid;
  grid-column: 1/2;
}

#main {
  display: grid;
  padding: 1em 1.4em;

  grid-column: 2/4;
}

.userInfo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

#info {
  display: flex;
  align-items: center;
}

#edit {
  margin: auto;
}

#username {
  grid-column: 1/2;
  padding: 10px;
}

#email {
  grid-row: 2/3;
  grid-column: 1/2;
  padding: 10px;
}

#showPass {
  padding: 10px;
}

img {
  width: 40px;
  cursor: pointer;
}

figure {
  margin: 0;
}

figcaption {
  font-size: 1.3em;
  font-weight: bold;
}

.active {
  position: absolute;
  /* display: block; */
  /* background: #fff; */
  width: 50%;
  left: 0;
  top: 0;
  height: 100%;
}

.activeList {
  /* background-color: white; */
}

#title {
  /* margin: 0; */
  padding: 20px 0px;
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

  #main {
    /* padding: 4em; */
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

  .cta {
    display: inline-block;
    font-size: 1.3em;
    padding: 0.8em 3em;
  }
}
</style>


