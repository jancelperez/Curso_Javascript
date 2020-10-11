const numeros = Array.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log("---------------Break---------------------");
// Termina ciclo de ejecucion
for (let i = 0; i <= numeros.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numeros[i]);
}

console.log("---------------Continue---------------------");
//Salta la iteracion
for (let i = 0; i <= numeros.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(numeros[i]);
}
console.log("---------------Ejercicio pares---------------------");
//Ejercicio imprimir los numeros pares hasta 100

const num = [];

for (let i = 0; i < 100; i++) {
  num[i] = i + 1;
}
for (const elem of num) {
  if (elem % 2 != 0) {
    continue;
  }
  console.log(elem);
}
