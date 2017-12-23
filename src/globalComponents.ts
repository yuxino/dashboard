import Vue from 'vue';
import Logo from 'UI/Logo.vue';
import Card from 'UI/Card.vue';
import Table from 'UI/Table.vue';

export default {
  install (v: typeof Vue) {
    v.component('logo', Logo);
    v.component('card', Card);
    v.component('d-table', Table);
  }
};