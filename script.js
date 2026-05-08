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
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {

    e.preventDefault();

    let valido = true;

    // CAMPOS
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const mensaje = document.getElementById("mensajeForm");

    // ERRORES
    const errores = document.querySelectorAll(".error");

    errores.forEach(error => {
        error.textContent = "";
    });

    // VALIDAR NOMBRE
    if(nombre.value.trim() === "") {
        errores[0].textContent = "El nombre es obligatorio";
        valido = false;
    }

    // VALIDAR CORREO
    if(correo.value.trim() === "") {

        errores[1].textContent = "El correo es obligatorio";
        valido = false;

    } else if(!correo.value.includes("@")) {

        errores[1].textContent = "Correo no válido";
        valido = false;
    }

    // VALIDAR MENSAJE
    if(mensaje.value.trim() === "") {

        errores[2].textContent = "El mensaje es obligatorio";
        valido = false;
    }

    // SI TODO ESTA BIEN
    if(valido) {

        document.getElementById("exito").textContent =
        "Formulario enviado correctamente ✅";

        formulario.reset();
    }

});
// ===== FAQ MASCOTAS =====

const preguntas = document.querySelectorAll(".faq-item");

preguntas.forEach(item => {

    const pregunta = item.querySelector(".faq-question");

    pregunta.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});










