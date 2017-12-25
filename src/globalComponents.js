import Logo from 'UI/Logo'
import Card from 'UI/Card'
import Table from 'UI/Table.vue'

export default {
  install (Vue) {
    Vue.component('logo', Logo)
    Vue.component('card', Card)
    Vue.component('d-table', Table)
  }
}
