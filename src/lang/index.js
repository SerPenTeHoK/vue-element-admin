import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import elementEsLocale from 'element-ui/lib/locale/lang/es'// element-ui lang
import elementRuLocale from 'element-ui/lib/locale/lang/ru-RU'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'
import esLocale from './es'
import ruLocale from './ru'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  es: {
    ...esLocale,
    ...elementEsLocale
  },
  ru: {
    ...ruLocale,
    ...elementRuLocale
  }
}

const i18n = new VueI18n({
  // set locale
  // options: en | zh | es | ru
  locale: Cookies.get('language') || 'ru',
  // set locale messages
  messages
})

export default i18n
