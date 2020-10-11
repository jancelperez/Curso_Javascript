console.log("--------Parametro rest----------------");
//...c es el parmetro rest
let sumar = function (a, b, ...c) {
  let resultado = a + b;
  // por cada parametro ingresado sumelo al resultado a+b
  c.forEach(function (elem) {
    resultado += elem;
  });
  return resultado;
};

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));

console.log("--------Operador Spread----------------");

const arreglo1 = Array.of(1, 2, 3, 4, 5);
const arreglo2 = Array.of(6, 7, 8, 9, 0);
console.log(arreglo1, arreglo2);

//crea un arreglo que contiene dos arreglos de 5 posiciones
const arreglo3 = Array.of(arreglo1, arreglo2);
console.log(arreglo3);

//Si antepongo los ... (operador Spread ) hago creo un arreglo de 10 posiciones
const arreglo4 = Array.of(...arreglo1, ...arreglo2);
console.log(arreglo4);
