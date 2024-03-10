// Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el 
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que 
// dura la inversión

let invertir =parseInt(prompt("Ingrese la cantidad a invertir: "));
let interes  =parseInt(prompt("Ingrese el intereres anual: "))/100;
let años = parseInt(prompt("Ingrese el numero de años: "));


for (let i = 1; i <= años; i++) {
    let capital = invertir * Math.pow(1 + interes, i);
    alert(`La capital obtenida es ${capital} en el año ${i}`)
}
    
