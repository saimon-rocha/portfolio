export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  status: "Concluído" | "Em desenvolvimento";
  coverImage?: string;
  demoUrl?: string;
  repositoryUrl?: string;
  detailsUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "helppostos",
    title: "HelpPostos",
    description:
      "Aplicação web para gestão operacional de postos de combustíveis.",
    category: "Aplicação web",
    technologies: ["React", "TypeScript", "Next.js"],
    status: "Concluído",
    coverImage: "/images/helppostos.png",
    featured: true,
    detailsUrl: "/projetos/helppostos",
  },
  // {
  //   id: "taskflow",
  //   title: "TaskFlow",
  //   description:
  //     "Aplicação para organizar tarefas e acompanhar o andamento de atividades.",
  //   category: "Produtividade",
  //   technologies: ["React", "TypeScript"],
  //   status: "Em desenvolvimento",
  //   coverImage: "/images/taskflow.png",
  //   demoUrl: "https:",
  //   repositoryUrl: "https:",
  //   detailsUrl: "/projetos/",
  //   featured: false,
  // },
];
