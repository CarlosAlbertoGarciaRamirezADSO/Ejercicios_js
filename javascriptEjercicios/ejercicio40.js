// Una empresa que contrata personal requiere determinar la edad de las personas que
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
// nacieron.Realice el código que representen el algoritmo para solucionar este problema.

let edad = parseInt(prompt("Ingrese el año de nacimiento"));
const año_ac = 2024;
let calc = año_ac - edad;
alert(`edad: ${calc}`);