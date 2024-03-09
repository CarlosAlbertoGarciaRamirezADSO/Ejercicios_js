// En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.Los
// descuentos son los siguientes: Tipo A 10 % de descuento Tipo B 15 % de descuento Tipo C
// 20 % de descuento.

let membresia = prompt("Ingrese que tipo de membresia tiene \n A \n B \n C")

switch (membresia) {
  case "a" || "A":
    alert("Usted obtiene el 10% de descuento")
    break;

  case "b" || "B":
    alert("Usted obtiene el 15% de descuento")
    break;

  case "c" || "C":
    alert("Usted obtiene el 20% de descuento")
    break;
}
