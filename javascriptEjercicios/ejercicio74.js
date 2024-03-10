// Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el 
// usuario escriba “salir” que terminará. 

while (true) {
    let entrada= prompt("Ingrese algo o escriba salir para finalizar:");

    if (entrada.toLowerCase() === "salir") {
        break;
    }

    console.log(`Eco: ${entrada}`);
}