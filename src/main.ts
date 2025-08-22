import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import en from '@/translations/en.json'
import fr from '@/translations/fr.json'

import App from './App.vue'
import router from './router.ts'

const app = createApp(App)

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages: { en, fr },
  legacy: false,
})
app.use(i18n)

app.use(createPinia())
app.use(router)

app.mount('#app')
