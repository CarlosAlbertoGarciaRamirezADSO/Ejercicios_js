// 4. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// todos los números impares desde 1 hasta ese número separados por coma.

let numero = parseInt(prompt("Ingrese un numero"));

for (let i = 0; i <= numero; i++) {
  if (i % 2 == 1) {
    alert(`El numero impares son ${i}`)
  }
}
