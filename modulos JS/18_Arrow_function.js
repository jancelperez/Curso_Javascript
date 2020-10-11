//--------funcion expresada normal ---------------
const saludo1 = function () {
  console.log(`hola mundo`);
};
saludo1();

//--------Arrow funciotion normal ----------------
const saludo2 = () => {
  console.log(`hola mundo`);
};
saludo2();

// --------Arrow funciotion con una sola sentencia------
const saludo3 = () => console.log(`hola mundo`);
saludo3();

//---Arrow funciotion con una sola sentencia con parametro------
const saludo4 = (nombre) => console.log(`hola mundo ${nombre}`);
saludo4("dennis");

//---Arrow funciotion con una sola sentencia con parametro------
const sumar = (a, b) => a + b;
console.log(sumar(4, 5));

//--Ejemplo 2
const arreglo = Array.of(1, 2, 3, 4, 5);
arreglo.forEach((elem, i) => console.log(`${elem} esta en la posicion ${i}`));
