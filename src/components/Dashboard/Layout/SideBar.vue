<template>
  <aside class="sidebar">
    <div class="sidebar-container">
      <logo></logo>
      <!--Something in Mobile-->
      <!-- <dropdown class="mobile-dropdown" icon="fa-globe" listClass="mobile-list" titleClass="mobile-title">
        <span slot="title">5 notifications</span>
        <ul>
          <li v-for="i in 4">
            Notification {{ i }}
          </li>
          <li>
            Another notification
          </li>
        </ul>
      </dropdown> -->
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
          icon: 'nc-atom',
          to: 'icons',
          content: 'Icons'
        },
        {
          icon: 'nc-pin-3',
          to: 'maps',
          content: 'Maps'
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