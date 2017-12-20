import Vue from 'vue';
import Logo from 'UI/Logo.vue';

export default {
  install (v: typeof Vue) {
    v.component('logo', Logo);
  }
};