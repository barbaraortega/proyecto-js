
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

alert("el valor total a pagar es : " + totalPago + " . Gracias por su compra.");