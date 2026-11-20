import { describe, expect, it } from "vitest";
import { PHONE, WHATSAPP_URL, STORE_URL, INSTAGRAM_URL } from "@/lib/storefront";
describe("Verified storefront destinations", () => {
  it("uses the recommended wa.me destination with the new number and no prefilled message", () => {
    expect(WHATSAPP_URL).toBe("https://wa.me/5511933982818");
  });
  it("keeps the displayed contact consistent with the supplied destination", () => {
    expect(PHONE).toBe("+55 11 93398-2818");
  });
  it("keeps checkout at the official store", () => {
    expect(STORE_URL).toBe("https://loja.infinitepay.io/gabrielfrancisatacado");
  });
  it("keeps the official Instagram destination", () => {
    expect(INSTAGRAM_URL).toBe("https://www.instagram.com/gabrielfrancis.atacado/");
  });
});
