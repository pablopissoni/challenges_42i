// Menor cambio no disponible - Non-ConstructibleChange
export function nonConstructibleChange(coins) {
  const isNumbers = coins.every((coin) => typeof coin === 'number' && coin > 0) // Compruebo que los elementos sean numeros y que sean mayor a 0
  if (!isNumbers) return null; // Si hay un valor que no sea numero la funcion retorna NULL

  const coinOrder = [...coins];
  coinOrder.sort((a, b) => a - b); // Ordenar el arreglo en orden ascendente

  let cambioMinimo = 1; // Inicializar el cambio mínimo en 1

  for (const coin of coinOrder) {
    if (coin <= cambioMinimo) {
      // Si la moneda es menor o igual al cambio mínimo
      cambioMinimo += coin; // Se le suma la moneda acumulandose por cada iteracion
    } else {
      // cuando la moneda es mayor que el cambio mínimo se retorna como el menor valor encontrado
      return cambioMinimo;
    }
  }

  return cambioMinimo;
}

// Menor diferencia - smallestDifference
export function smallestDifference(a, b) {
  // Esta funcion toma 2 ARRAYS como parametro
  let result = Infinity; // Se inicializa en infinito para que cualquier valor comparativo sea menor a este

  for (const numA of a) {
    // Itero sobre cada elemento del Grupo A
    for (const numB of b) {
      // Por cada elemento del grupo A lo se compara con la iteracion del Grupo B
      const aux = Math.abs(numA - numB); // se guarda la diferencia entre ellos sin importar el orden entre ellos ni su signo
      if (aux < result) {
        // Solo se guarda en "result" aquellos valores menores a su anterior iteracion
        result = aux;
      }
    }
  }
  return result === Infinity ? null : result; // Aqui se envia el resultado o "null" en caso que los array esten vacios
}