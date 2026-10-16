const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "APIs REST"],
  },
  {
    title: "Ferramentas",
    skills: ["Git", "GitHub", "SQL"],
  },
];

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="mx-auto w-full max-w-6xl scroll-mt-8 px-6 py-20"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-lime-400">
          Tecnologias
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Habilidades técnicas
        </h2>

        <p className="mt-5 leading-7 text-zinc-400">
          Ferramentas e tecnologias que utilizo nos meus estudos e projetos de
          desenvolvimento.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
          >
            <h3 className="text-lg font-semibold">{group.title}</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
