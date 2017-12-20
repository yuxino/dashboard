// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './components/App.vue';
import router from './router/index';
import GlobalComponents from './globalComponents';

Vue.config.productionTip = false;

// register GlobalDirectives
Vue.use(GlobalComponents);
// register GlobalComponents

const v = new Vue({
  el: '#app',
  components: { App },
  router,
  template: `<App/>`
});