<template>
  <transition name="fade" mode="out-in">
    <!--根据视图变化。每次做过渡动画 变的地方只有这里 !-->
    <router-view class="content"></router-view>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Content extends Vue {
  
}
</script>

<style lang="scss">
  .content {
    padding: 30px 15px;
    min-height: calc(100% - 100px);
    overflow: auto;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>