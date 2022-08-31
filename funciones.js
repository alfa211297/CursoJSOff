'use strict'

function porConsola(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
    console.log(mostrar);
    console.log("*********************************");

}

function porPantalla(numero1, numero2) {
    document.write("Suma: " + (numero1 + numero2) + "<br>");
    document.write("Resta: " + (numero1 - numero2) + "<br>");
    document.write("Multiplicacion: " + (numero1 * numero2) + "<br>");
    document.write("Division: " + (numero1 / numero2) + "<br>");
    document.write(mostrar + "<br>");
}

function calaculadora(numero1, numero2, mostrar = true) {
    if (mostrar == false) {
        porConsola(numero1, numero2);
    } else {
        porPantalla(numero1, numero2);
    }
    return true;
}

calaculadora(1, 4);
calaculadora(2, 5, true);