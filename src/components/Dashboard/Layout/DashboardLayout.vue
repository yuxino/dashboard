<template>
  <div id="App">
    <side-bar class="aside"></side-bar>
    <div class="panel">
      <top-nav-bar></top-nav-bar>
      <dashboard-content></dashboard-content>
      <dashboard-content-footer></dashboard-content-footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SideBar from './SideBar.vue';
import TopNavBar from './TopNavbar.vue';
import DashboardContent from './Content.vue';
import DashboardContentFooter from './ContentFooter.vue';

@Component({
  components: { SideBar, TopNavBar, DashboardContent, DashboardContentFooter }
})
export default class DashboardLayout extends Vue {
  
}
</script>

<style lang="scss">
  html,body {
    margin: 0;
    height: 100vh;
    font-family: "Roboto","Helvetica Neue",Arial,sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  #App {
    display: flex;
    height: 100vh;
  }

  .aside {
    width: 260px;
  }

  .panel {
    flex: 1;
  }
</style>
