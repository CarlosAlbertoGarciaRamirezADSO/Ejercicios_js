// Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre 
// por pantalla el número de veces que aparece la letra en la frase. 


let frase = prompt("Ingrese una frase:");
let letra = prompt("Ingrese una letra:");

frase = frase.toLowerCase();
letra = letra.toLowerCase();
let contador = frase.split(letra).length - 1;
console.log(`La letra "${letra}" aparece ${contador} veces en la frase.`);
