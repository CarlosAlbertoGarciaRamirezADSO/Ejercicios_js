// En una determinada empresa, sus empleados son evaluados al final de cada año.Los
// puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando,
//traduciéndose en mejores beneficios.Los puntos que pueden conseguir los empleados
// pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas.
// A continuación, se muestra una tabla con los niveles correspondientes a cada puntuación.
//a.La cantidad de dinero conseguida en cada nivel es de 2.400€ multiplicada por la
// puntuación del nivel.
//b.Nivel Puntuación Inaceptable 0.0 Aceptable 0.4 Meritorio 0.6 o más
// Escribir un programa que lea la puntuación del usuario e indique su nivel de rendimiento,
//así como la cantidad de dinero que recibirá el usuario.

let nivel = prompt("Ingrese el nivel en el que va (0.0,0.4,0.6): ");

let suma, total;
if (nivel == 0.0) {
  alert("Inaceptable")

} else if (nivel == 0.4) {
  alert("Aceptable")
  suma = 2400 * 0.4;
  total = suma + 2400
  alert(`Su puntuacion es ${nivel} y la cantidad de dinero es ${total}`)
} else if (nivel == 0.6) {
  alert("Meritorio")
  suma = (2400 * 2) * 0.6
  total = suma + 2400;
  alert(`Su puntuacion es ${nivel} y la cantidad de dinero es ${total}`)
} else {
  alert("puntuntuacion no aceptable")
}
