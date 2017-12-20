<template>
  <div class="logo-container">
    <a class="logo-link" href="#">
      <img class="logo-img" src="/static/img/logo.png" alt="">
      {{title}}
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class SideBar extends Vue {
  title: string = '喵帕斯';
}
</script>

<style lang="scss">
  .logo-container {
    padding: 10px 5px;
    margin: 0 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    .logo-link {
      display: block;
    }

    .logo-img {
      $size: 40px;
      width: $size;
      height: $size;
    }
  }
</style>