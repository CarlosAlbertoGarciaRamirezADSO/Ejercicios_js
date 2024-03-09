// Calcule el mayor de tres números, permitiendo leer 3 valores diferentes

let a = parseInt(prompt("Ingrese el numero 1: "));
let b = parseInt(prompt("Ingrese el numero 2: "));
let c = parseInt(prompt("Ingrese el numero 3: "));


let max = Math.max(a, b, c);
if (a === max) {
  alert(`El numero mayo es ${a}`)
} else if (b == max) {
  alert(`El numero maximo es ${b}`)
} else if (c == max) {
  alert(`El numero maximo es ${c}`)
}

