import Image from "next/image";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:shadow-xl hover:shadow-lime-400/5">
      {/* Cabeçalho visual do card */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/60 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-lime-400" />
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
            {project.category}
          </span>
        </div>

        <span className="font-mono text-xs text-zinc-600">
          PROJECT / {project.id.toUpperCase()}
        </span>
      </div>

      {/* Screenshot do projeto */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-zinc-800 bg-zinc-900">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={`Screenshot da aplicação ${project.title}`}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-mono text-sm text-zinc-500">
              SCREENSHOT INDISPONÍVEL
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/30 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-lime-300 sm:text-2xl">
            {project.title}
          </h3>

          <span className="shrink-0 rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-400">
            {project.status}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">
          {project.description}
        </p>

        {/* Tecnologias */}
        <div className="mt-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
            Stack tecnológica
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1.5 font-mono text-xs text-zinc-300 transition-colors group-hover:border-zinc-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.demoUrl || project.repositoryUrl) && (
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-zinc-800 pt-5">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-lime-400 transition-colors hover:text-lime-300"
              >
                Ver demonstração ↗
              </a>
            )}

            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Código-fonte ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
