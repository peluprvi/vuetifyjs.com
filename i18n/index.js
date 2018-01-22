import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/lang/en'
import * as langs from '@/lang'

Vue.use(VueI18n)

export function createI18n (ssrContext) {
  let locale = 'en'

  if (ssrContext && ssrContext.lang) {
    locale = ssrContext.lang
  } else if (typeof document !== 'undefined') {
    locale = document.documentElement.lang
  }

  const messages = { en }

  if (locale !== 'en' && langs[locale]) {
    messages[locale] = langs[locale]
  }

  return new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
  })
}
