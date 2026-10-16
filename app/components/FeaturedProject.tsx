import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects";

type FeaturedProjectProps = {
  project: Project;
};

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-colors duration-300 hover:border-lime-400/40">
      <div className="grid md:grid-cols-2">
        {/* Imagem à esquerda */}
        <div className="relative min-h-64 overflow-hidden border-b border-zinc-800 bg-zinc-900 md:min-h-full md:border-b-0 md:border-r">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={`Screenshot da aplicação ${project.title}`}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex min-h-64 items-center justify-center">
              <span className="font-mono text-xs tracking-widest text-zinc-500">
                SCREENSHOT INDISPONÍVEL
              </span>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/30 to-transparent" />
        </div>

        {/* Informações à direita */}
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-lime-400">
              Projeto em destaque
            </span>

            <span className="text-xs text-zinc-500">{project.status}</span>
          </div>

          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-zinc-500">
            {project.category}
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-lime-300 sm:text-4xl">
            {project.title}
          </h3>

          <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
            {project.description}
          </p>

          <div className="mt-7">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
              Stack tecnológica
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-xs text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {(project.detailsUrl || project.demoUrl || project.repositoryUrl) && (
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-zinc-800 pt-5">
              {project.detailsUrl && (
                <Link
                  href={project.detailsUrl}
                  className="rounded-lg bg-lime-400 px-4 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-lime-300"
                >
                  Ver detalhes do projeto →
                </Link>
              )}

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
      </div>
    </article>
  );
}
