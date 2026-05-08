
function MOSTRARMENSAJE(boton) {
    let mensaje = document.getElementById("mensaje");

    // OCULTAR EL BOTÓN
    boton.style.display = "none"; 

    mensaje.innerHTML = "cuida y protege a los animales";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}

function MOSTRARMENSAJE2(boton) {
    let mensaje = document.getElementById("mensaje2");

    // OCULTAR EL BOTÓN
    boton.style.display = "none";

    mensaje.innerHTML = "Hola mi nombre es Edwin Emilio Salinas Salinas tengo 16 años estudio en el CECyte EMSaD 35 mi mi pasatiempo favorito es ensayar musica";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}










