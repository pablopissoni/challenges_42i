import { useState } from "react";
import { nonConstructibleChange } from "./Function";
export const NonConstructibleChange = () => {
  // ---- Variables de estado ----
  const [result, setResult] = useState(0); // Es la variable que se muetra en Front para el resultado
  const [coins, setCoins] = useState([]); // Acumula uno a uno cada numero en el array
  const [input, setInput] = useState(""); // Se utiliza para guardar los valores del input

  // ---- Funciones ----
  function calculoMenorCambio() { // Calcula el menor monto no retornable y ese numero setea al hook "result"
    const menorNum = nonConstructibleChange(coins);
    setResult(menorNum);
  }

  function handleChange(e) {  // Maneja los cambios de valor en inputa travez del hook
    const { value } = e.target;
    setInput(value);
  }

  function addNumber() { // Agrega un numero al array (coins) mientras que no este vacio y sea mayor a 0
    if (input === "" || input < 0 ) return;
    const numero = parseInt(input);
    setCoins([...coins, numero]);
    setInput("");
  }

  function clearCoins() { // Esta funcion vuelve los valores a pordefecto (Coins = [], Result = 0, Input = "")
    setCoins([]);
    setResult(0);
    setInput("");
  }

  return (
    <div className="bg-white w-[550px] h-fit ml-10  p-2 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center shadow-md rounded-lg bg-slate-400">
        Non-ConstructibleChange
      </h2>
      {/* ---------- Exercise ---------- */}
      <div className="m-2 flex items-center">
        <p className="font-semibold my-2">
          Given an array of positive integers representing the values of coins
          in your possession, write a function that returns the minimum amount
          of change (the minimum sum of money) that you cannot create. The given
          coins can have any positive integer value and are not necessarily
          unique (i.e., you can have multiple coins of the same value).
        </p>
      </div>

      {/* ---------- Input and buttons ---------- */}
      <div className="m-2 flex items-center">
        <input
          className="appearance-none h-8 w-5/12 bg-gray-100 text-gray-700 border border-gray-500 py-3 px-4 leading-tight focus:outline-none focus:bg-white rounded-l-lg"
          value={input}
          type="number"
          min={0}
          onChange={handleChange}
          onKeyDown={(e) => (e.key === "Enter" ? addNumber() : null)}
          placeholder="Ingrese un numero"
        />

        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 h-8 rounded-r-lg hover:scale-110"
          onClick={addNumber}
        >
          ➕
        </button>
        <button
          className="bg-red-800 hover:bg-red-600 text-white font-bold ml-4 px-1 h-8 rounded-lg hover:scale-125"
          onClick={clearCoins}
        >
          🗑️
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 h-8 ml-auto rounded-lg hover:scale-110"
          onClick={() => calculoMenorCambio()}
        >
          Calculate
        </button>
      </div>

      {/* ---- Title Table ---- */}
      <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <div className="text-sm font-bold text-gray-700  rounded-lg flex bg-slate-200">
          <p className="ml-8 px-4 py-3 flex-1">
            Numbers
          </p>

          <p className=" px-6 py-3 ">
            Non Change
          </p>
        </div>

        <div className="rounded-lg my-2 bg-blue-200 flex pl-8 h-12">
          {coins.map((num, numIndex) => (
            <span
              key={numIndex}
              className=" bg-blue-500 text-white px-2 py-2 rounded-md mr-2 my-2 "
            >
              {num}
            </span>
          ))}

          <p className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap ml-auto flex items-center">
            {result}
          </p>
        </div>
      </div>
    </div>
  );
};
