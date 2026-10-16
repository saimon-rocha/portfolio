"use client";

import { Code2, Server, Database, Wrench, ArrowUpRight } from "lucide-react";

const skillGroups = [
  {
    id: "01",
    title: "Frontend",
    description: "Interfaces modernas, responsivas e acessíveis.",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "02",
    title: "Backend",
    description: "APIs, regras de negócio e processamento de dados.",
    icon: Server,
    skills: ["Node.js", "APIs REST"],
  },
  {
    id: "03",
    title: "Ferramentas & Dados",
    description: "Versionamento, consultas e organização de código.",
    icon: Database,
    skills: ["Git", "GitHub", "SQL"],
  },
];

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-20 sm:py-24"
    >
      {/* Cabeçalho */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-lime-400" />
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-lime-400">
              Conhecimentos técnicos
            </p>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Tecnologias que utilizo
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            Ferramentas que utilizo para desenvolver interfaces, construir
            aplicações e resolver problemas com código.
          </p>
        </div>

        <a
          href="https://github.com/saimon-rocha"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex w-fit items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-lime-400/40 hover:text-lime-300"
        >
          <Code2 size={18} />
          Meu GitHub
          <ArrowUpRight size={16} />
        </a>
      </div>

      {/* Categorias */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article
              key={group.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-zinc-900/70 sm:p-6"
            >
              {/* Brilho discreto */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-lime-400/[0.04] blur-2xl transition group-hover:bg-lime-400/[0.09]" />

              <div className="relative flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-lime-400/15 bg-lime-400/[0.07] text-lime-400 transition group-hover:border-lime-400/30 group-hover:bg-lime-400/10">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <span className="font-mono text-xs text-zinc-600">
                  {group.id}
                </span>
              </div>

              <div className="relative mt-6">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
                  {group.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-400">
                  {group.description}
                </p>
              </div>

              <div className="my-5 h-px bg-zinc-800/80" />

              <div className="relative flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-lime-400/30 hover:text-lime-300 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-2 pt-6 text-xs text-zinc-500">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                Área de conhecimento
              </div>
            </article>
          );
        })}
      </div>

      {/* Chamada para conhecer os projetos */}
      <a
        href="https://github.com/saimon-rocha"
        target="_blank"
        rel="noreferrer"
        className="group mt-6 flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-lime-400/30 sm:flex-row sm:items-center sm:justify-between sm:p-6"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-800 text-zinc-200 transition group-hover:text-lime-400">
            <Wrench size={21} />
          </div>

          <div>
            <h3 className="font-medium text-zinc-100">
              Quer ver essas tecnologias na prática?
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              Explore meus projetos, repositórios e código no GitHub.
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-2 text-sm font-medium text-lime-400">
          Explorar projetos
          <ArrowUpRight
            size={17}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </a>
    </section>
  );
}
