<template>
  <div>
    <NavBar />

    <main class="app-main" role="main">
      <router-view />
    </main>

    <Footer ref="footerRef" />

    <!-- Scroll-to-top -->
    <button v-if="showScroll" class="scroll-top" :style="{ bottom: dynamicBottom + 'px' }" @click="scrollToTop"
      aria-label="Volver arriba">
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
const overlap = ref(0)

function scrollToTop() {
  // Respeta accesibilidad (reduce motion)
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })
}

function handleScroll() {
  showScroll.value = window.scrollY > 300
  const f = footerRef.value?.$el ?? footerRef.value
  if (f) {
    const rect = f.getBoundingClientRect()
    const vh = window.innerHeight
    overlap.value = rect.top < vh ? Math.max(vh - rect.top, 0) : 0
  } else {
    overlap.value = 0
  }
}

const BASE_BOTTOM = 24
const SAFE_BOTTOM = Math.max(0, Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue('--safe-bottom') || '0'))
const dynamicBottom = computed(() => BASE_BOTTOM + SAFE_BOTTOM + (overlap.value > 0 ? overlap.value + 16 : 0))

onMounted(() => {
  // inicializa CSS var para safe area (iOS)
  const sb = (window.navigator.userAgent.includes('iPhone') || window.navigator.userAgent.includes('iPad'))
    ? (parseInt(getComputedStyle(document.documentElement).getPropertyValue('padding-bottom')) || 0)
    : 0
  document.documentElement.style.setProperty('--safe-bottom', getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-bottom)') || '0px')

  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>

<style scoped>
/* Main con padding-top para no quedar bajo el Nav sticky */
.app-main {
  padding-top: var(--nav-height);
  /* respeta la altura del NavBar */
  min-height: calc(100svh - var(--footer-height) - 2rem);
}

/* Botón flotante responsivo */
.scroll-top {
  position: fixed;
  right: 24px;
  width: 56px;
  height: 56px;
  border: 2px solid rgba(255, 255, 255, .55);
  border-radius: 50%;
  background: #234665;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  cursor: pointer;
  z-index: 9999;
  /* suficiente, sin exagerar */
  box-shadow: 0 10px 24px rgba(0, 0, 0, .32), 0 0 0 6px rgba(255, 255, 255, .06);
  transition: transform .2s ease, background .2s ease, box-shadow .2s ease, border-color .2s ease;
  /* evita que tape UI del SO en iOS */
  padding-bottom: env(safe-area-inset-bottom);
}

.scroll-icon {
  display: block;
}

.scroll-top:hover,
.scroll-top:focus-visible {
  background: #2f5f88;
  border-color: rgba(255, 255, 255, .75);
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, .36), 0 0 0 8px rgba(255, 255, 255, .08);
}

/* Accesibilidad */
.scroll-top:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

/* Mobile tweaks */
@media (max-width: 768px) {
  .scroll-top {
    right: 16px;
    width: 50px;
    height: 50px;
  }
}
</style>
