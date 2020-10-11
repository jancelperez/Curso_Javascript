<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

  <h1>Objeto_Console</h1>
  <h3>Ver console.log</h3>
  <script>

    //--------------------------------------------------------
    console.log(console)

    // mensaje de error
    console.error("esto es un error")

    //mensaje de advertencia
    console.warn("esto es un avsio")

    //mensaje informativo
    console.info("este es un mensaje informativo")

    //ver las propiedades de un objeto
    console.dir(document)

    //limpiar la consola
    console.clear()

    //agrupar datos 
    console.group("materias ingenieria sistemas")
    console.log("Logica matematica")
    console.log("Matematicas discretas")
    console.log("Calculo diferencial")
    console.log("Estadistica")
    console.log("Trigo-algebra-geometria analitica")
    console.groupEnd

    //crear una tabla
    const numeros = Array.of(1, 2, 3, 4, 5)
    const vocales = Array.of("a", "e", "i", "o", "u")
    const objetoPrueba = {
      numeros,
      vocales
    }
    console.table((objetoPrueba))

    //ver el tiempo que se ejecuta mi codigo
    console.time("tiempo de ejecucion")
    const arreglo = Array(1000000)
    for (i = 0; i < arreglo.length; i++) {
      arreglo[i] = i
    }
    console.timeEnd("tiempo de ejecucion")

    //cuantas veces se ejecuta un codigo
    for (i = 0; i <= 100; i++) {
      console.count("codgio for")
      console.log(i)
    }

    //hacer test de una condicion 
    let x = 2
    let y = 2
    pruebaXY = "se espera que x sea menor que y"
    console.assert(x < y, x, y, pruebaXY)



  </script>

</body>

</html>