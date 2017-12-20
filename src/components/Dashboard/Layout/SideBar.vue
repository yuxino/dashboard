<template>
  <aside>
    <logo></logo>
    <ul>
      <router-link tag="li" to="overview">
        <a>DASHBOARD</a>
      </router-link>
      <router-link tag="li" to="user">
        <a>USER PROFILE</a>
      </router-link>
      <router-link tag="li" to="table">
        <a>TABLE LIST</a>
      </router-link>
      <router-link tag="li" to="typography">
        <a>Typography</a>
      </router-link>
      <router-link tag="li" to="notifications">
        <a>Notifications</a>
      </router-link>
    </ul>
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
  .link-active {
    a {
      color: palegreen;
    }
  }
</style>