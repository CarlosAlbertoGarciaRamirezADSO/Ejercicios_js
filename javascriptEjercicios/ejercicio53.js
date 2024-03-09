// Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados 
// de: Iva, Subtotal y Total de la compra de los artículos. 
let acumulador = 0;
for (let i = 0; i < 5; i++) {
    let precio = parseInt(prompt("Ingrese el precio de el producto: "));
    acumulador += precio;  
}

let subtotal = acumulador;
alert(`El subtotal es ${subtotal}`);
let iva = acumulador*0.20;
alert(`El iva es ${iva}`)
let total = subtotal + iva;
alert(`El total es ${total}`)
