import Vue from 'vue';
import Logo from 'UI/Logo.vue';
import Card from 'UI/Card.vue';

export default {
  install (v: typeof Vue) {
    v.component('logo', Logo);
    v.component('card', Card);
  }
};