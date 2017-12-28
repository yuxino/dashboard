<template>
  <div id="App">
    <side-bar :display="display"></side-bar>
    <div class="panel">
      <top-nav-bar :display="display" @click="sideBarDisplay"></top-nav-bar>
      <dashboard-content></dashboard-content>
      <dashboard-content-footer></dashboard-content-footer>
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar'
import TopNavBar from './TopNavbar'
import DashboardContent from './Content'
import DashboardContentFooter from './ContentFooter'

export default {
  name: 'dashboard',
  components: { SideBar, TopNavBar, DashboardContent, DashboardContentFooter },
  data () {
    return {
      display: false
    }
  },
  methods: {
    sideBarDisplay (status) {
      this.display = status
    }
  }
}
</script>