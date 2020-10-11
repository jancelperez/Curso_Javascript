console.log("----------------while---------------------");
let contador = 0;
while (contador <= 10) {
  console.log(`while ${contador}`);
  contador++;
}

console.log("----------------do while---------------------");
contador = 0;
do {
  console.log(`do while ${contador}`);
  contador++;
} while (contador <= 10);

console.log("----------------for---------------------------");
for (let i = 0; i < 10; i++) {
  console.log(`for ${i}`);
}

console.log("---------------ejmplo 2---------------------");
const numeros = [];

for (let i = 0; i <= 10; i++) {
  numeros.push(i);
}

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

console.log("----------------for in---------------------");
//For in me imprime las propiedades de un objeto

const persona = {
  nombre: "Jancel",
  apellido: "Perez",
  edad: 30,
};

for (const propiedad in persona) {
  console.log(propiedad);
}

console.log("---------------ejmplo 2--------------------");

for (const propiedad in persona) {
  console.log(`clave: ${propiedad} valor: ${persona[propiedad]}`);
}

console.log("----------------for of-----------------------");
//For of me imprime las propiedades de cualquier  objeto que sea iterable

const frutas = Array.of("mandarina", "banano", "uva", "fresa");

for (const elem of frutas) {
  console.log(elem);
}

console.log("---------------ejmplo 2--------------------");
let cadena = "Hola mundo";

for (const elem of cadena) {
  console.log(elem);
}
