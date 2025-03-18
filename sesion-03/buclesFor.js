// Bucles For

// for (inicializacion; condicion; actualizacion)
for (let i = 0; i < 10; i++) {
    console.log(i);
}   

//lista.length: devuelve la cantidad de elementos de la lista
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 2);
}

// Estructura for... of (para recorrer listas)
// for (variable of lista)
for (let valor of lista) {
    console.log(valor);
}

// Estructura foreach (para recorrer listas)
// lista.forEach(funcion)
lista.forEach(valor => {
    console.log(valor);
});

// Estructura for... in (para recorrer objetos)
// for (variable in objeto)
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    isDeveloper: true,
    sexo: "M"
};
console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);

for (let propiedad in persona) {
    // console.log(propiedad + ": " + persona[propiedad]);
    console.log(propiedad);
    console.log(persona[propiedad]);
}

