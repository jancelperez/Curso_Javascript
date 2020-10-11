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
      //constructor (atributos)
      constructor(tipo, nombre, genero) {
        super(tipo, nombre, genero)
        this.raza = null
      }

      //metodos
      ladrar() {
        console.log(`gua gua gua`)
      }
      sonar() {
        console.log(`soy un perro y por eso hago sonidos`)
      }

      //getter y setter
      get getRaza() {
        return this.raza
      }
      set setRaza(raza) {
        this.raza = raza
      }
      //metodo static 
      //un metodo estatico se puede ejecutar sin la necesidad de instaciar la clase
      static quienEres() {
        console.log("Soy un mamífero carnívoro doméstico de la familia de los cánidos que me caracterizo por tener los sentidos del olfato y el oído muy finos, soy muy inteligente y fiel al ser humano.")
      }

    }
    //--------------------------------------------------------
    const scooby = new perro("perro", "scooby", "macho")
    const ratonPerez = new animal("raton", "raton perez", "macho")

    console.log(scooby)
    scooby.saludar()
    scooby.sonar()
    scooby.ladrar()
    //para los metodos get y set se deben manejar como si fueran una propiedad
    scooby.setRaza = "Gran Danes"
    console.log(`Mi raza es ${scooby.getRaza}`)

    //se puede utilizar el metodo sin crear objetos si no directamente de la clase
    perro.quienEres()

    console.log("------------------------------------------------")
