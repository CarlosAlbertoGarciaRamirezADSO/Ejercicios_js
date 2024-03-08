//los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo
// y el nombre, el grupo A está formado por las mujeres con un nombre anterior a la
// M y los hombres con un nombre posterior a la N y el grupo B por el resto, escribir
// un programa que pregunte al usuario su nombre y sexo y muestre por pantalla el
// grupo al que corresponde

function grupo(sexo, nombre) {

  sexo = prompt("Ingrese el sexo: ");
  nombre = prompt("Ingrese el nombre: ");

  if (sexo.charAt(0) == "hombre".toLocaleLowerCase() && nombre <= "m") {
    alert("Usted corresponde al grupo A")
  }
  if (sexo.charAt(0) == "mujer".toLocaleLowerCase() && nombre >= "n") {
    alert("Usted corresponde al grupo B")
  }
}
grupo()

