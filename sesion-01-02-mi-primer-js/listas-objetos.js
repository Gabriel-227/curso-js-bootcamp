//lista, array o arreglo
const lista = [1, 'hola', true, undefined, null];
const lista2 = new Array(1, 'hola', true, undefined, null);
const lista3 = new Array(3)
lista3[0] = 'Soy el primer elemento, index 0';
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: 'Samsung',
    isWhite: false,
    contactos: ['Juan', 'Pedro', 'Maria'],
    tarjeta: {
        marca: 'Personal',
        almacenamiento: 32,
    },
    'altura-tarjeta': 5,   
}

movil.anyo = 2025;
movil.marca = 'Apple';  

console.log(movil);
console.log(movil.altura);
console.log(movil.marca);

// Fechas
// Librerias de apoyos Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); // se puede definir utilizando los milisegundos
console.log(fecha_milis);   // 1970-01-01T00:00:00.010Z

const fecha_cadenas = new Date('march 27 2025'); // se puede definir utilizando una cadena
console.log(fecha_cadenas); // 2025-03-27T03:00:00.000Z

const fecha_valores = new Date(2025, 2, 27); // se puede definir utilizando valores, mes comienza a contar en 0 desde Enero
console.log(fecha_valores); // 2025-03-27T03:00:00.000Z

const dia = ahora.getDate();
const mes = ahora.getMonth();
const anyo = ahora.getFullYear();
const hora = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();
const milisegundos = ahora.getMilliseconds();
console.log(dia, mes, anyo, hora, minutos, segundos, milisegundos);