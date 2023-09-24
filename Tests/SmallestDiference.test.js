const smallestDifference = require("../Smallest-Difference/SmallestDiference");

describe("Test de smallestDifference", () => {
  test("Array vacio", () => {
    const e = [];
    const f = [];
    const result = smallestDifference(e, f);
    expect(result).toBe(null); // si el array esta vacio deberia dar null
  });

  test("Array con valor negativo", () => {
    const c = [-10, 5, 2];
    const d = [-3, 22, 16];
    const result = smallestDifference(c, d);
    expect(result).toBe(5); // Se espera 5, la diferencia entre 2 y -3
  });

  test("Array desordenados", () => {
    const a = [1, 3, 15, 11, 2];
    const b = [23, 127, 235, 19, 8];
    const result = smallestDifference(a,b)
    expect(result).toBe(3) // Se espera 3, la diferencia entre 11 y 8
  });
});
