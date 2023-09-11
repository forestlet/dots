import { createI18n } from 'vue-i18n'
import zh from './zh.json'
import en from './en.json'
import { locale } from '@/util/config'

const messages = {
  en: {
    message: en,
  },
  zh: {
    message: zh,
  },
}

export const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  messages,
})

export const changeLocale = (new_locale: 'zh' | 'en') => {
  i18n.global.locale = new_locale
  localStorage.setItem('locale', new_locale)
  locale.value = new_locale
}
