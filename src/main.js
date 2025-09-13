import { createApp, nextTick } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(router)

// Montamos la app cuando el router esté listo
router.isReady().then(() => {
  app.mount('#app')

  // Inicializar AOS (solo configuración base)
  AOS.init({
    duration: 650,
    easing: 'ease-out',
    once: true,   // true = solo una vez
    offset: 120,  // más alto para evitar que dispare al cargar
    // ⚠️ no agregamos reglas CSS aquí, solo config
    disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  })
})

// Recalcular AOS al cambiar de ruta
router.afterEach(() => {
  nextTick(() => AOS.refreshHard())
})
