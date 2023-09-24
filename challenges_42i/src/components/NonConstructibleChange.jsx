import React, { useState } from "react";
import { sinCambio } from "./Function";

export const NonConstructibleChange = () => {
  // ---- Variables de estado ----
  const [result, setResult] = useState(0);
  const [coins, setCoins] = useState([]);
  const [input, setInput] = useState("");

  // ---- Funciones ----
  function calculoMenorCambio() {
    const menorNum = sinCambio(coins);
    setResult(menorNum);
  }

  function handleChange(e) {
    const { value } = e.target;
    setInput(value);
    
  }

  function addNumber() {
    if (input === ""  || input < 0) return;
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
    <div className="bg-white w-[550px] h-fit ml-10  p-2 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center shadow-md rounded-lg bg-slate-400">
        Non-ConstructibleChange
      </h2>
      {/* ---------- NUEVA TAREA ---------- */}
      <div className="m-2 flex items-center">
        <p className="font-semibold my-2">
          Given an array of positive integers representing the values of coins
          in your possession, write a function that returns the minimum amount
          of change (the minimum sum of money) that you cannot create. The given
          coins can have any positive integer value and aren’t necessarily
          unique (i.e., you can have multiple coins of the same value).
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
          Calculate
        </button>
      </div>

      {/* Titulo de Tareas */}
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
