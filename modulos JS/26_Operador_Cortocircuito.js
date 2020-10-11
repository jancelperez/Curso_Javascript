/*Cortocircuito Or cuando el valor de l izquierda en la
    expresion siempre pueda validar a true, es el valor que 
    se cargará por defecto */

function saludar(nombre) {
  nombre = nombre || "desconocido";
  console.log(`Hola ${nombre}`);
}
saludar();

console.log("valor" || "si no es verdadero -> es este valor");
console.log(1 || "si no es verdadero -> es este valor");
console.log(false || "si no es verdadero ->es este valor");
console.log(null || "si no es verdadero ->es este valor");

/*Cortocircuito AND cuando el valor de l izquierda en la
    expresion siempre pueda validar a false, es el valor que
    se cargará por defecto */

console.log("valor" && "si no es verdadero -> es este valor");
console.log(1 && "si no es verdadero -> es este valor");
console.log(false && "si no es verdadero ->es este valor");
console.log(null && "si no es verdadero ->es este valor");
