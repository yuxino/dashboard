// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import globalDirectives from './globalDirectives'
import GlobalComponents from './globalComponents'
import '@/assets/sass/dashboard.scss'
Vue.config.productionTip = false

// register GlobalDirectives
Vue.use(globalDirectives)
// register GlobalComponents
Vue.use(GlobalComponents)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
