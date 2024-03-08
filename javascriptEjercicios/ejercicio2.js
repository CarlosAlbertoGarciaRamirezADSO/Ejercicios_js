// 2. escribir un programa que almacene la cadena de caracteres contraseña de una
// variable, pregunte al usuario por la contraseña e imprima por pantalla si la
// contraseña introducida por el usuario coincide con la guardada en la variable sin
// tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda
// ingresar valores alfanuméricos.


let contraseña = "carlos";

let validar = prompt("Ingrese su contraseña: ");

let regex = /^["a-zA-Z0-9"]*$/;

if (regex.test(validar)) {
  if (validar === contraseña) {
    alert("Coincide");
  } else {
    alert("No coincide");
  }
} else {
  alert("No coinciden por caracteres especiales");
}
