// los tramos impositivos para la declaración de la renta en un determinado país son:
// a.entre 10000 y 20000 ----5 %
//   b.entre 20000 y 35000 ----10 %
//     c.entre 35000 y 60000 ----20 %
//       d.más de 60000 ----45 %
//         escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo
// de impositivo que le corresponde.


let renta = prompt("Ingrese su renta anual: ");

if (renta >= 10000 && renta <= 20000) {
  alert("El impositivo es de 5%")
} else if (renta >= 20001 && renta <= 35000) {
  alert("El impositivo es de 10%")
} else if (renta >= 35001 && renta <= 60000) {
  alert("El impositivo es de 20%")
} else if (renta >= 60001) {
  alert("El impositivo es de 45%")
} else {
  alert("El valor de la renta anuel es invalido")
}