let edad = function (edad) {
  if (edad >= 18) {
    return "Ingresar";
  } else {
    return "No puede entrar ";
  }
};

console.log(edad(45));

let operacion = function (operacion, num1, num2) {
  if (operacion === "suma") {
    return num1 + num2;
  } else if (operacion === "resta") {
    return num1 - num2;
  } else if (operacion === "multiplicacion") {
    return num1 * num2;
  } else if (operacion === "division") {
    return num1 / num2;
  } else {
    return "Operancion no validad";
  }
};

console.log(operacion("suma", 6, 8));
console.log(operacion("resta", 6, 8));
console.log(operacion("division", 6, 8));
console.log(operacion("multiplicacion", 6, 8));

//----------------- operador ternario (condicion)?verdadeer:flsa---------------------//
edad = 23;
let mayorEdad = edad >= 18 ? "Entrar" : "No puedes entrar";
console.log(mayorEdad);

//-----------------------------------------Switch-Case-----------------------------------/

let dia = 3;

switch (dia) {
  case 7:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  default:
    break;
}
