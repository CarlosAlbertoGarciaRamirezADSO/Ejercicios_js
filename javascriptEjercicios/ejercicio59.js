// . En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
//   para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.


let edad = parseInt(prompt("Ingrese la edad: "));
let estatura = parseInt(prompt("Ingrese la estatura: "));
let peso = parseInt(prompt("Ingrese la peso: "));


if (edad <= 19 && estatura >= 175 && peso >= 75 && peso <= 80) {
  alert("Cumple con los requisitos y puede hacer parte de la seleccion de basquetbol")
} else {
  alert("No cumple con los requisitos y no puede hacer parte de la seleccion de basquetbol")
}