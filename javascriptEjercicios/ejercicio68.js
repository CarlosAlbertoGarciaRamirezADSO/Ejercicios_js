// Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10. 

for (let i = 1; i <=10; i++) {
    let acumulador = "";
    for (let j = 1; j <=10; j++) {
        acumulador+= (i*j) + ","
    }
    console.log(acumulador)
}