<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

// Banners/Logos (ajusta paths si es necesario)
import bannerDonaciones from '@/assets/images/banners/DONACIONES.png'
import logoIglesia from '@/assets/images/logos/Logo-IPN.png'

// Datos
const datos = {
    nombreIglesia: 'Iglesia Pentecostal Nazareth',
    banco: 'Banco de Chile',
    tipo: 'Cuenta Corriente',
    numero: '1800206401',
    rut: '70.307.300-K',
    correo: 'ofrenda@ipnchile.cl'
}

// Copiar al portapapeles
const copiado = ref('')
async function copiar(texto, key) {
    try {
        await navigator.clipboard.writeText(texto)
        copiado.value = key
        setTimeout(() => (copiado.value = ''), 1200)
    } catch (e) { console.error('No se pudo copiar', e) }
}

/* ==========
   v-reveal: aparece cuando entra al viewport
   Uso: v-reveal="'fade-up'"  o  v-reveal="'zoom-in'"
   Opcional: :style="{'--d':'120ms'}" para delay
========== */
const vReveal = {
    mounted(el, binding) {
        // Evitar animaciones si el usuario lo pide
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduce) return

        // Clase base y variante
        const variant = (binding.value || 'fade-up').toString()
        el.classList.add('reveal', variant)

        // Observer
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible')
                    io.unobserve(el)
                }
            })
        }, { threshold: 0.12 })
        io.observe(el)
    }
}
</script>

<template>
    <main class="page">
        <!-- HERO -->
        <section class="hero" :style="{ backgroundImage: `url(${bannerDonaciones})` }" role="img"
            aria-label="Donaciones IPN Chile">
            <div class="hero-overlay" v-reveal="'fade-up'">
                <h1>DONACIONES</h1>
            </div>
        </section>

        <section class="container section">
            <!-- Intro -->
            <div class="intro" v-reveal="'fade-up'">
                <p>
                    Para apoyar el ministerio y las iniciativas de <strong>IPN Chile</strong>, puedes realizar tu
                    ofrenda
                    a través de la siguiente cuenta bancaria:
                </p>
            </div>

            <!-- Tarjeta principal -->
            <div class="card main" v-reveal="'zoom-in'">
                <div class="left" v-reveal="'fade-up'" style="--d:60ms">
                    <img :src="logoIglesia" alt="IPN Chile" class="logo" />
                    <h3 class="brand">DONACIONES<br /><span>OFRENDAS</span></h3>
                </div>

                <div class="right">
                    <h3 class="church" v-reveal="'fade-up'"> {{ datos.nombreIglesia }} </h3>
                    <ul class="list">
                        <li v-reveal="'fade-up'" style="--d:40ms">
                            <span class="lbl">Banco</span><span class="val">{{ datos.banco }}</span>
                        </li>
                        <li v-reveal="'fade-up'" style="--d:80ms">
                            <span class="lbl">Tipo</span><span class="val">{{ datos.tipo }}</span>
                        </li>
                        <li class="copyable" v-reveal="'fade-up'" style="--d:120ms">
                            <span class="lbl">N° Cuenta</span>
                            <span class="val code">{{ datos.numero }}</span>
                            <button class="copy" @click="copiar(datos.numero, 'cta')"
                                :aria-label="'Copiar número de cuenta ' + datos.numero">
                                <Icon :icon="copiado === 'cta' ? 'mdi:check' : 'mdi:content-copy'" />
                            </button>
                        </li>
                        <li v-reveal="'fade-up'" style="--d:160ms">
                            <span class="lbl">RUT</span><span class="val">{{ datos.rut }}</span>
                        </li>
                        <li class="copyable" v-reveal="'fade-up'" style="--d:200ms">
                            <span class="lbl">Correo</span>
                            <a class="val" :href="`mailto:${datos.correo}`">{{ datos.correo }}</a>
                            <button class="copy" @click="copiar(datos.correo, 'mail')"
                                :aria-label="'Copiar correo ' + datos.correo">
                                <Icon :icon="copiado === 'mail' ? 'mdi:check' : 'mdi:content-copy'" />
                            </button>
                        </li>
                    </ul>
                    <p class="note" v-reveal="'fade-up'" style="--d:240ms">* En “asunto” puedes indicar:
                        <em>Ofrenda</em>.
                    </p>
                </div>
            </div>

            <!-- Verso -->
            <div class="verse" v-reveal="'fade-up'">
                <p>“Cada uno dé como propuso en su corazón; no con tristeza, ni por necesidad; porque Dios ama al dador
                    alegre”.</p>
                <strong>2 Corintios 9:7</strong>
            </div>
        </section>
    </main>
