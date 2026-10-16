import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sistema Checklist Bomba Medidora | Projetos",
  description:
    "Sistema web para gerenciamento de checklists, ensaios de aferição, usuários, filiais e relatórios operacionais.",
};

const features = [
  {
    number: "01",
    title: "Gestão de usuários",
    description:
      "Cadastro, edição, desativação e organização de usuários conforme os perfis previstos pelo sistema.",
  },
  {
    number: "02",
    title: "Matrizes e filiais",
    description:
      "Gerenciamento da estrutura organizacional e dos vínculos entre usuários e unidades.",
  },
  {
    number: "03",
    title: "Checklists e ensaios",
    description:
      "Formulários estruturados para inspeções e ensaios de aferição, com campos condicionais conforme as respostas.",
  },
  {
    number: "04",
    title: "Consulta de formulários",
    description:
      "Visualização de registros existentes, com filtros por filial e consulta de informações.",
  },
  {
    number: "05",
    title: "Relatórios em PDF",
    description:
      "Consulta de registros por período e filial, com geração de documentos para apoiar a análise operacional.",
  },
  {
    number: "06",
    title: "Integração com API",
    description:
      "Comunicação entre a interface web e uma API responsável pela autenticação, regras de negócio e persistência.",
  },
];

const frontendTech = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Axios",
  "Bootstrap 5",
  "Tailwind CSS 4",
];

const backendTech = [
  "Node.js",
  "TypeScript",
  "Fastify 5",
  "Sequelize 6",
  "PostgreSQL",
  "JWT",
];

