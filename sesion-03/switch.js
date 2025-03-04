// sentencia Switch

let nota = 7;

switch (nota) {
    case 5:
        console.log("Exelente, has obtenido un sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo, pero podrias hacerlo mejor");
        break;
    case 3:
        console.log("Has obtenido un suficiente");
        break;
    case 2:
        console.log("No has aprobado");
        break;
    case 1: 
        console.log("No has estudiado nada, trabaja un poco mas para la proxima");
        break;
    default:
        console.log("Nota no valida");
        break;  
}