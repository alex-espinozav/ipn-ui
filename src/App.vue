<template>
  <div>
    <NavBar />

    <main>
      <router-view />
    </main>

    <!-- Footer con ref para calcular solapamiento -->
    <Footer ref="footerRef" />

    <!-- Scroll-to-top: ahora con tamaño mayor y reposicionamiento dinámico -->
    <button
      v-if="showScroll"
      class="scroll-top"
      :style="{ bottom: dynamicBottom + 'px' }"
      @click="scrollToTop"
      aria-label="Volver arriba"
    >
      <Icon icon="mdi:arrow-up" width="26" height="26" :inline="false" class="scroll-icon" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Icon } from '@iconify/vue'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'

const showScroll = ref(false)
const footerRef = ref(null)
const overlap = ref(0) // px que el footer "sube" sobre el viewport

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  showScroll.value = window.scrollY > 300

  // Calcula cuánto solapa el footer el viewport
  const f = footerRef.value?.$el ?? footerRef.value // por si es SFC o root element
  if (f) {
    const rect = f.getBoundingClientRect()
    const vh = window.innerHeight
    // si el top del footer entra al viewport, medimos el solape
    overlap.value = rect.top < vh ? Math.max(vh - rect.top, 0) : 0
  } else {
    overlap.value = 0
  }
}

// separación base del botón al borde inferior
const BASE_BOTTOM = 24
// cuando el footer aparece, empujamos el botón hacia arriba
const dynamicBottom = computed(() => BASE_BOTTOM + (overlap.value > 0 ? overlap.value + 16 : 0))

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll, { passive: true })
  // calcular una vez al montar
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>

<style scoped>
/* Botón más grande, con alto contraste sobre el footer */
.scroll-top {
  position: fixed;
  right: 24px;
  width: 56px;
  height: 56px;
  border: 2px solid rgba(255,255,255,.55);
  border-radius: 50%;
  background: #234665;                 /* azul más claro para contraste */
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  cursor: pointer;
  z-index: 2147483647;                  /* por encima de todo */
  box-shadow:
    0 10px 24px rgba(0,0,0,.32),
    0 0 0 6px rgba(255,255,255,.06);    /* halo sutil para separarlo del fondo */
  transition: transform .2s ease, background .2s ease, box-shadow .2s ease, border-color .2s ease;
}

.scroll-icon { display: block; }

.scroll-top:hover,
.scroll-top:focus-visible {
  background: #2f5f88;
  border-color: rgba(255,255,255,.75);
  transform: translateY(-3px);
  box-shadow:
    0 14px 30px rgba(0,0,0,.36),
    0 0 0 8px rgba(255,255,255,.08);
}

/* accesibilidad */
.scroll-top:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

/* opcional: en móviles, un poco más chico y pegado */
@media (max-width: 768px) {
  .scroll-top {
    right: 16px;
    width: 50px;
    height: 50px;
  }
}
</style>
