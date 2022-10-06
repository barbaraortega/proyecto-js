/* const formularioContacto= document.getElementById("formulario"); */
/* boton correo envio formulario */
/* const botonMailTo = document.getElementById("correoRecepcion");

formularioContacto.addEventListener("submit",enviarMensaje);

function enviarMensaje(e){
    e.preventDefault()


const form= new FormData(formularioContacto)
console.log(form.get("name")); 

botonMailTo.setAttribute("href",`mailto:barbara1860@gmail.com?subject=nombre ${form.get("name")} correoElec${form.get('email')}&body=${form.get('mensaje')}`);

botonMailTo.click()

 
};
 */




/* opcion 2 */

const formularioContacto = document.getElementById("formulario");
formularioContacto.addEventListener("submit", enviarMensaje);
async function enviarMensaje(e) {
    e.preventDefault()

    try {
        const form = new FormData(formularioContacto)
        const response = await fetch(formularioContacto.action, {
            mode: 'no-cors',
            method: formularioContacto.method,
            body: form,
            Headers: {
                "accept": "aplication/JSON"
            }
        })
        if (response.status === 0) {
            formularioContacto.reset()
            alert("gracias")
        } else {
            console.log(response);
        }
    } catch (error) {
alert("ocurrio un error")
    }
} 