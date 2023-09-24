// ? Non-Constructible Change

/* Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you **cannot** create.
The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value).
For example, if you’re given coins = `[1, 2, 5]`, the minimum amount of change that you can’t create is `4`. If you’re given no coins, the minimum amount of change that you can’t create is 1.
//**Sample Input**

 const coins = [5, 7, 1, 1, 2, 3, 22]; // Result 20
 const coins = [1, 2, 5, ""];         // Result NULL
 const coins = [1, 2, 3, 4];         // Result 11
 */

//* ---- COINS ----

//* ---- FUNCION ----
function sinCambio (coins) {
  const isNumbers = coins.every(coin => typeof (coin) === 'number' && coin > 0) // Compruebo que los elementos sean numeros y que sean mayor a 0
  if (!isNumbers) return null // Si hay un valor que no sea numero la funcion retorna NULL

  const coinOrder = [...coins]
  coinOrder.sort((a, b) => a - b) // Ordenar el arreglo en orden ascendente

  let cambioMinimo = 1 // Inicializar el cambio mínimo en 1

  for (const coin of coinOrder) {
    if (coin <= cambioMinimo) { // Si la moneda es menor o igual al cambio mínimo
      cambioMinimo += coin // Se le suma la moneda acumulandose por cada iteracion
    } else {
      // cuando la moneda es mayor que el cambio mínimo se retorna como el menor valor encontrado
      return cambioMinimo
    }
  }

  return cambioMinimo
}
const result = sinCambio([5, 7, 1, 1, 2, 3, 22])
console.log(result)
module.exports = sinCambio
