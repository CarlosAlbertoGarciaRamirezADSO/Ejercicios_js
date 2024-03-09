// Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
// de cursos es mayor que 6 el pago será únicamente de $1.200.000.

let cursos = parseInt(prompt("Ingrese la cantidad de cursos"));

if (cursos <= 6) {
  alert("El pago sera de $2.000.000 por cada curso")
  let pago = 2000000;
  let total = pago * cursos;
  alert(`El pago total es de ${total}`)
} else if (cursos > 6) {
  alert("El pago sera de $1.200.000 por cada curso")
  let pago = 1200000;
  let total = pago * cursos;
  alert(`El pago total es de ${total}`)
}
