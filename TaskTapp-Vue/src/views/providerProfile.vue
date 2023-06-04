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
      <h1 id="title" class="is-size-1 has-text-weight-bold pl-3">Service Information</h1>
      <div class="userInfo">
        <div id="username">
            <label class="label is-size-4 has-text-weight-semibold">Company Name</label>
            <div class="control">
              <input v-model="com" id="name" placeholder="Ex. John Smith Plumbing" class="input" type="text" />
            </div>
        </div>
        <div id="email">
            <label class="label is-size-4 has-text-weight-semibold">Email</label>
            <div class="control" id="info">
            <input v-model="user.email" class="input email" type="text" />
            </div>
        </div>
        <div id="service">
            <label class="label is-size-4 has-text-weight-semibold">Service</label>
            <div class="control" id="info">
            <input class="input" placeholder="Ex. Plumber" type="text" /> <!-- v-model="" --> 
            </div>
        </div>
        <div id="price">
            <label class="label is-size-4 has-text-weight-semibold">Price</label>
            <div class="control" id="info">
            <input class="input" placeholder="Ex. $190" type="text" /> <!-- v-model="" --> 
            </div>
        </div>
        <div id="description">
            <label class="label is-size-4 has-text-weight-semibold">Description</label>
            <div class="control" id="info">
                <textarea id="freeform" placeholder="Ex. My name is John and I am a skilled plumber..." name="freeform" rows="4" cols="50"></textarea>   
            </div>   
        </div>
      </div>
      <div id="button">
        <button class="button">Update Info</button>
      </div>
    </main>
</template>

<style scoped>

main{
  margin-left: 17vw;
}

#button{
  padding: 10px;
}
.userInfo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

input{
    width: 80%;
}

#info {
  display: flex;
  align-items: center;
}

#username {
  grid-column: 1/2;
  padding: 10px;
}

#price{
    padding: 10px;
    grid-column: 2/3;
    grid-row: 2/3;
}

#service{
    grid-column: 2/3;
    padding: 10px;
}

#email {
  grid-row: 2/3;
  grid-column: 1/2;
  padding: 10px;
}

#description{
    grid-column: 1/3;
    padding: 10px;
}

textarea{
    width: 70%;
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