<template>
  <button @click="changeLocale">
    {{ currentLocale === 'en' ? '🇫🇷' : '🇬🇧' }}
  </button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentLocale = locale

function changeLocale() {
  locale.value = locale.value === 'en' ? 'fr' : 'en'
}
</script>
