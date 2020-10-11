console.log(Date());
let fecha = new Date();
console.log(fecha);
//dia del mes
console.log(fecha.getDate());

//dia
console.log(fecha.getDay());

//mes
console.log(fecha.getMonth());

//año
console.log(fecha.getUTCFullYear());

//Hora
console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);

//fecha hora
console.log(`${fecha.toString()}`);

//fecha
console.log(`${fecha.toLocaleDateString()}`);

//Hora
console.log(`${fecha.toLocaleTimeString()}`);

//cuantos segundos han pasado desde 01/ene/1970
console.log(Date.now());

let cumpleJancel = new Date(1990, 09, 18);
console.log(cumpleJancel);

//MOMENT.JS (librerias recomendada para manejo de tiempo
