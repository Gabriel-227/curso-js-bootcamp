//Metodos de cadenas de textos parte 3
// regexr.com

let texto_largo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

console.log(texto_largo.match(/do/g));
console.log(texto_largo.match(/do/g).length); // 4

// Existe la palabra "do" en el texto largo?
// Si existe, devuelve true, si no existe devuelve false
console.log(texto_largo.includes("do")); // true
console.log(texto_largo.includes("terremoto")); // false

// Si el texto empieza con una palabra devuelve true, si no devuelve false
console.log(texto_largo.startsWith("do"));
console.log(texto_largo.startsWith("Lorem ipsum dolor")); // true

// Si el texto termina con una palabra devuelve true, si no devuelve false
console.log(texto_largo.endsWith("do"));
console.log(texto_largo.endsWith("est laborum.")); // true