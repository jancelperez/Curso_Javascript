<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

  <h1>Clases</h1>
  <h3>Ver console.log</h3>
  <script>

    //--------------------------------------------------------
    class animal {
      //atributos
      constructor(tipo, nombre, genero) {
        this.tipo = tipo
        this.nombre = nombre
        this.genero = genero
      }
      //metodos
      sonar() {
        console.log("Estoy vivo y por eso hago un sonido")
      }
      saludar() {
        console.log(`Hola me llamo ${this.nombre}`)
      }
    }
    //--------------------------------------------------------
    class perro extends animal {
      constructor(tipo, nombre, genero, raza) {
        super(tipo, nombre, genero)
        this.raza = raza
      }
      ladrar() {
        console.log(`gua gua gua`)
      }
      sonar() {
        console.log(`soy un perro y por eso hago sonidos`)
      }
    }
    //--------------------------------------------------------
    const scooby = new perro("perro", "scooby", "macho", "gran daness")
    const ratonPerez = new animal("raton", "raton perez", "macho")

    console.log(scooby)
    scooby.saludar()
    scooby.sonar()
    scooby.ladrar()

    console.log("------------------------------------------------")

    console.log(ratonPerez)
    ratonPerez.saludar()
    ratonPerez.sonar()

  </script>

</body>

</html>