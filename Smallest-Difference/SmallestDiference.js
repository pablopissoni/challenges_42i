/* //* ----- EXERCISE -------
     Smallest Difference

Given two arrays of integers, compute the pair of values (one value in each array)
with the smallest (non-negative) difference. Return the difference.

 Examples:
 const a = [1, 3, 15, 11, 2];
 const b = [23, 127, 235, 19, 8];
 output: 3
*/

//* ---- FUNCION ----
function smallestDifference (a, b) { // Esta funcion toma 2 ARRAYS como parametro
  let result = Infinity // Se inicializa en infinito para que cualquier valor comparativo sea menor a este

  for (const numA of a) { // Itero sobre cada elemento del Grupo A
    for (const numB of b) { // Por cada elemento del grupo A lo se compara con la iteracion del Grupo B
      const aux = Math.abs(numA - numB) // se guarda la diferencia entre ellos sin importar el orden entre ellos ni su signo
      if (aux < result) { // Solo se guarda en "result" aquellos valores menores a su anterior iteracion
        result = aux
      }
    }
  };
  return result === Infinity ? null : result // Aqui se envia el resultado o "null" en caso que los array esten vacios
}

module.exports = smallestDifference
