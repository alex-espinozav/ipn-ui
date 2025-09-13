<script setup>
import { useRoute, useRouter } from 'vue-router'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import { Icon } from '@iconify/vue'
import data from '@/data/doctrina.json'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()
const doctrina = data.puntos.find(p => p.slug === route.params.slug)

if (!doctrina) router.replace({ name: 'notfound' })

// Controla qué tooltip está abierto (útil en móvil)
const tipOpen = ref(null)

function openTip(i) { tipOpen.value = i }
function closeTip() { tipOpen.value = null }
function toggleTip(i) { tipOpen.value = tipOpen.value === i ? null : i }
</script>

<template>
    <section class="page container" v-if="doctrina">
        <Breadcrumb :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Quiénes Somos', to: '/quienes-somos' },
            { label: 'Bases Doctrinales', to: '/bases-doctrinales' },
            { label: doctrina.titulo }
        ]" />

        <header class="head" data-aos="fade-up">
            <h1>
                <Icon icon="mdi:bookmark" class="i" /> {{ doctrina.titulo }}
            </h1>
            <p class="lead">{{ doctrina.resumen }}</p>
        </header>

        <article class="content" data-aos="fade-up">
            <section class="block">
                <h2 class="h2">
                    <Icon icon="mdi:book-open-variant" class="h2i" /> Fundamentos
                </h2>
                <p class="paragraph">{{ doctrina.detalle }}</p>
            </section>

            <section class="block">
                <h2 class="h2">
                    <Icon icon="mdi:scripture" class="h2i" /> Citas bíblicas (RVR 1960)
                </h2>

                <ul class="refs">
                    <li v-for="(c, idx) in doctrina.citas" :key="idx" class="ref" @mouseenter="openTip(idx)"
                        @mouseleave="closeTip">
                        <button class="ref-btn" type="button" :aria-expanded="tipOpen === idx"
                            :aria-controls="`tip-${idx}`" @click="toggleTip(idx)">
                            <Icon icon="mdi:cross" class="ref-i" />
                            <span class="ref-text">{{ c.ref }}</span>
                            <Icon icon="mdi:chevron-down" class="ref-chev" />
                        </button>

                        <!-- Tooltip / Popover -->
                        <div class="tooltip" :id="`tip-${idx}`" role="tooltip" v-show="tipOpen === idx">
                            <p class="tip-verse">“{{ c.texto }}”</p>
                            <small class="tip-src">RVR 1960</small>
                        </div>
                    </li>
                </ul>

                <p class="hint">Sugerencia: pasa el mouse o toca la cita para ver el texto.</p>
            </section>
        </article>
    </section>
</template>

<style scoped>
.container {
    max-width: 1000px;
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
    margin: 0 0 6px;
}

.i {
    font-size: 2rem;
    color: #1e3d57;
}

.lead {
    color: #2b4a64;
    font-size: 1.05rem;
    margin: 6px 0 12px;
}

.content {
    margin-top: 10px;
}

.block {
    background: #fff;
    border: 1px solid #e5e9ef;
    border-radius: 12px;
    padding: 18px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, .06);
    margin-bottom: 14px;
}

.h2 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.15rem;
    font-weight: 800;
    color: #1e3d57;
    margin: 0 0 10px;
}

.h2i {
    font-size: 1.3rem;
    color: #1e3d57;
}

.paragraph {
    color: #2b4a64;
    line-height: 1.6;
    margin: 0;
}

.refs {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 10px;
}

.ref {
    position: relative;
}

.ref-btn {
    width: 100%;
    background: #f7fbff;
    color: #1e3d57;
    border: 1px solid #dfe8f3;
    border-radius: 10px;
    padding: 12px 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    text-align: left;
    cursor: pointer;
    transition: background .15s ease, border-color .15s ease;
}

.ref-btn:hover,
.ref-btn[aria-expanded="true"] {
    background: #eef6ff;
    border-color: #cfe1f5;
}

.ref-i {
    font-size: 1.1rem;
}

.ref-text {
    flex: 1;
    font-weight: 700;
}

.ref-chev {
    transition: transform .15s ease;
}

.ref-btn[aria-expanded="true"] .ref-chev {
    transform: rotate(180deg);
}

/* Tooltip / Popover */
.tooltip {
    position: relative;
    /* for stacking context */
    margin-top: 8px;
    background: #0f2f46;
    color: #fff;
    border-radius: 10px;
    padding: 12px 14px;
    border: 1px solid #0a2434;
    box-shadow: 0 12px 30px rgba(0, 0, 0, .18);
    animation: fadeIn .12s ease-out;
}

.tooltip::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 22px;
    width: 12px;
    height: 12px;
    background: #0f2f46;
    border-left: 1px solid #0a2434;
    border-top: 1px solid #0a2434;
    transform: rotate(45deg);
}

.tip-verse {
    margin: 0 0 6px;
    line-height: 1.5;
}

.tip-src {
    opacity: .9;
}

.hint {
    margin-top: 8px;
    color: #6b7f93;
    font-size: .9rem;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-2px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
