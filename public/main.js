// PLANTILLA DE INVITACIÓN DIGITAL XV AÑOS - main.js
// --------------------------------------------------
// Incluye lógica para temporizador, WhatsApp, copiar CVU y compartir.

// 1. Temporizador (Countdown)
// Cambia la fecha del evento aquí:
const EVENT_DATE = new Date("2025-09-05T22:00:00");
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = EVENT_DATE - now;
  if (diff <= 0) {
    countdownEl.textContent = "¡El evento ha comenzado!";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  countdownEl.textContent = `${days} días ${hours} hrs ${mins} min ${secs} seg`;
}
if (countdownEl) {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// 2. Confirmación por WhatsApp
// Cambia el número de WhatsApp aquí (solo números, sin + ni espacios):
const WHATSAPP_NUMBER = "5215555555555";
const whatsappBtn = document.getElementById("whatsapp-btn");
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value.trim();
    const asistira = document.getElementById("asistira").checked;
    const acompanantes = document.getElementById("acompanantes").value;
    const comentarios = document.getElementById("comentarios").value.trim();
    if (!nombre) {
      alert("Por favor, ingresa tu nombre.");
      return;
    }
    let mensaje = `Hola, soy ${nombre}.`;
    mensaje += asistira ? " Confirmo mi asistencia" : " No podré asistir";
    if (acompanantes > 0) mensaje += ` con ${acompanantes} acompañante(s)`;
    if (comentarios) mensaje += `. Comentarios: ${comentarios}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  });
}

// 3. Copiar CVU/CLABE
const copyCvuBtn = document.getElementById("copy-cvu");
if (copyCvuBtn) {
  copyCvuBtn.addEventListener("click", function () {
    const cvuInput = document.getElementById("cvu");
    cvuInput.select();
    cvuInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copyCvuBtn.textContent = "¡Copiado!";
    setTimeout(() => (copyCvuBtn.textContent = "Copiar"), 1500);
  });
}

// =====================
// COPIAR CBU/CLABE EN INFO EXTRA
// =====================
const copyCbuBtn = document.getElementById("copy-cbu");
if (copyCbuBtn) {
  copyCbuBtn.addEventListener("click", function () {
    const cbuText = document.getElementById("cbu-text").textContent;
    // Copiar al portapapeles
    if (navigator.clipboard) {
      navigator.clipboard.writeText(cbuText);
    } else {
      // Fallback para navegadores antiguos
      const tempInput = document.createElement("input");
      tempInput.value = cbuText;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }
    // Feedback visual
    const original = copyCbuBtn.innerHTML;
    copyCbuBtn.innerHTML = '<i class="bi bi-clipboard-check"></i> ¡Copiado!';
    copyCbuBtn.classList.remove("btn-outline-secondary");
    copyCbuBtn.classList.add("btn-success");
    setTimeout(() => {
      copyCbuBtn.innerHTML = '<i class="bi bi-clipboard"></i>';
      copyCbuBtn.classList.remove("btn-success");
      copyCbuBtn.classList.add("btn-outline-secondary");
    }, 1500);
  });
}

// 4. Compartir en redes sociales
const shareWhatsapp = document.getElementById("share-whatsapp");
const shareFacebook = document.getElementById("share-facebook");
const shareTwitter = document.getElementById("share-twitter");
const INVITATION_URL = window.location.href;
const SHARE_TEXT = "¡Te invito a mis XV Años! Mira la invitación:";

if (shareWhatsapp) {
  shareWhatsapp.addEventListener("click", function () {
    const url = `https://wa.me/?text=${encodeURIComponent(
      SHARE_TEXT + " " + INVITATION_URL
    )}`;
    window.open(url, "_blank");
  });
}
if (shareFacebook) {
  shareFacebook.addEventListener("click", function () {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      INVITATION_URL
    )}`;
    window.open(url, "_blank");
  });
}
if (shareTwitter) {
  shareTwitter.addEventListener("click", function () {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      SHARE_TEXT
    )}&url=${encodeURIComponent(INVITATION_URL)}`;
    window.open(url, "_blank");
  });
}

// =====================
// DATOS DEL EVENTO (EDITA AQUÍ)
// =====================
const EVENT_TITLE = "Mi segundo año de Amadeo";
const EVENT_DESCRIPTION = "Te espero en mi fiesta!";
const EVENT_LOCATION = "Iglesia San Juan, Ciudad";
// Formato: YYYY-MM-DDTHH:MM:SS (hora local)
const EVENT_START = "2025-10-24T19:00:00";
const EVENT_END = "2025-10-24T22:00:00";

// =====================
// FUNCIONES DE CALENDARIO
// =====================
function pad(n) {
  return n < 10 ? "0" + n : n;
}
function toGoogleDate(dateStr) {
  // Convierte a formato YYYYMMDDTHHMMSSZ (UTC)
  const date = new Date(dateStr);
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function updateCalendarLinks() {
  // Google Calendar
  const googleUrl =
    "https://www.google.com/calendar/render?action=TEMPLATE" +
    "&text=" +
    encodeURIComponent(EVENT_TITLE) +
    "&dates=" +
    toGoogleDate(EVENT_START) +
    "/" +
    toGoogleDate(EVENT_END) +
    "&details=" +
    encodeURIComponent(EVENT_DESCRIPTION) +
    "&location=" +
    encodeURIComponent(EVENT_LOCATION);
  document.getElementById("google-calendar-link").href = googleUrl;

  // Outlook Calendar
  const outlookUrl =
    "https://outlook.live.com/calendar/0/deeplink/compose?" +
    "subject=" +
    encodeURIComponent(EVENT_TITLE) +
    "&body=" +
    encodeURIComponent(EVENT_DESCRIPTION) +
    "&startdt=" +
    encodeURIComponent(EVENT_START) +
    "&enddt=" +
    encodeURIComponent(EVENT_END) +
    "&location=" +
    encodeURIComponent(EVENT_LOCATION);
  document.getElementById("outlook-calendar-link").href = outlookUrl;

  // iCalendar (.ics) dinámico
  document.getElementById("icalendar-link").onclick = function (e) {
    e.preventDefault();
    const dtStart = toGoogleDate(EVENT_START).replace(/Z$/, "");
    const dtEnd = toGoogleDate(EVENT_END).replace(/Z$/, "");
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "SUMMARY:" + EVENT_TITLE,
      "DTSTART:" + dtStart,
      "DTEND:" + dtEnd,
      "DESCRIPTION:" + EVENT_DESCRIPTION,
      "LOCATION:" + EVENT_LOCATION,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = EVENT_TITLE.replace(/\s+/g, "_") + ".ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
}

document.addEventListener("DOMContentLoaded", updateCalendarLinks);

// =====================
// CONFIRMACIÓN DE ASISTENCIA - WhatsApp RSVP
// =====================
const RSVP_WHATSAPP_NUMBER = "5491162868825"; // sin +
const rsvpBtn = document.getElementById("rsvp-whatsapp-btn");
if (rsvpBtn) {
  rsvpBtn.addEventListener("click", function () {
    const nombre = document.getElementById("rsvp-nombre").value.trim();
    const cantidad = document.getElementById("rsvp-cantidad").value;
    const menu = document.querySelector('input[name="rsvp-menu"]:checked');
    const comentarios = document
      .getElementById("rsvp-comentarios")
      .value.trim();
    const errorDiv = document.getElementById("rsvp-error");
    let errorMsg = "";
    if (!nombre) errorMsg = "Por favor, ingresa tu nombre.";
    else if (!cantidad || cantidad < 1)
      errorMsg = "Indica cuántas personas confirman.";
    else if (!menu) errorMsg = "Selecciona un menú preferido.";
    if (errorMsg) {
      errorDiv.textContent = errorMsg;
      errorDiv.style.display = "block";
      return;
    } else {
      errorDiv.style.display = "none";
    }
    let mensaje = `Hola! Mi nombre es ${nombre}. Confirmo ${cantidad} persona(s) para el evento.`;
    mensaje += ` Menú elegido: ${menu.value}.`;
    if (comentarios) mensaje += ` Comentarios: ${comentarios}`;
    const url = `https://wa.me/${RSVP_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  });
}

