import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from 'Layout/DashboardLayout.vue'
import Overview from 'Views/Overview.vue'
import User from 'Views/User.vue'
import Icons from 'Views/Icons.vue'
import Maps from 'Views/Maps.vue'
import Table from 'Views/Table.vue'
import Typography from 'Views/Typography.vue'
import Notifications from 'Views/Notifications.vue'
import NotFoundPage from '@/components/GeneralViews/NotFoundPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DashBoard,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashBoard,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: User
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'table',
        name: 'Table',
        component: Table
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: NotFoundPage
  }
]

// custom u routes in here
export default new VueRouter({
  routes
})
