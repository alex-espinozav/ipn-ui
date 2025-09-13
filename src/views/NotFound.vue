<script setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <section class="notfound">
        <div class="content">
            <!-- Icono principal -->
            <Icon icon="mdi:emoticon-sad-outline" class="icon-main" />
            <h1>404 - Página no encontrada</h1>
            <p class="verse">
                <Icon icon="mdi:sheep" class="icon-inline" />
                <em>"Porque el Hijo del Hombre vino a buscar y a salvar lo que se había perdido." — Lucas 19:10</em>
            </p>
            <RouterLink to="/" class="btn-home">
                <Icon icon="mdi:home" class="icon-btn" />
                Volver al Inicio
            </RouterLink>
        </div>
    </section>
</template>

<style scoped>
.notfound {
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f4f7fb;
    text-align: center;
    padding: 20px;
}

.content {
    max-width: 600px;
}

.icon-main {
    font-size: 5rem;
    color: #1e3d57;
    margin-bottom: 12px;
}

h1 {
    font-size: 2rem;
    font-weight: 800;
    color: #1e3d57;
    margin-bottom: 16px;
}

.verse {
    font-size: 1.05rem;
    color: #2b4a64;
    margin-bottom: 28px;
    line-height: 1.6;
}

.icon-inline {
    font-size: 1.2rem;
    margin-right: 6px;
    color: #2b4a64;
    vertical-align: middle;
}

.btn-home {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #1d3e5a;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    padding: 12px 20px;
    border-radius: 8px;
    transition: background .2s ease;
}

.btn-home:hover {
    background: #254e74;
}

.icon-btn {
    font-size: 1.3rem;
}
</style>
