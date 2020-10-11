const numeros = ["uno", "dos", "tres"];
//sin destructuracion
console.log("---------------Sin destructuracion ---------------------");
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];
console.log(uno, dos, tres);

//con destructuracion
console.log("---------------Con destructuracion ---------------------");
const [one, two, three] = numeros;
console.log(one, two, three);

console.log("---------------emjemplo 2---------------------");

const persona = {
  nombre: "jancel",
  edad: 30,
  carrera: "Ingenieria de sistemas",
};

const { nombre, edad, carrera } = persona;
console.log(nombre, edad, carrera);
console.log(nombre, edad, carrera);
