import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
const viteButton = defineAsyncComponent(()=>import('layout/Button'));
const app = createApp(App);
app.component('vite-button', viteButton)

app.mount('#app')
