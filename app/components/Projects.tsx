import { projects } from "../data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);

  const regularProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projetos"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      {/* Cabeçalho da seção */}
      <div className="max-w-2xl">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-lime-400 sm:text-sm">
          Portfólio
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl md:text-4xl">
          Projetos em destaque
        </h2>

        <p className="mt-4 text-sm leading-7 text-zinc-400 sm:mt-5 sm:text-base sm:leading-8">
          Projetos que demonstram minha experiência prática, minhas decisões
          técnicas e minha forma de resolver problemas.
        </p>
      </div>

      {/* Projeto principal */}
      {featuredProject && (
        <div className="mt-8 sm:mt-10">
          <FeaturedProject project={featuredProject} />
        </div>
      )}

      {/* Demais projetos */}
      {regularProjects.length > 0 && (
        <div
          className={`grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 ${
            featuredProject ? "mt-6 sm:mt-8" : "mt-8 sm:mt-10"
          }`}
        >
          {regularProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
