const formularioContacto= document.getElementById("formulario");
/* boton correo envio formulario */
const botonMailTo = document.getElementById("correoRecepcion");

formularioContacto.addEventListener("submit",enviarMensaje);

function enviarMensaje(e){
    e.preventDefault()


const form= new FormData(formularioContacto)
console.log(form.get("name")); 

botonMailTo.setAttribute("href",`mailto:barbara1860@gmail.com?subject=nombre ${form.get("name")} correoElec${form.get('email')}&body=${form.get('mensaje')}`);

botonMailTo.click()

 
};