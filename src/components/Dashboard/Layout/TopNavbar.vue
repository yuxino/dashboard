<template>
    <div class="topNavbar">
     <div class="container-fluid">
      <router-link to="/admin" class="topNavbar-band">
        DashBoard
      </router-link>
      <div class="tools">
        <router-link to="/admin" class="topNavbar-link">
          <i class="fa fa-vine" aria-hidden="true"></i>
        </router-link>
        <dropdown>
          <template slot="title">
            <span class="notification">5</span>
            <i class="fa fa-bell-o" aria-hidden="true"></i>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </template>
          <ul class="topNavbar-dropdown">
            <li :key="i" v-for="i in 4">
              Notification {{ i }}
            </li>
            <li>
              Another notification
            </li>
          </ul>
        </dropdown>
      </div>
      <!-- Mobile Menu -->
      <span class="mobile-menu" @click="toggleSideBar" 
                                v-click-outside="closeSideBar">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </span>
      <div class="topNavbar-nav">
        <router-link to="/admin" class="topNavbar-link">
          Account
        </router-link>
        <dropdown class="topNavbar-link">
          <template slot="title">
            <span>Dropdown</span>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </template>
          <ul class="topNavbar-dropdown">
            <li>Action</li>
            <li>Another Action</li>
            <li>Something</li>
            <li>Some Action</li>
            <li class="divider"></li>
            <li>Separated link</li>
          </ul>
        </dropdown>
        <router-link to="/admin" class="topNavbar-link">
          Log out
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNavBar',
  props: { display: { type: Boolean } },
  methods: {
    toggleSideBar () {
      this.$emit('click', !this.display)
    },
    closeSideBar () {
      this.$emit('click', false)
    }
  }
}
</script>