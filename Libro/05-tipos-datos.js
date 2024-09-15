//Tipos de datos primitivos
//----- Numbers
let numero;
//Numeros enteros en base 10
numero = 0;
numero = 3;
numero = 10000000;

//Numeros enteros en base 16 (hexadecimal 0-9 A-F)
numero = 0x0;//0
numero = 0xff;//255
numero = 0xABCDEF;//11259375

//Numeros enteros en base 8 (octal 0-7)
numero = 0o0;//0
numero = 0o377;//255

//Numeros enteros en base 2 (binario 0-1)
numero = 0b0;//0
numero = 0b11111111;//255
let billon = 1_000_000_000;
console.log(billon);

// Funciones aritmeticas
Math.pow(2, 3);//8
Math.round(3.5);//4
Math.ceil(3.1);//4 redondea hacia arriba
Math.floor(3.9);//3 redondea hacia abajo
Math.abs(-3);//3 valor absoluto
Math.max(1, 2, 3);//3
Math.min(1, 2, 3);//1
Math.random();//numero aleatorio entre 0 y 1
Math.PI;//3.141592653589793
Math.E;//2.718281828459045
Math.sqrt(9);//3 raiz cuadrada
Math.pow(3, 1/3);//raiz cubica
Math.sin(Math.PI/2);//1 seno
Math.log(Math.E);//1 logaritmo natural
Math.log10(100);//2 logaritmo base 10
Math.log(100)/Math.LN10;//2 logaritmo base 10
Math.log2(8);//3 logaritmo base 2
Math.exp(1);//2.718281828459045 exponencial

console.log(-1/0);//-Infinity
console.log(0/0);//NaN
console.log(-1/Infinity)//-0
console.log(1/Infinity)//0
console.log(1/0);//Infinity
console.log(Number.isNaN(0/0));//true

// Dates and times
let timestamp = Date.now();//milisegundos desde 1970
console.log(timestamp);
let ahora = new Date();
console.log(ahora); //fecha actual
let ms = ahora.getTime();//milisegundos desde 1970
let iso = ahora.toISOString();//fecha en formato ISO
console.log(iso);

//--- Strings Literals
// un string representando 2 lines escritas en una sola linea
let multiline = "linea 1\nlinea 2";
console.log(multiline);
// una linea de string escrita en 3 lineas
let multiline2 = "Hola, \
como estas \
el dia de hoy?";
console.log(multiline2);

// Escape Sequences
let str = "Hello, \"World\"";
console.log(str);
let str2 = 'You\'re right, can\'t do that';
console.log(str2);
console.log("\xA9");//©

// Working with Strings
let s = "Hello, World";
console.log(s.length);//12
console.log(s.substring(0, 3));//Hel
console.log(s.slice(0, 3));//Hel
console.log(s.slice(-3));//rld
console.log(s.split(", "));//["Hello", "World"]
console.log(s.replace("Hello", "Hi"));//Hi, World

//search a string
console.log(s.indexOf("l"));//2
console.log(s.indexOf("l", 3));//3
console.log(s.lastIndexOf("l"));//10
console.log(s.indexOf("z"));//-1 not found

// boolean searching functions
console.log(s.startsWith("Hello"));//true
console.log(s.endsWith("World"));//true
console.log(s.endsWith("!"))//false
console.log(s.includes("Wo"));//true

// creando modificaciones de un string
console.log(s.replace("World", "Mundo"));//Hello, Mundo
console.log(s.toLowerCase());//hello, world
console.log(s.toUpperCase());//HELLO, WORLD
console.log(s.normalize());//Hello, World
console.log(s.normalize("NFD"));//Hello, World

// inspecting individual characters in a string
console.log(s.charAt(0));//H
console.log(s.charAt(s.length - 1));//d
console.log(s.charCodeAt(0));//72
console.log(s.codePointAt(0));//72

// string padding
console.log("x".padStart(3));//"  x"
console.log("x".padEnd(3));//"x  "
console.log("x".padStart(3, "*"));//"**x"
console.log("x".padEnd(3, "*"));//"x**"
console.log("x".padEnd(3, "-" + "*"));//"x-*"

// string trimming
console.log("  x  ".trim());//"x"
console.log("  x  ".trimStart());//"x  "
console.log("  x  ".trimEnd());//"  x"

