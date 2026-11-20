export const STORE_URL = "https://loja.infinitepay.io/gabrielfrancisatacado";
export const INSTAGRAM_URL = "https://www.instagram.com/gabrielfrancis.atacado/";
export const PHONE = "+55 11 93398-2818";
export const WHATSAPP_URL = "https://wa.me/5511933982818";

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
