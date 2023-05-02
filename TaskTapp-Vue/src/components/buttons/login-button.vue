<template>
  <a class="button__login" @click="handleLogin">Log In</a>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect } = useAuth0()

const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: '/profile'
    }
  })
}
</script>
