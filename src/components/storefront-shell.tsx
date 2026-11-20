import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { INSTAGRAM_URL, STORE_URL, WHATSAPP_URL, PHONE } from "@/lib/storefront";

export function Wordmark() {
  return (
    <Link to="/" aria-label="Gabriel Atacado — início" className="shrink-0 leading-none">
      <span className="block font-display text-3xl italic text-gold">Gabriel</span>
      <span className="block text-xs uppercase text-ink-foreground">Atacado</span>
    </Link>
  );
}
export function StorefrontHeader() {
  const [open, setOpen] = useState(false);
  const sections = [
    ["Categorias", "categorias"],
    ["Coleção", "colecao"],
    ["Atacado", "atacado"],
    ["Sobre", "sobre"],
  ] as const;
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>
      <div className="bg-primary px-4 py-2 text-center text-xs text-primary-foreground">
        Vendas no atacado ·{" "}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          @gabrielfrancis.atacado
        </a>
      </div>
      <header className="sticky top-0 z-40 bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:flex md:justify-between">
          <Wordmark />
          <nav aria-label="Navegação principal" className="hidden gap-7 md:flex">
            {sections.map(([label, id]) => (
              <Link key={id} to="/" hash={id} className="eyebrow hover:text-gold">
                {label}
              </Link>
            ))}
          </nav>
          <Button asChild variant="gold" className="hidden md:inline-flex">
            <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
              Loja oficial
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="min-h-11 min-w-11 text-gold md:hidden"
                aria-label="Abrir menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent aria-describedby={undefined} className="bg-ink text-ink-foreground">
              <SheetTitle className="font-display text-2xl text-gold">Gabriel Atacado</SheetTitle>
              <nav aria-label="Navegação no celular" className="mt-8 flex flex-col gap-3">
                {sections.map(([label, id]) => (
                  <SheetClose asChild key={id}>
                    <Link to="/" hash={id} className="flex min-h-11 items-center text-lg">
                      {label}
                    </Link>
                  </SheetClose>
                ))}
                <Button asChild variant="gold">
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                    Loja oficial
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
export function StorefrontFooter() {
  return (
    <footer className="bg-ink px-5 pb-32 pt-14 text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <Wordmark />
          <p className="mt-4 text-sm">Moda feminina no atacado.</p>
        </div>
        <nav
          aria-label="Contato e informações"
          className="flex min-w-0 flex-col items-start gap-4 text-sm"
        >
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
            Loja oficial
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Instagram @gabrielfrancis.atacado
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp {PHONE}
          </a>
          <Link to="/privacidade">Privacidade — rascunho</Link>
          <Link to="/termos">Termos — rascunho</Link>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-gold/30 pt-6 text-xs">
        © {new Date().getFullYear()} Gabriel Atacado
      </p>
    </footer>
  );
}
export function WhatsAppContact() {
  return (
    <aside aria-label="Atendimento por WhatsApp" className="contact-dock">
      <Button asChild variant="gold" className="rounded-full px-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Falar com Gabriel Atacado pelo WhatsApp: ${PHONE}`}
        >
          <MessageCircle aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </Button>
    </aside>
  );
}
