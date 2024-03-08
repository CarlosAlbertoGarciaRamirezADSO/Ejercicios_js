// . Escribir un programa que calcule la longitud y el área de una circunferencia.

const pi = 3.1416;

let radio = parseInt(prompt("Ingrese el radio de la circunferencia: "));

let longitud = 2 * pi * radio;
let area = pi * Math.pow(radio, 2);

alert(`El area de el radio es ${area}`);
alert(`La longitud de el radio es ${longitud}`);