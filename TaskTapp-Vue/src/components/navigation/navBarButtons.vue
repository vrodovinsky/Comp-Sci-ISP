<template>
  <div class="mobile-nav-bar__buttons">
    <template v-if="!isAuthenticated">
      <ul id="full">
        <li id="links"><SignupButton /></li>
        <li id="links"><LoginButton /></li>
      </ul>
    </template>
    <template v-if="isAuthenticated">
      <LogoutButton />
    </template>
  </div>
</template>

<script setup>
import LoginButton from '@/components/buttons/login-button.vue'
import LogoutButton from '@/components/buttons/logout-button.vue'
import SignupButton from '@/components/buttons/signup-button.vue'
import { useAuth0 } from '@auth0/auth0-vue'

const { isAuthenticated } = useAuth0()
</script>

<style>
#links {
  margin: 0px 20px;
}

ul #full {
  padding: 0px;
  display: flex;
  justify-content: space-between;
}
</style>
