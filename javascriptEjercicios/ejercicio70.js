/*Escribir un programa que almacene la cadena de caracteres contraseña en una variable, 
pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta. */ 


const contrasenaC = "carlos";

while (true) {
    let usuario = prompt("Ingrese la contraseña:");

    if (usuario === contrasenaC) {
        console.log("Contraseña correcta");
        break;  
    } else {
        console.log("Contraseña incorrecta");
    }
}