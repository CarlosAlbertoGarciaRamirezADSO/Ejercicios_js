// Escribir un programa que pida al usuario dos números y muestre por pantalla su
// división, si el divisor es cero el programa debe mostrar un error, se debe manejar
// mediante excepciones y el mensaje debe ser personalizado.

let a = prompt("Ingrese el numero dividendo");
let b = prompt("Ingrese el numero divisor");

let dividir = a / b;

try {
  if (b <= 0) {
    throw Error();
  }

} catch (error) {
  alert("No se puede dividir por cero")
}
alert(dividir);