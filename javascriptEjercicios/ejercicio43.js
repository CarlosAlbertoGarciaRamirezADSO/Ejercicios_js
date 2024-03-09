// . Escriba una expresión regular que reconozca las cadenas de doble comillas.Debe permitir
// la presencia de comillas y caracteres escapados.

let contraseña = parseInt(prompt("Ingrese la contraseña "))
let regex = /"(?:[^"\\]|\\.)*"/


if (regex.test(contraseña) == true) {
  alert("La contraseña no se reconoce")
} else if (regex.test(contraseña) == false) {
  alert("La contraseña se reconoce")
}