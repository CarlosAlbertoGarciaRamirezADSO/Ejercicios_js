// Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede 
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento. 

let pago = parseInt(prompt("Ingrese el pago: "));

if(pago >13000){
    let descuento = pago*0.15;

    let total = pago - descuento;

    alert(`El descuento es de ${descuento}`);
    alert(`El total es de ${total}`);

}