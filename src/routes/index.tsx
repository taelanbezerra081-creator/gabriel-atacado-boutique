import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { GalleryImage } from "@/components/gallery-image";
import shareImage from "@/assets/gabriel-atacado-share.jpg.asset.json";

const PREVIEW_ORIGIN = "https://id-preview--509144e8-7319-47ab-80bf-678dee2df9c1.lovable.app";
const SHARE_IMAGE_URL = `${PREVIEW_ORIGIN}${shareImage.url}`;
const SHARE_IMAGE_ALT = "Wordmark Gabriel Atacado em dourado sobre fundo grafite";
import {
  STORE_URL as LOJA,
  INSTAGRAM_URL as INSTAGRAM,
  WHATSAPP_URL as WHATSAPP,
  PHONE,
} from "@/lib/storefront";
import {
  HERO,
  PRODUCTS,
  CATEGORIES as CATS,
  COLORS,
  filterProducts,
  type Category as Cat,
} from "@/lib/catalog";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabriel Atacado | Moda feminina no atacado" },
      {
        name: "description",
        content:
          "Calças de alfaiataria, pantalonas, conjuntos, vestidos, blusas e bermudas femininas no atacado. Compre na loja oficial.",
      },
      { property: "og:title", content: "Gabriel Atacado | Moda feminina no atacado" },
      {
        property: "og:description",
        content: "Calças, conjuntos, vestidos, blusas e bermudas femininas no atacado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: SHARE_IMAGE_URL },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: SHARE_IMAGE_ALT },
      { name: "twitter:image", content: SHARE_IMAGE_URL },
      { name: "twitter:image:alt", content: SHARE_IMAGE_ALT },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Gabriel Atacado",
              url: LOJA,
              telephone: PHONE,
              sameAs: [INSTAGRAM, LOJA],
            },
            {
              "@type": "WebSite",
              name: "Gabriel Atacado",
              inLanguage: "pt-BR",
              publisher: { "@type": "Organization", name: "Gabriel Atacado", url: LOJA },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [cat, setCat] = useState<Cat | "Todas">("Todas");
  const [color, setColor] = useState("Todas");
  const list = useMemo(() => filterProducts(cat, color), [cat, color]);

  return (
    <div className="bg-background text-foreground">
      <section id="inicio" className="storefront-hero relative isolate bg-ink">
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 py-12 md:px-14 md:py-16">
          <p className="font-display text-3xl italic text-gold">Gabriel Atacado</p>
          <h1 className="mt-4 max-w-xl text-4xl leading-tight text-ink-foreground sm:text-5xl lg:text-6xl">
            Moda feminina no atacado, com estilo que vende
          </h1>
          <p className="mt-6 max-w-md text-ink-foreground">
            Calças de alfaiataria, pantalonas, conjuntos, vestidos e básicos para compor a vitrine
            da sua loja.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="lightOutline" className="h-auto whitespace-normal">
              <a href="#colecao" className="btn-outline-light">
                Ver coleção
              </a>
            </Button>
            <Button asChild variant="gold" className="h-auto whitespace-normal">
              <a href={LOJA} target="_blank" rel="noreferrer" className="btn-gold">
                Comprar agora
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <GalleryImage
            priority
            src={HERO?.img ?? ""}
            alt={HERO?.alt ?? "Conjunto vinho da Gabriel Atacado"}
            className="hero-photo absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-scrim absolute inset-0" aria-hidden="true" />
        </div>
      </section>

      <section id="categorias" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-primary">Categorias</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Peças para cada vitrine</h2>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
          {CATS.map((c) => (
            <a
              key={c.name}
              href="#colecao"
              onClick={() => {
                setCat(c.name);
                setColor("Todas");
              }}
              className="group relative aspect-[3/4] overflow-hidden bg-card"
            >
              <GalleryImage
                src={c.img}
                alt={c.alt}
                className="h-full w-full object-contain transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent" />
              <span className="absolute bottom-4 left-4 font-display text-xl text-ink-foreground md:text-2xl">
                {c.name}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section id="colecao" className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <p className="eyebrow text-primary">Vitrine</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Coleção</h2>
          <div className="mt-10 space-y-4">
            <div role="group" aria-label="Filtrar por categoria" className="flex flex-wrap gap-2">
              {(["Todas", ...CATS.map((c) => c.name)] as const).map((c) => (
                <Button
                  variant="ghost"
                  aria-pressed={cat === c}
                  key={c}
                  onClick={() => setCat(c)}
                  className={`eyebrow border px-4 py-2 transition ${cat === c ? "border-ink bg-ink text-ink-foreground" : "border-border hover:border-ink"}`}
                >
                  {c}
                </Button>
              ))}
            </div>
            <div
              role="group"
              aria-label="Filtrar por cor"
              className="flex flex-wrap items-center gap-2"
            >
              <span className="eyebrow mr-2 text-muted-foreground">Cor</span>
              {COLORS.map((c) => (
                <Button
                  variant="ghost"
                  aria-pressed={color === c}
                  key={c}
                  onClick={() => setColor(c)}
                  className={`border-b px-1 py-1 text-sm transition ${color === c ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
                >
                  {c}
                </Button>
              ))}
            </div>
          </div>
          <p role="status" aria-live="polite" className="mt-6 text-sm text-muted-foreground">
            {list.length} {list.length === 1 ? "modelo" : "modelos"}
          </p>
          {list.length === 0 ? (
            <p className="mt-12 text-muted-foreground">
              Nenhum modelo com esse filtro. Veja todas as opções na loja oficial.
            </p>
          ) : (
            <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-3">
              {list.map((p) => (
                <article key={p.id} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <GalleryImage
                      src={p.img}
                      alt={p.alt}
                      className="h-full w-full object-contain transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="eyebrow mt-4 text-muted-foreground">
                    {p.cat} · {p.colors.join(" / ")}
                  </p>
                  <h3 className="mt-1 text-2xl">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Consulte cores, tamanhos e preço
                  </p>
                  <Button asChild variant="default" className="h-auto whitespace-normal">
                    <a href={LOJA} target="_blank" rel="noreferrer" className="btn-wine mt-4">
                      Comprar na loja
                    </a>
                  </Button>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section
        id="atacado"
        className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.4fr] md:py-28"
      >
        <div>
          <p className="eyebrow text-primary">Para lojistas</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Por que comprar no atacado</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            ["Mix para revenda", "Modelos variados em uma só compra para montar sua vitrine."],
            ["Peças versáteis", "Alfaiataria, conjuntos e básicos que combinam entre si."],
            ["Compra direta", "Escolha na loja oficial e tire dúvidas pelo Instagram."],
          ].map(([t, d], i) => (
            <div key={t} className="border-t border-ink pt-5">
              <span className="font-display text-3xl italic text-primary">0{i + 1}</span>
              <h3 className="mt-2 text-2xl">{t}</h3>
              <p className="mt-2 text-sm font-light text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sobre" className="grid bg-secondary md:grid-cols-2">
        <GalleryImage
          src={PRODUCTS.find((product) => product.id === "look-05")?.img ?? ""}
          alt="Calças da Gabriel Atacado em azul, cinza, marrom e areia"
          className="h-80 w-full object-contain md:h-full"
        />
        <div className="px-6 py-16 md:px-14 md:py-24">
          <p className="eyebrow text-primary">Sobre a loja</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Gabriel Atacado</h2>
          <p className="mt-6 max-w-md font-light leading-relaxed">
            Loja de moda feminina no atacado, com foco em calças de alfaiataria e pantalona,
            conjuntos, shorts e bermudas, vestidos, blusas e peças básicas.
          </p>
          <p className="mt-4 max-w-md font-light leading-relaxed">
            Acompanhe as novidades no Instagram e finalize seu pedido na loja oficial.
          </p>
          <Button asChild variant="default" className="h-auto whitespace-normal">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn-wine mt-8">
              Seguir @gabrielfrancis.atacado
            </a>
          </Button>
        </div>
      </section>

      <section className="bg-primary px-5 py-20 text-center text-primary-foreground md:py-28">
        <p className="eyebrow text-gold">Atacado</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl md:text-6xl">
          Monte seu pedido e renove sua vitrine
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild variant="gold" className="h-auto whitespace-normal">
            <a href={LOJA} target="_blank" rel="noreferrer" className="btn-gold">
              Comprar na loja oficial
            </a>
          </Button>
          <Button asChild variant="lightOutline" className="h-auto whitespace-normal">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-outline-light">
              WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
