    //-----------Aritmetricos---------------
    let a = 5 + (5 - 10) * 3
    console.log(a)

    let b = 9 % 4
    console.log(b)

    //-----------Relacionales--------------

    console.log(8 > 9)
    console.log(8 < 9)
    console.log(8 >= 9)
    console.log(8 <= 9)

    /*
    = igual de asignacion 
    == igual de comparacion  de valores
    === igual de comparacion de valores y tipo de dato 
    */
    let c = 1
    console.log(c)
    console.log("7" == 7)
    console.log("7" === 7)
    //--------------------Incremento o Decremento-------------------------
    let i = 1

    i = i + 2
    console.log(i)

    i += 2
    console.log(i)

    i -= 4
    console.log(i)

    i *= 2
    console.log(i)

    //operador unario
    i++
    console.log(i)

    i--
    console.log(i)

    //-----------Logicos----------------

    /*! o Not: negacion
    || o  Or
     && o And*/

    console.log(!false)
    console.log((9 === 9) || (4 > 5))
    console.log((9 === 9) && (7 > 5))
