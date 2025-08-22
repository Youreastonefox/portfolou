import { createApp } from 'vue'
import App from './App.vue'

import '@/style/main.scss'

import { createPinia } from 'pinia'

import router from './router.ts'

import { createI18n } from 'vue-i18n'
import en from '@/translations/en.json'
import fr from '@/translations/fr.json'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages: { en, fr },
  legacy: false,
})
app.use(i18n)

app.mount('#app')
