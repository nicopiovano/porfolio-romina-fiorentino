# 🌐 Website — Porfolio Romina Fiorentino

Porfolio personal de **Romina Fiorentino** construido con **React + Vite** y estilado con **Tailwind CSS**.  
Incluye secciones de héroe, sobre mí, experiencia, educación, skills y contacto, con soporte de tema claro/oscuro.

---

## 🛠 Stack

| Tecnología        | Uso                                      |
| ----------------- | ---------------------------------------- |
| **React 18**      | Librería principal de UI                 |
| **Vite**          | Bundler / dev server                     |
| **TypeScript**    | Tipado estático                          |
| **Tailwind CSS**  | Estilos utilitarios y diseño responsive  |
| **next-themes**   | Gestión de tema claro/oscuro             |
| **Radix UI / MUI**| Componentes de interfaz y iconografía    |

---

## 📋 Requisitos

- **Node.js** 18+ (recomendado 20+)
- **npm** o **pnpm**

---

## 🚀 Cómo levantar el proyecto

### 1. Instalar dependencias

```bash
cd porfolio-romina-fiorentino
npm install
```

### 2. Modo desarrollo

```bash
npm run dev
```

La app estará en **http://localhost:5173** (puede variar según tu configuración de Vite).

### 3. Build para producción

```bash
npm run build
```

Genera la versión optimizada en la carpeta `dist/`.

Si querés previsualizar el build localmente podés usar:

```bash
npx vite preview
```

---

## 📁 Estructura principal

```text
porfolio-romina-fiorentino/
├── src/
│   ├── app/
│   │   ├── App.tsx          # Composición de las secciones principales
│   │   └── components/      # Header, Hero, About, Experience, Education, Skills, Contact, Footer
│   ├── styles/              # Estilos globales (Tailwind, theme)
│   └── assets/              # Imágenes y recursos gráficos
├── index.html               # Entry HTML
├── vite.config.ts           # Configuración de Vite
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias y scripts
```

---

## 📜 Scripts disponibles

| Comando         | Descripción                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Servidor de desarrollo Vite con HMR     |
| `npm run build` | Build de producción para Vite           |

---

## 💡 Notas

- El proyecto está pensado como porfolio estático, fácil de desplegar en Vercel, Netlify o similares.
- El soporte de tema oscuro/claro se maneja vía `next-themes` y clases de Tailwind.
