<template>
  <footer>
    <p style="position: absolute; right: 10px; color: lightgray">Copyright &copy; 2023</p>
    <ul class="container">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/search">Search our services</router-link></li>
      <template v-if="!isAuthenticated">
        <li><SignupButton /></li>
        <li><LoginButton /></li>
      </template>
      <template v-if="isAuthenticated">
        <li><LogoutButton /></li>
      </template>
    </ul>
  </footer>
</template>

<style>
/**Footer */
footer {
  grid-column: 1/4;
  background: #32279e;

  padding: 0px;
  margin: 0;
  text-align: center;
}

footer .container {
  /**flexbox */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

footer a {
  color: #f8f0c6;
  text-decoration: none;
  font-size: 15px;
}

footer li {
  display: inline;
  padding: 0 30px 0 30px;
  align-self: center;
}
</style>

<script setup>
import LoginButton from '@/components/buttons/login-button.vue'
import LogoutButton from '@/components/buttons/logout-button.vue'
import SignupButton from '@/components/buttons/signup-button.vue'
import { useAuth0 } from '@auth0/auth0-vue'

const { isAuthenticated } = useAuth0()
</script>
