// Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la 
// solución, por favor utilizar funciones matemáticas para ello.: 
// a.  rc((x2-x1)^2 + (y2-y1)^2). 


let r = parseFloat(prompt("Ingrese el valor de r: "));
let c = Math.sqrt; 
let x1 = parseFloat(prompt("Ingrese el valor de x1: "));
let y1 = parseFloat(prompt("Ingrese el valor de y1: "));
let x2 = parseFloat(prompt("Ingrese el valor de x2: "));
let y2 = parseFloat(prompt("Ingrese el valor de y2: "));

let distancia = c(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

alert(`La distancia entre los dos puntos es: ${distancia}`);
