import { createAuth0 } from "@auth0/auth0-vue";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)
console.log(import.meta.env.VITE_AUTH0_CALLBACK_URL)
app.use(
    createAuth0({
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
        authorizationParams: {
            redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
        }
    })
)

app.mount('#app')
