<script setup>
import { Icon } from '@iconify/vue'
import data from '@/data/csp.json'
import Breadcrumb from '@/components/common/Breadcrumb.vue'  // ⬅️ importa la miga

const directorio = data.directorio
const tribunal = data.tribunal

// Cargamos las imágenes DIRECTORIO.png y TRIBUNAL.png
const directorioImg = new URL('@/assets/images/directorio/2025/DIRECTORIO.png', import.meta.url).href
const tribunalImg = new URL('@/assets/images/directorio/2025/TRIBUNAL.png', import.meta.url).href
</script>

<template>
    <section class="csp container">
        <!-- Miga de pan -->
        <Breadcrumb :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Quiénes Somos', to: '/quienes-somos' },
            { label: 'Cuerpo Superior de Pastores' }
        ]" />

        <!-- Título principal -->
        <header class="page-head" data-aos="fade-up">
            <h1>
                <Icon icon="mdi:account-group" class="i-head" /> Cuerpo Superior de Pastores
            </h1>
            <p class="sub">Directorio Nacional y Tribunal de Ética y Disciplina</p>
        </header>

        <!-- === DIRECTORIO NACIONAL === -->
        <section id="directorio" class="block" data-aos="fade-up">
            <div class="block-head">
                <h2>
                    <Icon icon="mdi:shield-crown" class="i-sec" /> Directorio Nacional
                </h2>
            </div>

            <figure class="photo-card" aria-label="Directorio Nacional">
                <img :src="directorioImg" alt="Directorio Nacional" class="banner-img" />
                <figcaption class="caption">Directorio Nacional — Imagen oficial</figcaption>
            </figure>

            <div class="table-wrap">
                <table class="ipn-table">
                    <thead>
                        <tr>
                            <th>ZONA</th>
                            <th>IGLESIA</th>
                            <th>PASTOR NOMBRE</th>
                            <th>CARGO PASTOR</th>
                            <th>PASTORA NOMBRE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="!directorio.length">
                            <td colspan="5" class="empty">
                                (Sin datos aún) Ingrese los integrantes del Directorio Nacional.
                            </td>
                        </tr>
                        <tr v-for="(r, i) in directorio" :key="'dir-' + i">
                            <td data-label="ZONA">{{ r.zona }}</td>
                            <td data-label="IGLESIA">{{ r.iglesia }}</td>
                            <td data-label="PASTOR NOMBRE">{{ r.pastor }}</td>
                            <td data-label="CARGO PASTOR">{{ r.cargo }}</td>
                            <td data-label="PASTORA NOMBRE">{{ r.pastora }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- === TRIBUNAL DE ÉTICA Y DISCIPLINA === -->
        <section id="tribunal" class="block" data-aos="fade-up">
            <div class="block-head">
                <h2>
                    <Icon icon="mdi:scale-balance" class="i-sec" /> Tribunal de Ética y Disciplina
                </h2>
            </div>

            <figure class="photo-card" aria-label="Tribunal de Ética y Disciplina">
                <img :src="tribunalImg" alt="Tribunal de Ética y Disciplina" class="banner-img" />
                <figcaption class="caption">Tribunal de Ética y Disciplina — Imagen oficial</figcaption>
            </figure>

            <div class="table-wrap">
                <table class="ipn-table">
                    <thead>
                        <tr>
                            <th>ZONA</th>
                            <th>IGLESIA</th>
                            <th>PASTOR NOMBRE</th>
                            <th>CARGO PASTOR</th>
                            <th>PASTORA NOMBRE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="!tribunal.length">
                            <td colspan="5" class="empty">
                                (Sin datos aún) Ingrese los integrantes del Tribunal de Ética y Disciplina.
                            </td>
                        </tr>
                        <tr v-for="(r, i) in tribunal" :key="'trib-' + i">
                            <td data-label="ZONA">{{ r.zona }}</td>
                            <td data-label="IGLESIA">{{ r.iglesia }}</td>
                            <td data-label="PASTOR NOMBRE">{{ r.pastor }}</td>
                            <td data-label="CARGO PASTOR">{{ r.cargo }}</td>
                            <td data-label="PASTORA NOMBRE">{{ r.pastora }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </section>
</template>

<style scoped>
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 28px 16px 64px;
}

/* Encabezado de página */
.page-head h1 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 2rem;
    font-weight: 800;
    color: #1e3d57;
    margin: 0;
}

.i-head {
    font-size: 2.1rem;
    color: #1e3d57;
}

.sub {
    color: #59728a;
    margin-top: 4px;
}

/* Bloques */
.block {
    margin-top: 28px;
}

.block-head h2 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.6rem;
    font-weight: 800;
    color: #1e3d57;
    margin: 0 0 12px;
}

.i-sec {
    font-size: 1.7rem;
    color: #1e3d57;
}

/* Imagen */
.photo-card {
    background: #0f2f46;
    border-radius: 12px;
    box-shadow: 0 8px 22px rgba(0, 0, 0, .18);
    overflow: hidden;
    margin-bottom: 14px;
}

.banner-img {
    display: block;
    width: 100%;
    max-height: 460px;
    object-fit: contain;
    background: #0f2f46;
}

.caption {
    text-align: center;
    font-size: .9rem;
    color: #cfe1f1;
    padding: 6px 8px 10px;
}

/* Tabla */
.table-wrap {
    overflow: auto;
    border-radius: 10px;
    border: 1px solid #e5e9ef;
    background: #fff;
}

.ipn-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
}

.ipn-table thead th {
    position: sticky;
    top: 0;
    background: #f4f7fb;
    color: #3a4e62;
    font-size: .92rem;
    font-weight: 800;
    letter-spacing: .02em;
    text-align: center;
    padding: 12px 10px;
    border-bottom: 1px solid #e5e9ef;
}

.ipn-table tbody td {
    padding: 12px 10px;
    color: #2b4a64;
    font-size: .98rem;
    text-align: center;
    border-bottom: 1px solid #eef2f6;
}

.ipn-table tbody tr:nth-child(odd) td {
    background: #fafcfe;
}

.ipn-table .empty {
    color: #6d8398;
    font-style: italic;
}

/* Móvil: tabla apilada */
@media (max-width: 800px) {
    .ipn-table thead {
        display: none;
    }

    .ipn-table,
    .ipn-table tbody,
    .ipn-table tr,
    .ipn-table td {
        display: block;
        width: 100%;
    }

    .ipn-table tr {
        border-bottom: 1px solid #eef2f6;
    }

    .ipn-table tbody td {
        text-align: left;
        padding: 10px 14px;
        position: relative;
    }

    .ipn-table tbody td::before {
        content: attr(data-label);
        display: block;
        font-weight: 700;
        color: #3a4e62;
        margin-bottom: 4px;
        font-size: .88rem;
    }
}

/* Navegación suave a secciones */
html {
    scroll-behavior: smooth;
}
</style>
