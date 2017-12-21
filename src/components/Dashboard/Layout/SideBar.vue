<template>
  <aside>
    <div class="aside-container">
      <logo></logo>
      <!--Something in Mobile-->
      <!--Some link-->
      <ul class="nav">
        <router-link tag="li" to="overview">
          <a>
            <i class="nc-icon nc-chart-pie-35"></i>
            <span>Dashboard</span>
          </a>
        </router-link>
        <router-link tag="li" to="user">
          <a>
            <i class="nc-icon nc-circle-09"></i>
            <span>User Profile</span>
          </a>
        </router-link>
        <router-link tag="li" to="table">
          <a>
            <i class="nc-icon nc-notes"></i>
            <span>Table List</span>
          </a>
        </router-link>
        <router-link tag="li" to="typography">
          <a>
            <i class="nc-icon nc-paper-2"></i>
            <span>Typography</span>
          </a>
        </router-link>
        <router-link tag="li" to="notifications">
          <a>
            <i class="nc-icon nc-bell-55"></i>
            <span>Notifications</span>
          </a>
        </router-link>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class SideBar extends Vue {
}
</script>

<style lang="scss">
  .aside {
    position: relative;
    background: #272727;

    &::after {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: .33;
      background: url('/static/img/siderbar-bg.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }

  .aside-container {
    position: relative;
    z-index: 20;

    .nav {
      list-style: none;
      padding-left: 0;
      margin-top: 20px;

      li {
        i {
          font-size: 28px;
          margin-right: 10px;
          display: inline-block;
          vertical-align: middle;
        }
        a {
          margin: 5px 15px;
          padding: 12px 15px;
          display: block;
          border-radius: 4px;
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }
        span {
          display: inline-block;
          vertical-align: middle;
        }
        &:hover {
          a {
            background: rgba(255, 255, 255, 0.13);
          }
        }
      }
    }
  }

  .link-active {
    a {
      color: #FFFFFF;
      background: rgba(255, 255, 255, 0.23);
    }
  }

  @media only screen and (max-width: 768px){
    .aside {
      display: none;
    }
  }
</style>