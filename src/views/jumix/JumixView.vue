<script setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

// ⚠️ Cambia la ruta si tu imagen está en otro lado
import fotoJumix from '@/assets/images/directorio/2025/JUMIX.png'

// Directiva (rellena con nombres reales cuando los tengas)
const directiva = [
    { nombre: 'Joven 1', cargo: 'Presidente/a', iglesia: 'IPN — Sede Central' },
    { nombre: 'Joven 2', cargo: 'Secretario/a', iglesia: 'IPN — Región Metropolitana' },
    { nombre: 'Joven 3', cargo: 'Tesorero/a', iglesia: 'IPN — Zona Sur' }
]
</script>

<template>
    <main class="page">
        <!-- HERO -->
        <section class="hero" role="img" aria-label="JUMIX — Juventud Mixta IPN Chile"
            :style="{ backgroundImage: `url(${fotoJumix})` }">
            <div class="hero-overlay">
                <h1>JUMIX · JUVENTUD MIXTA</h1>
            </div>
        </section>

        <!-- Intro -->
        <section class="container section intro" data-aos="fade-up">
            <div class="intro-text">
                <h2>
                    <Icon icon="mdi:account-heart-outline" class="inline-icon" />
                    Ministerio de Juventud Mixta
                </h2>
                <p>
                    <strong>JUMIX</strong> motiva a los jóvenes a vivir la fe con pasión: oración,
                    evangelismo, compañerismo y servicio. Aquí verás su visión, actividades, noticias
                    y la directiva vigente.
                </p>
            </div>
        </section>

        <!-- Foto grupal -->
        <section class="container section" data-aos="fade-up">
            <div class="group-card">
                <img :src="fotoJumix" alt="Juventud Mixta — IPN Chile" loading="lazy" />
            </div>
        </section>

        <!-- Directiva -->
        <section class="container section" data-aos="fade-up" id="directiva">
            <h3 class="sec-title">Directiva 2025</h3>
            <div class="dir-grid">
                <article v-for="p in directiva" :key="p.nombre" class="dir-item">
                    <div class="dir-avatar" aria-hidden="true">
                        <Icon icon="mdi:account-group" />
                    </div>
                    <div class="dir-body">
                        <h4 class="dir-name">{{ p.nombre }}</h4>
                        <p class="dir-role">{{ p.cargo }}</p>
                        <p class="dir-church">{{ p.iglesia }}</p>
                    </div>
                </article>
            </div>
        </section>
    </main>

    <!-- Quickbar -->
    <nav class="quickbar" aria-label="Secciones JUMIX">
        <RouterLink to="/jumix/actividades" class="qb-item">
            <Icon icon="mdi:calendar-star" class="qb-icon" />
            <span>Actividades</span>
        </RouterLink>
        <RouterLink to="/jumix/directiva" class="qb-item">
            <Icon icon="mdi:account-group" class="qb-icon" />
            <span>Directiva</span>
        </RouterLink>
        <RouterLink to="/jumix/noticias" class="qb-item">
            <Icon icon="mdi:newspaper-variant-outline" class="qb-icon" />
            <span>Noticias</span>
        </RouterLink>
        <RouterLink to="/jumix/galeria" class="qb-item">
            <Icon icon="mdi:image-multiple" class="qb-icon" />
            <span>Galería</span>
        </RouterLink>
    </nav>
</template>

<style scoped>
/* ===== Página ===== */
.page {
    padding-bottom: 96px;
}

/* ===== Hero ===== */
.hero {
    position: relative;
    min-height: 420px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    padding: 1rem;
    background: linear-gradient(to top,
            rgba(0, 0, 0, .25) 0%,
            rgba(0, 0, 0, .1) 55%,
            rgba(0, 0, 0, 0) 100%);
}

.hero-overlay h1 {
    margin: 0;
    color: #fff;
    font-size: clamp(1.7rem, 3.8vw, 2.6rem);
    letter-spacing: .5px;
    text-shadow: 0 2px 12px rgba(0, 0, 0, .35);
}

/* ===== Secciones ===== */
.section {
    padding: 2rem 0;
}

.intro .inline-icon {
    margin-right: .35rem;
    font-size: 1.25rem;
    vertical-align: -2px;
}

.intro-text {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

.sec-title {
    text-align: center;
    margin-bottom: 1rem;
}

/* ===== Foto grupal ===== */
.group-card {
    background: #fff;
    color: #0e1116;
    border: 1px solid rgba(0, 0, 0, .08);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 28px rgba(0, 0, 0, .12);
}

.group-card img {
    width: 100%;
    display: block;
    object-fit: cover;
}

/* ===== Directiva (con más contraste) ===== */
.dir-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 900px) {
    .dir-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .dir-grid {
        grid-template-columns: 1fr;
    }
}

.dir-item {
    display: grid;
    grid-template-columns: 56px 1fr;
    gap: .9rem;
    align-items: center;
    padding: 1.2rem;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, .06);
    background: linear-gradient(135deg, #fdfdfd, #f7faff);
    box-shadow: 0 6px 18px rgba(0, 0, 0, .08);
    color: #1f2937;
    transition: transform .2s ease, box-shadow .2s ease;
}

.dir-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, .12);
}

.dir-avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: #e0e7ff;
    font-size: 1.4rem;
    color: #4338ca;
}

.dir-name {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #111827;
}

.dir-role {
    margin: 0;
    font-size: .95rem;
    color: #374151;
}

.dir-church {
    margin: 0;
    font-size: .9rem;
    color: #4b5563;
}

/* ===== Quickbar ===== */
.quickbar {
    position: sticky;
    bottom: 16px;
    z-index: 50;
    margin-inline: auto;
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: .6rem;
    padding: .6rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, .92);
    color: #0f1b2d;
    border: 1px solid rgba(0, 0, 0, .08);
    backdrop-filter: blur(10px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, .18);
}

.qb-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    padding: .65rem .85rem;
    border-radius: 12px;
    text-decoration: none;
    color: inherit;
    background: rgba(0, 0, 0, .04);
    border: 1px solid rgba(0, 0, 0, .06);
    transition: transform .15s ease, background .15s ease, border-color .15s ease;
}

.qb-item:hover {
    transform: translateY(-2px);
    background: rgba(0, 0, 0, .07);
    border-color: rgba(0, 0, 0, .1);
}

.qb-icon {
    font-size: 1.05rem;
}

/* ===== Dark mode ===== */
@media (prefers-color-scheme: dark) {
    .group-card {
        background: #0f1115;
        color: #e8e8e8;
        border-color: rgba(255, 255, 255, .08);
    }

    .dir-item {
        background: rgba(255, 255, 255, .06);
        color: #e8e8e8;
        border-color: rgba(255, 255, 255, .1);
    }

    .dir-avatar {
        background: rgba(255, 255, 255, .08);
        color: #e8e8e8;
    }

    .quickbar {
        background: rgba(20, 26, 38, .92);
        color: #eaf0ff;
        border-color: rgba(255, 255, 255, .08);
        box-shadow: 0 16px 44px rgba(0, 0, 0, .45);
    }

    .qb-item {
        background: rgba(255, 255, 255, .06);
        border-color: rgba(255, 255, 255, .08);
    }

    .qb-item:hover {
        background: rgba(255, 255, 255, .1);
    }
}
</style>
