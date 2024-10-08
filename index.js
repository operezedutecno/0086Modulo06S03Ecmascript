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
// console.log(datosAnimal(animal))


// REQUERIMIENTO 4 
/* Tomar el objeto creado con anterioridad, y crear una copia actualizada usando el spread
operator; actualizar dos campos, y añadir dos nuevos */

const datosAdicionales = {
    vacunado: true,
    entrenado: false,
    color: "Marrón",
    anios: 4
}

// Solución 1 Req4
// const animalCopy = { ...animal, ...datosAdicionales }

// Solución 2 Req4
const animalCopy = {
    ...animal,
    vacunado: true,
    entrenado: false,
    color: "Marrón",
    anios: 4
}

// console.log(animalCopy);


// Ejemplo de clonación sin referencia
// const animal2 = animal
// const animal2 = JSON.parse(JSON.stringify(animal))
const animal2 = { ...animal }
animal2.anios = 4
// console.log(animal);


// Ejemplo Spread Operator con arrays
const personas = ["José","María","Jesús"]
const personas2 = [ ...personas ]
personas2.push("Luis")
// console.log(personas2);


// REQUERIMIENTO 5
/* Obtener las propiedades del objeto en un Array, utilizando el método Object.values(), y
luego usar un ciclo for of para mostrar por pantalla todos los ítems del Array */

// console.log("Ciclo que muestra las llaves");
// for (const key of Object.keys(animalCopy)) {
//     console.log(key);
// }

// console.log("Ciclo que muestra los valores");
// for (const valor of Object.values(animalCopy)) {
//     console.log(valor);
// }

// console.log("Ciclo que muestra las llaves y sus valores");
// for (const element of Object.entries(animalCopy)) {
//     console.log(element);
// }

// console.log("Ciclo con for in");
// for (const key in animalCopy) {
//     console.log(key);
// }

console.log(animalCopy);

const { tamanio, entrenado, ...result} = animalCopy

console.log(result);
