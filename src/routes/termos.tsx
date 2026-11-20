import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead, STORE_URL, WHATSAPP_URL, PHONE } from "@/lib/storefront";
export const Route = createFileRoute("/termos")({
  head: () => ({
    ...pageHead(
      "Termos — rascunho | Gabriel Atacado",
      "Rascunho dos termos da Gabriel Atacado. Condições comerciais e dados legais pendentes de revisão.",
    ),
    meta: [
      ...pageHead(
        "Termos — rascunho | Gabriel Atacado",
        "Rascunho dos termos da Gabriel Atacado. Condições comerciais e dados legais pendentes de revisão.",
      ).meta,
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: TermsPage,
});
function TermsPage() {
  return (
    <article className="legal-page">
      <p className="eyebrow text-primary">Rascunho — não finalizado</p>
      <h1 className="mt-3">Termos da loja</h1>
      <p className="mt-6">
        As condições abaixo são campos para preenchimento e revisão pelo responsável pela loja. Não
        constituem termos comerciais definitivos nem uma declaração de conformidade legal.
      </p>
      <h2>Identificação</h2>
      <ul>
        <li>Razão social: [PREENCHER]</li>
        <li>CNPJ: [PREENCHER]</li>
        <li>Endereço: [PREENCHER]</li>
        <li>Contato de privacidade: [PREENCHER]</li>
      </ul>
      <h2>Vitrine e pedidos</h2>
      <p>
        Gabriel Atacado apresenta moda feminina no atacado com fotos reais das peças. Consulte
        informações das peças e finalize a compra na{" "}
        <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
          loja oficial na InfinitePay
        </a>
        .
      </p>
      <p className="mt-4">
        [PREENCHER: condições de venda, confirmação de pedidos, preços, disponibilidade, pagamentos
        e eventual pedido mínimo, somente com informações verificadas.]
      </p>
      <h2>Entrega</h2>
      <p>
        [PREENCHER: regiões atendidas, cálculo de frete, prazos, transportadoras, acompanhamento e
        procedimento em caso de atraso ou problema na entrega.]
      </p>
      <h2>Trocas e devoluções</h2>
      <p>
        [PREENCHER: condições, prazos, canal de solicitação, custos e procedimento de análise e
        restituição.]
      </p>
      <h2>Cancelamento e direito de arrependimento</h2>
      <p>
        [PREENCHER: regras aplicáveis ao tipo de venda e comprador, prazos legais cabíveis, como
        solicitar cancelamento e como ocorre o reembolso. Revisar com orientação jurídica.]
      </p>
      <h2>Atendimento e privacidade</h2>
      <p>
        Contato comercial:{" "}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          WhatsApp {PHONE}
        </a>
        . Consulte também o <Link to="/privacidade">rascunho de privacidade</Link>.
      </p>
      <h2>Aprovação</h2>
      <p>Data de vigência: [PREENCHER APÓS REVISÃO]. Responsável pela aprovação: [PREENCHER].</p>
    </article>
  );
}
