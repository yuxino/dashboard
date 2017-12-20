<template>
  <router-view />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  // u can set event in here
  private event (): void {
    console.log('[ info ] Emmmmmm.');
  }
}
</script>