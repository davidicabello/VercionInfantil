# 📸 Galería Masonry Independiente

Galería de fotos completamente independiente con diseño masonry, lightbox y navegación avanzada.

## 📁 Estructura del Proyecto

```
galeria/
├── galeria.html          # HTML principal
├── galeria.css           # Estilos propios
├── galeria.js            # JavaScript funcional
├── assets/               # Carpeta de imágenes
│   ├── foto1.jpg
│   ├── foto2.jpg
│   └── ...
└── README-GALERIA.md     # Esta documentación
```

## 🚀 Características

### ✨ Funcionalidades Principales
- **Layout Masonry**: Disposición automática en columnas responsivas
- **Lightbox**: Ampliación de imágenes con overlay
- **Navegación**: Flechas de teclado y botones en pantalla
- **Responsive**: Adaptable a móviles, tablets y desktop
- **Accesibilidad**: Soporte completo para navegación por teclado

### 🎨 Diseño
- **Paleta de colores**: Pasteles suaves (FCF6BD, A9DEF9, D0F4DE, FF99C8)
- **Fuente**: Mouse Memoirs (cursiva elegante)
- **Animaciones**: Transiciones suaves y efectos hover
- **Header sticky**: Navegación siempre visible

### 📱 Responsividad
- **Móvil**: 1 columna
- **Tablet**: 2-3 columnas  
- **Desktop**: 4 columnas
- **Adaptación automática** según tamaño de pantalla

## 🛠️ Instalación y Uso

### 1. Preparar Imágenes
```bash
# Crear carpeta assets
mkdir assets

# Agregar tus fotos (formatos: JPG, PNG, WebP)
# Ejemplo:
assets/
├── foto1.jpg
├── foto2.png
└── foto3.webp
```

### 2. Editar HTML
Abrir `galeria.html` y reemplazar las rutas de ejemplo:

```html
<!-- ANTES (ejemplo) -->
<div class="masonry-item">
  <img src="assets/portada-ejemplo.jpg" alt="Foto 1" />
</div>

<!-- DESPUÉS (tus fotos) -->
<div class="masonry-item">
  <img src="assets/foto1.jpg" alt="Descripción de la foto" />
</div>
```

### 3. Personalizar Título
```html
<!-- Cambiar título en el header -->
<header class="gallery-header">
  Mi Galería de Fotos
</header>

<!-- Y en el <title> -->
<title>Mi Galería de Fotos</title>
```

## 🎯 Personalización

### Cambiar Colores
Editar variables CSS en `galeria.css`:

```css
:root {
  --gallery-bg: #fcf6bd;        /* Fondo principal */
  --gallery-primary: #a9def9;   /* Header y elementos principales */
  --gallery-secondary: #d0f4de; /* Elementos secundarios */
  --gallery-accent: #ff99c8;    /* Acentos y hover */
  --gallery-text: #222;         /* Texto */
  --gallery-white: #fff;        /* Blanco */
}
```

### Ajustar Columnas
Modificar breakpoints en `galeria.css`:

```css
/* Móvil */
@media (min-width: 600px) {
  .masonry { column-count: 2; }
}

/* Tablet */
@media (min-width: 900px) {
  .masonry { column-count: 3; }
}

/* Desktop */
@media (min-width: 1200px) {
  .masonry { column-count: 4; }
}
```

### Cambiar Fuente
Reemplazar en `galeria.css`:

```css
/* Importar nueva fuente */
@import url("https://fonts.googleapis.com/css2?family=TU_FUENTE&display=swap");

/* Aplicar */
body {
  font-family: "TU_FUENTE", sans-serif;
}
```

## ⌨️ Controles de Navegación

### Teclado
- **Escape**: Cerrar lightbox
- **Flecha Izquierda**: Imagen anterior
- **Flecha Derecha**: Imagen siguiente
- **Enter**: Abrir imagen (cuando está enfocada)

### Mouse
- **Click en imagen**: Abrir lightbox
- **Click fuera de imagen**: Cerrar lightbox
- **Click en X**: Cerrar lightbox
- **Botones de navegación**: Anterior/Siguiente

## 📊 Optimización

### Tamaño de Imágenes
- **Recomendado**: 800px - 1200px de ancho
- **Formato**: JPG para fotos, PNG para gráficos
- **Compresión**: Optimizar para web (70-85% calidad)

### Performance
- **Lazy Loading**: Activado automáticamente
- **Precarga**: Imágenes se precargan para mejor UX
- **Manejo de errores**: Imágenes fallidas se ocultan

## 🌐 Despliegue

### Opciones Gratuitas

#### 1. **Netlify** (Recomendado)
```bash
# Subir carpeta completa a Netlify
# Drag & drop o Git integration
```

#### 2. **GitHub Pages**
```bash
# Crear repositorio
git init
git add .
git commit -m "Galería inicial"
git remote add origin https://github.com/usuario/repo.git
git push -u origin main

# Activar GitHub Pages en Settings > Pages
```

#### 3. **Vercel**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Estructura para Despliegue
```
tu-sitio.com/
├── galeria.html
├── galeria.css
├── galeria.js
└── assets/
    ├── foto1.jpg
    ├── foto2.jpg
    └── ...
```

## 🔧 Solución de Problemas

### Imágenes No Se Cargan
- Verificar rutas en `galeria.html`
- Asegurar que archivos existen en `assets/`
- Revisar permisos de archivos

### Lightbox No Funciona
- Verificar que `galeria.js` está incluido
- Revisar consola del navegador para errores
- Asegurar que Bootstrap Icons está cargado

### Responsividad Rota
- Verificar viewport meta tag
- Revisar media queries en `galeria.css`
- Probar en diferentes dispositivos

## 📝 Notas Técnicas

### Dependencias
- **Bootstrap 5.3.3**: Framework CSS
- **Bootstrap Icons 1.11.3**: Iconografía
- **Google Fonts**: Mouse Memoirs

### Compatibilidad
- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: iOS, Android, Desktop
- **Versiones**: IE11+ (con polyfills)

### Performance
- **Tamaño total**: ~50KB (sin imágenes)
- **Carga inicial**: < 1 segundo
- **Interactividad**: Inmediata

## 🤝 Contribuir

Para mejorar la galería:

1. Fork del proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**¡Disfruta tu galería! 📸✨** 