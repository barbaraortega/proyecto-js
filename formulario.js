
/*formulario de contacto */

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

            swal("Tu correo se ha enviado correctamente!", "Pronto te responderemos", "success");
            
        } else {
            console.log(response);
        }
    } catch (error) {
        swal("oopss", "ocurrio un error", "error");

    }
} 