// . Escribir un programa que sume, resta, multiplique y divida dos números.

let num1 = parseInt(prompt("Ingrese el numero 1: "));
let num2 = parseInt(prompt("Ingrese el numero 2: "));

let elegir = parseInt(prompt("Escoja que operacion quiere hacer \n 1.Suma \n 2.Resta \n 3.Multiplicacion \n 4.Division"))

switch (elegir) {
  case 1:
    let suma = num1 + num2;
    alert(`La suma de los dos numeros es ${suma}`)
    break;
  case 2:
    let resta = num1 - num2;
    alert(`La suma de los dos numeros es ${resta}`)
    break;
  case 3:
    let mult = num1 * num2;
    alert(`La suma de los dos numeros es ${mult}`)
    break;

  case 4:
    let div = num1 / num2;
    alert(`La division es ${div}`)
    try {
      if (num2 <= 0) {
        throw Error
      }
    } catch (Error) {
      alert("no se puede dividir por 0")
    }
}