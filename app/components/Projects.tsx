import { projects } from "../data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);

  const regularProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projetos"
      className="mx-auto w-full max-w-6xl scroll-mt-8 px-6 py-20"
    >
      {/* Cabeçalho da seção */}
      <div className="max-w-2xl">
        <p className="font-mono text-sm font-medium uppercase tracking-widest text-lime-400">
          Portfólio
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Projetos em destaque
        </h2>

        <p className="mt-5 leading-7 text-zinc-400">
          Projetos que demonstram minha experiência prática, minhas decisões
          técnicas e minha forma de resolver problemas.
        </p>
      </div>

      {/* Projeto principal */}
      {featuredProject && (
        <div className="mt-10">
          <FeaturedProject project={featuredProject} />
        </div>
      )}

      {/* Demais projetos */}
      {regularProjects.length > 0 && (
        <div
          className={`grid grid-cols-1 gap-5 md:grid-cols-2 ${
            featuredProject ? "mt-8" : "mt-10"
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
