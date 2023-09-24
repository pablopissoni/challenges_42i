/* global describe, test, expect */
const sinCambio = require('../Non-Constructible-Change/Non-ConstructibleChange')

describe('Test Non-ConstructibleChange', () => {
  // Array vacio
  test('Cambio minimo para arreglo vacio', () => {
    const coins = []
    const resultado = sinCambio(coins)
    expect(resultado).toBe(1) // El resultado debería ser 1 porque no hay monedas
  })

  // Prueba para un arreglo que no necesita cambio
  test('Cambio minimo para arreglo ordenado', () => {
    const coins = [1, 2, 3, 4]
    const resultado = sinCambio(coins)
    expect(resultado).toBe(11) // El resultado debería ser 11
  })

  // array desordenado
  test('Cambio minimo para arreglo desordenado', () => {
    const coins = [5, 7, 1, 1, 2, 3, 22]
    const resultado = sinCambio(coins)
    expect(resultado).toBe(20) // El resultado debería ser 21
  })

  // valores invalidos
  test('Cambio minimo para arreglo con valores invalidos', () => {
    const coins = [5, 7, 1, 1, 2, 'a', 22]
    const resultado = sinCambio(coins)
    expect(resultado).toBe(null) // El resultado debería ser NULL ya que hay valores invalidos
  })
})