const architecture = [
  {
    name: "Front-end",
    technology: "Next.js + React",
    description: "Interface, formulários e interação com o usuário.",
  },
  {
    name: "API",
    technology: "Node.js + Fastify",
    description: "Endpoints, autenticação e processamento das operações.",
  },
  {
    name: "Banco de dados",
    technology: "PostgreSQL",
    description: "Persistência dos dados por meio do Sequelize.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-7 max-w-2xl sm:mb-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-lime-400 sm:text-sm sm:tracking-[0.2em]">
        {eyebrow}
      </p>

      <h2 className="break-words text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

function TechList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="max-w-full break-words rounded-lg border border-zinc-800 bg-zinc-900 px-2.5 py-2 text-xs text-zinc-300 sm:px-3 sm:text-sm"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function ChecklistProjectPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* Navegação */}
        <Link
          href="/#projetos"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-lime-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-400"
        >
          <span aria-hidden="true">←</span>
          Voltar para projetos
        </Link>

        {/* Apresentação */}
        <section className="grid min-w-0 grid-cols-1 gap-8 pb-14 pt-8 sm:gap-10 sm:pb-16 sm:pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12 lg:pb-24 lg:pt-16">
          <div className="min-w-0">
            <span className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1.5 text-xs font-medium text-lime-300">
              Projeto full-stack
            </span>

            <h1 className="mt-5 max-w-3xl break-words text-3xl font-bold leading-tight tracking-tight text-white sm:mt-6 sm:text-5xl lg:text-6xl">
              Sistema Checklist{" "}
              <span className="text-lime-400">Bomba Medidora</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
              Aplicação web desenvolvida para apoiar o gerenciamento operacional
              de postos de combustíveis, digitalizando checklists, ensaios de
              aferição, cadastros administrativos e consultas de registros.
            </p>

            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8">
              <a
                href="#funcionalidades"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-lime-400 px-5 py-3 text-center text-sm font-semibold text-zinc-950 transition-colors hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-400"
              >
                Explorar funcionalidades
              </a>

              <a
                href="#tecnologias"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-zinc-700 px-5 py-3 text-center text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-400"
              >
                Ver tecnologias
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-zinc-500 sm:mt-10 sm:gap-x-4 sm:text-sm">
              <span>Aplicação web</span>
              <span aria-hidden="true">•</span>
              <span>API REST</span>
              <span aria-hidden="true">•</span>
              <span>Relatórios em PDF</span>
            </div>
          </div>

          {/* Captura de tela */}
          <div className="relative mx-auto w-full min-w-0 max-w-2xl lg:max-w-none">
            <div className="absolute -inset-2 rounded-3xl bg-lime-400/5 blur-xl sm:-inset-3 sm:blur-2xl" />

            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-1.5 shadow-2xl sm:rounded-2xl sm:p-2">
              <div className="flex min-w-0 items-center gap-1.5 border-b border-zinc-800 px-2 py-3 sm:gap-2 sm:px-3">
                <span className="size-2 shrink-0 rounded-full bg-zinc-700 sm:size-2.5" />
                <span className="size-2 shrink-0 rounded-full bg-zinc-700 sm:size-2.5" />
                <span className="size-2 shrink-0 rounded-full bg-zinc-700 sm:size-2.5" />
                <span className="ml-1 truncate text-[10px] text-zinc-500 sm:ml-2 sm:text-xs">
                  Sistema Checklist Bomba Medidora
                </span>
              </div>

              <Image
                src="/images/helppostos.png"
                alt="Captura de tela da interface do Sistema Checklist Bomba Medidora"
                width={1600}
                height={900}
                priority
                sizes="(max-width: 1023px) calc(100vw - 32px), 40vw"
                className="h-auto w-full rounded-b-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Contexto */}
        <section className="border-t border-zinc-800 py-12 sm:py-16 lg:py-20">
          <SectionHeading
            eyebrow="Visão geral"
            title="Organização de processos operacionais"
            description="O sistema reúne operações administrativas e registros de inspeção em uma aplicação web integrada a uma API e a um banco de dados relacional."
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-5">
            <article className="min-w-0 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-8">
              <p className="text-sm font-medium text-lime-400">O contexto</p>
              <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">
                Centralizar informações
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                Checklists, ensaios, cadastros e consultas precisam estar
                organizados para facilitar o registro e o acompanhamento das
                atividades operacionais.
              </p>
            </article>

            <article className="min-w-0 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-8">
              <p className="text-sm font-medium text-lime-400">A solução</p>
              <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">
                Fluxos digitais integrados
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                A aplicação oferece formulários estruturados, gerenciamento
                administrativo, consulta de registros e geração de relatórios em
                PDF a partir dos dados disponíveis.
              </p>
            </article>
          </div>
        </section>

        {/* Funcionalidades */}
        <section
          id="funcionalidades"
          className="scroll-mt-24 border-t border-zinc-800 py-12 sm:py-16 lg:py-20"
        >
          <SectionHeading
            eyebrow="Funcionalidades"
            title="Recursos do sistema"
            description="Principais módulos identificados na documentação técnica do front-end e da API."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group min-w-0 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition-colors hover:border-lime-400/40 hover:bg-zinc-900 sm:p-6"
              >
                <span className="text-sm font-semibold text-lime-400">
                  {feature.number}
                </span>

                <h3 className="mt-4 break-words text-lg font-semibold text-white sm:mt-5">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Arquitetura */}
        <section className="border-t border-zinc-800 py-12 sm:py-16 lg:py-20">
          <SectionHeading
            eyebrow="Arquitetura"
            title="Como as partes se conectam"
            description="Visão simplificada da arquitetura descrita na documentação técnica."
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {architecture.map((layer, index) => (
              <div key={layer.name} className="relative min-w-0">
                <article className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-6">
                  <span className="text-xs font-medium uppercase tracking-widest text-lime-400">
                    Camada 0{index + 1}
                  </span>

                  <h3 className="mt-4 break-words text-xl font-semibold text-white">
                    {layer.name}
                  </h3>

                  <p className="mt-2 break-words text-sm font-medium text-zinc-300">
                    {layer.technology}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {layer.description}
                  </p>
                </article>

                {index < architecture.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xl text-lime-400 md:block"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-zinc-500">
            O front-end consome os endpoints da API por HTTP. A API utiliza o
            Sequelize para acessar o PostgreSQL. A validação das permissões e a
            persistência são responsabilidades do back-end.
          </p>
        </section>

        {/* Tecnologias */}
        <section
          id="tecnologias"
          className="scroll-mt-24 border-t border-zinc-800 py-12 sm:py-16 lg:py-20"
        >
          <SectionHeading
            eyebrow="Stack tecnológica"
            title="Tecnologias utilizadas"
            description="Bibliotecas e ferramentas identificadas na documentação fornecida."
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 sm:gap-8">
            <article className="min-w-0 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-8">
              <h3 className="mb-5 text-lg font-semibold text-white">
                Front-end
              </h3>
              <TechList items={frontendTech} />
              <p className="mt-5 text-sm leading-7 text-zinc-500">
                Interface, navegação, formulários, integração HTTP e geração de
                documentos no navegador.
              </p>
            </article>

            <article className="min-w-0 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-8">
              <h3 className="mb-5 text-lg font-semibold text-white">
                Back-end
              </h3>
              <TechList items={backendTech} />
              <p className="mt-5 text-sm leading-7 text-zinc-500">
                API, autenticação, regras de negócio, acesso aos dados e
                persistência relacional.
              </p>
            </article>
          </div>

          <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-white">
              Documentos e integrações
            </h3>
            <div className="mt-4">
              <TechList
                items={["jsPDF", "jspdf-autotable", "PDFKit", "ViaCEP", "JWT"]}
              />
            </div>
            <p className="mt-4 text-sm leading-7 text-zinc-500">
              jsPDF e jspdf-autotable são utilizados na geração de PDFs no
              front-end; PDFKit está listado no back-end. ViaCEP auxilia na
              consulta de endereços a partir do CEP.
            </p>
          </div>
        </section>

        {/* Aprendizados */}
        <section className="border-t border-zinc-800 py-12 sm:py-16 lg:py-20">
          <SectionHeading
            eyebrow="Engenharia de software"
            title="Desafios técnicos envolvidos"
            description="O projeto reúne diferentes responsabilidades de uma aplicação full-stack."
          />

          <ul className="space-y-4">
            {[
              "Integrar a interface web aos endpoints da API por meio de um cliente HTTP compartilhado.",
              "Estruturar formulários dinâmicos com campos condicionais e diferentes tipos de resposta.",
              "Representar relações entre usuários, matrizes, filiais e formulários no fluxo da aplicação.",
              "Organizar a consulta de registros e a geração de documentos a partir dos dados disponíveis.",
              "Separar as responsabilidades da interface, da API e da camada de persistência.",
            ].map((item) => (
              <li key={item} className="flex min-w-0 gap-3 text-sm text-zinc-300 sm:text-base">
                <span aria-hidden="true" className="mt-1 shrink-0 text-lime-400">
                  ✓
                </span>
                <span className="min-w-0 leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Encerramento */}
        <section className="border-t border-zinc-800 pt-10 sm:pt-16">
          <div className="rounded-2xl border border-lime-400/20 bg-gradient-to-br from-lime-400/10 via-zinc-900 to-zinc-900 p-5 sm:rounded-3xl sm:p-10 lg:p-12">
            <p className="text-sm font-medium text-lime-400">Mais projetos</p>

            <h2 className="mt-4 max-w-2xl break-words text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Conheça os outros projetos do portfólio
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Explore outras aplicações, decisões técnicas e soluções
              desenvolvidas.
            </p>

            <Link
              href="/#projetos"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-lime-400 px-5 py-3 text-center text-sm font-semibold text-zinc-950 transition-colors hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-400 min-[420px]:w-auto"
            >
              Voltar ao portfólio →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}