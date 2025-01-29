import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import { messages } from './messages'; 

// Create an instance of i18n
const i18n = createI18n({
  legacy: false, 
  locale: 'uk', 
  fallbackLocale: 'en', 
  messages, 
});

// Create the Vue app
const app = createApp(App);

// Add i18n and router
app.use(i18n);
app.use(router);

// Mount the app
app.mount('#app');
