//funcion contructora
function animal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}

//metodo  prototipo animal
animal.prototype.sonar = function () {
  console.log("Estoy vivo y por eso hago un sonido");
};

//Herencia
function perro(nombre, genero, tamanio) {
  this.super = animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

//perro esta heredado de animal
perro.prototype = new animal();
perro.prototype.constructor = perro;

//metodos perro
perro.prototype.ladrar = function () {
  console.log(`gua gua`);
};

//sobreescribir el metodo sonar del prototipo padre animal
perro.prototype.sonar = function () {
  console.log("soy un perro por eso hago sonidos");
};

//Instanciamos un perro
const koko = new perro(`koko`, `hembra`, `mediano`);
const happy = new animal("Happy", "Macho");

koko.sonar();
happy.sonar();
