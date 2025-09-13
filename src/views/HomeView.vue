<script setup>
import HeroBanner from '@/components/hero/HeroBanner.vue'
import HomeHeroJpg from '@/assets/images/banners/home-hero.jpg'
import HomeHeroWebp from '@/assets/images/banners/home-hero.webp'
import VisionMission from '@/components/home/VisionMission.vue'
</script>

<template>
  <HeroBanner
    :src="HomeHeroJpg"
    :srcWebp="HomeHeroWebp"
    alt="Banner IPN Chile"
    overlay="none"
    height="420px"
    align="center"
  />

  <!-- sección animada con AOS -->
  <VisionMission />

  <section class="container section">
    <!-- resto de tu contenido -->
  </section>
</template>
