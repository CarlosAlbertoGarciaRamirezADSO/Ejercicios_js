// Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le
// permita ir generando presupuestos para cada cliente.


let valor = parseInt(prompt("Ingrese el valor por metro cuadrado"));
let m2 = parseFloat(prompt("Ingrese los metros cuadrados"));
let suma = valor * m2;
alert(`El valor a pagar es ${suma}`);