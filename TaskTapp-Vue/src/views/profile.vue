<script>
import Navbar from '../components/Navbar.vue'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  name: 'Home',
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

<script setup></script>

<template>
    <div class="navbar">
      <navbar></navbar>
    </div>
    

    <main>
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
      <button class="button">Update Info</button>
    </main>
</template>

<style scoped>

main{
  margin-left: 17vw;
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

#title {
  /* margin: 0; */
  padding: 20px 0px;
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

  main {
    padding: 4em;
    background: white url('../assets/images/bg.svg') no-repeat bottom right;
    background-size: 70%;
    height: 100vh;
  }
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 100;
}

</style>


