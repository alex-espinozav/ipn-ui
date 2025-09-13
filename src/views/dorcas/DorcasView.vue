<script setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

// Foto grupal (asegúrese del path y mayúsculas)
import fotoDorcas from '@/assets/images/directorio/2025/DORCAS.png'

// Directiva (rellene con nombres reales)
const directiva = [
    { nombre: 'Pastora 1', cargo: 'Presidenta', iglesia: 'IPN — Sede Central' },
    { nombre: 'Pastora 2', cargo: 'Secretaria', iglesia: 'IPN — Región Metropolitana' },
    { nombre: 'Pastora 3', cargo: 'Tesorera', iglesia: 'IPN — Zona Sur' }
]
</script>

<template>
    <main class="page">
        <!-- HERO principal más luminoso -->
        <section class="hero" role="img" aria-label="Dorcas IPN Chile"
            :style="{ backgroundImage: `url(${fotoDorcas})` }">
            <div class="hero-overlay">
                <h1>DORCAS IPN CHILE</h1>
            </div>
        </section>

        <!-- Intro -->
        <section class="container section intro" data-aos="fade-up">
            <div class="intro-text">
                <h2>
                    <Icon icon="mdi:flower-tulip-outline" class="inline-icon" />
                    Ministerio de Dorcas
                </h2>
                <p>
                    El Ministerio de <strong>Dorcas</strong> sirve a la iglesia en oración, ayuda fraternal y
                    formación espiritual de mujeres en nuestras congregaciones. Aquí encontrará su visión,
                    actividades y directiva.
                </p>
            </div>
        </section>

        <!-- Foto grupal (tarjeta clara) -->
        <section class="container section" data-aos="fade-up">
            <div class="group-card">
                <img :src="fotoDorcas" alt="Directiva y hermanas Dorcas" loading="lazy" />
            </div>
        </section>

        <!-- Directiva (tarjetas claras) -->
        <section class="container section" data-aos="fade-up" id="directiva">
            <h3 class="sec-title">Directiva 2025</h3>
            <div class="dir-grid">
                <article v-for="p in directiva" :key="p.nombre" class="dir-item">
                    <div class="dir-avatar" aria-hidden="true">
                        <Icon icon="mdi:account" />
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

    <!-- Quickbar clara y flotante -->
    <nav class="quickbar" aria-label="Secciones Dorcas">
        <RouterLink to="/dorcas/actividades" class="qb-item">
            <Icon icon="mdi:calendar-text" class="qb-icon" />
            <span>Actividades</span>
        </RouterLink>
        <RouterLink to="/dorcas/directiva" class="qb-item">
            <Icon icon="mdi:account-group" class="qb-icon" />
            <span>Directiva</span>
        </RouterLink>
        <RouterLink to="/dorcas/noticias" class="qb-item">
            <Icon icon="mdi:newspaper-variant-outline" class="qb-icon" />
            <span>Noticias</span>
        </RouterLink>
        <RouterLink to="/dorcas/galeria" class="qb-item">
            <Icon icon="mdi:image-multiple" class="qb-icon" />
            <span>Galería</span>
        </RouterLink>
    </nav>
</template>

<style scoped>
/* ===== Pagina ===== */
.page {
    /* espacio final para que la quickbar no tape el footer */
    padding-bottom: 96px;
}

/* ===== HERO (más claro) ===== */
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
    /* overlay más suave para que se vea la foto */
    background: linear-gradient(to top,
            rgba(0, 0, 0, .25) 0%,
            rgba(0, 0, 0, .10) 55%,
            rgba(0, 0, 0, 0) 100%);
}

.hero-overlay h1 {
    margin: 0;
    font-size: clamp(1.7rem, 3.8vw, 2.6rem);
    letter-spacing: .5px;
    color: #fff;
    text-shadow: 0 2px 12px rgba(0, 0, 0, .35);
    /* legibilidad */
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

/* ===== Tarjeta foto grupal (clara) ===== */
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

/* ===== Directiva (tarjetas claras) ===== */
.dir-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
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
    padding: 1rem;
    border-radius: 14px;
    border: 1px solid rgba(0, 0, 0, .08);
    background: #ffffffcc;
    /* blanco con leve transparencia */
    box-shadow: 0 6px 18px rgba(0, 0, 0, .08);
    color: #0e1116;
}

.dir-avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, .06);
    font-size: 1.4rem;
    color: #1f2937;
}

.dir-name {
    margin: 0;
    font-size: 1.06rem;
    color: #111827;
}

.dir-role {
    margin: 0;
    opacity: .85;
}

.dir-church {
    margin: 0;
    opacity: .75;
}

/* ===== Quickbar clara y flotante ===== */
.quickbar {
    position: sticky;
    bottom: 16px;
    /* flotante sobre el footer */
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

/* Variante automática si el usuario está en dark mode del sistema */
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
