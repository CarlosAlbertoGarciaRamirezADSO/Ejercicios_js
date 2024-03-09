// Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo 
// grado: a * x2 + b + x + c, siendo X un valor constante. 

let a = parseInt(prompt("Ingrese el valor de a"));
let b = parseInt(prompt("Ingrese el valor de b"));
let c = parseInt(prompt("Ingrese el valor de c"));
const x = parseInt(prompt("Ingrese el valor de x"));

let solucion = a * Math.pow(x, 2) + b * x + c;

alert(`El resultado de la ecuación cuadrática es: ${solucion}`);
