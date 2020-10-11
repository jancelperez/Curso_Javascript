//---------------------------objetos literal-----------------------------")
// los objetos literales no necesitan asignarseles  el valor si se va a llamar a la variable ya creada

let nombre = "Tomas";
let edad = 7;
//---------------------------objetos normal-----------------------------")
const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("gau gau");
  },
};
console.log(perro);
//---------------------------objetos literal-----------------------------")
const dog = {
  nombre,
  edad,
  ladrar() {
    console.log("gua gua");
  },
};
console.log(dog);
dog.ladrar();
