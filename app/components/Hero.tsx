import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto flex min-h-[75vh] w-full max-w-6xl scroll-mt-8 flex-col justify-center px-6 py-20"
    >
      <div className="mb-8 flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />

        <p className="text-sm font-medium text-zinc-400">{profile.role}</p>
      </div>

      <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
        Desenvolvendo soluções
        <span className="text-lime-400"> para problemas reais.</span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
        {profile.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projetos"
          className="rounded-lg bg-lime-400 px-6 py-3 font-medium text-zinc-950 transition hover:bg-lime-300"
        >
          Ver meus projetos
        </a>

        <a
          href="#contato"
          className="rounded-lg border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500"
        >
          Entrar em contato
        </a>
      </div>

      {(profile.githubUrl || profile.linkedinUrl) && (
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-zinc-400">
          {profile.githubUrl && (
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-lime-400"
            >
              GitHub ↗
            </a>
          )}

          {profile.linkedinUrl && (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-lime-400"
            >
              LinkedIn ↗
            </a>
          )}
        </div>
      )}
    </section>
  );
}
