import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import VueGtag from 'vue-gtag';

const app = createApp(App);

app.use(router);
app.use(VueGtag, {
    config: { id: "G-29DVLEW6Q7"}
});

app.mount('#app');
