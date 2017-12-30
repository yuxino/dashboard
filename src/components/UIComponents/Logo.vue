<template>
  <router-link class="logo-link" to="/admin">
    <img class="logo-img" src="static/img/logo.png" alt="">
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