// Escribir un programa que calcule el área y el volumen de un cilindro.

let pi = 3.1416;

let radio = parseInt(prompt("Ingrese el radio de el cilindro: "));

let altura = parseInt(prompt("Ingrese la altura de el cilindro: "));

let area = 2 * pi * radio*(radio+altura);
let volumen = pi*Math.pow(radio,2)*altura;

alert(`El area de el cilindro es de ${area}`)
alert(`El volumen de el cilindro es ${volumen}`)