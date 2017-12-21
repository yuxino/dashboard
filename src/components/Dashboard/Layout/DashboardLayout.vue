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

  a {
    color: #1DC7EA;
    text-decoration: none;
    &:hover, &:focus {
      color: #42d0ed;
    }
  }

  .info {
    color: #87CB16;
  }

  .warn {
    color: #FF9500;
  }

  .error {
    color: #FF4A55;
  }

  .primary {
    color: #1D62F0;
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
    background: rgba(203, 203, 210, 0.15);
    overflow: auto;
  }
</style>
