// En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es 
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora 
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de 
// horas trabajadas. 

let tipo = parseInt(prompt("Ingrese el cargo \n 1.administrativo \n 2.planta"));
let horaTrab = parseInt(prompt("Ingrese la cantidad de horas trabajadas"));
if(tipo ==1){
    let horaT = 10000;
    let total = horaTrab*horaT;
    alert(`El total de su pago es ${total}`)
}else if(tipo ==2){
    let horaT = 20000;
    let total = horaTrab*horaT;
    alert(`El total de su pago es ${total}`)
}else{
    alert("Cargo invalido")
}