// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import router from './router/router.js'

import App from './App.vue'
// import App from './Day01_App.vue'
// import App from './Day02_App.vue';
// import App from './Day03_App.vue';
// import App from './Gio_Hang.vue';
// import App from './Tao_Moi_Sp.vue';

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.mount('#app');
