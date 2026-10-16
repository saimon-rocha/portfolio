import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto flex min-h-[calc(85svh-72px)] w-full max-w-6xl scroll-mt-24 flex-col justify-center px-4 py-16 sm:min-h-[75vh] sm:px-6 sm:py-20 lg:py-24"
    >
      {/* Identificação */}
      <div className="mb-6 flex items-center gap-3 sm:mb-8">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400/40" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-400" />
        </span>

        <p className="text-xs font-medium leading-5 text-zinc-400 sm:text-sm">
          {profile.role}
        </p>
      </div>

      {/* Título */}
      <h1 className="max-w-4xl text-[clamp(2.35rem,8vw,5rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-zinc-100">
        Desenvolvendo soluções
        <span className="text-lime-400"> para problemas reais.</span>
      </h1>

      {/* Descrição */}
      <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-8">
        {profile.description}
      </p>

      {/* Ações principais */}
      <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
        <a
          href="#projetos"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-400 sm:w-auto sm:px-6 sm:text-base"
        >
          Ver meus projetos
          <ArrowDown size={17} />
        </a>

        <a
          href="#contato"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/40 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-lime-400/50 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-400 sm:w-auto sm:px-6 sm:text-base"
        >
          Entrar em contato
          <ArrowUpRight size={17} />
        </a>
      </div>

      {/* Redes sociais */}
      {(profile.githubUrl || profile.linkedinUrl) && (
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-400 sm:mt-8">
          <span className="text-xs text-zinc-500">
            Você também pode me encontrar em
          </span>

          {profile.githubUrl && (
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1 font-medium transition-colors hover:text-lime-400"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>
          )}

          {profile.linkedinUrl && (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1 font-medium transition-colors hover:text-lime-400"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      )}
    </section>
  );
}
