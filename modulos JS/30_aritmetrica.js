const sumar = (num1, num2, ...c) => {
  let resultado = num2 + num2;
  c.forEach((e) => (resultado += e));
  return resultado;
};

const restar = (num1, num2, ...c) => {
  let resultado = num1 - num2;
  c.forEach((e) => (resultado -= e));
  return resultado;
};

const multiplicar = (num1, num2, ...c) => {
  let resultado = num1 * num2;
  c.forEach((e) => (resultado *= e));
  return resultado;
};

const aritmetrica = {
  sumar,
  restar,
  multiplicar,
};
// las variables o constantes no se pueden colocar por default en la declaracion
export default aritmetrica;
