<template>
  <transition name="fade" mode="out-in">
    <!--根据视图变化。每次做过渡动画 变的地方只有这里 !-->
    <keep-alive>
      <router-view class="content"></router-view>
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: 'Content'
}
</script>