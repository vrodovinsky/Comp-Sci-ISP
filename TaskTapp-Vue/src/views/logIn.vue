<script setup>
import { useAuth0 } from '@auth0/auth0-vue'

useAuth0().loginWithRedirect({
  appState: {
    target: '/profile'
  }
})
</script>
