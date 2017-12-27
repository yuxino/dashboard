import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from 'Layout/DashboardLayout'
import Overview from 'Views/Overview'
import UserProfile from 'Views/UserProfile'
import Icons from 'Views/Icons'
import Maps from 'Views/Maps'
import Table from 'Views/Table'
import Typography from 'Views/Typography'
import Notifications from 'Views/Notifications'
import NotFoundPage from '@/components/GeneralViews/NotFoundPage'

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
        name: 'UserProfile',
        component: UserProfile
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
  routes,
  linkActiveClass: 'link-active'
})
