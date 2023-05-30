import { createAuth0 } from "@auth0/auth0-vue";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(
    createAuth0({
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
        authorizationParams: {
            audience: import.meta.env.VITE_AUTH0_AUDIENCE,
            redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
        }
    })
)


app.use(VueGoogleMaps, {
    load: {
        key: import.meta.env.VITE_GOOGLE_API_KEY,
    }
})

app.mount('#app')
