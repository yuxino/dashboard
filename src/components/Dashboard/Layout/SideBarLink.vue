<template>
  <router-link tag="li" :to="to">
    <a>
      <i class="nc-icon" :class="icon" v-if="icon"></i>
      <span>
        <slot></slot>
      </span>
    </a>
  </router-link>
</template>

<script>
export default {
  name: 'SideBarLink',
  props: {
    to: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
