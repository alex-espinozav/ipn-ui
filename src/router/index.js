// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },

  // Quiénes somos (usa tu AboutView o QuienesSomosView)
  { path: '/quienes-somos', name: 'about', component: () => import('../views/AboutView.vue') },

  // Cuerpo Superior de Pastores
  { path: '/cuerpo-superior-de-pastores', name: 'csp', component: () => import('../views/about/CuerpoSuperiorPastoresView.vue') },

  // Listado de templos (tabs por región)
  { path: '/templos-matrices', name: 'templos', component: () => import('../views/about/TemplosMatricesView.vue') },

  // Detalle de un templo (card clickeable)
  {
    path: '/templos/:region/:slug',
    name: 'templo-detalle',
    component: () => import('../views/about/TemploDetalleView.vue')
  },

  // Bases doctrinales (listado)
  { path: '/bases-doctrinales', name: 'doctrina', component: () => import('../views/about/BasesDoctrinalesView.vue') },

  // Detalle de doctrina (punto clickeable)
  {
    path: '/bases-doctrinales/:slug',
    name: 'doctrina-detalle',
    component: () => import('../views/about/DoctrinaDetalleView.vue')
  },
  { path: '/dorcas', name: 'dorcas', component: () => import('../views/dorcas/DorcasView.vue') },

  // (opcional) subrutas para la quickbar
  { path: '/dorcas/actividades', component: () => import('../views/dorcas/ActividadesView.vue') },
  { path: '/dorcas/directiva', component: () => import('../views/dorcas/DirectivaView.vue') },
  { path: '/dorcas/noticias', component: () => import('../views/dorcas/NoticiasView.vue') },
  { path: '/dorcas/galeria', component: () => import('../views/dorcas/GaleriaView.vue') },


  { path: '/varones', name: 'varones', component: () => import('../views/varones/VaronesView.vue') },

  // (opcional) subrutas para la quickbar
  { path: '/varones/actividades', component: () => import('../views/varones/ActividadesView.vue') },
  { path: '/varones/directiva', component: () => import('../views/varones/DirectivaView.vue') },
  { path: '/varones/noticias', component: () => import('../views/varones/NoticiasView.vue') },
  { path: '/varones/galeria', component: () => import('../views/varones/GaleriaView.vue') },

  { path: '/jumix', name: 'jumix', component: () => import('../views/jumix/JumixView.vue') },

  // (opcional) subrutas para la quickbar
  { path: '/jumix/actividades', component: () => import('../views/jumix/ActividadesView.vue') },
  { path: '/jumix/directiva', component: () => import('../views/jumix/DirectivaView.vue') },
  { path: '/jumix/noticias', component: () => import('../views/jumix/NoticiasView.vue') },
  { path: '/jumix/galeria', component: () => import('../views/jumix/GaleriaView.vue') },

  { path: '/contacto', name: 'contacto', component: () => import('../views/contacto/ContactoView.vue') },
{ path: '/donaciones', name: 'donaciones', component: () => import('../views/donaciones/DonacionesView.vue') },
  // 404
  { path: '/:pathMatch(.*)*', name: 'notfound', component: () => import('../views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
