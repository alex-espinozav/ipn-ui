<script setup>
import { Icon } from '@iconify/vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import data from '@/data/doctrina.json'

const puntos = data.puntos
</script>

<template>
    <section class="page container">
        <Breadcrumb :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Quiénes Somos', to: '/quienes-somos' },
            { label: 'Bases Doctrinales' }
        ]" />

        <header class="head" data-aos="fade-up">
            <h1>
                <Icon icon="mdi:book-cross" class="i" /> Bases Doctrinales
            </h1>
            <p class="sub">Resumen de nuestras convicciones fundamentales.</p>
        </header>

        <div class="list" data-aos="fade-up">
            <RouterLink v-for="(p, i) in puntos" :key="i" class="item"
                :to="{ name: 'doctrina-detalle', params: { slug: p.slug } }" :title="`Abrir detalle de ${p.titulo}`">
                <div class="num">{{ i + 1 }}</div>
                <div>
                    <h3 class="title">{{ p.titulo }}</h3>
                    <p class="desc">{{ p.resumen }}</p>
                </div>
            </RouterLink>
        </div>
    </section>
</template>

<style scoped>
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 28px 16px 56px;
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

.head .i {
    font-size: 2.2rem;
    color: #1e3d57;
}

.sub {
    color: #59728a;
    margin-top: 4px;
}

.list {
    display: grid;
    gap: 14px;
    margin-top: 20px;
}

.item {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    background: #fff;
    border: 1px solid #e5e9ef;
    border-radius: 12px;
    padding: 16px 20px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, .06);
    transition: transform .15s ease, box-shadow .15s ease;
    text-decoration: none;
    color: inherit;
}

.item:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .08);
}

.num {
    background: #1e3d57;
    color: #fff;
    font-weight: 800;
    font-size: 1.1rem;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
}

.title {
    font-size: 1.1rem;
    font-weight: 800;
    color: #1e3d57;
    margin: 0 0 4px;
}

.desc {
    color: #2b4a64;
    margin: 0;
}
</style>
