// Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean 
// positivos: área triangulo= lado * lado 

let lado1 = parseInt(prompt("Ingrese el lado 1: "));
let lado2 = parseInt(prompt("Ingrese el lado 2: "));

if(lado1 >0 && lado2 >0){
    let area = lado1 * lado2;
    alert(`El area de el rectangulo es ${area}`)
}else{
    alert("No se aceptan numeros negativos");
}