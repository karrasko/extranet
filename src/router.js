import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/pages',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: 'Lock',
          path: 'lock',
          component: () => import('@/views/pages/Lock')
        },
        {
          name: 'Login',
          path: 'login',
          component: () => import('@/views/pages/Login')
        },
        {
          name: 'Pricing',
          path: 'pricing',
          component: () => import('@/views/pages/Pricing')
        },
        {
          name: 'Register',
          path: 'register',
          component: () => import('@/views/pages/Register')
        }
      ]
    },
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard')
        },
        // Pages
        {
          name: 'RTL',
          path: 'pages/rtl',
          component: () => import('@/views/dashboard/pages/Rtl')
        },
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile')
        },
        {
          name: 'Timeline',
          path: 'pages/timeline',
          component: () => import('@/views/dashboard/pages/Timeline')
        },
        // Components
        {
          name: 'Buttons',
          path: 'components/buttons',
          component: () => import('@/views/dashboard/component/Buttons')
        },
        {
          name: 'Grid System',
          path: 'components/grid-system',
          component: () => import('@/views/dashboard/component/Grid')
        },
        {
          name: 'Tabs',
          path: 'components/tabs',
          component: () => import('@/views/dashboard/component/Tabs')
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications')
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons')
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography')
        },
        // Forms
        {
          name: 'Regular Forms',
          path: 'forms/regular',
          component: () => import('@/views/dashboard/forms/RegularForms')
        },
        {
          name: 'Extended Forms',
          path: 'forms/extended',
          component: () => import('@/views/dashboard/forms/ExtendedForms')
        },
        {
          name: 'Validation Forms',
          path: 'forms/validation',
          component: () => import('@/views/dashboard/forms/ValidationForms')
        },
        {
          name: 'Wizard',
          path: 'forms/wizard',
          component: () => import('@/views/dashboard/forms/Wizard')
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables')
        },
        {
          name: 'Extended Tables',
          path: 'tables/extended-tables',
          component: () => import('@/views/dashboard/tables/ExtendedTables')
        },
        {
          name: 'Data Tabels',
          path: 'tables/data-tables',
          component: () => import('@/views/dashboard/tables/DataTables')
        },
        // Maps
        // Root level
        {
          name: 'Widgets',
          path: 'widgets',
          component: () => import('@/views/dashboard/Widgets')
        },
        {
          name: 'ListarArticulos',
          path: 'ListarArticulos',
          component: () => import('@/views/ListarArticulos/ListarArticulos')
        },
        {
          name: 'ListarEntradas',
          path: 'ListarEntradasProveedor',
          component: () => import('@/views/EntradasProveedor/ListarEntradasProveedor')
        },
        // Stock
       {
          name: 'Totales',
          path: 'Stock/Totales',
          component: () => import('@/views/dashboard/Stock/Totales')
        },
       {
          name: 'Componente',
          path: 'Stock/Componente',
          component: () => import('@/views/dashboard/Stock/Componente')
        },
       {
          name: 'ProductoTerminado',
          path: 'Stock/ProductoTerminado',
          component: () => import('@/views/dashboard/Stock/ProductoTerminado')
        },
       {
          name: 'ProductoTerminadoDeposito',
          path: 'Stock/ProductoTerminadoDeposito',
          component: () => import('@/views/dashboard/Stock/ProductoTerminadoDeposito')
        },
       {
          name: 'BulkPerfumeria',
          path: 'Stock/BulkPerfumeria',
          component: () => import('@/views/dashboard/Stock/BulkPerfumeria')
        },
       {
          name: 'BulkCosmetica',
          path: 'Stock/BulkCosmetica',
          component: () => import('@/views/dashboard/Stock/BulkCosmetica')
        },
       {
          name: 'Perfumes',
          path: 'Stock/Perfumes',
          component: () => import('@/views/dashboard/Stock/Perfumes')
        },
       {
          name: 'StockRechazados',
          path: 'Stock/StockRechazados',
          component: () => import('@/views/dashboard/Stock/StockRechazados')
        },
        {
          name: 'TotalesB',
          path: 'Stock/TotalesB',
          component: () => import('@/views/dashboard/Stock/TotalesB')
        },
            // Movimientos
       {
        name: 'Movimientos',
        path: 'Movimientos/ListarArticulos',
        component: () => import('@/views/dashboard/Movimientos/ListarArticulos')
       },
       {
          name: 'Movimientos',
          path: 'Movimientos/Movimientos',
          component: () => import('@/views/dashboard/Movimientos/Movimientos')
        },
       // Ordenes
       {
        name: 'Ordenes',
        path: 'Ordenes/ordenes',
        component: () => import('@/views/dashboard/Ordenes/ordenes')
       },
       {
        name: 'Ordenes',
        path: 'Ordenes/ordenesdos',
        component: () => import('@/views/dashboard/Movimientos/Movimientos')
       },
      //   // StockBulk
      //  {
      //   name: 'TotalesB',
      //   path: 'StockBulk/TotalesB',
      //   component: () => import('@/views/dashboard/StockBulk/TotalesB')
      //   },
      //   {
      //     name: 'BulkPerfumeriaB',
      //     path: 'StockBulk/BulkPerfumeriaB',
      //     component: () => import('@/views/dashboard/StockBulk/BulkPerfumeriaB')
      //   },
      //   {
      //     name: 'BulkCosmeticaB',
      //     path: 'StockBulk/BulkCosmeticaB',
      //     component: () => import('@/views/dashboard/StockBulk/BulkCosmeticaB')
      //   },
      //   {
      //     name: 'PerfumesB',
      //     path: 'StockBulk/PerfumesB',
      //     component: () => import('@/views/dashboard/StockBulk/PerfumesB')
      //   },
       /*  {
          name: 'Login',
          path: 'login',
          component: () => import('@/views/pages/Login')
        },
        {
          name: 'Pricing',
          path: 'pricing',
          component: () => import('@/views/pages/Pricing')
        },
        {
          name: 'Register',
          path: 'register',
          component: () => import('@/views/pages/Register')
          }, */

           // Dashboard
        {
          name: 'Planing',
          path: 'Planing',
          component: () => import('@/views/dashboard/Planing')
        },
        {
          name: 'Charts',
          path: 'charts',
          component: () => import('@/views/dashboard/Charts')
        },
        {
          name: 'Calendar',
          path: 'calendar',
          component: () => import('@/views/dashboard/Calendar')
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: '404 Error',
          path: '',
          component: () => import('@/views/pages/Error')
        }
      ]
    }
  ]
})
