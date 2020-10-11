console.log("---------contar caracteres-------------");

//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const largo = (cadena = "") => {
  let str = cadena;
  let expReg = /^[a-zA-Z]+/gi;
  if (expReg.test(str)) {
    return str.length;
  } else {
    return new Error("el texto introducido no es una cadena de texto ");
  }
};
console.log(largo("hola mundo"));

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
console.log("----------hallar subcadena-------------");
const izquierda = (cadena = "", digitos) => {
  let expRegCadena = /^[a-zA-Z]+/gi;
  let expRegDigitos = /\d/;

  return expRegCadena.test(cadena) && expRegDigitos.test(digitos)
    ? cadena.substring(0, digitos)
    : new Error("Valide el tipo de dato ");
};
console.log(izquierda("Hola mundo", 4));

console.log("---------separa cadena en un vector-------------");
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const separador = (cadena = "", separador = undefined) => {
  return !cadena
    ? console.warn("Ingrese un valor valido")
    : cadena.split(separador);
};

console.log(separador("hola mundo esto es un separador", " "));

console.log("----------repetir cadenas-------------");
//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repetir = (cadena = "", repeticiones = 0) => {
  let expRegCadena = /^[a-zA-Z]+/gi;
  let expRegRepet = /\d/;

  return expRegCadena.test(cadena) && expRegRepet.test(repeticiones)
    ? cadena.repeat(repeticiones)
    : new Error("Tipo de dato inconrrecto");
};
console.log(repetir("Hola mundo ", 4));

console.log("-----------Invertir cadena-------------");

/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const invertir = (cadena = "") => {
  try {
    if (!cadena) return console.warn("Ingrese un valor");
    if (!isNaN(cadena)) return console.error("El tipo de dato no es valido");
    let str = cadena.split(""); //con split converitmos la cadena en un arreglo cada caracter
    let strInver = str.reverse(); //con reverse invertimos los datos del arreglo
    let resultado = strInver.join(""); // con join volvemos a unimos los elementos de un arreglo en cadena
    console.log(resultado);
    throw new Error("Variable no definida");
  } catch (error) {
    console.log;
  }
};

invertir("Hola mundo");
/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
console.log("----------numero de coincidencias de una cadena-------------");

const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("No ingreso el texto ");
  if (!texto) return console.warn("No ingresaste la palabra a evaluar ");
  let posicion = texto.indexOf(cadena);
  let cont = 0;
  while (posicion != -1) {
    cont++;
    posicion = texto.indexOf(cadena, posicion + 1);
  }
  console.info(cont);
};

textoEnCadena("la", "hola mundo con bienvenida a javascript");

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

console.log("----------numero de coincidencias de una cadena-------------");
const palindrome = (cadena = "") => {
  cadena = cadena.toLowerCase();
  let cadenaAlReves = cadena.split("").reverse().join("");
  return cadena === cadenaAlReves ? true : false;
};

console.log(palindrome("anitalavalatina"));

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const invertir = ()*/

console.log("----------Eliminar patron con expReg-------------");
const EliminarCaracteres = (texto = "", patron = "") => {
  !texto
    ? console.warn("No ingresaste tu texto")
    : !patron
    ? console.warn("No ingresaste un patron de caracteres")
    : console.info(texto.replace(new RegExp(patron, "gi"), ""));
};

EliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "[a-z]");
