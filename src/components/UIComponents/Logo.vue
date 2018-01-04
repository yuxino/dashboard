<template>
  <router-link class="logo-link" to="/admin">
    <div class="logo-wrapper">
      <img class="logo-img" src="static/img/vue.png" alt="">
    </div>
    {{title}}
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
  data () {
    return {
      title: 'DashBoard'
    }
  }
}
</script>