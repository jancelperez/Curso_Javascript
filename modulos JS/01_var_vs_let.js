let hello = "Hello World"
var hola = "Hola Mundo"

    console.log(hola);
    console.log(hello);
    console.log(window);

    //-------------------Ambito de bloque VAR-----------------------
    console.log("----------------VAR---------------------")
    var musica = "Rock"
    console.log("Variable musica antes del bloque", musica)
    {
      var musica = "Pop"
      console.log("Variable musica antes del bloque", musica)
    }
    console.log(`variable despues del bloque ${musica}`)



    //-------------------Ambito de bloque LET --------------------
    console.log("----------------LET---------------------")


    let music = "Rock"
    console.log("Variable music antes del bloque", music)
    {
      let music = "Pop"
      console.log("Variable music antes del bloque", music)
    }
    console.log(`variable despues del bloque ${music}`)

    const PI = 3.1416

    console.log(PI)

    let objeto = {
      nombre: "jancel",
      edad: "30"
    }
    objeto.carrera = "Data Scients"
    console.log(objeto)

    let colores = ["blanco", "negro", "azul"]
    colores.push("verde")
    console.log(colores)


    colores.push("Verde")
