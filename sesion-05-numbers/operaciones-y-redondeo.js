// sesión 05 - Numbers
// Declaracion de variables numéricas enteros y decimales
let a = 5; // Number
console.log(a); // 5

let b = 0.1; // Number
console.log(b); // 0.1

// Precisión
let c = 0.2;

console.log(b + c); // 0.30000000000000004

//Pequeño truco para obtener valores reales
Math.round((0.1 + 0.2) * 100) / 100; // 0.3
console.log(Math.round((b + c) * 100) / 100); // 0.3