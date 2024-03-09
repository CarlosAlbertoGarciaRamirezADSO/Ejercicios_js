// . Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550.Calcular el
// monto total de la venta, según la cantidad de artículos solicitados durante el día.

let cantidad = parseInt(prompt("Ingrese la cantidad de productos a llevar"));
let acumulador_t = 0;
for (let i = 0; i < cantidad; i++) {
  let escoger = parseInt(prompt("Esoja el producto \n 1.libros \n 2.cuadernos \n 3.lapiceros"));

  if (escoger == 1) {
    let libro = 10000;
    acumulador_t += libro;
  } else if (escoger == 2) {
    let cuaderno = 7550;
    acumulador_t += cuaderno;
  } else if (escoger == 3) {
    let lapiceros = 5500;
    acumulador_t += lapiceros;
  }
}
alert(`El total de la venta es ${acumulador_t}`)