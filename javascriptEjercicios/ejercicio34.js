// Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un 
// depósito. 
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).  
// b. Volumen = PI *(radio^2)* H (altura del depósito). 
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo 
// en segundos. 

let pi = 3.1416;

let radio = parseInt(prompt("Ingrese el radio de el deposito: "));
let altura = parseInt(prompt("Ingrese la altura de el deposito: "));

let volumen  = pi * (Math.pow(radio,2))*altura*1000;

let caudal = parseFloat(prompt("Ingrese el caudal en litros por segundo: "));

let timpo_segundo = volumen/caudal;

let tiempo_minutos = timpo_segundo / 60;

alert(`El tiempo estimado para llenar el depósito es de ${tiempo_minutos}`)
