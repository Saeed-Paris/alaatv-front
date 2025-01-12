import { auth, isLandingPage } from './middleware/middleware'
// import Login from '../pages/Auth/Login.vue'
import EntityCrudRoutes from './EntityCrudRoutes'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/Home.vue')
      },
      {
        path: 'map',
        name: 'MapPage',
        component: () => import('pages/User/Map.vue')
      },
      {
        path: 'shop',
        name: 'Shop',
        component: () => import('pages/User/Shop')
      },
      {
        path: 'c',
        name: 'User.Content',
        component: () => import('layouts/bareLayout.vue'),
        children: [
          { name: 'User.Content.Show', path: ':id', component: () => import('pages/User/Content/Show.vue') },
          { name: 'User.Content.Search', path: '', component: () => import('pages/User/Content/Search.vue') }
        ]
      },
      {
        path: 'product',
        name: 'User.Product',
        component: () => import('layouts/bareLayout.vue'),
        children: [
          { name: 'User.Product.Show', path: ':id', component: () => import('pages/User/Product/Show.vue') }
        ]
      },
      {
        path: 'set',
        name: 'User.Set',
        component: () => import('layouts/bareLayout.vue'),
        children: [
          { name: 'User.Set.Show', path: ':id', component: () => import('pages/User/Set/Show.vue') }
        ]
      },
      {
        path: '/landing/:landing_name',
        name: 'Landing',
        component: () => import('pages/Landing.vue'),
        meta: {
          middlewares: [isLandingPage]
        }
      },
      {
        path: 'component',
        name: 'component',
        component: () => import('src/pages/component'),
        breadcrumbs: { title: 'component' },
        meta: {
          middlewares: [auth]
        }
      },
      {
        path: 'user-info',
        name: 'user-info',
        component: () => import('pages/User/UserInfoForm'),
        meta: {
          middlewares: [auth]
        }
      },
      {
        path: 'admin',
        component: () => import('layouts/AdminLayout.vue'),
        meta: {
          middlewares: [auth]
        },
        children: [
          { name: 'Admin.Settings', path: 'settings', component: () => import('pages/Admin/Settings'), breadcrumbs: { title: 'تنظیمات' } },
          { name: 'Admin.StudyPlan', path: '/studyPlan', component: () => import('pages/Admin/StudyPlan/StudyPlan') },
          ...EntityCrudRoutes
        ]
      },
      {
        path: '/debug',
        name: 'debug',
        component: () => import('pages/debug'),
        meta: {
          middlewares: [auth]
        }
      }
    ]
    // meta: {
    //   middlewares: [auth]
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/Auth/Login.vue')
  },
  // are u mr Esmaeili ? '' : dont touch this route
  // {
  //   path: '/debug',
  //   name: 'debug',
  //   component: () => import('pages/debug'),
  //   meta: {
  //     middlewares: [auth]
  //   }
  // },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component:
  () => import('pages/Error404.vue')
  }
]
export default routes
