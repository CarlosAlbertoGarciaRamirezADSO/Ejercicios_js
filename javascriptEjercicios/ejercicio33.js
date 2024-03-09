// Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.


let madre = new Date(prompt("Ingrese la fecha de nacimiendo de la madre: "));
let hijo = new Date(prompt("Ingrese la fecha de nacimiendo de la hijo: "));

const edadEnParto = hijo.getFullYear() - madre.getFullYear();

alert(`La madre tenía ${edadEnParto} años en el momento del parto.`);