</template>

<style scoped>
.page {
    padding-bottom: 48px;
}

/* HERO */
.hero {
    position: relative;
    min-height: 320px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    padding: 1rem;
    background: linear-gradient(to top, rgba(0, 0, 0, .22) 0%, rgba(0, 0, 0, .1) 55%, rgba(0, 0, 0, 0) 100%);
}

.hero-overlay h1 {
    margin: 0;
    color: #fff;
    font-size: clamp(1.7rem, 3.8vw, 2.6rem);
    letter-spacing: .5px;
    text-shadow: 0 2px 12px rgba(0, 0, 0, .35);
}

/* Sección */
.section {
    padding: 2rem 0;
}

.intro {
    text-align: center;
    max-width: 900px;
    margin: 0 auto 1.25rem;
    opacity: .95;
}

/* Tarjeta principal */
.card.main {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1.2fr;
    align-items: center;
    background: #fff;
    color: #0e1116;
    border: 1px solid rgba(0, 0, 0, .08);
    border-radius: 20px;
    box-shadow: 0 12px 28px rgba(0, 0, 0, .10);
    padding: 1.2rem;
}

@media (max-width: 900px) {
    .card.main {
        grid-template-columns: 1fr;
        text-align: center;
    }
}

.left {
    display: grid;
    place-items: center;
    gap: .5rem;
    padding: .5rem;
}

.logo {
    width: 160px;
    max-width: 100%;
    height: auto;
    display: block;
}

.brand {
    margin: .5rem 0 0;
    text-align: center;
    letter-spacing: .5px;
}

.brand span {
    opacity: .7;
    font-weight: 500;
}

.right {
    padding: .5rem;
}

.church {
    margin: 0 0 .75rem;
    font-size: 1.15rem;
    font-weight: 700;
}

.list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: .45rem;
}

.list li {
    display: grid;
    grid-template-columns: 130px 1fr auto;
    align-items: center;
    gap: .6rem;
}

@media (max-width: 900px) {
    .list li {
        grid-template-columns: 1fr;
    }
}

.lbl {
    opacity: .75;
    font-weight: 600;
}

.val {
    font-weight: 600;
}

.val.code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    letter-spacing: .6px;
}

.copyable .copy {
    display: inline-grid;
    place-items: center;
    width: 36px;
    height: 36px;
    margin-left: .3rem;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, .08);
    background: rgba(0, 0, 0, .04);
    cursor: pointer;
    transition: transform .15s ease, background .15s ease, border-color .15s ease;
}

.copyable .copy:hover {
    transform: translateY(-2px);
    background: rgba(0, 0, 0, .06);
}

.note {
    margin-top: .7rem;
    opacity: .75;
}

/* Verso */
.verse {
    text-align: center;
    margin: 1.75rem auto 0;
    max-width: 760px;
    border-top: 1px solid rgba(0, 0, 0, .08);
    padding-top: 1.25rem;
    opacity: .9;
}

/* ====== Revela al hacer scroll (transiciones) ====== */
.reveal {
    will-change: transform, opacity, filter;
}

.reveal.fade-up {
    opacity: 0;
    transform: translateY(14px);
    filter: blur(2px);
    transition: opacity .6s ease, transform .6s ease, filter .6s ease;
    transition-delay: var(--d, 0ms);
}

.reveal.zoom-in {
    opacity: 0;
    transform: scale(.98);
    filter: blur(2px);
    transition: opacity .6s ease, transform .6s ease, filter .6s ease;
    transition-delay: var(--d, 0ms);
}

.is-visible.fade-up {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
}

.is-visible.zoom-in {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
}

/* Hovers existentes */
.card.main,
.copyable .copy {
    transition: box-shadow .2s ease, transform .2s ease;
}

.card.main:hover {
    box-shadow: 0 16px 36px rgba(0, 0, 0, .16);
}
</style>

<!-- registra el directive local -->
<script>
export default {
    directives: {
        reveal: (await import('vue')).default ? undefined : undefined
    }
}
</script>
