import React, { useState } from "react";
import { smallestDifference } from "./Function";

export const SmallestDiference = () => {
  // ---- Variables de estado ----
  const [result, setResult] = useState(0);
  const [coins, setCoins] = useState([]);
  const [input, setInput] = useState("");

  // ---- Funciones ----
  function calculoMenorCambio() {
    // const menorNum = sinCambio(coins);
    setResult(menorNum);
  }

  function handleChange(e) {
    const { value } = e.target;
    setInput(value);
  }

  function addNumber() {
    if (input === "") return;
    const numero = parseInt(input);
    setCoins([...coins, numero]);
    setInput("");
  }

  function clearCoins() {
    setCoins([]);
    setResult(0);
    setInput("");
  }
  // ---- Funciones ----

  return (
    <div className="bg-white w-[550px] h-[340px] ml-10  p-2 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center shadow-md rounded-lg bg-slate-400">
        Smallest Difference
      </h2>
      {/* ---------- NUEVA TAREA ---------- */}
      <div className="m-2 flex items-center">
        <p className="font-semibold my-2">
          Given two arrays of integers, compute the pair of values (one value in
          each array) with the smallest (non-negative) difference. Return the
          difference.
        </p>
      </div>

      {/* ---------- NUEVA TAREA ---------- */}
      <div className="m-2 flex items-center">
        <input
          className="appearance-none h-8 w-5/12 bg-gray-100 text-gray-700 border border-gray-500 py-3 px-4 leading-tight focus:outline-none focus:bg-white rounded-l-lg"
          value={input}
          type="number"
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
          calcular
        </button>
      </div>

      {/* Titulo de Tareas */}
      <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400 flex">
        <div className="text-sm font-bold text-gray-700 mr-2 rounded-lg bg-slate-200">
          <p  className="px-2 mb-10 mt-2">
            Array 1
          </p>

          <p  className="px-2 pb-4">
          Array 2
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

          <li className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap ml-auto flex items-center">
            {result}
          </li>
        </div>
      </div>
    </div>
  );
};
