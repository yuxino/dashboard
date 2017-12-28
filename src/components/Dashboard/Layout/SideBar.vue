<template>
  <aside class="sidebar" :class="{show : display}">
    <div class="sidebar-container">
      <logo></logo>
      <!--Something in Mobile-->
      <ul class="nav">
        <side-bar-link v-for="link of linkList"
                       :key="link.to"
                       :icon="link.icon" 
                       :to="link.to">
          {{ link.content }}
        </side-bar-link>
      </ul>
    </div>
  </aside>
</template>

<script>
import SideBarLink from './SideBarLink'

export default {
  name: 'SideBar',
  components: { SideBarLink },
  props: { display: { type: Boolean } },
  data () {
    return {
      linkList: [
        {
          icon: 'nc-chart-pie-35',
          to: 'overview',
          content: 'Dashboard'
        },
        {
          icon: 'nc-circle-09',
          to: 'user',
          content: 'User Profile'
        },
        {
          icon: 'nc-notes',
          to: 'table',
          content: 'Table List'
        },
        {
          icon: 'nc-paper-2',
          to: 'typography',
          content: 'Typography'
        },
        {
          icon: 'nc-pin-3',
          to: 'maps',
          content: 'Maps'
        },
        {
          icon: 'nc-atom',
          to: 'icons',
          content: 'Icons'
        },
        {
          icon: 'nc-bell-55',
          to: 'notifications',
          content: 'Notifications'
        }
      ]
    }
  }
}
</script>