import { describe, expect, it } from "vitest";
import { PRODUCTS, filterProducts } from "@/lib/catalog";
describe("Uploaded real-photo catalog", () => {
  const mappings = [
    ["look-01", "Shorts & Bermudas"],
    ["look-02", "Shorts & Bermudas"],
    ["look-03", "Calças"],
    ["look-04", "Shorts & Bermudas"],
    ["look-05", "Calças"],
    ["look-06", "Calças"],
    ["look-07", "Calças"],
    ["look-08", "Conjuntos"],
    ["look-09", "Conjuntos"],
    ["look-10", "Conjuntos"],
  ];
  for (const [id, category] of mappings) {
    it(`maps ${id} to ${category} with its original file`, () => {
      const product = PRODUCTS.find((entry) => entry.id === id);
      expect(product?.cat).toBe(category);
      expect(product?.img.endsWith(`/${id}.jpg`)).toBe(true);
    });
  }
  it("includes all ten real photos without fabricated commerce fields", () => {
    expect(PRODUCTS).toHaveLength(10);
    for (const product of PRODUCTS) {
      expect(product).not.toHaveProperty("price");
      expect(product).not.toHaveProperty("stock");
      expect(product).not.toHaveProperty("sizes");
    }
  });
  it("matches multi-color trousers when blue is selected", () => {
    expect(filterProducts("Calças", "Azul").map((product) => product.id)).toEqual([
      "look-05",
      "look-07",
    ]);
  });
});
