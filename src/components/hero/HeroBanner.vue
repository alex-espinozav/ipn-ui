<template>
    <section class="hero" :style="{ minHeight: height }" role="img" :aria-label="alt">
        <picture>
            <!-- opcional: versión WebP -->
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
    overlay: { type: String, default: 'dark' }, // 'dark', 'light' o 'none'
    height: { type: String, default: '360px' }, // '260px' | '360px' | '50vh'
    align: { type: String, default: 'center' }, // 'left' | 'center' | 'right'
})
</script>

<style scoped>
.hero {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
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
}

.align-left {
    justify-items: start;
    text-align: left;
    padding-left: 2rem;
}

.align-right {
    justify-items: end;
    text-align: right;
    padding-right: 2rem;
}

.hero-title {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 5vw, 3rem);
    letter-spacing: .6px;
    margin: 0 0 .3rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, .35);
}

.hero-subtitle {
    font-size: clamp(1rem, 2.2vw, 1.2rem);
    opacity: .95;
    text-shadow: 0 1px 3px rgba(0, 0, 0, .3);
}
</style>
