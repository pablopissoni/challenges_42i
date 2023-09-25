/* global describe, test, expect */
import { nonConstructibleChange } from "../src/components/Function.js";

describe('Test Non-ConstructibleChange', () => {
  // Array vacio
  test('Cambio minimo para arreglo vacio', () => {
    const coins = []
    const resultado = nonConstructibleChange(coins)
    expect(resultado).toBe(1) // El resultado debería ser 1 porque no hay monedas
  })

  // Prueba para un arreglo que no necesita cambio
  test('Cambio minimo para arreglo ordenado', () => {
    const coins = [1, 2, 3, 4]
    const resultado = nonConstructibleChange(coins)
    expect(resultado).toBe(11) // El resultado debería ser 11
  })

  // array desordenado
  test('Cambio minimo para arreglo desordenado', () => {
    const coins = [5, 7, 1, 1, 2, 3, 22]
    const resultado = nonConstructibleChange(coins)
    expect(resultado).toBe(20) // El resultado debería ser 21
  })

  // valores invalidos
  test('Cambio minimo para arreglo con valores invalidos', () => {
    const coins = [5, 7, 1, 1, 2, 'a', 22]
    const resultado = nonConstructibleChange(coins)
    expect(resultado).toBe(null) // El resultado debería ser NULL ya que hay valores invalidos
  })

  // valores negativos
  test('Cambio minimo para arreglo con valores negativos', () => {
    const coins = [5, 7, 1, 1, 2, 3, -22]
    const resultado = nonConstructibleChange(coins)
    expect(resultado).toBe(null) // El resultado debería ser NULL ya que hay valores negativos
  })
})
