<template>
  <div class="dropdown" @click.stop="toggleList" v-click-outside="closeList" >
    <slot name="title"></slot>
    <div v-show="show">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    icon: { type: String, default: '' }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggleList () {
      this.show = !this.show
    },
    closeList () {
      this.show = false
    }
  }
}
</script>