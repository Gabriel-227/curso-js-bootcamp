var variable;
let variablelet_;

// const constante;
const constante = 'Hola soy una constante';
console.log(constante); // Hola soy una constante
// constante = 'Adios'; // Error: Assignment to constant variable. nos da un error

var a = 1;
console.log(a); // 1

a = 4;
console.log(a); // 4


let b = 2;
console.log(b); // 2

b = 5;
console.log(b); // 5



var variable = 'Hola soy una variable VAR';

for (var i = 0; i < 3; i++) {
    var variable = 'Hola soy una segunda variable VAR';
    // console.log(i);
}

console.log(variable); // Hola soy una segunda variable VAR

let variablelet= 'Hola soy una variable let';

for (var i = 0; i < 3; i++) {
    let variablelet = 'Hola soy una segunda variable let';
    // console.log(i);
}

console.log(variablelet); // Hola soy una variable let

// typeof
var num = 4;
console.log(typeof num); // number

num = 'Hola';
console.log(typeof num); // string