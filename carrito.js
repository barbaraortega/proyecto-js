class Producto {
    constructor(producto) {
        this.id = producto.id;
        this.nombre = producto.nombre;
        this.precio = producto.precio;
        this.foto = producto.foto;
    }
}

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

/**  constantes */
const estandarPesosChilenos = Intl.NumberFormat('es-CL');

//Arrays para guarda catálogo de productos y elementos en carrito
const productos = [];
const elementosCarrito = [];
/* const totalCarrito=document.getElementById("total-carrito"); */
const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarritoCompras = document.querySelector("#items")
const contenedorFooterCarrito = document.querySelector("#footer");

/* Ejecución */

cargarProductos();
cargarCarrito();
dibujarCarrito();


/**
 * funciones
 */

function cargarProductos() {
    fetch('/productos.json', {
        method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
        for (const product of data) {
            productos.push(new Producto(product));
        }
        if(productos.length > 0){
            dibujarCatalogoProductos();
        }
        
    })
    .catch(err => {
        console.log(err);
    })

}

function cargarCarrito() {
    const x = localStorage.getItem("carro");
    if (x) {
        const pRecuperados = JSON.parse(x);
        pRecuperados.forEach(
            (elemento) => {
                elementosCarrito.push(elemento)
            })
    }
}

function dibujarCarrito() {
    contenedorCarritoCompras.innerHTML = "";

    /*     totalCarrito.innerHTML = ""; */

    let total = 0;
    elementosCarrito.forEach(
        (elemento) => {
            total = total + (elemento.producto.precio * elemento.cantidad);
            let renglonesCarrito = document.createElement("tr");

            /* desestructuracion */
            /* const { id,precio}=elemento.producto;
            console.log(id,precio); */

            renglonesCarrito.innerHTML = `
                <td>${elemento.producto.id}</td>
                <td>${elemento.producto.nombre}</td>
                <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>
                <td>$ ${estandarPesosChilenos.format(elemento.producto.precio)}</td>
                <td>$ ${estandarPesosChilenos.format(elemento.producto.precio * elemento.cantidad)}</td>
                <td><button id="eliminar-producto-${elemento.producto.id}" type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>  
                
            `;

            contenedorCarritoCompras.append(renglonesCarrito);

            //Agregar evento a input de renglón en carrito
            let inputCantidadProducto = document.getElementById(`cantidad-producto-${elemento.producto.id}`);
            inputCantidadProducto.addEventListener('change', (ev) => {
                let nuevaCantidad = ev.target.value;
                elemento.cantidad = nuevaCantidad;

                dibujarCarrito();
            });


            //Agregar evento a eliminar producto
            let botonEliminarProducto = document.getElementById(`eliminar-producto-${elemento.producto.id}`);
            botonEliminarProducto.addEventListener('click', () => {

                let indiceEliminar = elementosCarrito.indexOf(elemento);
                elementosCarrito.splice(indiceEliminar, 1);

                dibujarCarrito();
            });


        }
    );


    /* total carrito con operador ternario */

    const valorInicial = 0;
    const totalCompra = elementosCarrito.reduce(
        (previousValue, currentValue) => previousValue + currentValue.producto.precio * currentValue.cantidad,
        valorInicial
    );

    contenedorFooterCarrito.innerHTML = elementosCarrito.length === 0 ? `<th scope="row" colspan="6">Carrito vacío - comience a comprar!</th>` : `<th scope="row" colspan="6">Total de la compra: ${totalCompra}</th>`;


}

function removerProductoCarrito(elementoAEliminar) {
    const elementosAMantener = elementosCarrito.filter((elemento) => elementoAEliminar.producto.id != elemento.producto.id);
    elementosCarrito.length = 0;

    elementosAMantener.forEach((elemento) => elementosCarrito.push(elemento));
}

/* cards */

function crearCard(producto) {
    //Botón
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-success";
    botonAgregar.innerText = "Agregar";

    //Card body
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>$ ${estandarPesosChilenos.format(producto.precio)}</p>
    `;
    cuerpoCarta.append(botonAgregar);

    //Imagen
    let imagen = document.createElement("img");
    imagen.src = producto.foto;
    imagen.className = "card-img-top";
    imagen.alt = producto.nombre;

    //Card
    let carta = document.createElement("div");
    carta.className = "card m-2 p-2";
    carta.style = "width: 16rem";
    carta.append(imagen);
    carta.append(cuerpoCarta);


    /* evento */
    botonAgregar.onclick = () => {

        let elementoExistente =
            elementosCarrito.find((elem) => elem.producto.id === producto.id);

        if (elementoExistente) {
            elementoExistente.cantidad += 1;
        } else {
            let elementoCarrito = new ElementoCarrito(producto, 1);
            elementosCarrito.push(elementoCarrito);

            localStorage.setItem("carro", JSON.stringify(elementosCarrito))
        }

        dibujarCarrito();

        swal({
            title: '¡Producto agregado!',
            text: `${producto.nombre} agregado al carrito`,
            icon: 'success',
            buttons: {
                cerrar: {
                    text: "cerrar",
                    value: false
                },
                carrito: {
                    text: "ir a carrito",
                    value: true
                }
            }
        }).then((decision) => {
            if (decision) {
                const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), { keyboard: true });
                const modalToggle = document.getElementById('toggleMyModal');
                myModal.show(modalToggle);
            } else {
                swal("No quieres ir al carrito");
            }
        });

    }

    return carta;

}

function dibujarCatalogoProductos() {
    contenedorProductos.innerHTML = "";

    productos.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto);
            contenedorProductos.append(contenedorCarta);
        }
    );

}

