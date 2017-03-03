// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import { Swipe, SwipeItem, Loadmore } from 'mint-ui'
import App from './App'
import router from './router'
import 'vue-material/dist/vue-material.css'
import 'mint-ui/lib/style.css'
import './assets/js/lan-packs.js'

Vue.config.productionTip = false

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Loadmore.name, Loadmore)

Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
  primary: 'white',
  accent: 'red',
  warn: 'red',
  background: 'white'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
