//con la palabra import llamo el archivo constante y con las llaves solo la constante PI
import { PI, NOMBRE } from "./30_constantes.js";

//cuando la funcion , variable u objeto esta exportada por default se autocompleta al llamarse la funcion
import aritmetrica from "./30_aritmetrica.js";

console.log(PI);
console.log(NOMBRE);
console.log(aritmetrica.restar(20, 22, 7));
console.log(aritmetrica.sumar(33, 4, 66, 7));
console.log(aritmetrica.multiplicar(4, 8, 23, 8));
