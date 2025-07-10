/*
  GALERÍA MASONRY - JAVASCRIPT INDEPENDIENTE
  ===========================================
  Funcionalidad del lightbox compatible con el archivo original.
*/

// Lightbox funcionalidad
const masonryItems = document.querySelectorAll(".masonry-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

// Abrir lightbox al hacer click en una imagen
masonryItems.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("active");
  });
});

// Función para cerrar lightbox
function closeLightbox() {
  lightbox.classList.remove("active");
  setTimeout(() => {
    lightboxImg.src = "";
  }, 200);
}

// Event listeners para cerrar
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Cerrar con Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// =====================
// BOTÓN CIRCULAR DE ABRIR GALERÍA
// =====================
const openInvitationBtn = document.getElementById('open-invitation-btn');
const initialOverlay = document.getElementById('initial-overlay');
const galleryContent = document.getElementById('gallery-content');

if (openInvitationBtn) {
  openInvitationBtn.addEventListener('click', function() {
    // Ocultar overlay con animación
    initialOverlay.classList.add('fade-out');
    
    // Mostrar contenido de la galería
    setTimeout(() => {
      initialOverlay.style.display = 'none';
      galleryContent.style.display = 'block';
      
      // Scroll suave hacia el header
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }, 800);
  });
}
