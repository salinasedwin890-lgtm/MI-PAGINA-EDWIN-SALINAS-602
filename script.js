function MOSTRARMENSAJE() {
    let mensaje = document.getElementById("mensaje");

    if (mensaje.style.display === "block") {
        // Ocultar mensaje
        mensaje.style.opacity = "0";
        mensaje.style.transform = "translateY(-20px)";

        setTimeout(() => {
            mensaje.style.display = "none";
        }, 300);

    } else {
        // Mostrar mensaje
        mensaje.innerHTML = "cuida y protege a los animales";
        mensaje.style.display = "block";

        setTimeout(() => {
            mensaje.style.opacity = "1";
            mensaje.style.transform = "translateY(0)";
        }, 50);
    }
}

function MOSTRARMENSAJE2() {
    let mensaje = document.getElementById("mensaje2");

    if (mensaje.style.display === "block") {
        // Ocultar mensaje
        mensaje.style.opacity = "0";
        mensaje.style.transform = "translateY(-20px)";

        setTimeout(() => {
            mensaje.style.display = "none";
        }, 300);

    } else {
        // Mostrar mensaje
        mensaje.innerHTML = "Hola mi nombre es Edwin Emilio Salinas Salinas tengo 16 años estudio en el CECyte EMSaD 35 y mi pasatiempo favorito es ensayar música";
        mensaje.style.display = "block";

        setTimeout(() => {
            mensaje.style.opacity = "1";
            mensaje.style.transform = "translateY(0)";
        }, 50);
    }
}










