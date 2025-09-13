<template>
    <footer class="footer">
        <div class="inner">
            <!-- Logo + Nombre -->
            <div class="brand">
                <img src="@/assets/images/logos/Logo-IPN.png" alt="Iglesia Pentecostal Nazareth" class="footer-logo" />
                <span class="footer-title">IPN Chile</span>
            </div>

            <!-- Menú con Iconos -->
            <nav class="footer-menu">
                <a href="https://www.facebook.com/profile.php?id=100057685701497" target="_blank">
                    <Icon icon="mdi:facebook" width="22" /> Facebook
                </a>
                <a href="https://www.instagram.com/ipn_chile" target="_blank">
                    <Icon icon="mdi:instagram" width="22" /> Instagram
                </a>
                <a href="mailto:contacto@ipnchile.cl">
                    <Icon icon="mdi:email" width="22" /> Correo
                </a>
                <router-link to="/intranet">
                    <Icon icon="mdi:lock" width="22" /> Intranet
                </router-link>
            </nav>
        </div>

        <!-- Créditos -->
        <div class="credits">
            <p>
                © {{ year }} Iglesia Pentecostal Nazareth Chile. Todos los derechos reservados.
            </p>
        </div>
    </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue'
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
    background: var(--color-primary);
    color: var(--ipn-white);
    padding: 2rem 1rem;
    font-size: 0.9rem;
}

.inner {
    max-width: var(--container-max);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
}

.brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
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
    gap: 1.25rem;
    flex-wrap: wrap;
}

.footer-menu a {
    color: var(--ipn-white);
    text-decoration: none;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1rem;
}

.footer-menu a:hover {
    color: var(--ipn-soft);
}

.credits {
    text-align: center;
    margin-top: 1rem;
    opacity: 0.85;
    font-size: 0.85rem;
}
</style>
