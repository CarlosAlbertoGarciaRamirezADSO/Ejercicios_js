// Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada 
// producto y el total de la compra. 

let total=0;

for (let i = 0; i < 5; i++) {
    let precio = parseInt(prompt("Ingrese el producto: "));  

    if (i < 2) {
        precio *= 0.95;
        } else {
            precio *= 0.98;
        }
        total+=precio;
        alert(`Producto ${i + 1}: $${precio.toFixed(2)}`);
}
alert(`Total de la compra: $${total.toFixed(2)}`);

