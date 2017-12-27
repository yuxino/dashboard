<template>
    <div class="topNavbar">
     <div class="container-fluid">
      <router-link to="/admin" class="topNavbar-band">
        DashBoard
      </router-link>
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
  name: 'TopNavBar'
}
</script>