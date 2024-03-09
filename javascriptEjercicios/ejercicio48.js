// . Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica 
// desea calcular "Triángulo y Círculo: (Escriba T o C): 
// a. Triangulo = base * altura / 2 
// b. Circulo = PI * radio* radio 

let figuraG = parseInt(prompt(`Que figura desea calcular? \n 1.Triangulo \n 2. Circulo`))
switch (figuraG) {
    case 1:
        let base = parseInt(prompt(`Ingrese la base de el triangulo: `));
        let altura = parseInt(prompt(`Ingrese la altura de el triangulo: `));

        let area_t = (base*altura)/2;

        alert(`El area de el triangulo es ${area_t}`);
        break;

    case 2:
        let pi = 3.1416;
        let radio = parseInt(prompt(`Ingrese el radio de el circulo: `));

        let area_c = pi * Math.pow(radio,2);

        alert(`El area de el circulo es ${area_c}`)
}