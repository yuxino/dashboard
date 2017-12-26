<template>
    <div class="navbar">
     <div class="container-fluid">
      <router-link to="/admin" class="navbar-band">
        DashBoard
      </router-link>
      <div class="navbar-nav">
        <router-link to="/admin" class="navbar-link">
          Account
        </router-link>
        <router-link to="/admin" class="navbar-link">
          Dropdown
        </router-link>
        <router-link to="/admin" class="navbar-link">
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

<style lang="scss">
  .navbar {
    border: 0;
    font-size: 16px;
    border-radius: 0;
    height: 50px;
    padding: 5px 15px;
    line-height: 40px;
    background-color: rgba(255, 255, 255, 0.96);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    .navbar-band {
      font-size: 20px;
      color: #888888;
      &:hover {
        color: #5e5e5e;
      }
    }

    .navbar-nav {
      float: right;
    }

    .navbar-link {
      color: #888888;
      margin-right: 20px;
      &:hover, &:focus {
        color: #42d0ed;
      }
    }
  }

  @media only screen and (max-width: 768px){
    .navbar-nav {
      display: none;
    }
  }
</style>
