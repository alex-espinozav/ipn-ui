<script setup>
import DirectorioCarousel from '@/components/about/DirectorioCarousel.vue'
import { Icon } from '@iconify/vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue' // ← importa tu breadcrumb
</script>

<template>
    <!-- Banner / Carrusel del Directorio (full width) -->
    <DirectorioCarousel />

    <!-- Sección Quiénes Somos -->
    <section class="about-section container">
        <!-- Miga de pan -->
        <Breadcrumb :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Quiénes Somos' }
        ]" />

        <div class="about-text" data-aos="fade-up">
            <h2>
                <Icon icon="mdi:church" class="icon-title" />
                QUIÉNES SOMOS
            </h2>
            <p>
                <Icon icon="mdi:cross" class="icon-inline" />
                La <strong>Iglesia Pentecostal Nazareth</strong> nace con el propósito de proclamar el evangelio
                de Jesucristo en Chile y el mundo. Desde sus inicios ha buscado llevar el mensaje de salvación
                con fidelidad a la Palabra, levantando comunidades que adoran, sirven y crecen en la fe.
            </p>
            <p>
                <Icon icon="mdi:hand-heart" class="icon-inline" />
                Con el pasar de los años, la iglesia ha consolidado su presencia en distintas regiones, siempre
                guiada por el Espíritu Santo y con un fuerte compromiso hacia la enseñanza bíblica, la unidad
                fraterna y el servicio a la comunidad.
            </p>
        </div>

        <!-- Barra de accesos rápidos -->
        <nav class="quick-nav" role="navigation" aria-label="Secciones de Quiénes Somos">
            <RouterLink class="quick-item" to="/cuerpo-superior-de-pastores">
                <Icon icon="mdi:account-group" class="icon-quick" />
                <span>CUERPO SUPERIOR DE PASTORES</span>
            </RouterLink>
            <RouterLink class="quick-item" to="/templos-matrices">
                <Icon icon="mdi:home-city" class="icon-quick" />
                <span>TEMPLOS MATRICES</span>
            </RouterLink>
            <RouterLink class="quick-item" to="/bases-doctrinales">
                <Icon icon="mdi:book-open-variant" class="icon-quick" />
                <span>BASES DOCTRINALES</span>
            </RouterLink>
        </nav>

        <!-- Valores Fundamentales -->
        <section class="values" data-aos="fade-up">
            <h3 class="values-title">Nuestros Valores Fundamentales</h3>
            <div class="values-grid">
                <div class="value-card">
                    <Icon icon="mdi:hands-pray" class="value-icon" />
                    <h4>Adoración</h4>
                    <p>Vivimos para honrar a Dios con alabanzas y oración sincera.</p>
                </div>
                <div class="value-card">
                    <Icon icon="mdi:handshake" class="value-icon" />
                    <h4>Unidad</h4>
                    <p>Fortalecemos la comunión fraterna como cuerpo de Cristo.</p>
                </div>
                <div class="value-card">
                    <Icon icon="mdi:hand-heart" class="value-icon" />
                    <h4>Servicio</h4>
                    <p>Amamos y servimos a la comunidad siguiendo el ejemplo de Jesús.</p>
                </div>
                <div class="value-card">
                    <Icon icon="mdi:book-open-page-variant" class="value-icon" />
                    <h4>Enseñanza</h4>
                    <p>Formamos discípulos firmes en la Palabra de Dios.</p>
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>
/* ====== Sección Quiénes Somos ====== */
.about-section {
    max-width: 1100px;
    margin: 0 auto;
    padding: 28px 16px 56px;
}

.about-text {
    text-align: center;
}

.about-text h2 {
    color: #1e3d57 !important;
    font-size: 2.2rem;
    font-weight: 800;
    letter-spacing: .02em;
    margin: 0 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.about-text p {
    color: #2b4a64 !important;
    font-size: 1.08rem;
    line-height: 1.7;
    margin: 0 0 14px;
}

.icon-title {
    font-size: 2.3rem;
    color: #1e3d57;
}

.icon-inline {
    margin-right: 6px;
    color: #2b4a64;
    font-size: 1.2rem;
    vertical-align: middle;
}

/* ====== Barra de accesos rápidos ====== */
.quick-nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: #1d3e5a;
    border-radius: 8px;
    overflow: hidden;
    margin-top: 24px;
    box-shadow: 0 10px 24px rgba(0, 0, 0, .12);
}

.quick-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 18px 12px;
    color: #ffffff;
    text-decoration: none;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .02em;
    border-right: 1px solid rgba(255, 255, 255, .14);
    transition: background .2s ease, transform .15s ease;
}

.quick-item:last-child {
    border-right: none;
}

.quick-item:hover,
.quick-item:focus-visible {
    background: #254e74;
    outline: none;
}

.quick-item:active {
    transform: translateY(1px);
}

.icon-quick {
    font-size: 1.4rem;
}

/* ====== Valores Fundamentales ====== */
.values {
    margin-top: 48px;
    text-align: center;
    background: #eaf4fb;
    border-radius: 12px;
    padding: 40px 24px;
}

.values-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: #1e3d57;
    margin-bottom: 24px;
}

.values-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.value-card {
    background: #ffffff;
    border-radius: 12px;
    padding: 20px 16px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
    transition: transform .2s ease;
}

.value-card:hover {
    transform: translateY(-4px);
}

.value-icon {
    font-size: 2.4rem;
    color: #1d3e5a;
    margin-bottom: 10px;
}

.value-card h4 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #1e3d57;
    margin-bottom: 8px;
}

.value-card p {
    font-size: 0.95rem;
    color: #2b4a64;
    line-height: 1.5;
}

/* ====== Responsive ====== */
@media (max-width: 900px) {
    .quick-nav {
        grid-template-columns: 1fr;
    }

    .quick-item {
        border-right: none;
        border-bottom: 1px solid rgba(255, 255, 255, .14);
        padding: 16px 12px;
    }

    .quick-item:last-child {
        border-bottom: none;
    }

    .about-text h2 {
        font-size: 1.9rem;
    }

    .about-text p {
        font-size: 1.02rem;
    }

    .values-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .values-grid {
        grid-template-columns: 1fr;
    }
}
</style>
