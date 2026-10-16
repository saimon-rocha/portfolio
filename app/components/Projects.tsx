import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="mx-auto w-full max-w-6xl scroll-mt-8 px-6 py-20"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-lime-400">
          Portfólio
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Projetos em destaque
        </h2>

        <p className="mt-5 leading-7 text-zinc-400">
          Uma seleção de projetos que demonstra minha experiência prática,
          minhas decisões técnicas e minha forma de resolver problemas.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
