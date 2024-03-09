// Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él 
//     segundo, en caso contrario indicar con un mensaje que la operación no es posible 
//     realizarla. 

let num1 = parseInt(prompt("Ingrese el numero 1"));
let num2 = parseInt(prompt("Ingrese el numero 2"));


if(num1 > num2){
    let resta = num1-num2;
    alert(`La resta es ${resta}`)
}else{
    alert("la operación no es posible")
}