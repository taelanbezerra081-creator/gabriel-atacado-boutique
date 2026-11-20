import look01 from "@/assets/look-01.jpg.asset.json";
import look02 from "@/assets/look-02.jpg.asset.json";
import look03 from "@/assets/look-03.jpg.asset.json";
import look04 from "@/assets/look-04.jpg.asset.json";
import look05 from "@/assets/look-05.jpg.asset.json";
import look06 from "@/assets/look-06.jpg.asset.json";
import look07 from "@/assets/look-07.jpg.asset.json";
import look08 from "@/assets/look-08.jpg.asset.json";
import look09 from "@/assets/look-09.jpg.asset.json";
import look10 from "@/assets/look-10.jpg.asset.json";

export type Category = "Calças" | "Conjuntos" | "Shorts & Bermudas";
export type CatalogProduct = {
  id: string;
  name: string;
  cat: Category;
  colors: string[];
  img: string;
  alt: string;
};
export const PRODUCTS: CatalogProduct[] = [
  {
    id: "look-01",
    name: "Shorts com cinto",
    cat: "Shorts & Bermudas",
    colors: ["Areia", "Cinza", "Azul", "Preto"],
    img: look01.url,
    alt: "Shorts com cintos pretos e fivelas douradas, em areia, cinza, azul e preto, dispostos sobre uma mesa",
  },
  {
    id: "look-02",
    name: "Bermuda de alfaiataria cinza",
    cat: "Shorts & Bermudas",
    colors: ["Cinza"],
    img: look02.url,
    alt: "Modelo com bermuda cinza de cintura alta e blusa sem mangas bege",
  },
  {
    id: "look-03",
    name: "Calça de alfaiataria terracota",
    cat: "Calças",
    colors: ["Terracota"],
    img: look03.url,
    alt: "Modelo com calça de alfaiataria terracota, pregas frontais e blusa bege",
  },
  {
    id: "look-04",
    name: "Bermuda cinza — detalhes",
    cat: "Shorts & Bermudas",
    colors: ["Cinza"],
    img: look04.url,
    alt: "Bermuda cinza mostrada de frente, de lado e de costas em uma montagem de três fotos",
  },
  {
    id: "look-05",
    name: "Calças em várias cores",
    cat: "Calças",
    colors: ["Azul", "Cinza", "Marrom", "Areia"],
    img: look05.url,
    alt: "Montagem com calças de cintura alta e cinto em azul, cinza, marrom e areia",
  },
  {
    id: "look-06",
    name: "Calça de alfaiataria com cinto",
    cat: "Calças",
    colors: ["Caramelo"],
    img: look06.url,
    alt: "Detalhe de calça de alfaiataria caramelo com cinto, usada com blusa preta",
  },
  {
    id: "look-07",
    name: "Pantalona azul",
    cat: "Calças",
    colors: ["Azul"],
    img: look07.url,
    alt: "Modelo com pantalona azul de cintura alta e pernas amplas, combinada com blusa bege",
  },
  {
    id: "look-08",
    name: "Conjunto verde",
    cat: "Conjuntos",
    colors: ["Verde"],
    img: look08.url,
    alt: "Modelo com conjunto verde de blusa de mangas curtas e calça de pernas amplas",
  },
  {
    id: "look-09",
    name: "Conjunto com shorts preto",
    cat: "Conjuntos",
    colors: ["Preto"],
    img: look09.url,
    alt: "Modelo com conjunto preto de blusa sem mangas e shorts com cinto de fivela dourada",
  },
  {
    id: "look-10",
    name: "Conjunto vinho",
    cat: "Conjuntos",
    colors: ["Vinho"],
    img: look10.url,
    alt: "Modelo com conjunto vinho de blusa sem mangas e calça de pernas amplas",
  },
];
export const HERO = PRODUCTS.find((product) => product.id === "look-10");
export const CATEGORIES: { name: Category; img: string; alt: string }[] = [
  { name: "Calças", img: look07.url, alt: "Pantalona azul — categoria Calças" },
  { name: "Conjuntos", img: look08.url, alt: "Conjunto verde — categoria Conjuntos" },
  {
    name: "Shorts & Bermudas",
    img: look01.url,
    alt: "Shorts com cinto em várias cores — categoria Shorts e Bermudas",
  },
];
export const COLORS = ["Todas", ...new Set(PRODUCTS.flatMap((product) => product.colors))];
export function filterProducts(category: Category | "Todas", color: string) {
  return PRODUCTS.filter(
    (product) =>
      (category === "Todas" || product.cat === category) &&
      (color === "Todas" || product.colors.includes(color)),
  );
}
