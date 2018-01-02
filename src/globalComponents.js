// Custom Components
import Logo from 'UI/Logo'
import Card from 'UI/Card'
import Table from 'UI/Table'
import InputGroup from 'UI/InputGroup'
import DropDown from 'UI/DropDown'
// Plugin
import Notifications from 'vue-notification'

export default {
  install (Vue) {
    Vue.component('logo', Logo)
    Vue.component('card', Card)
    Vue.component('d-table', Table)
    Vue.component('input-group', InputGroup)
    Vue.component('dropdown', DropDown)
    Vue.use(Notifications)
  }
}
