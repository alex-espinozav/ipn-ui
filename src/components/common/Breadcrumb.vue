<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    items: {
        type: Array,
        required: true
        // Formato: [{ label: 'Inicio', to: '/' }, { label: 'Quiénes Somos', to: '/quienes-somos' }, { label: 'Cuerpo Superior de Pastores' }]
    }
})
</script>

<template>
    <nav class="breadcrumb" aria-label="Miga de pan">
        <ol>
            <li v-for="(item, index) in items" :key="index">
                <RouterLink v-if="item.to && index < items.length - 1" :to="item.to">
                    {{ item.label }}
                </RouterLink>
                <span v-else>{{ item.label }}</span>
            </li>
        </ol>
    </nav>
</template>

<style scoped>
.breadcrumb {
    margin: 12px 0 20px;
    font-size: 0.95rem;
    color: #5a7086;
}

.breadcrumb ol {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 0;
    margin: 0;
}

.breadcrumb li::after {
    content: "›";
    margin-left: 6px;
    margin-right: 6px;
    color: #a0b0c0;
}

.breadcrumb li:last-child::after {
    content: "";
    margin: 0;
}

.breadcrumb a {
    color: #1d3e5a;
    text-decoration: none;
    font-weight: 600;
}

.breadcrumb a:hover {
    text-decoration: underline;
}
</style>
