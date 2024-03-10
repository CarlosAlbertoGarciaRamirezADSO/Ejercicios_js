

let altura = parseInt(prompt("Ingrese un número entero"));

for (let i = 1; i <= altura; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += i;
    }
    console.log(linea);
}