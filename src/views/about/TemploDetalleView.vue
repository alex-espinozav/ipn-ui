<!-- src/views/about/TemploDetalleView.vue -->
<script setup>
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import data from '@/data/templos.json'

const route = useRoute()
const { region, slug } = route.params

// Buscar el templo en el JSON
const templo = data.templos.find(
    t =>
        t.region.toLowerCase() === region.toLowerCase() &&
        t.slug === slug
)
</script>

<template>
    <section class="page container" v-if="templo">
        <Breadcrumb :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Quiénes Somos', to: '/quienes-somos' },
            { label: 'Templos Matrices', to: '/templos-matrices' },
            { label: templo.nombre }
        ]" />

        <header class="head">
            <h1>
                <Icon icon="mdi:church" class="i" /> {{ templo.nombre }}
            </h1>
        </header>

        <div class="detalle">
            <ul class="info">
                <li>
                    <Icon icon="mdi:account-tie" /> Pastor: {{ templo.pastor || '—' }}
                </li>
                <li>
                    <Icon icon="mdi:map" /> Dirección: {{ templo.direccion }}
                </li>
                <li>
                    <Icon icon="mdi:map-marker" /> Comuna: {{ templo.comuna }}
                </li>
                <li>
                    <Icon icon="mdi:flag" /> Zona: {{ templo.zona }}
                </li>
            </ul>

            <div class="map">
                <iframe :src="`https://www.google.com/maps?q=${encodeURIComponent(templo.direccion)}&output=embed`"
                    width="100%" height="300" style="border:0;" allowfullscreen loading="lazy"></iframe>
            </div>
        </div>
    </section>

    <section v-else class="page container">
        <p>No se encontró el templo.</p>
    </section>
</template>

<style scoped>
.head h1 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 20px;
}

.i {
    font-size: 2.2rem;
    color: #1e3d57;
}

.detalle {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.info {
    list-style: none;
    padding: 0;
    margin: 0;
}

.info li {
    margin: 8px 0;
    font-size: 1.05rem;
    color: #2b4a64;
    display: flex;
    align-items: center;
    gap: 8px;
}

.map iframe {
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, .12);
}

@media (max-width: 800px) {
    .detalle {
        grid-template-columns: 1fr;
    }
}
</style>
