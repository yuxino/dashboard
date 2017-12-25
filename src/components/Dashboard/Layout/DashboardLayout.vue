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

<script>
import SideBar from './SideBar'
import TopNavBar from './TopNavbar'
import DashboardContent from './Content'
import DashboardContentFooter from './ContentFooter'

export default {
  name: 'dashboard',
  components: { SideBar, TopNavBar, DashboardContent, DashboardContentFooter }
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

  @for $i from 1 to 6 {
    h#{$i} {
      font-weight: 300;
    }
  }

  h1 {
    font-size: 52px;
  }

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-size: 22px;
  }

  h5 {
    font-size: 16px;
  }

  h6 {
    font-size: 12px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }

  blockquote {
    border-left: 2px solid #3f8dab;
    padding-left: 15px;
    margin: 0;
    line-height: 1.5;
  }

  small {
    font-size: 60%;
    color: #9A9A9A;
    font-weight: 300;
    line-height: 1.5;
  }

  a {
    color: #1DC7EA;
    text-decoration: none;
    &:hover, &:focus {
      color: #42d0ed;
    }
  }

  .info {
    color: #87CB16 !important;
  }

  .warn {
    color: #FF9500 !important;
  }

  .error {
    color: #FF4A55 !important;
  }

  .primary {
    color: #1D62F0 !important;
  }

  .muted {
    color: #868e96 !important;
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
