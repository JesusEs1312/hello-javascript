//Declaramos variables con la palabra reservada var o let
var nombre = "Juan";
let apellido = "Perez";

//Mostramos el contenido de las variables
console.log(nombre);
console.log(apellido);

//Variables de tipo numerico
let edad = 30;
console.log(edad);

//Variables de tipo texto
let texto = "Hola mundo";
console.log(texto);
let texto2 = 'Hola mundo';
console.log(texto2);

//Variables de tipo decimal
let precio = 150.50;

//Variables de tipo booleano
let esCasado = false;
console.log(esCasado);
let esSoltero = true;
console.log(esSoltero);

//Variables null
let nulo = null;
console.log(nulo);

//Variables undefined
let indefinido = undefined;
console.log(indefinido);

//Variables de tipo objeto
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    casado: false
};
console.log(persona);

//Accedemos a las propiedades del objeto
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.casado);
//Accesos con ? 
console.log(persona.nacimiento?.fecha); //undefined

//Variables de tipo arreglo
let colores = ["rojo", "verde", "azul"];
console.log(colores);
console.log(colores[0]); //primer elemento
console.log(colores.length); //cantidad de elementos
console.log(colores[colores.length - 1]); //ultimo elemento
colores[3] = "amarillo"; //agregar un elemento
console.log(colores);
colores[3] = "blanco"; //modificar un elemento
console.log(colores);

//Arrays con objetos
let personas = [
    {
        nombre: "Juan",
        apellido: "Perez",
        edad: 30,
        casado: false
    },
    {
        nombre: "Maria",
        apellido: "Lopez",
        edad: 25,
        casado: true
    }
];

//Objetos con arreglos
let persona2 = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    casado: false,
    colores: ["rojo", "verde", "azul"]
};