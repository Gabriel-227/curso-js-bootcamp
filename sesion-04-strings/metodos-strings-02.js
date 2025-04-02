// Metodos de cadenas de textos(parte2)
let input = "Aries"
let db = "aries"

console.log(input === db) // false

// toLowerCase() convierte a minusculas el texto
console.log(input.toLowerCase()) // aries
console.log(input.toLowerCase() === db) // true

// toUpperCase() convierte a mayusculas el texto
console.log(input.toUpperCase()) // ARIES
console.log(input.toUpperCase() === db) // false
console.log(input.toUpperCase() === db.toUpperCase()) // true

//Formas de concatenar cadenas de caracteres
let str_1 = "Hola soy la primera cadena."
let str_2 = "Hola soy la segunda cadena"

console.log(str_1.concat(" ", str_2)) // Hola soy la primera cadena. Hola soy la segunda cadena
console.log(str_1 + " " + str_2) // Hola soy la primera cadena. Hola soy la segunda cadena
console.log(`${str_1} ${str_2}`) // Hola soy la primera cadena. Hola soy la segunda cadena

// Formas de eliminar espacios en blanco
let str_3 = "   Hola soy la tercera cadena.   "// str_3 tiene espacios en blanco al inicio y al final de la cadena
console.log(str_3.length) // 37 (longitud de la cadena con espacios en blanco)

// trim() elimina los espacios en blanco al inicio y al final de la cadena
console.log(str_3.trim().length) // Hola soy la tercera cadena.
console.log(str_3.trimStart().length) // Hola soy la tercera cadena. elimina los espacios en blanco al inicio de la cadena
console.log(str_3.trimEnd().length) //    Hola soy la tercera cadena. elimina los espacios en blanco al final de la cadena

// Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy la cuarta cadena." // ["H", "o", "l", "a", " ", "s", "o", "y", " ", "l", "a", " ", "c", "u", "a", "r", "t", "a", " ", "c", "a", "d", "e", "n", "a"]
console.log(str_4.charAt(5)) // s (caracter en la posicion 5)
console.log(str_4[5]) // s (caracter en la posicion 5)

// Obtener la posicion de un caracter en una cadena
let str_5 = "Hola soy la quinta cadena y voy quinta."
console.log(str_5.indexOf("quinta")) // 12 
console.log(str_5.indexOf("z")) // -1 (no existe el caracter en la cadena)
console.log(str_5.charAt(12))
console.log(str_5.lastIndexOf("quinta")) // 30 (la ultima posicion de la palabra "quinta" en la cadena)