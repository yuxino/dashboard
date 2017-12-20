<template>
  <a class="logo-link" href="#">
    <img class="logo-img" src="/static/img/logo.png" alt="">
    {{title}}
  </a>
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
  $size: 40px;

  .logo-link {
    line-height: $size;
    color: white;
    display: block;
    text-decoration: none;
    padding: 10px 5px;
    margin: 0 20px;
    font-size: 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    
    .logo-img {
      width: $size;
      height: $size;
      margin-right: 10px;
      vertical-align: middle;
    }
  }
</style>