//miscellaneous string methods
console.log("hello".repeat(3));//"hellohellohello"
console.log("hello".concat(", ", "world"));//"hello, world"

// Template Literals
let nombre = "Chuy";
let apellido = "Estrada";
let mensaje = `Hola, ${nombre}`;
console.log(mensaje);
let mensaje2 = `\
\u2718 Hola ${nombre}, tu apellido es:
${apellido}`;
console.log(mensaje2);
console.log(`\n`.length);//1
console.log(`\u2718`.length);//1
console.log(String.raw`\n`.length);//2

// Pattern Matching
let text = "testing: 1, 2, 3";
let pattern = /\d+/g;
pattern.test(text);//true
text.search(pattern);//9
let matches = text.match(pattern);
console.log(matches);//["1", "2", "3"]
text.replace(pattern, "#");//"testing: #, #, #"
text.split(/\D+/);//["", "1", "2", "3"]

//----- Boolean
let booleano;
booleano = true;
booleano = null;
if (booleano) {
    console.log("Es verdadero");
} else {
    console.log("Es falso");
}

//----- Undefined and Null
let indefinido;
let nulo = null;
console.log(indefinido);
console.log(nulo);
console.log(indefinido == nulo);//true
console.log(indefinido === nulo);//false

//----- Symbol
let strname = "string name";
let simbolo = Symbol("propname");
let simbolo2 = Symbol("propname"); 
let obj = {};
obj[strname] = 1;
obj[simbolo] = 2;
console.log(obj[strname]);//1
console.log(obj[simbolo]);//2
console.log(obj);//{ 'string name': 1, [Symbol(propname)]: 2 }
console.log(obj[strname] === obj["string name"]);//true
console.log(obj[simbolo] === obj[Symbol("propname")]);//false
console.log(obj[strname] === obj[Symbol("propname")]);//false
obj[simbolo2] = 2;
console.log(obj);
let simbolo3 = Symbol.for("hello");
let simbolo4 = Symbol.for("hello");
console.log(simbolo3 === simbolo4);//true
console.log(Symbol.keyFor(simbolo3));//hello
console.log(simbolo3.description);//hello
console.log(simbolo3.toString());//Symbol(hello)

//----- Valores primitivos y objetos (inmutabilidad y mutabilidad)
// Los valotes primitivos son inmutables, por ejemplo:
let cadena = "Hola";
console.log(cadena.toUpperCase());//HOLA
console.log(cadena);//Hola: no cambia 

// Los objetos son mutables, por ejemplo:
let objeto = {nombre: "Chuy"};
objeto.nombre = "Jesus";
console.log(objeto.nombre);//Jesus
objeto.apellido = "Estrada"; //agrega una propiedad
console.log(objeto);//{ nombre: 'Jesus', apellido: 'Estrada' }
let o = {x: 1};
let p = {x: 1};
console.log(o === p);//false: no son el mismo objeto
let a =  ["a", "b", "c"];
let b = a; //b es una referencia a a
console.log(a === b);//true: son el mismo objeto por referencia

//----- Conversiones explicitas
Number("123");//123
String(false);//"false"
Boolean([]);//true
let n = 17;
let binary = "0b" + n.toString(2);//"0b10001"
let octal = "0o" + n.toString(8);//"0o21"
let hex = "0x" + n.toString(16);//"0x11"
console.log(binary, octal, hex);
console.log(parseInt("3 blind mice"));//3
console.log(parseFloat("3.14 meters"));//3.14
console.log(parseInt("0xff"));//255
console.log(parseInt("-0xff"));//-255
console.log(parseInt("ff", 16));//255
console.log(parseInt("2.3"));//2
console.log(parseInt("0.9"));//0
console.log(parseInt(".1"));//NaN
console.log(parseFloat("$78.98"));//NaN

//toString() method
({x: 1, y: 2}).toString();//"[object Object]"
[1, 2, 3].toString();//"1,2,3"
(3).toString();//"3"
(3.14).toString();//"3.14"
(255).toString(16);//"ff"
(255).toString(8);//"377"
(255).toString(2);//"11111111"
(function(x, y) {return x + y;}.toString());//"function(x, y) {return x + y;}"
let fecha = new Date(2024, 0, 1);
console.log(fecha.toString());//"Wed Jan 01 2024 00:00:00 GMT-0600 (Central Standard Time)"
Number([99]);//99
