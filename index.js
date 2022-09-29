/* 


const valorFinal = (precios) => {
    let suma = 0;
    for (let i = 0; i < precios.length; i++) {
        suma = suma + precios[i];
    }

    let pcgDcto = 0;
    if (suma >= 10000 && suma < 20000) {
        pcgDcto = 0.1;

    } else if (suma >= 20000) {
        pcgDcto = 0.2;
    }

    return suma - (suma * pcgDcto)

}

let valores = [];
let producto1 = parseInt(prompt("ingrese el valor de su primer producto"));
let producto2 = parseInt(prompt("ingrese el valor de su segundo producto"));
let producto3 = parseInt(prompt("ingrese el valor de su tercer producto"));
let producto4 = parseInt(prompt("ingrese el valor de su cuarto producto"));


valores.push(producto1);
valores.push(producto2);
valores.push(producto3);
valores.push(producto4);

const totalPago = valorFinal(valores);

alert("el valor total a pagar es : " + totalPago + " . Gracias por su compra."); */



/* buscador de productosPrueba */
/* 

const productosPrueba = [
    { id: 1, nombre: "guatero semillas", precio: 10000 },
    { id: 2, nombre: "lumbar", precio: 8000 },
    { id: 3, nombre: "muñeca", precio: 5000 },
    { id: 4, nombre: "lactancia", precio: 8000 },
];

const buscarProductos = (nombre) => {

    let productosPruebaFiltrados = productosPrueba.filter(item => item.nombre.includes(nombre));
    /* console.log(productosPruebaFiltrados) */

/*  let mensaje = "";
 if (productosPruebaFiltrados.length === 0) {
     mensaje = "producto no encontrado";
 } else {

     for (const item of productosPruebaFiltrados) {
         mensaje = mensaje + `
         Nombre: ${item.nombre}
         Precio: ${item.precio} 
         ` ;
     }

 }

 alert(mensaje);
}

let nombre = prompt("ingrese el nombre del producto que busca");
buscarProductos(nombre); */




/* dom */

/* const productosPrueba = [
    { id: 1, nombre: "guatero semillas", precio: 10000 },
    { id: 2, nombre: "lumbar", precio: 8000 },
    { id: 3, nombre: "muñeca", precio: 5000 },
    { id: 4, nombre: "lactancia", precio: 8000 },
];

const buscarProductos = (nombre) => {

    let contenedor = document.getElementById("contenedor");
    let productosPruebaFiltrados = productosPrueba.filter(item => item.nombre.includes(nombre));

    let mensaje = "";
    if (productosPruebaFiltrados.length === 0) {
        mensaje = "producto no encontrado";
    } else {

        for (const prod of productosPruebaFiltrados) {
            let item = document.createElement("div");
            item.innerHTML = `<p> Nombre: ${prod.nombre} </p>
                         <p>Precio: ${prod.precio}  </p>
                         ` ;
                         item.className = 'ejemplo';

            contenedor.append(item);
        }
    }
}

let nombre = prompt("ingrese el nombre del producto que busca");
buscarProductos(nombre);  */


/* evento */

/* buscador de productos */
const productosPrueba = [
    { id: 1, nombre: "guatero semillas", precio: 10000, link: './paginas/bienestar.html' },
    { id: 2, nombre: "lumbar", precio: 8000,link: './paginas/bienestar.html' },
    { id: 3, nombre: "muñeca", precio: 5000,link: './paginas/bienestar.html' },
    { id: 4, nombre: "lactancia", precio: 8000,link: './paginas/bienestar.html' },
];

const buscarProductos = (nombre) => {

    let productosPruebaFiltrados = productosPrueba.filter(item => item.nombre.includes(nombre));

    let mensaje = "";
    if (productosPruebaFiltrados.length === 0) {
        mensaje = "producto no encontrado";
    } else {

        for (const prod of productosPruebaFiltrados) {
            let item = document.createElement("div");
            item.innerHTML = `<p> Nombre: ${prod.nombre} </p>
                         <p>Precio: ${prod.precio}  </p>
                         <a href="${prod.link}">detalle </a>
                         ` ;
                         item.className ='resultado col-3 card border-success mb-3';

            contenedor.append(item);
        }
    }
}

/* let nombre = prompt("ingrese el nombre del producto que busca");
buscarProductos(nombre); */ 


let boton = document.getElementById("btnBuscar");
boton.addEventListener("click",(e) => {
    e.preventDefault();

    let inpTexto = document.getElementById("inpBuscar");
    console.log(inpTexto.value);
    buscarProductos(inpTexto.value);
} )