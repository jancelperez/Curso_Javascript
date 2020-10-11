//---------------------Forma 1 de crear arrelgo -------------------------------------
const a = [];
const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
console.log(a);
console.log(b);
console.log(b[3][1]); //imprimir la letra B
console.log(b[3][3][0]); //imprimir el numero 1

//----------------------------Forma 2 crear arreglo -------------------------------
const c = Array.of(1, true, "Hola", ["A", "B", "C", [1, 2, 3]]);
console.log(c[3][3][2]); //imprimir el numero 3

//metodo fill llena un Array con lo valores dados
const d = Array(100).fill(0);
console.log(d);

const animales = ["leon", "vaca", "caballo"];

//agregar un elemento al final
animales.push("perro");

let a;

a.filter();

//borrar  el ultimo elemento
animales.pop();

//metodo forEach rrecorre cada uno de los elementos
animales.forEach(function (e, index) {
  console.log(`<li id="${index}">${e}</li>`);
});
