import { createApp } from 'vue'
import { createPinia } from 'pinia';

import App from './App.vue'
import router from './router.js';
import BaseButton from './components/ui/BaseButton.vue';
import BaseDialog from './components/ui/BaseDialog.vue'; 

const app = createApp(App);
const pinia = createPinia();

app.use(pinia)
app.use(router)

app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)


app.mount('#app')

    
