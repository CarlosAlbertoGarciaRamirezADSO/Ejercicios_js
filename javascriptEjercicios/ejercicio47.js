//Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el 
// menor o si son iguales.

let a = parseInt(prompt("Ingrese el numero 1: "));
let b = parseInt(prompt("Ingrese el numero 2: "));
let c = parseInt(prompt("Ingrese el numero 3: "));

if(a === b && b === c){
    alert("Los 3 numeros son iguales: ")
}else{
    let numeromaximo = Math.max(a,b,c);
    let numerominimo = Math.min(a, b, c);
  
    if(a === numeromaximo){
        alert(`El numero mayo es ${a}`)
    }else if(b == numeromaximo){
        alert(`El numero maximo es ${b}`)
    }else if(c == numeromaximo){
        alert(`El numero maximo es ${c}`)
    }

    if(a == numerominimo){
        alert(`El numero menor es ${a}`)
    }else if(b == numerominimo){
        alert(`El numero menor es ${b}`)
    }else if(c == numerominimo){
        alert(`El numero menor es ${c}`)
    }
}
