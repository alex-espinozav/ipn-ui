<template>
    <!-- pasamos la altura como CSS var -->
    <section class="hero" :style="{ '--hero-h': height }" role="img" :aria-label="alt">
        <picture class="hero-media">
            <source v-if="srcWebp" :srcset="srcWebp" type="image/webp" />
            <img class="hero-img" :src="src" :alt="alt" loading="eager" decoding="async" fetchpriority="high" />
        </picture>

        <div class="hero-overlay" :class="overlay" />

        <div class="hero-content" :class="[`align-${align}`]">
            <h1 v-if="title" class="hero-title">{{ title }}</h1>
            <p v-if="subtitle" class="hero-subtitle">{{ subtitle }}</p>
            <slot />
        </div>
    </section>
</template>

<script setup>
defineProps({
    src: { type: String, required: true },
    srcWebp: { type: String, default: '' },
    alt: { type: String, default: '' },
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    overlay: { type: String, default: 'dark' }, // 'dark' | 'light' | 'none'
    height: { type: String, default: '360px' }, // admite '260px' | '360px' | '50vh' etc.
    align: { type: String, default: 'center' }, // 'left' | 'center' | 'right'
})
</script>

<style scoped>
.hero {
    position: relative;
    width: 100%;
    min-height: var(--hero-h, 360px);
    /* altura efectiva */
    overflow: hidden;
    line-height: 0;
    /* evita espacios fantasmas */
}

/* Hacemos que la imagen cubra SIEMPRE el alto del hero */
.hero-media,
.hero-media .hero-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
}

.hero-img {
    object-fit: cover;
    object-position: center;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.hero-overlay.dark {
    background: linear-gradient(0deg, rgba(0, 0, 0, .35), rgba(0, 0, 0, .35));
}

.hero-overlay.light {
    background: linear-gradient(0deg, rgba(255, 255, 255, .2), rgba(255, 255, 255, .2));
}

.hero-overlay.none {
    background: transparent;
}

.hero-content {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    padding: 1rem;
    text-align: center;
    color: #fff;
    line-height: normal;
    /* restablece para el texto */
}

/* alineaciones */
.align-left {
    justify-items: start;
    text-align: left;
    padding-left: 1.25rem;
}

.align-right {
    justify-items: end;
    text-align: right;
    padding-right: 1.25rem;
}

.hero-title {
    font-family: var(--font-heading);
    font-size: clamp(1.8rem, 5vw, 3rem);
    letter-spacing: .6px;
    margin: 0 0 .3rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, .35);
}

.hero-subtitle {
    font-size: clamp(1rem, 2.2vw, 1.2rem);
    opacity: .95;
    text-shadow: 0 1px 3px rgba(0, 0, 0, .3);
}

/* Mobile: altura más baja y paddings más compactos */
@media (max-width: 768px) {
    .hero {
        --hero-h: 230px;
    }

    .align-left {
        padding-left: .75rem;
    }

    .align-right {
        padding-right: .75rem;
    }
}
</style>
