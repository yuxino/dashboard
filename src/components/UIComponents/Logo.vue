<template>
  <router-link class="logo-link" to="/admin">
    <img class="logo-img" src="/static/img/logo.png" alt="">
    {{title}}
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
  data () {
    return {
      title: '喵帕斯'
    }
  }
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
    &:hover,&:focus {
      color: white;
    }
    
    .logo-img {
      width: $size;
      height: $size;
      margin-right: 10px;
      vertical-align: middle;
      image-rendering: -webkit-optimize-contrast;
    }
  }
</style>