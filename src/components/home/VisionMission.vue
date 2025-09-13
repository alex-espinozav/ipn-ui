<script setup>
import { onMounted, nextTick } from 'vue'
import { Icon } from '@iconify/vue'
import AOS from 'aos'

onMounted(async () => {
  await nextTick()
  AOS.refreshHard()
})
</script>

<template>
  <section id="vision" class="vision-wrap">
    <div class="container vision-grid">
      <!-- VISIÓN -->
      <article
        class="vision-card"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-once="true"
        data-aos-offset="160"
        data-aos-anchor="#vision"
        tabindex="0"
      >
        <div class="vision-inner">
          <Icon icon="mdi:eye" class="vision-icon" />
          <h2 class="vision-title">VISIÓN</h2>
          <p>
            Lograr que el conocimiento de la salvación llegue a toda persona, a través de todos los medios disponibles,
            utilizando métodos bíblicos, con el fin de que reciban y acepten a Jesucristo como Señor y Salvador.
          </p>
        </div>
      </article>

      <!-- MISIÓN -->
      <article
        class="vision-card"
        data-aos="fade-up"
        data-aos-delay="120"
        data-aos-once="true"
        data-aos-offset="160"
        data-aos-anchor="#vision"
        tabindex="0"
      >
        <div class="vision-inner">
          <Icon icon="mdi:cross" class="vision-icon" />
          <h2 class="vision-title">MISIÓN</h2>
          <p>
            Llevar el mensaje de salvación a toda comunidad, villa, pueblo, ciudad, región en Chile y el mundo,
            cumpliendo el mandato de Cristo: “ID POR EL MUNDO Y HACED DISCÍPULOS”.
          </p>
        </div>
      </article>

      <!-- COMPROMISO -->
      <article
        class="vision-card"
        data-aos="fade-up"
        data-aos-delay="240"
        data-aos-once="true"
        data-aos-offset="160"
        data-aos-anchor="#vision"
        tabindex="0"
      >
        <div class="vision-inner">
          <Icon icon="mdi:handshake" class="vision-icon" />
          <h2 class="vision-title">COMPROMISO</h2>
          <p>
            Atender las distintas necesidades espirituales tanto individuales como colectivas, enfocando los esfuerzos a la
            excelencia en el servicio y a la calidad de vida fraterna con equidad, integración y participación.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
/* CONTENEDOR PRINCIPAL */
.vision-wrap {
  background: #efefef;
  padding: 32px 0;
}
.vision-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
}

/* ÍCONO */
.vision-icon {
  width: 36px;
  height: 36px;
  color: #1e3a56;
  margin: 0 auto 8px auto;
  transition: color 260ms ease;
}

/* TÍTULO */
.vision-title {
  font-weight: 800;
  letter-spacing: .5px;
  font-size: clamp(22px, 3vw, 32px);
  text-align: center;
  color: #1e3a56;
  margin: 0 0 6px 0;
}

/* TEXTO */
.vision-card {
  max-width: 520px;
  margin-inline: auto;
  text-align: center;
  color: #1f3b54;
  font-size: clamp(14px, 1.15vw, 18px);
  line-height: 1.55;
}
.vision-card p {
  max-width: 420px;
  margin: 0 auto;
}

/* ZOOM SOLO EN HOVER DE CADA TARJETA */
.vision-inner {
  transition: transform 260ms ease, box-shadow 260ms ease;
  will-change: transform;
  border-radius: 12px;
  padding: 12px;
}

@media (hover: hover) and (pointer: fine) {
  .vision-card:hover .vision-inner,
  .vision-card:focus-visible .vision-inner {
    transform: scale(1.035);
    box-shadow: 0 10px 24px rgba(0,0,0,.08);
  }

  /* Cursor tipo "mano" SOLO en desktop al hover/foco */
@media (hover: hover) and (pointer: fine) {
  .vision-card:hover,
  .vision-card:focus-visible {
    cursor: pointer;
  }
}

  /* Cambia color del ícono en hover */
  .vision-card:hover .vision-icon,
  .vision-card:focus-visible .vision-icon {
    color: #2c5282;
  }
}

/* Foco accesible por teclado */
.vision-card:focus-visible .vision-inner {
  outline: 2px solid #1e3a56;
  outline-offset: 2px;
}

/* Responsive */
@media (max-width: 1200px) {
  .vision-grid { gap: 20px; }
  .vision-card { max-width: 500px; }
}
@media (max-width: 960px) {
  .vision-grid { grid-template-columns: 1fr; }
  .vision-wrap { padding: 28px 0; }
}

/* Ocultar hasta que AOS dispare (solo en este componente) */
:deep([data-aos]) { opacity: 0; }
:deep([data-aos].aos-animate) { opacity: 1; }
</style>
