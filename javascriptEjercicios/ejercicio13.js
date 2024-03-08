// . Escribir un programa que lea 4 números y calcule la media.

function numeros() {

  n1 = parseInt(prompt("Ingrese el primer numero"));
  n2 = parseInt(prompt("Ingrese el segundo numero"));
  n3 = parseInt(prompt("Ingrese el tercer numero"));
  n4 = parseInt(prompt("Ingrese el cuarto numero"));
  let promedio = (n1 + n2 + n3 + n4) / 4

  alert(`El promedio de los 4 numero es ${promedio}`)
}
numeros()