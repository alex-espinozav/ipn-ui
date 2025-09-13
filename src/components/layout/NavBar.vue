<template>
    <header class="navbar" role="banner">
        <div class="inner">
            <!-- Logo -->
            <RouterLink to="/" class="logo" aria-label="Ir al inicio">
                <img :src="LogoIPN" alt="Iglesia Pentecostal Nazareth" />
            </RouterLink>

            <!-- Botón hamburguesa (solo móviles) -->
            <button class="burger" :class="{ active: open }" @click="toggle()" :aria-expanded="open.toString()"
                aria-controls="primary-menu" aria-label="Abrir menú">
                <span class="bar" />
                <span class="bar" />
                <span class="bar" />
            </button>

            <!-- Menú desktop -->
            <nav class="menu-desktop" aria-label="Navegación principal">
                <RouterLink to="/" class="link">Inicio</RouterLink>
                <RouterLink to="/quienes-somos" class="link">Quienes somos</RouterLink>
                <RouterLink to="/dorcas" class="link">Dorcas</RouterLink>
                <RouterLink to="/varones" class="link">Varones</RouterLink>
                <RouterLink to="/jumix" class="link">JUMIX</RouterLink>
                <RouterLink to="/contacto" class="link">Contacto</RouterLink>
                <RouterLink to="/donaciones" class="link">Donaciones</RouterLink>
                <RouterLink to="/intranet" class="link">Intranet</RouterLink>
            </nav>
        </div>

        <!-- Menú móvil deslizante -->
        <transition name="slide">
            <nav v-if="open" id="primary-menu" class="menu-mobile" aria-label="Navegación principal móvil">
                <RouterLink to="/" class="mlink" @click="close()">Inicio</RouterLink>
                <RouterLink to="/quienes-somos" class="mlink" @click="close()">Quienes somos</RouterLink>
                <RouterLink to="/dorcas" class="mlink" @click="close()">Dorcas</RouterLink>
                <RouterLink to="/varones" class="mlink" @click="close()">Varones</RouterLink>
                <RouterLink to="/jumix" class="mlink" @click="close()">JUMIX</RouterLink>
                <RouterLink to="/contacto" class="mlink" @click="close()">Contacto</RouterLink>
                <RouterLink to="/donaciones" class="mlink" @click="close()">Donaciones</RouterLink>
                <RouterLink to="/intranet" class="mlink" @click="close()">Intranet</RouterLink>
            </nav>
        </transition>

        <!-- Backdrop para cerrar tocando fuera -->
        <div v-if="open" class="backdrop" @click="close()" />
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
import LogoIPN from '@/assets/images/logos/Logo-IPN.png' // ▲ usa el mismo logo del footer

const open = ref(false)
const toggle = () => (open.value = !open.value)
const close = () => (open.value = false)

// Bloquea el scroll del body cuando el menú está abierto
watchEffect(() => {
    document.body.style.overflow = open.value ? 'hidden' : ''
})

// Cierra con ESC
const onEsc = (e) => { if (e.key === 'Escape') close() }
onMounted(() => window.addEventListener('keydown', onEsc))
onBeforeUnmount(() => window.removeEventListener('keydown', onEsc))
</script>

<style scoped>
/* ====== Wrapper ====== */
.navbar {
    width: 100%;
    background: var(--color-primary);
    border-bottom: var(--nav-border-width) solid var(--color-accent);
    min-height: var(--nav-height);
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    z-index: 50;
}

.inner {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .75rem;
}

/* ====== Logo ====== */
.logo img {
    height: var(--nav-logo-height);
    width: auto;
    display: block;
}

/* ====== Botón hamburguesa (mobile first) ====== */
.burger {
    display: inline-flex;
    flex-direction: column;
    gap: 5px;
    background: transparent;
    border: 0;
    padding: .5rem;
    cursor: pointer;
}

.bar {
    width: 26px;
    height: 3px;
    background: var(--ipn-white);
    border-radius: 2px;
    transition: transform .2s ease, opacity .2s ease;
}

.burger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.burger.active .bar:nth-child(2) {
    opacity: 0;
}

.burger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

/* ====== Menú desktop ====== */
.menu-desktop {
    display: none;
    /* oculto en mobile */
    align-items: center;
    gap: var(--nav-gap);
}

.link {
    color: var(--ipn-white);
    font-weight: 500;
    text-decoration: none;
    font-size: 1.05rem;
    text-transform: uppercase;
}

.link:hover {
    color: var(--ipn-soft);
}

/* ====== Menú móvil ====== */
.menu-mobile {
    position: fixed;
    inset: var(--nav-height) 0 auto 0;
    background: var(--color-primary);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: .5rem;
    z-index: 60;
    box-shadow: 0 10px 30px rgba(0, 0, 0, .25);
}

.mlink {
    display: block;
    padding: .9rem 1rem;
    border-radius: 10px;
    color: var(--ipn-white);
    text-decoration: none;
    font-weight: 600;
    letter-spacing: .3px;
    background: transparent;
    border: 1px solid transparent;
}

.mlink:hover {
    background: rgba(255, 255, 255, .08);
    border-color: rgba(255, 255, 255, .15);
}

/* Backdrop */
.backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .4);
    z-index: 55;
}

/* ====== Transición ====== */
.slide-enter-from {
    transform: translateY(-12px);
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: all .18s ease;
}

.slide-leave-to {
    transform: translateY(-12px);
    opacity: 0;
}

/* ====== Breakpoints ====== */
@media (min-width: 992px) {
    .inner {
        padding: 0 2rem;
    }

    .burger {
        display: none;
    }

    .menu-desktop {
        display: flex;
    }

    .menu-mobile,
    .backdrop {
        display: none !important;
    }
}
</style>
