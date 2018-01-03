<template>
  <span style="position:relative;cursor:pointer;color: #888888;display:inline-block;" @click="toggleList" v-click-outside="closeList" >
    <i class="fa" :class="icon" aria-hidden="true" v-if="icon"></i>
    <slot name="title" v-if="$slots.title"></slot>
    <slot name="notification" v-if="$slots.notification"></slot>
    <i class="fa fa-caret-down" aria-hidden="true"></i>
    <div v-show="show" :class="className">
      <slot></slot>
    </div>
  </span>
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    icon: { type: String, default: '' },
    className: { type: String, default: '' }
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