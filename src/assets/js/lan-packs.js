import Vue from 'vue'
import VueI18n from 'vue-i18n'
// ready translated locales
var locales = {
  en: {
    message: {
      hello: 'hello world',
      more: 'Learn More'
    },
    login: {
      register: 'Sign up',
      login: 'Sign in'
    },
    nav: [
      {name: 'Home'},
      {name: 'Miners'},
      {name: 'Guide'},
      {name: 'About'},
      {name: 'FAQ'}
    ],
    subTitle: {
      miners: 'Miners',
      instructions: 'Instructions'
    }
  },
  // 中文
  cn: {
    message: {
      hello: '你好世界',
      more: '了解更多'
    },
    login: {
      register: '注册',
      login: '登录'
    },
    nav: [
      {name: '首页'},
      {name: '矿机'},
      {name: '配置说明'},
      {name: '关于'},
      {name: 'FAQ'}
    ],
    subTitle: {
      miners: '矿机',
      instructions: '配置说明'
    }
  }
}
// install plugin
Vue.use(VueI18n)
// set lang
Vue.config.lang = window.localStorage.getItem('lan') || 'cn'

// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

export { locales }
