//? Non-Constructible Change

/* Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you **cannot** create. 
The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value).
For example, if you’re given coins = `[1, 2, 5]`, the minimum amount of change that you can’t create is `4`. If you’re given no coins, the minimum amount of change that you can’t create is 1.
### **Sample Input**

`coins = [5, 7, 1, 1, 2, 3, 22]`

### **Sample Output**
`20`
*/

//* ---- COINS ----
const coins = [5, 7, 1, 1, 2, 3, 22];

//* ---- FUNCION ----
function sinCambio(coins) {
  let aux = 0;                     //Declaro mi variable de seguimiento
  const coinsOrder = [...coins]    // Hago una copia ordenada del Array original para no modificarlo
  coinsOrder.sort((a, b) => a-b);
  
  for (const coin of coinsOrder) { // Itero sobre cada "coin"
    if (coin > aux +1) return aux + 1;  // si "coin" es mayor es porque quedo un hueco sin cambio que se retornara
    aux += coin     //se agrega y se suma la moneda anterior a aux 
  }
  return aux;
}

const result = sinCambio(coins);
// let sortt = coins.sort((a, b) => a-b);
//* ---- CONSOLE.LOG ----
console.log(result);
console.log(coins);
