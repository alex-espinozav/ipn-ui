<script setup>
import { ref, reactive } from 'vue'
import { Icon } from '@iconify/vue'

// Banner (ajusta el path si usas otro nombre)
import bannerContacto from '@/assets/images/banners/CONTACTO.png'

// Opciones
const tipos = [
    'Consulta general',
    'Petición de oración',
    'Contacto pastoral',
    'Voluntariado',
    'Otro'
]

const regiones = [
    'Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo',
    'Valparaíso', 'Metropolitana', "O'Higgins", 'Maule', 'Ñuble',
    'Biobío', 'La Araucanía', 'Los Ríos', 'Los Lagos', 'Aysén', 'Magallanes'
]

// Formulario
const form = reactive({
    tipo: '',
    nombre: '',
    telefono: '',
    email: '',
    region: '',
    mensaje: ''
})
const errors = reactive({
    tipo: '', nombre: '', telefono: '', email: '', region: '', mensaje: ''
})
const sending = ref(false)
const sent = ref(false)
const fail = ref(false)

function validate() {
    errors.tipo = form.tipo ? '' : 'Seleccione el tipo de solicitud'
    errors.nombre = form.nombre.trim() ? '' : 'Ingrese su nombre'
    errors.telefono = form.telefono && !/^[\d\s()+-]{6,}$/.test(form.telefono)
        ? 'Teléfono inválido'
        : ''
    errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Email inválido'
    errors.region = form.region ? '' : 'Seleccione su región'
    errors.mensaje = form.mensaje.trim().length >= 10 ? '' : 'Mínimo 10 caracteres'
    return Object.values(errors).every(v => v === '')
}

async function handleSubmit() {
    fail.value = false
    sent.value = false
    if (!validate()) return
    sending.value = true
    try {
        // 👉 Integre aquí su endpoint real
        // await fetch('/api/contacto', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
        await new Promise(r => setTimeout(r, 800)) // simulación
        sent.value = true
        Object.keys(form).forEach(k => (form[k] = ''))
    } catch (e) {
        fail.value = true
        console.error('Contacto error:', e)
    } finally {
        sending.value = false
    }
}
</script>

<template>
    <main class="page">
        <!-- HERO (mismo estilo claro del sitio) -->
        <section class="hero" :style="{ backgroundImage: `url(${bannerContacto})` }" role="img"
            aria-label="Contacto IPN Chile">
            <div class="hero-overlay">
                <h1>CONTÁCTENOS</h1>
            </div>
        </section>

        <!-- Formulario centrado, una sola columna -->
        <section class="container section">
            <div class="intro">
                <Icon icon="mdi:chat-outline" class="intro-ico" />
                <h2>En IPN, te escuchamos…</h2>
                <p>Complete el formulario y nos pondremos en contacto.</p>
            </div>

            <form class="card form" @submit.prevent="handleSubmit" novalidate>
                <label>
                    <span>Seleccione su tipo de solicitud.</span>
                    <select v-model="form.tipo" :aria-invalid="!!errors.tipo">
                        <option value="">—Por favor, elige una opción—</option>
                        <option v-for="t in tipos" :key="t" :value="t">{{ t }}</option>
                    </select>
                    <small v-if="errors.tipo" class="err">{{ errors.tipo }}</small>
                </label>

                <label>
                    <span>Nombre</span>
                    <input v-model.trim="form.nombre" type="text" name="nombre" autocomplete="name"
                        :aria-invalid="!!errors.nombre" />
                    <small v-if="errors.nombre" class="err">{{ errors.nombre }}</small>
                </label>

                <label>
                    <span>Teléfono</span>
                    <input v-model.trim="form.telefono" type="tel" name="telefono" autocomplete="tel"
                        :aria-invalid="!!errors.telefono" />
                    <small v-if="errors.telefono" class="err">{{ errors.telefono }}</small>
                </label>

                <label>
                    <span>Correo electrónico</span>
                    <input v-model.trim="form.email" type="email" name="email" autocomplete="email"
                        :aria-invalid="!!errors.email" />
                    <small v-if="errors.email" class="err">{{ errors.email }}</small>
                </label>

                <label>
                    <span>Seleccione la región desde donde nos contacta.</span>
                    <select v-model="form.region" :aria-invalid="!!errors.region">
                        <option value="">—Por favor, elige una opción—</option>
                        <option v-for="r in regiones" :key="r" :value="r">{{ r }}</option>
                    </select>
                    <small v-if="errors.region" class="err">{{ errors.region }}</small>
                </label>

                <label>
                    <span>Escriba a continuación su mensaje.</span>
                    <textarea v-model.trim="form.mensaje" name="mensaje" rows="6"
                        :aria-invalid="!!errors.mensaje"></textarea>
                    <small v-if="errors.mensaje" class="err">{{ errors.mensaje }}</small>
                </label>

                <div class="actions">
                    <button class="btn" type="submit" :disabled="sending">
                        <Icon v-if="sending" icon="mdi:loading" class="spin" /> Enviar
                    </button>
                </div>

                <p v-if="sent" class="ok">
                    <Icon icon="mdi:check-circle" /> Mensaje enviado. ¡Gracias por escribirnos!
                </p>
                <p v-if="fail" class="fail">
                    <Icon icon="mdi:alert-circle-outline" /> Ocurrió un problema. Intente nuevamente.
                </p>
            </form>
        </section>
    </main>
</template>

<style scoped>
.page {
    padding-bottom: 48px;
}

/* HERO (claro) */
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

/* Layout */
.section {
    padding: 2rem 0;
}

.intro {
    text-align: center;
    max-width: 760px;
    margin: 0 auto 1rem;
}

.intro-ico {
    font-size: 2rem;
    opacity: .7;
}

.intro h2 {
    margin: .5rem 0 .25rem;
}

.intro p {
    opacity: .85;
}

/* Form (look claro consistente con el sitio) */
.card.form {
    max-width: 760px;
    margin: 0 auto;
    background: #fff;
    color: #0e1116;
    border: 1px solid rgba(0, 0, 0, .08);
    border-radius: 16px;
    box-shadow: 0 10px 24px rgba(0, 0, 0, .08);
    padding: 1.1rem;
    display: grid;
    gap: 1rem;
}

label {
    display: grid;
    gap: .35rem;
}

label span {
    font-weight: 600;
}

input,
textarea,
select {
    width: 100%;
    padding: .7rem .8rem;
    border: 1px solid rgba(0, 0, 0, .12);
    border-radius: 10px;
    outline: none;
    background: #fff;
    color: #111827;
    transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
}

input:focus,
textarea:focus,
select:focus {
    border-color: #1f4f82;
    /* azul del sitio */
    box-shadow: 0 0 0 3px rgba(31, 79, 130, .15);
    background: #fff;
}

::placeholder {
    color: #9aa3af;
}

.err {
    color: #b91c1c;
    font-size: .85rem;
}

.ok {
    color: #0f7b3b;
    margin: .5rem 0 0;
    display: flex;
    gap: .4rem;
    align-items: center;
}

.fail {
    color: #b45309;
    margin: .5rem 0 0;
    display: flex;
    gap: .4rem;
    align-items: center;
}

.actions {
    display: flex;
    justify-content: center;
    margin-top: .4rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    padding: .7rem 1rem;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 10px;
    background: linear-gradient(135deg, #1f4f82, #254f74);
    color: #fff;
    cursor: pointer;
    transition: transform .15s ease, box-shadow .15s ease, opacity .15s ease;
}

.btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 18px rgba(31, 79, 130, .25);
}

.btn:disabled {
    opacity: .7;
    cursor: not-allowed;
}

.spin {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
