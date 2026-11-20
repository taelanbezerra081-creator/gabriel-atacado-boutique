import { createFileRoute } from "@tanstack/react-router";
import { pageHead, WHATSAPP_URL, PHONE, STORE_URL, INSTAGRAM_URL } from "@/lib/storefront";
export const Route = createFileRoute("/privacidade")({
  head: () => ({
    ...pageHead(
      "Privacidade — rascunho | Gabriel Atacado",
      "Rascunho da política de privacidade da Gabriel Atacado, sujeito ao preenchimento e revisão pelo responsável pela loja.",
    ),
    meta: [
      ...pageHead(
        "Privacidade — rascunho | Gabriel Atacado",
        "Rascunho da política de privacidade da Gabriel Atacado, sujeito ao preenchimento e revisão pelo responsável pela loja.",
      ).meta,
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: PrivacyPage,
});
function PrivacyPage() {
  return (
    <article className="legal-page">
      <p className="eyebrow text-primary">Rascunho — não finalizado</p>
      <h1 className="mt-3">Política de privacidade</h1>
      <p className="mt-6">
        Este documento precisa ser preenchido e revisado pelo responsável pela loja antes de ser
        adotado como política definitiva. Não representa uma declaração de conformidade legal.
      </p>
      <h2>Identificação e contato</h2>
      <ul>
        <li>Razão social: [PREENCHER]</li>
        <li>CNPJ: [PREENCHER]</li>
        <li>Endereço: [PREENCHER]</li>
        <li>Contato de privacidade: [PREENCHER CANAL E RESPONSÁVEL]</li>
      </ul>
      <p className="mt-4">
        Atendimento comercial:{" "}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          WhatsApp {PHONE}
        </a>
        . O contato específico de privacidade ainda precisa ser definido.
      </p>
      <h2>Informações fornecidas no atendimento e na compra</h2>
      <p>
        Os links de contato levam ao <a href={WHATSAPP_URL}>WhatsApp</a> e ao{" "}
        <a href={INSTAGRAM_URL}>Instagram</a>. Ao utilizá-los, você compartilha mensagens e os dados
        de sua conta com essas plataformas e com o atendimento da loja. Compras são direcionadas à{" "}
        <a href={STORE_URL}>loja oficial na InfinitePay</a>, que recebe as informações inseridas no
        pedido e no pagamento. Cada serviço possui seus próprios termos e política de privacidade.
      </p>
      <p className="mt-4">
        [PREENCHER: quais dados a loja recebe, finalidades, bases legais, prestadores com acesso,
        prazos de retenção, medidas de proteção e procedimento para solicitar acesso, correção ou
        exclusão.]
      </p>
      <h2>Estatísticas de visitas</h2>
      <p>
        A publicação deste site está configurada para usar as estatísticas de visitantes da Lovable,
        incluindo cliques. A prévia do editor não é contabilizada. As estatísticas não usam cookies,
        não armazenam nada no dispositivo do visitante, não mantêm endereços IP e não identificam
        visitantes.
      </p>
      <p className="mt-4">
        Registram páginas visitadas, origem das visitas, país, navegador, sistema operacional, tipo
        de dispositivo, tempo de permanência, velocidade de carregamento, erros e cliques em botões
        e links. Sem um aviso de consentimento integrado, esses registros são coletados para todos
        os visitantes do site publicado. Dados detalhados são mantidos por 90 dias e resumos diários
        por um ano.
      </p>
      <p className="mt-4">
        A Lovable coleta esses dados para nós. A{" "}
        <a href="https://lovable.dev/privacy" target="_blank" rel="noopener noreferrer">
          política de privacidade da Lovable
        </a>{" "}
        explica como ela os trata.
      </p>
      <h2>Cookies e outros serviços</h2>
      <p>
        Não foi adicionado um aviso de cookies ou uma nova ferramenta de rastreamento nesta revisão.
        Este site carrega fontes do Google Fonts; o navegador faz solicitações ao Google que incluem
        dados técnicos da conexão, como o endereço IP. WhatsApp, Instagram e InfinitePay podem usar
        cookies e outros recursos em seus próprios sites. [REVISAR: serviços utilizados pela
        operação e necessidade de consentimento conforme as regras aplicáveis.]
      </p>
      <h2>Entrega, devolução e arrependimento</h2>
      <p>
        [PREENCHER: política de entrega, devoluções, trocas e direito de arrependimento aplicável às
        vendas da loja, com canais, condições e prazos reais.]
      </p>
      <h2>Atualização e revisão</h2>
      <p>
        Data de vigência: [PREENCHER APÓS REVISÃO]. Responsável pela aprovação: [PREENCHER]. As
        regras variam conforme o país; o responsável deve revisar este rascunho com orientação
        adequada às regiões atendidas.
      </p>
    </article>
  );
}
