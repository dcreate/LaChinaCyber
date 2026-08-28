// ==================================================
    // DATOS
    // ==================================================

    const CARD_NUMBER = "4152314231084636";

    const CARD_OWNER = "AMERICA VAZQUEZ CRUZ";


    // ==================================================
    // MOSTRAR DATOS
    // ==================================================

    function formatearNumero(numero) {

      return numero
        .replace(/\D/g, '')
        .replace(/(.{4})/g, '$1 ')
        .trim();

    }


    document.getElementById("titular").textContent =
      CARD_OWNER;


    document.getElementById("numero").textContent =
      formatearNumero(CARD_NUMBER);


    // ==================================================
    // COPIAR AL PORTAPAPELES
    // ==================================================

    async function copiarDato(elemento, boton, mensaje) {

      let texto;

      if (elemento === "titular") {

        texto = CARD_OWNER;

      } else {

        texto = CARD_NUMBER;

      }


      try {

        await navigator.clipboard.writeText(texto);

      } catch (error) {

        // Método alternativo

        const textarea =
          document.createElement("textarea");

        textarea.value = texto;

        document.body.appendChild(textarea);

        textarea.select();

        document.execCommand("copy");

        textarea.remove();

      }


      // Animación

      const botonElemento =
        document.getElementById(boton);

      botonElemento.classList.add("copiado");


      const textoOriginal =
        botonElemento.innerHTML;


      botonElemento.innerHTML =
        "✓ ¡Copiado!";


      document.getElementById("mensaje").textContent =
        mensaje;


      // Regresar botón a su estado normal

      setTimeout(() => {

        botonElemento.classList.remove("copiado");

        botonElemento.innerHTML =
          textoOriginal;

        document.getElementById("mensaje").textContent =
          "";

      }, 1800);

    }


    // ==================================================
    // GENERAR QR
    // ==================================================

    const paginaActual =
      CARD_NUMBER;


    const qrURL =
      "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="
      + encodeURIComponent(paginaActual);


    document.getElementById("qrImagen").src =
      qrURL;
