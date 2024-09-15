//Definición de una función con un parámetro
function saludar(nombre) {
    return `Hola ${nombre}`; //Retornamos un saludo
}
//Invocación de la función
console.log(saludar("Juan")); //Hola Juan

//Guadar la función en una variable
let squarer = function (x) {
    return x * x;
}
console.log(squarer(5)); //25

//Funciones de flecha
let cuber = x => x * x * x;
console.log(cuber(5)); //125

//Metodos de los objetos
let arrayNumbers = [1, 2];
arrayNumbers.push(3); //agregar un elemento
arrayNumbers.push(4); //agregar un elemento
arrayNumbers.reverse(); //invertir el orden
console.log(arrayNumbers); //4,3,2,1

//Definiendo nuestro propio método
let points = [
    {x:0, y:0},
    {x:1, y:1},
];
points.distancia = function () {
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a * a + b * b);
};
console.log(points.distancia()); //1.41

//Funciones con estructura de control if y loops
//If
function isEven(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(5)); //false
console.log(isEven(6)); //true

function abs(n) {
    if (n >= 0) {
        return n;
    } else {
        return -n;
    }
}
console.log(abs(-10) === abs(10)); //true

//while
function factorial(n) {
    let product = 1;
    while (n > 1) {
        product *= n;
        n--;
    }
    return product;
}
console.log(factorial(3)); //6

//for
let primes = [2, 3, 5, 7];
function sum(array){
    let total = 0;
    for (let num of array) {
        total += num;
    }
    return total;
}
console.log(sum(primes)); //17
