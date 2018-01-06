<template>
  <div class="dropdown" @click="toggleList($event)" v-click-outside="closeList" >
    <slot name="title"></slot>
    <slot v-if="show"></slot>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    icon: { type: String, default: '' },
    stop: { type: Boolean, default: false }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggleList (e) {
      if (this.stop) {
        e.stopPropagation()
        if (e.target.nodeName === 'LI') {
          return
        }
      }
      this.show = !this.show
    },
    closeList () {
      this.show = false
    }
  }
}
</script>