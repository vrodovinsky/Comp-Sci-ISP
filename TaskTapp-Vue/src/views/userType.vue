<script>
import Navbar from '../components/Navbar.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data() {
    return {
      userRole: '',
      user: this.$auth0.user
    }
  },
  methods: {
    isProvider() {
      axios
        .put('https://api.tasktapp.com/userRole/' + this.$auth0.user._value.sub, {
          role: this.userRole
        })
        .then((response) => {
          const data = response.data
          console.log(data._id)
          const redirectPath = this.$route.query.redirect || '/'
          this.$router.push(redirectPath)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<template>
  <div class="navbar">
    <navbar></navbar>
  </div>

  <main>
    <h1 id="title" class="is-size-1 has-text-weight-bold">What do you want to use TaskTapp for?</h1>
    <form>
      <div id="checks" class="field is-size-3">
        <label id="first" for="">
          <input
            class="check"
            v-model="userRole"
            value="rol_Qyye4GcdiGS4c6hu"
            name="userType"
            type="radio"
          />
          Sell my services
        </label>
        <label for="">
          <input
            class="check"
            v-model="userRole"
            value="rol_sn3XBo7RlfuZixOf"
            name="userType"
            type="radio"
          />
          Find Service Providers
        </label>
      </div>

      <button
        class="button is-block is-dark is-large"
        @click="isProvider"
        style="font-family: Montserrat"
      >
        Get Started
      </button>
    </form>
  </main>
</template>

<style scoped>
main {
  margin-left: 17vw;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 100;
}

input[type='checkbox'] {
  width: 20px;
  height: 20px;
}

#checks {
  display: flex;
  justify-content: center;
  padding: 80px 0px;
}

#first {
  padding-right: 20px;
}

#title {
  padding: 20px 0px;
}

button {
  margin-left: 15%;
  width: 70%;
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
</style>
