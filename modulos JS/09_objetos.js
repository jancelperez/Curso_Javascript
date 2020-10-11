const objetoPersona = {
  nombre: "Jancel",
  apellido: "Perez",
  edad: 30,
  carrera: "Ingeniero",
  hijos: false,
  cursos: ["Javascript", "Java", "PHP"],
  contacto: {
    direccion: "carrera 55",
    telefono: "302456",
    email: "jhperez5@hotmail.com",
  },
  saludar: function () {
    console.log(`Hola`);
  },
  decirMiNombre: function () {
    console.log(
      `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    );
  },
};

//Imprime todos los datos del objeto
console.log(objetoPersona);

//imprimir un atributo del objeto
console.log(objetoPersona.cursos[2]);

//imprimir un metodo del objeto
console.log(objetoPersona.saludar());

console.log(objetoPersona.decirMiNombre());

//lista las claves del objeto dado
console.log(Object.keys(objetoPersona));

//lista los valores del objeto dado
console.log(Object.values(objetoPersona));

console.log(objetoPersona.hasOwnProperty("nombre"));
