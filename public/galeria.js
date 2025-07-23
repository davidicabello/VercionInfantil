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
// AUDIO OPTIMIZADO PARA GALERÍA
// =====================
const audio = document.getElementById('bg-audio');
const btn = document.getElementById('audio-toggle');
const icon = document.getElementById('audio-icon');
let isPlaying = false;

// Optimizar audio para móviles
if (audio) {
  audio.preload = 'metadata';
  audio.volume = 0.7;
  audio.setAttribute('playsinline', '');
  audio.setAttribute('webkit-playsinline', '');
}

// Pausar audio cuando la página pierde el foco
document.addEventListener('visibilitychange', function() {
  if (audio && !document.hidden && isPlaying) {
    audio.play().catch(e => console.log('No se pudo reanudar:', e));
  } else if (audio && document.hidden && !audio.paused) {
    audio.pause();
  }
});

// Pausar audio cuando el usuario sale de la página
window.addEventListener('beforeunload', function() {
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0;
  }
});

// Pausar audio cuando la página se descarga
window.addEventListener('pagehide', function() {
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0;
  }
});

// Intenta reproducir automáticamente
window.addEventListener('DOMContentLoaded', () => {
  if (audio) {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        isPlaying = true;
        setIcon();
      }).catch(() => {
        isPlaying = false;
        setIcon();
      });
    }
  }
});

if (btn) {
  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      isPlaying = true;
    } else {
      audio.pause();
      isPlaying = false;
    }
    setIcon();
  });
}

function setIcon() {
  if (audio.paused) {
    icon.innerHTML = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;
  } else {
    icon.innerHTML = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
  }
}

if (audio) {
  audio.addEventListener('play', setIcon);
  audio.addEventListener('pause', setIcon);
  audio.addEventListener('error', function(e) {
    console.log('Error de audio:', e);
    isPlaying = false;
    setIcon();
  });
}

// =====================
// BOTÓN CIRCULAR DE ABRIR GALERÍA
// =====================
const openInvitationBtn = document.getElementById('open-invitation-btn');
const initialOverlay = document.getElementById('initial-overlay');
const galleryContent = document.getElementById('gallery-content');

if (openInvitationBtn) {
  openInvitationBtn.addEventListener('click', function() {
    // Reproducir audio automáticamente al hacer clic en el botón
    const audio = document.getElementById('bg-audio');
    if (audio) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log("Audio reproducido automáticamente en galería");
        }).catch((error) => {
          console.log("No se pudo reproducir automáticamente:", error);
        });
      }
    }

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
