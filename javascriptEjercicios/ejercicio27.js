let parcial1 = parseFloat(prompt("Ingrese la calificación del primer parcial:"));
let parcial2 = parseFloat(prompt("Ingrese la calificación del segundo parcial:"));
let parcial3 = parseFloat(prompt("Ingrese la calificación del tercer parcial:"));
let examenFinal = parseFloat(prompt("Ingrese la calificación del examen final:"));
let trabajoFinal = parseFloat(prompt("Ingrese la calificación del trabajo final:"));

let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;


let pesoParciales = promedioParciales * 0.55;
let pesoExamenFinal = examenFinal * 0.30;
let pesoTrabajoFinal = trabajoFinal * 0.15;


let promedioFinal = pesoParciales + pesoExamenFinal + pesoTrabajoFinal;

alert(`El promedio final de la materia es:${promedioFinal}`);
