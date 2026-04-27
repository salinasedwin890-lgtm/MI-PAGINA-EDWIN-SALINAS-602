function MOSTRARMENSAJE () {
    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "cuida y protege a los animales";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}

    function MOSTRARMENSAJE2() {
    let mensaje = document.getElementById("mensaje2");
    mensaje.innerHTML = "Hola mi nombre es Edwin Emilio Salinas Salinas tengo 16 años estudio en el CECyte EMSaD 35 mi mi pasatiempo favorito es ensayar musica";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}










