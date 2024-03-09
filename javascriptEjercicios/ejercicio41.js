function invertirCadena(cadena) {
  let separarCadena = cadena.split("");
  let invertirArreglo = separarCadena.reverse();
  let unirArreglo = invertirArreglo.join("");
  alert(unirArreglo)
}
let frase = prompt("Ingrse la palabra: ")
invertirCadena(frase);