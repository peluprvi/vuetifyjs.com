import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/lang/en'
import * as langs from '@/lang'

Vue.use(VueI18n)

export function createI18n (locale) {
  return new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en,
      // TODO: lazy loading
      [locale]: langs[locale]
    }
  })
}
