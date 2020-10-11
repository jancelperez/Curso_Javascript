//en las funciones anonimas auto ejecutable se pone ;
(function () {
  console.log("mi primer funcion autoejecutable");
})();

(function (d, w, c) {
  console.log("mi segunda funcion autoejecutable");
  console.log(d);
  console.log(w);
  c.log("Esto es un console log");
})(document, window, console);
