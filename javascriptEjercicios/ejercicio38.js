// Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
// Martín toma 2 / 3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
// parte le corresponde a Lorena ?

let tapas = parseInt(prompt("Ingrese el numero de tapas: "));
let tapa = 200;
let suma = tapas * tapa;
let martin = suma * 2/3;
let jairo = suma * 0.25;
let lorena = suma - martin - jairo;
alert(`jairo recibe ${jairo} martin recibe ${martin} lorena recibe ${lorena}`)