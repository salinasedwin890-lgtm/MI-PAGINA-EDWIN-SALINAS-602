 /*function MOSTRARMENSAJE () {

    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "cuida y protege a los animales";
    mensaje.style.display ="block";

 setTimeout(()  => {
    mensaje.style.opacity = "i";
    mensaje.style.transform = "translatey (0)";
},50); */ 

function MOSTRARMENSAJE () {
    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "cuida y protege a los animales";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}











