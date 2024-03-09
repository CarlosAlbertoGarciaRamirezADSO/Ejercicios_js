// Hacer un programa que permita ingresar n Notas de alumnos(100 – 1), y que imprima cual
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60

let cantidad = parseInt(prompt("Ingrese la cantidad de notas que quiere obtener"));
let notas = []
let notamax = 0
let cont = 0, cont1 = 0, cont2 = 0, cont3 = 0;

for (let i = 0; i < cantidad; i++) {
  notas[i] = parseInt(prompt("Ingrese la nota"));
  notas.push[i];
}
for (let f = 0; f < notas.length; f++) {
  if (notas[f] < 100 && notas[f] >= 90) {
    cont += 1;
    if (notas[f] > notamax) {
      notamax = notas[f];
    }
  } else if (notas[f] < 90 && notas[f] >= 80) {
    cont1 += 1;
  } else if (notas[f] < 80 && notas[f] >= 70) {
    cont2 += 1;
  } else if (notas[f] < 70 && notas[f] >= 60) {
    cont3 += 1;
  }


}

alert(`la nota maxima es ${notamax}`)

alert(`Las la cantidad que sacaron A fueron ${cont}`);
alert(`Las la cantidad que sacaron B fueron ${cont1}`);
alert(`Las la cantidad que sacaron C fueron ${cont2}`);
alert(`Las la cantidad que sacaron D fueron ${cont3}`);