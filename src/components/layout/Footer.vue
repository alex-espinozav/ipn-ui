<template>
    <footer class="footer" role="contentinfo">
        <div class="inner">
            <!-- Marca -->
            <div class="brand">
                <img :src="Logo" alt="Iglesia Pentecostal Nazareth" class="footer-logo" />
                <span class="footer-title">IPN Chile</span>
            </div>

            <!-- Menú -->
            <nav class="footer-menu" aria-label="Enlaces de pie de página">
                <a href="https://www.facebook.com/profile.php?id=100057685701497" target="_blank" rel="noopener">
                    <Icon icon="mdi:facebook" width="22" /> Facebook
                </a>
                <a href="https://www.instagram.com/ipn_chile" target="_blank" rel="noopener">
                    <Icon icon="mdi:instagram" width="22" /> Instagram
                </a>
                <a href="mailto:contacto@ipnchile.cl">
                    <Icon icon="mdi:email" width="22" /> Correo
                </a>
                <RouterLink to="/intranet">
                    <Icon icon="mdi:lock" width="22" /> Intranet
                </RouterLink>
            </nav>
        </div>

        <div class="credits">
            <p>© {{ year }} Iglesia Pentecostal Nazareth Chile. Todos los derechos reservados.</p>
        </div>
    </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import Logo from '@/assets/images/logos/Logo-IPN.png' // 👈 import correcto

const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
    background: var(--color-primary);
    color: var(--ipn-white);
    padding: 1.5rem 1rem 2rem;
    font-size: .95rem;
}

.inner {
    max-width: var(--container-max);
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    align-items: center;
    grid-template-columns: 1fr;
}

@media (min-width: 768px) {
    .inner {
        grid-template-columns: auto 1fr;
    }
}

.brand {
    display: flex;
    align-items: center;
    gap: .75rem;
    justify-content: center;
}

.footer-logo {
    height: 48px;
    width: auto;
}

.footer-title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
}

.footer-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.9rem 1.25rem;
}

.footer-menu a {
    color: var(--ipn-white);
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    font-size: 1rem;
    border-radius: 10px;
    padding: .4rem .6rem;
}

.footer-menu a:hover {
    color: var(--ipn-soft);
    background: rgba(255, 255, 255, .08);
}

.credits {
    text-align: center;
    margin-top: 1rem;
    opacity: .9;
    font-size: .9rem;
}
</style>
