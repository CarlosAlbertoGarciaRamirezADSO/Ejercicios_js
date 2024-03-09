// Un banco paga intereses a los depósitos dependiendo del saldo.Si el saldo es menor a
// $100.000 se paga un interés anual de 3 %, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4 %.Al final mostrar el saldo final y el interés pagado.

let saldo = parseInt(prompt("Ingrese el saldo de el banco: "));

if (saldo < 100000) {
  let intereses = saldo * 0.3;
  alert(`El interes es de ${intereses}`)
  let total = intereses + saldo;
  alert(`El total de saldo es ${total}`)
} else if (saldo >= 100000) {
  let intereses = saldo * 0.4;
  alert(`El interes es de ${intereses}`)
  let total = intereses + saldo;
  alert(`El total de saldo es ${total}`)
}