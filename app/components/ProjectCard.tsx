import Image from "next/image";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/60">
      {project.coverImage ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-zinc-800 bg-zinc-900">
          <Image
            src={project.coverImage}
            alt={`Prévia do projeto ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center border-b border-zinc-800 bg-gradient-to-br from-zinc-800/80 via-zinc-900 to-zinc-950">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            {project.category}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm text-lime-400">{project.category}</span>

          <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
            {project.status}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-zinc-800/80 px-3 py-1.5 text-xs text-zinc-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {(project.demoUrl || project.repositoryUrl) && (
          <div className="mt-7 flex flex-wrap gap-5 border-t border-zinc-800 pt-5">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-lime-400 transition hover:text-lime-300"
              >
                Ver demonstração ↗
              </a>
            )}

            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-300 transition hover:text-white"
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
