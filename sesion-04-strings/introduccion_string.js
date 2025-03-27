// Sesión 4 - Strings (Cadenas de caracteres)   
let str_sng = 'Hola soy un texto con comillas simples';
let str_dbl = "Hola soy un texto con comillas dobles";
let str_bck = `Hola soy un texto con comillas invertidas`;


console.log(str_sng);
console.log(str_dbl);
console.log(str_bck);

let str_comillas = "Hola soy un texto con \"comillas dobles\" dentro de comillas dobles";
let str_comillas_simples = 'Hola soy un texto con "comillas dobles" dentro de comillas simples';
let str_comillas_simples_2 = 'Hola soy un texto con \'comillas simples\' dentro de comillas simples';
let str_comillas_dobles = "Hola soy un texto con comillas 'dobles dentro' de comillas invertidas";
let str_comillas_invertidas = `Hola soy un texto con "comillas dobles" dentro de comillas invertidas`;

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);
console.log(str_comillas_invertidas);

let nombre = "Gabriel";
let saludo = `Hola; ${nombre} bienvenido`;

console.log(saludo);

// Se utilizan a las comillas invertidas utilizarlas como plantillas html 
let plantilla_html = `
    <html>
        <head>
            <title>Plantilla HTML</title>
        </head>
        <body>
            <h1>PAgina web de ${nombre}</h1>
            <p>Este es un parrafo</p>
        </body>
    </html>
`;

console.log(plantilla_html);

// Introduccion de variables en html
let libro = ["Empieza por el porque", "El monje que vendio su Ferrari", "Padre rico padre pobre"];