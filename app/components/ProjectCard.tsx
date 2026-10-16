import Image from "next/image";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80">
      {/* Cabeçalho visual */}
      <div className="flex min-w-0 items-center justify-between gap-3 border-b border-zinc-800 bg-zinc-900/60 px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-lime-400" />

          <span className="truncate text-xs font-medium uppercase tracking-widest text-zinc-400">
            {project.category}
          </span>
        </div>

        <span className="shrink-0 font-mono text-[10px] text-zinc-500 sm:text-xs">
          PROJECT / {project.id.toUpperCase()}
        </span>
      </div>

      {/* Imagem */}
      <div className="project-card-image relative aspect-[16/9] overflow-hidden border-b border-zinc-800 bg-zinc-950">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={`Captura de tela da aplicação ${project.title}`}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 576px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-mono text-xs text-zinc-500 sm:text-sm">
              SCREENSHOT INDISPONÍVEL
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="flex flex-col items-start gap-3 min-[420px]:flex-row min-[420px]:justify-between">
          <h3 className="min-w-0 break-words text-lg font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-lime-300 motion-reduce:transition-none sm:text-xl lg:text-2xl">
            {project.title}
          </h3>

          <span className="max-w-full shrink-0 rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-400">
            {project.status}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">
          {project.description}
        </p>

        {/* Tecnologias */}
        <div className="mt-6">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-500 sm:text-xs">
            Stack tecnológica
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="max-w-full break-words rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1.5 font-mono text-[11px] text-zinc-300 transition-colors group-hover:border-zinc-700 motion-reduce:transition-none sm:px-2.5 sm:text-xs"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.demoUrl || project.repositoryUrl) && (
          <div className="mt-6 flex flex-col items-stretch gap-2 border-t border-zinc-800 pt-5 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center min-[420px]:gap-x-5">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link inline-flex min-h-11 items-center justify-center gap-1 rounded-lg bg-lime-400/10 px-3 text-sm font-medium text-lime-400 transition-colors hover:bg-lime-400/15 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 motion-reduce:transition-none min-[420px]:justify-start min-[420px]:px-0"
              >
                Ver demonstração
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">↗</span>
              </a>
            )}

            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link inline-flex min-h-11 items-center justify-center gap-1 rounded-lg px-3 text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 motion-reduce:transition-none min-[420px]:justify-start min-[420px]:px-0"
              >
                Código-fonte
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}