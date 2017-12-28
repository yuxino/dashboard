<template>
    <div class="topNavbar">
     <div class="container-fluid">
      <router-link to="/admin" class="topNavbar-band">
        DashBoard
      </router-link>
      <!-- Mobile Menu -->
      <span class="mobile-menu" @click="toggleSideBar" 
                                v-click-outside="closeSideBar">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </span>
      <div class="topNavbar-nav">
        <router-link to="/admin" class="topNavbar-link">
          Account
        </router-link>
        <router-link to="/admin" class="topNavbar-link">
          Dropdown
        </router-link>
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