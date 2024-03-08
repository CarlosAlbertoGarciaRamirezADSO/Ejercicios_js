// 10. La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes.Los
// ingredientes para cada tipo de pizza aparecen a continuación.
//   a.Ingredientes vegetarianos: Pimiento y tofu.
//     b.Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.

// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
// función de su respuesta le muestre un menú con los ingredientes disponibles para que
// elija.Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están
// en todas las pizzas.Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
// o no y todos los ingredientes que lleva.


let pizza = parseInt(prompt("Ingrese la pizza que quiere: \n 1.vegetariana \n 2.no vegetariana"))


switch (pizza) {
  case 1:
    let ingredienteV = prompt("Ingredientes vegetarianos \n 1.pimiento \n 2.tofu");
    if (ingredienteV == 1) {
      alert("La pizza es vegetariana y lleva pimiento");
    } else if (ingredienteV == 2) {
      alert("La pizza es vegetariana y lleva tofu");
    }
    break;

  case 2:
    let ingredienteN = prompt("Ingredientes NO vegetarianos \n 1.pepperoni \n 2.jamon \n 3.salmon");
    if (ingredienteN == 1) {
      alert("La pizza no es vegetariana y lleva pepperoni")
    } else if (ingredienteN == 2) {
      alert("La pizza no es vegetariana y lleva jamon")
    } else if (ingredienteN == 3) {
      alert("La pizza no es vegetariana y lleva salmon")
    }
}