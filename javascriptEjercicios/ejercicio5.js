// 5. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte
// al usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe
// tributar o no.

let ingresos = prompt("Ingrese la cantidad de ingresos mensuales: ");
let edad = prompt("Ingrese la edad: ");

if (edad > 16 && ingresos >= 1000) {
  alert("Tiene que tributar")
} else {
  alert("No tiene que tributar")
}