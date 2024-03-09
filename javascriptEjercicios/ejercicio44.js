// Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
// constante el valor de una moneda.

let escoger = parseInt(prompt("Escoja a que quiere convertir \n 1.dolares \n 2.euros "));

switch (escoger) {
  case 1:
    let pesos_d = parseInt(prompt("Ingrese los pesos a convertir"));
    let dolar = pesos_d * 0.00026
    alert(`Los dolares son ${dolar}`)
    break;
  case 2:
    let pesos_e = parseInt(prompt("Ingrese los pesos a convertir"));
    let euro = pesos_e * 0.00023
    alert(`Los dolares son ${euro}`)
    break;
}
