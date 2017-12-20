import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';
import DashBoard from 'Layout/DashboardLayout.vue';
import Content from 'Layout/Content.vue';
import Overview from 'Views/Overview.vue';
import User from 'Views/User.vue';
import Icons from 'Views/Icons.vue';
import Table from 'Views/Table.vue';
import Typography from 'Views/Typography.vue';
import Notifications from 'Views/Notifications.vue';
import NotFoundPage from '@/components/GeneralViews/NotFoundPage.vue';

Vue.use(VueRouter);

// custom u routes in here
export const createRoutes: () => RouteConfig[] = () => [
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
];

export default new VueRouter({ mode: 'history', routes: createRoutes(), linkActiveClass: 'link-active' });