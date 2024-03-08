//los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo
// y el nombre, el grupo A está formado por las mujeres con un nombre anterior a la
// M y los hombres con un nombre posterior a la N y el grupo B por el resto, escribir
// un programa que pregunte al usuario su nombre y sexo y muestre por pantalla el
// grupo al que corresponde

function grupo(sexo, nombre) {

  sexo = prompt("Ingrese el sexo: ").toLowerCase();
  nombre = prompt("Ingrese el nombre: ").toLowerCase();

  if (sexo == "mujer" && nombre < "m") {
    alert("Usted es de el grupo A")
  }
  else if (sexo == "hombre" && nombre > "n") {
    alert("Usted es de el grupo A")
  }
  else {
    alert("Usted es de el grupo B")
  }
}
grupo()

