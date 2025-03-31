# 🎉 FelizCumple — Carta dinámica de cumpleaños

Este proyecto genera una carta de cumpleaños personalizada desde la URL, con animaciones, estilo moderno, posibilidad de agregar música y efectos como confeti. Perfecto para felicitar de forma única y digital.  

---

## 🚀 Tecnologías utilizadas

- ⚡ [Vite](https://vitejs.dev/) – Bundler ultrarrápido para proyectos modernos
- ⚛️ [React](https://reactjs.org/) – Librería para construir interfaces de usuario
- 💨 [TailwindCSS](https://tailwindcss.com/) – Framework CSS utility-first
- 🎞️ [Framer Motion](https://www.framer.com/motion/) – Animaciones fluidas y modernas
- 🔁 [React Router DOM](https://reactrouter.com/) – Para rutas dinámicas como `/felizcumple/andrea`

---

## 🧱 Arquitectura del proyecto

El proyecto está estructurado con el enfoque **Feature-Based Architecture** (por funcionalidades), siguiendo buenas prácticas de separación de responsabilidades.

```bash
src/
├── assets/             # Archivos estáticos (imágenes, música, SVGs)
├── components/         # Componentes reutilizables y pequeños
├── context/            # Context API para manejo de estado global (opcional)
├── hooks/              # Hooks personalizados (por ejemplo: useConfetti)
├── pages/              # Páginas completas (vistas por ruta)
├── routes/             # Configuración central del router
├── styles/             # Estilos globales o personalizados
├── utils/              # Funciones utilitarias (formato, helpers, etc.)
├── App.jsx             # Componente general de estructura
├── main.jsx            # Punto de entrada
└── index.css           # Archivo base de estilos con Tailwind
```

---

## 🧠 Patrones de diseño aplicados

| Patrón                         | Uso                                                                 |
|-------------------------------|----------------------------------------------------------------------|
| **Composición de componentes** | Separación en partes reutilizables (`Card`, `MusicPlayer`, etc.)   |
| **Router Dinámico**           | Rutas como `/felizcumple/:nombre` usando `useParams()`              |
| **Atomic Design (opcional)**  | Organización de componentes: `atoms`, `molecules`, `organisms`      |
| **Context API**               | (Opcional) Para compartir datos globales como tema, música, etc.    |
| **Hook personalizado**        | `useConfetti` o `useAudio`, si agregas funcionalidades extra        |

---

## ⚙️ Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/felizcumple.git
cd felizcumple

# 2. Instala dependencias
npm install

# 3. Corre el servidor local
npm run dev
```

Abre tu navegador en `http://localhost:5173/felizcumple/andrea` y verás una carta personalizada 🎂

---

## 📦 Dependencias clave

```bash
npm install react react-dom react-router-dom framer-motion tailwindcss postcss autoprefixer
```

---

## ✨ Funcionalidades opcionales que puedes agregar

- 🎊 **Confeti animado** con `canvas-confetti`
- 🎶 **Música de fondo** con `useAudio`
- 📤 **Compartir por link** (copiar URL personalizada)
- 📸 **Generar imagen o PDF** de la carta
- 📱 **Diseño responsive** para móviles

---

## 🧑‍💻 Autor

Desarrollado con ❤️ por [Jose Angel Ortega Merlin].

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. ¡Úsalo, modifícalo y compártelo libremente!

---

## 🌐 Conecta conmigo

- 🌍 [LinkedIn](https://www.linkedin.com/in/joseangelortega)
- 📧 [Email](mailto:joseangelortega@example.com)


## 🚀 Despliegue

```bash
# 1. Genera la versión de producción
npm run build

# 2. Despliega en Firebase Hosting
firebase deploy
```

Asegúrate de tener configurado Firebase CLI y un proyecto en Firebase Hosting antes de ejecutar estos comandos.# cards-happy-birthday
# cards-happy-birthday
