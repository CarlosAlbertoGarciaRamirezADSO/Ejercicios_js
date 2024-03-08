// Escribir un programa que calcule el volumen de una esfera

let pi = 3.1416;

let radio = parseInt(prompt("Ingrese el radio de la esfera: "));

let volumen = (4 / 3) * pi * Math.pow(radio, 3);

alert(`El volumen de la esfera es de ${volumen}`)