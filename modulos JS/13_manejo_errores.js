try {
  let numero = "10a";
  //isNan devuelve false si el tipo de dato es numero
  if (isNaN(numero)) {
    //throw se utiliza para lanzar una excepcion  - Error es un objeto que lanza el error
    throw new Error("El caracter introducido no es un numero");
  }
  //Math.pow eleva un numero al exponente ddo
  console.log(Math.pow(numero, 2));
} catch (error) {
  console.log(`Se produjo el siguiente error ${error}`);
}
