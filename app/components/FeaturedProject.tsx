import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects";

type FeaturedProjectProps = {
  project: Project;
};

export default function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-colors duration-300 hover:border-lime-400/40">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Imagem */}
        <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-800 bg-zinc-900 md:aspect-auto md:min-h-[440px] md:border-b-0 md:border-r">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={`Captura de tela da aplicação ${project.title}`}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full min-h-56 items-center justify-center">
              <span className="font-mono text-xs tracking-widest text-zinc-500">
                SCREENSHOT INDISPONÍVEL
              </span>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/30 to-transparent" />
        </div>

        {/* Informações */}
        <div className="flex min-w-0 flex-col justify-center p-5 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-lime-400 sm:text-xs">
              Projeto em destaque
            </span>

            <span className="text-xs text-zinc-500">
              {project.status}
            </span>
          </div>

          <p className="mt-5 font-mono text-xs uppercase tracking-widest text-zinc-500 sm:mt-6">
            {project.category}
          </p>

          <h3 className="mt-3 break-words text-2xl font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-lime-300 sm:text-3xl lg:text-4xl">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-zinc-400 sm:mt-5 sm:text-base">
            {project.description}
          </p>

          {/* Tecnologias */}
          <div className="mt-6 sm:mt-7">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-500 sm:text-xs">
              Stack tecnológica
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="max-w-full break-words rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1.5 font-mono text-[11px] text-zinc-300 sm:text-xs"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.detailsUrl ||
            project.demoUrl ||
            project.repositoryUrl) && (
            <div className="mt-7 flex flex-col items-stretch gap-3 border-t border-zinc-800 pt-5 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center">
              {project.detailsUrl && (
                <Link
                  href={project.detailsUrl}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-lime-400 px-4 py-3 text-center text-sm font-semibold text-zinc-950 transition-colors hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 min-[480px]:justify-start"
                >
                  Ver detalhes do projeto →
                </Link>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl px-3 py-2 text-sm font-medium text-lime-400 transition-colors hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 min-[480px]:justify-start"
                >
                  Ver demonstração ↗
                </a>
              )}

              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 min-[480px]:justify-start"
                >
                  Código-fonte ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}