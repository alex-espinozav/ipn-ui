<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import data from '@/data/templos.json'

// Tabs: id = valor EXACTO que viene en el JSON, label = cómo se muestra en UI
const tabs = [
    { id: 'Metropolitana', label: 'Metropolitana' },
    { id: 'Valparaiso', label: 'Valparaíso' },
    { id: 'OHiggins', label: 'O’Higgins' },
    { id: 'Maule', label: 'Maule' },
    { id: 'Ñuble', label: 'Ñuble' },   // en JSON está "Ñuble"
    { id: 'Biobio', label: 'Biobío' },
    { id: 'LaAraucania', label: 'La Araucanía' },
    { id: 'LosRios', label: 'Los Ríos' }
]

// región activa por id (coincide con JSON)
const activeId = ref(tabs[0].id)

// Helper: slug para la URL (solo para el param :region)
function slugify(str) {
    return String(str)
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/['’"]/g, '')
        .replace(/[^a-zA-Z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .toLowerCase()
}

const templosFiltrados = computed(() =>
    data.templos.filter(t => t.region === activeId.value)
)

// Link a la vista de detalle
function detalleLink(t) {
    return {
        name: 'templo-detalle',
        params: {
            region: slugify(t.region), // ej: "OHiggins" -> "ohiggins", "LaAraucania" -> "laaraucania"
            slug: t.slug               // viene directo desde el JSON
        }
    }
}
</script>

<template>
    <section class="page container">
        <Breadcrumb :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Quiénes Somos', to: '/quienes-somos' },
            { label: 'Templos Matrices', to: '/templos-matrices' }
        ]" />

        <header class="head" data-aos="fade-up">
            <h1>
                <Icon icon="mdi:home-city" class="i" /> Templos Matrices
            </h1>
        </header>

        <!-- Tabs -->
        <nav class="tabs" role="tablist" aria-label="Regiones">
            <button v-for="t in tabs" :key="t.id" class="tab" :class="{ active: t.id === activeId }" role="tab"
                :aria-selected="t.id === activeId" @click="activeId = t.id">
                {{ t.label.toUpperCase() }}
            </button>
        </nav>

        <!-- Lista de templos -->
        <div class="grid" data-aos="fade-up">
            <div v-if="!templosFiltrados.length" class="empty">
                (Sin datos en {{tabs.find(x => x.id === activeId)?.label || activeId}})
            </div>

            <RouterLink v-for="(t, i) in templosFiltrados" :key="i" class="card" :to="detalleLink(t)"
                :title="`Abrir detalle de ${t.nombre}`">
                <Icon icon="mdi:church" class="card-icon" />
                <h3 class="card-title">{{ t.nombre }}</h3>
                <p class="card-line">{{ t.direccion }}</p>
            </RouterLink>
        </div>
    </section>
</template>

<style scoped>
.tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 20px 0;
}

.tab {
    padding: 10px 16px;
    border-radius: 20px;
    background: #f0f4f9;
    border: none;
    cursor: pointer;
    font-weight: 700;
    color: #1e3d57;
}

.tab.active {
    background: #1e3d57;
    color: #fff;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
}

/* Card como enlace */
.card {
    display: block;
    background: #fff;
    border: 1px solid #e5e9ef;
    border-radius: 12px;
    padding: 18px;
    text-align: center;
    box-shadow: 0 6px 16px rgba(0, 0, 0, .06);
    text-decoration: none;
    transition: transform .15s ease, box-shadow .15s ease;
    color: inherit;
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .08);
}

.card-icon {
    font-size: 2.5rem;
    color: #1d3e5a;
    margin-bottom: 8px;
}

.card-title {
    font-size: 1.1rem;
    font-weight: 800;
    margin-bottom: 4px;
    color: #1e3d57;
}

.card-line {
    font-size: .95rem;
    color: #2b4a64;
}

.empty {
    grid-column: 1/-1;
    text-align: center;
    color: #6d8398;
    padding: 20px;
}

.head h1 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 2rem;
    font-weight: 800;
    color: #1e3d57;
    margin: 0;
}

.i {
    font-size: 2rem;
    color: #1e3d57;
}
</style>
