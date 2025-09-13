# IPN Chile – Sitio Web Oficial

Este proyecto corresponde al desarrollo del sitio web de la **Iglesia Pentecostal Nazareth (IPN Chile)**.  
Está construido con **Vue 3 + Vite**, siguiendo la sintaxis de `<script setup>`, e incluye vistas modulares para los distintos ministerios y secciones de la iglesia.

---

## 🚀 Tecnologías

- [Vue 3](https://vuejs.org/) – Framework principal
- [Vite](https://vitejs.dev/) – Herramienta de construcción y desarrollo rápido
- [Vue Router](https://router.vuejs.org/) – Manejo de rutas
- [Iconify](https://iconify.design/) – Sistema de íconos
- [AOS](https://michalsnik.github.io/aos/) – Animaciones al hacer scroll

---

## 📂 Estructura del proyecto

src/
├─ assets/ # Imágenes y recursos gráficos
│ ├─ banners/ # Banners para cada vista (Contacto, Donaciones, etc.)
│ └─ directorio/2025/ # Logos e imágenes de los directorios ministeriales
├─ components/ # Componentes reutilizables (hero, carousels, etc.)
├─ router/ # Configuración de rutas
└─ views/ # Vistas principales del sitio
├─ HomeView.vue
├─ AboutView.vue
├─ DorcasView.vue
├─ VaronesView.vue
├─ JumixView.vue
├─ ContactoView.vue
├─ DonacionesView.vue
├─ BasesDoctrinalesView.vue
├─ CuerpoSuperiorPastoresView.vue
├─ TemplosMatricesView.vue
└─ ...

## 📑 Vistas implementadas

- **Inicio**
- **Quiénes somos**
- **Dorcas** (ministerio de mujeres)
- **Varones** (ministerio de hombres)
- **JUMIX** (juventud mixta)
- **Contacto** (formulario con validaciones)
- **Donaciones** (información bancaria y versículo bíblico)
- **Bases doctrinales** y detalle
- **Cuerpo Superior de Pastores**
- **Templos matrices** y detalle

---

## ⚙️ Configuración local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/ipn-ui.git
   cd ipn-ui

   npm install
   npm run dev
   npm run build

   📌 Notas

El formulario de Contacto actualmente simula el envío con validaciones.
→ Se puede integrar más adelante con un servicio SMTP o API REST.

El sitio cuenta con animaciones AOS y diseño responsive para móviles y escritorio.

Todo el contenido (textos, imágenes y estilos) puede ser actualizado según las necesidades de la IPN.

📜 Licencia

Proyecto desarrollado exclusivamente para IPN Chile.
Uso restringido para fines ministeriales.