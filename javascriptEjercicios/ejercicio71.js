// Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un 
// número primo o no. 


let numero = parseInt(prompt("Ingrese un numero entero:"));


if (numero <= 1) {
    console.log(`${numero} no es un número primo.`);
} else {
    let esPrimo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        alert(`${numero} es un número primo.`);
    } else {
        alert(`${numero} no es un número primo.`);
    }
}
