
const skillGroups = [
  {
    id: "01",
    title: "Frontend",
    description:
      "Interfaces modernas, responsivas e experiências web.",
    code: "UI / CLIENT",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "02",
    title: "Backend",
    description:
      "Lógica de negócio, APIs e processamento de dados.",
    code: "SERVER / API",
    skills: ["Node.js", "APIs REST"],
  },
  {
    id: "03",
    title: "Ferramentas",
    description:
      "Ferramentas para desenvolvimento e organização de código.",
    code: "DEV / TOOLS",
    skills: ["Git", "GitHub", "SQL"],
  },
];

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="mx-auto w-full max-w-6xl scroll-mt-8 px-6 py-20"
    >
      {/* Cabeçalho */}
      <div className="max-w-2xl">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-lime-400">
          Conhecimentos técnicos
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Tecnologias que utilizo
        </h2>

        <p className="mt-5 leading-7 text-zinc-400">
          Ferramentas e tecnologias que fazem parte da minha
          jornada de desenvolvimento e dos projetos que construo.
        </p>
      </div>

      {/* Cards de habilidades */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.id}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:bg-zinc-900/60"
          >
            {/* Detalhe decorativo */}
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full border-b border-l border-zinc-800/70 bg-lime-400/[0.03] transition-colors group-hover:bg-lime-400/[0.06]" />

            {/* Identificação */}
            <div className="relative flex items-center justify-between">
              <span className="font-mono text-xs tracking-widest text-lime-400">
                MODULE_{group.id}
              </span>

              <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 font-mono text-[10px] text-zinc-500">
                {group.code}
              </span>
            </div>

            {/* Título e descrição */}
            <div className="relative mt-8">
              <h3 className="text-xl font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-lime-300">
                {group.title}
              </h3>

              <p className="mt-3 min-h-14 text-sm leading-6 text-zinc-400">
                {group.description}
              </p>
            </div>

            {/* Separador */}
            <div className="my-6 h-px bg-zinc-800 transition-colors group-hover:bg-lime-400/20" />

            {/* Tecnologias */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-lime-400/30 hover:text-lime-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Rodapé do card */}
            <div className="mt-8 flex items-center gap-2 border-t border-zinc-800/70 pt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                Área de conhecimento
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
