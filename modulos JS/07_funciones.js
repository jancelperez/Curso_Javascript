function estoEsFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
  return `La funcion a retornado una funcion de texto`;
}

let valorFuncion = estoEsFuncion();

console.log(valorFuncion);

function saludar(nombre = "desconocido", edad = 0) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años `);
}

saludar("jancel", "30");
saludar(); //se imprimen los valores por defecto

//Funcioes declaradas

funcionDeclarada();

function funcionDeclarada() {
  console.log(
    "Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, inluso antes de que la funion sea declarada"
  );
}

funcionExpresada();
const funcionExpresada = function () {
  console.log(
    "Esto es una funcion expresada, es decir, es una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicio JS nos dara Error"
  );
};

funcionExpresada();
