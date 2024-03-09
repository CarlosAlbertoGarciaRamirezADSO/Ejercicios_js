// . Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// la cuenta atrás desde ese número hasta cero separados por comas.

let numero = parseInt(prompt("Ingrese el numero: "));
const array = []

for (let i = 1; i <= numero; i++) {
  array.push(i)
}
alert(array);
