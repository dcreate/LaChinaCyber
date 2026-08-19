   // ==================================================
    // COLOCA AQUÍ EL NÚMERO DE TARJETA
    // ==================================================

    const CARD_NUMBER = "4152314231084636";


    // Mostrar número con espacios cada 4 dígitos
    function formatearNumero(numero) {
      return numero.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    }

    document.getElementById("numero").textContent =
      formatearNumero(CARD_NUMBER);


    // ==================================================
    // COPIAR AL PORTAPAPELES
    // ==================================================

    async function copiarNumero() {

      try {

        await navigator.clipboard.writeText(CARD_NUMBER);

        document.getElementById("mensaje").textContent =
          "✓ Número copiado al portapapeles";

        setTimeout(() => {
          document.getElementById("mensaje").textContent = "";
        }, 2500);

      } catch (error) {

        // Método alternativo para navegadores antiguos
        const textarea = document.createElement("textarea");

        textarea.value = CARD_NUMBER;
        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand("copy");

        textarea.remove();

        document.getElementById("mensaje").textContent =
          "✓ Número copiado al portapapeles";
      }
    }


    // ==================================================
    // GENERAR QR
    // ==================================================

    const paginaActual = CARD_NUMBER;

    const qrURL =
      "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="
      + encodeURIComponent(paginaActual);

    document.getElementById("qrImagen").src = qrURL;