// =====================
// SOBRE ANIMADO DE ABRIR INVITACIÓN
// =====================
const openInvitationBtn = document.getElementById("open-invitation-btn");
const initialOverlay = document.getElementById("initial-overlay");
const invitationContent = document.getElementById("invitation-content");
const envelopeWrapper = document.querySelector(".envelope-wrapper");

if (openInvitationBtn) {
  openInvitationBtn.addEventListener("click", function () {
    // Reproducir audio automáticamente al hacer clic en "¡Abrir!"
    const audio = document.getElementById("bg-audio");
    if (audio) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log("Audio reproducido automáticamente");
        }).catch((error) => {
          console.log("No se pudo reproducir automáticamente:", error);
        });
      }
    }

    // Iniciar animación del sobre
    envelopeWrapper.classList.add("opening");

    // Esperar a que termine la animación del sobre (1.5s total)
    setTimeout(() => {
      // Ocultar overlay con animación
      initialOverlay.classList.add("fade-out");

      // Mostrar contenido de la invitación
      setTimeout(() => {
        initialOverlay.style.display = "none";
        invitationContent.style.display = "block";

        // Reinicializar AOS para que las animaciones funcionen
        if (typeof AOS !== "undefined") {
          AOS.refresh();
        }

        // Scroll suave hacia el hero
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 100);
      }, 800);
    }, 1500);
  });
}
