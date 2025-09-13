<template>
    <header class="navbar">
        <div class="inner">
            <!-- Logo -->
            <a href="/" class="logo">
                <img :src="LogoIPN" alt="Iglesia Pentecostal Nazareth" />
            </a>

            <!-- Menú -->
            <nav class="menu" aria-label="Navegación principal">
                <router-link to="/" class="link">Inicio</router-link>
                <router-link to="/quienes-somos" class="link">Quienes somos</router-link>
                <router-link to="/dorcas" class="link">Dorcas</router-link>
                <router-link to="/varones" class="link">Varones</router-link>
                <router-link to="/jumix" class="link">JUMIX</router-link>
                <router-link to="/contacto" class="link">Contacto</router-link>
                <router-link to="/donaciones" class="link">Donaciones</router-link>
                <router-link to="/intranet" class="link">Intranet</router-link>

                <!-- Botón de tema SOLO móviles -->
                <button class="theme-toggle" @click="toggleDark()" :aria-pressed="isDark" aria-label="Cambiar tema"
                    title="Cambiar tema">
                    <span v-if="isDark">🌙 Oscuro</span>
                    <span v-else>☀️ Claro</span>
                </button>
            </nav>
        </div>
    </header>
</template>

<script setup>
import LogoIPN from '@/assets/images/logos/Logo-IPN-VV.png'
import { isDark, toggleDark } from '@/composables/useTheme'
</script>

<style scoped>
.navbar {
    width: 100%;
    background: var(--color-primary);
    border-bottom: var(--nav-border-width) solid var(--color-accent);
    min-height: var(--nav-height);
    padding: 0 var(--nav-padding-x);

    display: flex;
    align-items: center;
}

.inner {
    /* ✅ Ocupa todo el ancho, sin límite */
    width: 100%;
    margin: 0;
    padding: 0 2rem;
    /* Espaciado lateral (ajústalo a gusto) */
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.logo img {
    height: var(--nav-logo-height);
    width: auto;
    display: block;
}

.menu {
    display: flex;
    align-items: center;
    gap: var(--nav-gap);
}

.link {
    color: var(--ipn-white);
    font-weight: 500;
    text-decoration: none;
    font-size: 1.1rem;
    text-transform: uppercase;
}

.link:hover {
    color: var(--ipn-soft);
}

.theme-toggle {
    display: none;
    align-items: center;
    gap: 0.5rem;
}

@media (max-width: 768px) {
    .theme-toggle {
        display: inline-flex;
    }

    .menu {
        gap: calc(var(--nav-gap) * 0.75);
    }
}
</style>
