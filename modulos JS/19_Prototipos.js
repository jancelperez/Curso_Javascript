//funcion contructora
// No se puede utilzar  arrow functions o objetos literables
function animal(nombre, genero) {
  //atributos
  this.nombe = nombre;
  this.genero = genero;
}

//los metodos no deben ir en la funcion constructora por rendimiento debe ir al prototipo asi:
animal.prototype.sonar = function () {
  console.log(`hago sonido por que estoy vivo`);
};

//con la palabra reservada new puedo crear una instancia de la funcion constructora
const gato = new animal(`Happy`, `Masculino`);
console.log(gato);
