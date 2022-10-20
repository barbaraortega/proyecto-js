
/* buscador de productos */
const productosPrueba = [
    { id: 1, nombre: "guatero semillas", precio: 10000, link: './paginas/bienestar.html' },
    { id: 2, nombre: "lumbar", precio: 8000, link: './paginas/bienestar.html' },
    { id: 3, nombre: "muñeca", precio: 5000, link: './paginas/bienestar.html' },
    { id: 4, nombre: "lactancia", precio: 8000, link: './paginas/bienestar.html' },
];

const resultado = document.getElementById("resultado")
resultado.innerHTML = "";

const buscarProductos = (nombre) => {

    let productosPruebaFiltrados = productosPrueba.filter(item => item.nombre.includes(nombre));

    let mensaje = "";
    if (productosPruebaFiltrados.length === 0) {
        mensaje = "producto no encontrado";
    } else {

        for (const prod of productosPruebaFiltrados) {
            resultado.innerHTML += `<li> Nombre: ${prod.nombre} - Precio: ${prod.precio} - <a href="${prod.link}"> link </a> </li>
            ` ;

            resultado.append(resultado);
        }
    }if (resultado.innerHTML===""){
        resultado.innerHTML +=` <li> Producto no encontrado..</li>`;
    }
}


let boton = document.getElementById("btnBuscar");
boton.addEventListener("click", (e) => {
    e.preventDefault();

    let inpTexto = document.getElementById("inpBuscar");
    console.log(inpTexto.value);
    buscarProductos(inpTexto.value);

})

