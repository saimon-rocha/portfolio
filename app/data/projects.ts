
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
};


export const projects: Project[] = [
  {
    id: "helppostos",
    title: "HelpPostos",
    description:
      "Aplicação web para gestão operacional de postos de combustíveis, com gerenciamento de usuários, checklists e geração de relatórios.",
    category: "Aplicação web",
    technologies: ["React", "TypeScript", "Next.js"],
    status: "Concluído",
    coverImage: "/images/helppostos.png",
  },
];
