// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import GlobalComponents from './globalComponents'

Vue.config.productionTip = false

// register GlobalDirectives
Vue.use(GlobalComponents)
// register GlobalComponents

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
