//? Smallest Difference
//? Given two arrays of integers, compute the pair of values (one value in each array) 
//? with the smallest (non-negative) difference. Return the difference.

//* ---- ARRAYS de ejemplo ----
const a = [1, 3, 15, 11, 2];
const b = [23, 127, 235, 19, 8];
// output: 3

const c = [10, 5, 40];
const d = [50, 90, 80];
// output: 10

const e = [];
const f = [];
// output: null
//------------------------------------

//* ---- FUNCIONES ----
function smallestDifference(a,b) { // Esta funcion toma 2 ARRAYS como parametro
    let result = Infinity;         // Se inicializa en infinito para que cualquier valor comparativo sea menor a este

    for (let numA of a ) {         // Itero sobre cada elemento del Grupo A

        for ( let numB of b){      // Por cada elemento del grupo A lo se compara con la iteracion del Grupo B
            const aux = Math.abs(numA - numB)   // se guarda la diferencia entre ellos sin importar el orden entre ellos ni su signo 
            if ( aux < result) {   // Solo se guarda en "result" aquellos valores menores a su anterior iteracion 
                result = aux
            }
        }
    };
    
    return result === Infinity ? null : result; // Aqui se envia el resultado o "null" en caso que los array esten vacios 
}

const result = smallestDifference(b,a)
const resultCD = smallestDifference(c,d)
const resultEF = smallestDifference(e,f)
//------------------------------------

//* ---- CONSOLE.LOG ----
console.log(result)
console.log(resultCD)
console.log(resultEF)

//!--------------------------------------------------------
// function smallestDifference(a, b) {
//     // Primero, ordena ambos arreglos de manera ascendente
//     a.sort((x, y) => x - y);
//     b.sort((x, y) => x - y);
  
//     let i = 0; // Índice para recorrer el arreglo 'a'
//     let j = 0; // Índice para recorrer el arreglo 'b'
//     let minDiff = Infinity; // Inicializa la diferencia mínima como infinito
  
//     while (i < a.length && j < b.length) {
//       const diff = Math.abs(a[i] - b[j]); // Calcula la diferencia absoluta
//       if (diff < minDiff) {
//         minDiff = diff; // Actualiza la diferencia mínima
//       }
      
//       // Avanza en el arreglo que contiene el número menor para intentar reducir la diferencia
//       if (a[i] < b[j]) {
//         i++;
//       } else {
//         j++;
//       }
//     }
  
//     return minDiff;
//   }
  
//   const a = [1, 3, 15, 11, 2];
//   const b = [23, 127, 235, 19, 8];
  
//   const result = smallestDifference(a, b);
//   console.log(result); // Resultado: 3
//!--------------------------------------------------------