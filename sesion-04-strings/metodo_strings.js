// Metodos mas utilizados con cadenas de caracteres
// Como obstener la longitud de una cadena de caracteres
let cadena = "Hola Mundo soy un string";
console.log(cadena.length);

// Obtener parte de una cadena de caracteres
// slice() substring() substr()
let sli_str = cadena.slice(5, 10);
console.log(sli_str);

let sub_str = cadena.substring(5, 10);
console.log(sub_str);

let substr_str = cadena.substr(5, 10);
console.log(substr_str);

// reemplazar parte del contennido de una cadena de texto
let cadena_str = "Hola Mundo mi nombre es Gabriel";
console.log(cadena_str);

//Al utilizar strigns sólo reemplaza la primera coincidencia
console.log(cadena_str.replace("Gabriel", "Juan"));

let texto_largo = "Hola Mundo soy un string, soy un string muy largo";
console.log(texto_largo.replace("soy", "estoy"));

//Al utilizar expresiones regulares /g (global) se reemplaza todas las coincidencias
console.log(texto_largo.replace(/soy/g, "estoy"));