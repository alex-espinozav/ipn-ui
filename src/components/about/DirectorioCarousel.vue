<!-- src/components/about/DirectorioCarousel.vue -->
<script setup>
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const files = import.meta.glob('@/assets/images/directorio/2025/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default'
})

// normaliza nombre (sin extensión, mayúsculas, sin tildes/espacios/guiones)
function norm(s) {
    return (s || '')
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .toUpperCase()
        .replace(/\.[^.]+$/, '')
        .replace(/[\s_\-]+/g, '')
}

const allowedOrder = ['DIRECTORIO', 'TRIBUNAL']
const titleMap = {
    'DIRECTORIO': 'Directorio Nacional',
    'TRIBUNAL': 'Tribunal de Ética y Diciplina'
}

const slides = computed(() => {
    const all = Object.entries(files).map(([path, url]) => {
        const base = path.split('/').pop() || ''
        const key = norm(base)
        return { src: url, base, key }
    })

    const filtered = all.filter(it => allowedOrder.includes(it.key))
    filtered.sort((a, b) => allowedOrder.indexOf(a.key) - allowedOrder.indexOf(b.key))

    return filtered.map(it => ({
        src: it.src,
        title: titleMap[it.key] ?? it.base.replace(/\.[^.]+$/, '')
    }))
})
</script>

<template>
    <section class="hero-carousel">
        <Swiper v-if="slides.length" class="hero-swiper" :modules="[Pagination, Autoplay, A11y]" :slides-per-view="1"
            :space-between="0" :loop="true"
            :autoplay="{ delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: true }" :speed="1200"
            :pagination="{ clickable: true }" :auto-height="true" a11y>
            <SwiperSlide v-for="(s, i) in slides" :key="i" class="hero-slide">
                <div class="img-wrap">
                    <img :src="s.src" :alt="s.title" class="hero-img" loading="lazy" />
                </div>
                <div class="hero-caption">{{ s.title }}</div>
            </SwiperSlide>
        </Swiper>

        <div v-else class="empty-state">
            <p>No se encontraron imágenes “DIRECTORIO” o “TRIBUNAL” en <code>/assets/images/directorio/2025/</code>.</p>
        </div>
    </section>
</template>

<style scoped>
.hero-carousel {
    position: relative;
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background: #0f2f46;
    overflow: hidden;
}

.img-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    max-height: 420px;
}

.hero-img {
    width: 100%;
    height: auto;
    max-height: 420px;
    object-fit: contain;
}

.hero-caption {
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    color: #e8ecf1;
    margin: 6px 0 14px;
}

/* transición suave */
:deep(.swiper-wrapper) {
    transition-timing-function: ease-in-out !important;
}

/* paginación */
:deep(.swiper-pagination) {
    position: static;
    margin: 6px 0 14px;
}

:deep(.swiper-pagination-bullet) {
    background: #aab7c7;
    opacity: 0.9;
}

:deep(.swiper-pagination-bullet-active) {
    background: #fff;
}

@media (max-width: 768px) {
    .img-wrap {
        max-height: 280px;
    }

    .hero-img {
        max-height: 280px;
    }
}

/* Fallback */
.empty-state {
    max-width: 1100px;
    margin: 0 auto;
    padding: 24px 16px;
    color: #e8ecf1;
}

.empty-state code {
    color: #c9d2df;
}
</style>
