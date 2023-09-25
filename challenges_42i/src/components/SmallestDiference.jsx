import React, { useState } from "react";
import { smallestDifference } from "./Function";

export const SmallestDiference = () => {
  // ---- Variables de estado HOOK ----
  const [result, setResult] = useState(0);  // Aqui setea el resultado final de la operacion 
  const [array1, setArray1] = useState([]); // Aqui setea los valores para el array 1
  const [array2, setArray2] = useState([]); // Aqui setea los valores para el array 2
  const [inputArray1, setInputArray1] = useState(""); // Aqui manejo el valor del input para el array 1
  const [inputArray2, setInputArray2] = useState(""); // Aqui manejo el valor del input para el array 2

  // ---- Funciones ----
  function smallDiference() { // Esta funcion guarda el valor de la menor diferencia en el Hook "result"
    const num = smallestDifference(array1, array2);
    setResult(num);
  }

  function handleChange(e, setInputArray) { // Maneja el valor de input que se este modificando
    const { value } = e.target;
    setInputArray(value);   // Setea al hook el valor a "inputArray"
  }

/**
 * Agrega un número al array proporcionado y actualiza el estado del input a un string vacio.
 * @param {string} inputArray - El valor del input que contiene el número a agregar.
 * @param {function} setInputArray - La función para actualizar el estado del input.
 * @param {function} setArray - La función para actualizar el estado del array.
 * @param {Array} array - El array al que se agregarán los números.
 * @returns Retorna un array
 */
  function addNumber(inputArray, setInputArray, setArray, array) {
    if (inputArray === "") return;
    const numero = parseInt(inputArray);
    setArray([...array, numero]);
    setInputArray("");
  }

  function clearCoins(setArray, setInputArray) { // vacia los argumentos proporcionados (array, result y input)
    setArray([]);       // Setea el Hook "array" a un array vacio
    setResult(0);       // Setea el Hook "result" a 0
    setInputArray("");  // Setea el Hook "input" a un string vacio
  }

  return (
    <div className="bg-white w-[550px] h-[340px] ml-10  p-2 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center shadow-md rounded-lg bg-slate-400">
        Smallest Difference
      </h2>
      {/* ---------- Exercise ---------- */}
      <div className="m-2 flex items-center">
        <p className="font-semibold my-2">
          Given two arrays of integers, compute the pair of values (one value in
          each array) with the smallest (non-negative) difference. Return the
          difference.
        </p>
      </div>

      {/* ---------- Inputs buttons ---------- */}
      <div className="m-2 items-center">
        <input
          className="appearance-none h-6 mb-2  w-5/12 bg-gray-100 text-gray-700 border border-gray-500 py-3 px-4 leading-tight focus:outline-none focus:bg-white rounded-l-lg"
          value={inputArray1}
          type="number"
          onChange={() => handleChange(event, setInputArray1)}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? addNumber(inputArray1, setInputArray1, setArray1, array1)
              : null
          }
          placeholder="Array 1"
        />

        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 h-[26px] rounded-r-lg hover:scale-110"
          onClick={() =>
            addNumber(inputArray1, setInputArray1, setArray1, array1)
          }
        >
          ➕
        </button>
        <button
          className="bg-red-800 hover:bg-red-600 text-white font-bold ml-4 px-1 h-[26px] rounded-lg hover:scale-125"
          onClick={() => clearCoins(setArray1, setInputArray1)}
        >
          🗑️
        </button>

        <input
          className="appearance-none h-6 w-5/12 bg-gray-100 text-gray-700 border border-gray-500 py-3 px-4 leading-tight focus:outline-none focus:bg-white rounded-l-lg"
          value={inputArray2}
          type="number"
          onChange={() => handleChange(event, setInputArray2)}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? addNumber(inputArray2, setInputArray2, setArray2, array2)
              : null
          }
          placeholder="Array 2"
        />

        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 h-[26px] rounded-r-lg hover:scale-110"
          onClick={() =>
            addNumber(inputArray2, setInputArray2, setArray2, array2)
          }
        >
          ➕
        </button>
        <button
          className="bg-red-800 hover:bg-red-600 text-white font-bold ml-4 px-1 h-[26px] rounded-lg hover:scale-125"
          onClick={() => clearCoins(setArray2, setInputArray2)}
        >
          🗑️
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 ml-6  text-white font-bold px-4 h-[26px] rounded-lg hover:scale-110"
          onClick={smallDiference}
        >
          Calculate
        </button>
      </div>

      {/* ---- Array ---- */}
      <div className="w-full h-[100px] text-sm text-left text-gray-500 dark:text-gray-400 flex items-center">
        <div className="text-sm font-bold text-gray-700 mr-2 rounded-lg bg-slate-200">
          <p className="px-2 mb-6 mt-2">Array 1</p>

          <p className="px-2 pb-4">Array 2</p>
        </div>

        <div>
          <div className="rounded-lg w-[360px]  bg-blue-200 pl-2 h-10 flex items-center">
            {array1.map((num, numIndex) => (
              <span
                key={numIndex}
                className=" bg-blue-500 text-white font-medium px-[4px] py-[4px] mr-2 rounded-md"
              >
                {num}
              </span>
            ))}
          </div>
          <div className="rounded-lg w-[360px] mt-2 bg-blue-200 h-10 pl-2 flex items-center">
            {array2.map((num, numIndex) => (
              <span
                key={numIndex}
                className="bg-blue-500 text-white font-medium px-[4px] py-[4px] mr-2 rounded-md"
              >
                {num}
              </span>
            ))}
          </div>
        </div>
        <div className="text-sm font-bold text-gray-700 mr-2 w-[80px] ml-2 rounded-lg bg-slate-200">
          <p className="px-2 mb-4 mt-2">Difference</p>

          <p className="px-2 pb-2 text-center text-lg">{result}</p>
        </div>
      </div>
    </div>
  );
};
