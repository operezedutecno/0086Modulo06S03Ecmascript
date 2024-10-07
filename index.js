// REQUERIMIENTO 1
/* Crear tres variables, una con cada palabra clave: var, let, const; y construir una porción
de código donde la ejecución tenga un error por el alcance de cada una de éstas, ya sea
porque la definición es al interior de una función, de un bloque o fuera de ellos. */
// Ejercicio 8
// var numero = -6;
// Caso de Error con let
// if(numero < 0) {
//     let va = numero * -1
// } else {
//     let va = numero
// }
// console.log(va);
// Fin de Error con let


// Caso de Error con const
// if(numero < 0) {
//     const va = numero * -1
// } else {
//     const va = numero
// }
// console.log(va);
// Fin de Error con const


// Caso de Error con var
// function valorAbsoluto() {
//     if(numero < 0) {
//         var va = numero * -1
//     } else {
//         var va = numero
//     }
// }
// console.log("va", va);
// Fin de Error con var


// Caso de éxito con var
// if(numero < 0) {
//     var va = numero * -1
// } else {
//     var va = numero
// }
// console.log(va);
// Fin de éxito con var



// REQUERIMIENTO 2
/* Crear una función utilizando el formato tradicional con la palabra clave function, y luego
volver a escribirla utilizando la sintaxis de función de flecha, y guardando la declaración
dentro de una variable. La función debe recibir, al menos, dos argumentos. */

// Opción con formato tradicional
// function mostrarPositivos(n1, n2) {
//     if(n1 > 0 && n2 > 0) {
//         return "Número1: "+n1+" Número2: "+n2;
//     } else {
//         return "Ambos números deben ser positivos"
//     } 
// }

// Opción con función flecha o Arrow Function
// const mostrarPositivos = (n1, n2) => {
//     if(n1 > 0 && n2 > 0) {
//         return "Número1: "+n1+" Número2: "+n2;
//     } else {
//         return "Ambos números deben ser positivos"
//     } 
// }


// Segunda Opción con función flecha o Arrow Function
// const mostrarPositivos = (n1, n2) => (n1 > 0 && n2 > 0) ? "Número1: "+n1+" Número2: "+n2 : "Ambos números deben ser positivos"
// let num1 = 6;
// let num2 = 9;
// console.log(mostrarPositivos(num1, num2))


// REQUERIMIENTO 3
/* Crear una función similar a la del ejercicio, utilizando esta vez un objeto con
características de algún animal, que contenga, al menos, cinco pares de llave - valor.
Utilizar template literals para escribir un texto empleando los valores del objeto, y
Destructuring para definir los valores del objeto dentro de la función.*/


const datosAnimal = ({ especie, raza, color }) => {
    return { 
        especie, 
        raza, 
        color,
        descripcion: `Especie: ${especie}, Raza: ${raza}, Color: ${color}`
    }
}

const animal = {
    especie: "Perro",
    raza: "Pastor Aleman",
    color: "Negro",
    anios: 2,
    tamanio: "Grande"
}

console.log(datosAnimal(animal))