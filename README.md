# Dane Nails · Frontend

Landing page comercial en React + Vite + Tailwind CSS v4 para Dane Nails, con el
agendador de citas empotrado en la sección "Agenda tu cita". Consume el backend
Node.js + Express + MySQL corriendo en `http://localhost:3000`.

Paleta de marca: lila pastel (`#8B6FB8`) como color principal, dorado (`#C9A227`)
para acentos y botones, fondos en blanco puro y lila muy claro (`#F6F3FC`).

## Requisitos

- Node.js 18+
- El backend corriendo en `http://localhost:3000` con `cors()` habilitado
  (ver nota abajo) y los endpoints:
  - `GET /api/servicios`
  - `GET /api/barrios`
  - `POST /api/citas`

## Instalación

```bash
npm install
```

## Variables de entorno

El archivo `.env` ya viene configurado para desarrollo local:

```
VITE_API_BASE_URL=http://localhost:3000/api
VITE_WHATSAPP_NUMERO=573001234567
```

Reemplaza `VITE_WHATSAPP_NUMERO` por el número real de WhatsApp del salón
(formato internacional sin `+` ni espacios, ej: `573001234567`).

## Ejecución en desarrollo

```bash
npm run dev
```

La app queda disponible en `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```
src/
├── api/apiClient.js          # Instancia Axios centralizada
├── services/                 # Una función por endpoint del backend
│   ├── serviciosService.js
│   ├── barriosService.js
│   └── citasService.js
├── context/ReservaContext.jsx # Estado global del agendador (paso, selección, costos)
├── sections/                 # Secciones de la landing page (una por bloque del scroll)
│   ├── Hero.jsx
│   ├── ServiciosDestacados.jsx   # Consume /api/servicios (vitrina comercial)
│   ├── Conocenos.jsx
│   ├── CoberturaDestacada.jsx    # Consume /api/barrios (vitrina de zonas)
│   ├── AgendadorSection.jsx      # Empotra el flujo de 4 pasos con ReservaProvider
│   └── Galeria.jsx
├── components/               # Piezas de UI reutilizables (Header, Footer, Logo, tarjetas, modal)
├── pages/                    # Los 4 pasos del agendador (usados dentro de AgendadorSection)
│   ├── SeleccionServicio.jsx
│   ├── SeleccionCobertura.jsx
│   ├── DatosCliente.jsx
│   └── Confirmacion.jsx
└── App.jsx                   # Compone la landing: Header + secciones + Footer
```

### Reemplazar contenido de marcador de posición

- **Galería** (`src/sections/Galeria.jsx`): hoy muestra íconos de relleno porque
  no se incluyeron fotos reales. Reemplázalos por tus propias imágenes (colócalas
  en `public/gallery/` y actualiza el componente).
- **Redes sociales** (`src/components/Footer.jsx`): los enlaces de Instagram,
  TikTok y Facebook apuntan a `#` — actualízalos con las URLs reales.
- **Hero** (`src/sections/Hero.jsx`): usa una ilustración vectorial de marca;
  puedes reemplazarla por una fotografía real del servicio.

## Nota importante: CORS

Si al abrir la app ves errores de CORS en la consola del navegador, agrega esto
a tu backend Express:

```bash
npm install cors
```

```js
const cors = require('cors')
app.use(cors())
```
