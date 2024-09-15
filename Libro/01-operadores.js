//Operadores aritméticos
let a = 5;
let b = 3;
console.log(a + b); //8: suma
console.log(a - b); //2: resta
console.log(a * b); //15: multiplicación
console.log(a / b); //1.6666666666666667: división
console.log(a % b); //2: módulo
console.log(a ** b); //125: potencia
console.log('5' + '3'); //53: concatenación
console.log(a++); //5: incremento
console.log(a--); //6: decremento
console.log(++a); //6: incremento
console.log(--a); //5: decremento
console.log( a+=2)//7: incremento
console.log( a-=2)//5: decremento
console.log( a*=2)//10: multiplicación

//Operadores de comparación
console.log(a == b); //false: igualdad
console.log(a != b); //true: desigualdad
console.log(a > b); //true: mayor que
console.log(a < b); //false: menor que
console.log(a >= b); //true: mayor o igual que
console.log(a <= b); //false: menor o igual que
console.log(a === b); //false: igualdad estricta
console.log(a !== b); //true: desigualdad estricta
console.log('two' == 2); //false: igualdad
console.log('two' == 'three'); //false: igualdad
console.log('two' > 'three'); //true: mayor que

//Operadores lógicos
let x = true;
let y = false;
console.log(x && y); //false: and
console.log(x || y); //true: or
console.log(!x); //false: not
console.log(!y); //true: not
console.log(!!x); //true: not not
console.log(!!y); //false: not not
console.log(x && (x || y)); //true: and or
console.log(x || (x && y)); //true: or and

