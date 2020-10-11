/*
    https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
    Coincidencias Básicas
        . - Cualquier Caracter, excepto nueva linea
      \ d - Cualquier Digitos(0 - 9)
      \ D - No es un Digito(0 - 9)
      \ w - Caracter de Palabra(az, AZ, 0 - 9, _)
      \ W - No es un Caracter de Palabra.
      \ s - Espacios de cualquier tipo. (espacio, tab, nueva linea)
      \ S - No es un Espacio, Tab o nueva linea.
    
        Limites
      \ b - Limite de Palabra
      \ B - No es un Limite de Palabra
        ^ - Inicio de una cadena de texto
      $ - Final de una cadena de texto
    
      Cuantificadores:
    * - 0 o Más
        + - 1 o Más
          ? - 0 o Uno
      { 3 }: Numero Exacto
      { 3, 4 } - Rango de Numeros(Mínimo, Máximo)
    
      Conjuntos de Caracteres
      [] - Caracteres dentro de los corchetes
      [^] - Caracteres que NO ESTAN dentro de los brackets
    
      Grupos
        () - Grupo
        | - Uno u otro*/

let cadena =
  "Carlos Arturo	449 123 45 67 carlos_@hotmail.com  www.carlos.com Manuel Alejandro 448 - 234 - 56 - 78 alejandro@outlook.com https://www.manuel.alejandro.com.mx   http://alejandro.com.mx Cesar Alan  449 345 67 89  cesar@hotmail.com cesar.netLas ";

//encontrar solo los numeros de telefons
let expRegTelefonos = /\d+\s\W?\s?\d+\s\W?\s?\d+/g;
let arregloTelefonos = cadena.match(expRegTelefonos);

arregloTelefonos.forEach((e) => {
  console.log(`${e} `);
});
