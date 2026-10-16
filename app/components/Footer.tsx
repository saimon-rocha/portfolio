import {
  Code2,
  Camera,
  MessageCircle,
  ArrowUpRight,
  ArrowUp,
  Users,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    description: "Meus projetos e códigos",
    href: "https://github.com/saimon-rocha",
    icon: Code2,
  },
  {
    name: "LinkedIn",
    description: "Minha trajetória profissional",
    href: "https://www.linkedin.com/in/saimon-rocha/",
    icon: Users,
  },
  {
    name: "WhatsApp",
    description: "Vamos conversar diretamente",
    href: "https://wa.me/5554991797082",
    icon: MessageCircle,
  },
  {
    name: "Instagram",
    description: "Me acompanhe por lá",
    href: "https://www.instagram.com/saimon__rocha/",
    icon: Camera,
  },
];

export default function Footer() {
  return (
    <footer
      id="contato"
      className="mx-auto mt-12 w-full max-w-6xl scroll-mt-24 border-t border-zinc-800 px-4 py-12 sm:px-6 sm:py-16"
    >
      {/* Cabeçalho */}
      <div className="max-w-2xl">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-lime-400 sm:text-sm">
          Contato
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          Vamos conversar?
        </h2>

        <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          Estou aberto a conversar sobre desenvolvimento, tecnologia e
          oportunidades profissionais. Escolha uma das minhas redes e vamos nos
          conectar!
        </p>
      </div>

      {/* Redes sociais */}
      <div className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:mt-10 sm:gap-4 lg:grid-cols-4">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.name}: ${social.description}`}
              className="group flex min-h-24 items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:bg-zinc-900 sm:p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors group-hover:border-lime-400/30 group-hover:text-lime-400">
                <Icon size={22} strokeWidth={1.7} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-zinc-100 transition-colors group-hover:text-lime-300">
                  {social.name}
                </span>

                <span className="mt-1 block text-xs leading-5 text-zinc-500">
                  {social.description}
                </span>
              </span>

              <ArrowUpRight
                size={17}
                className="shrink-0 text-zinc-600 transition-colors group-hover:text-lime-400"
              />
            </a>
          );
        })}
      </div>

      {/* Rodapé inferior */}
      <div className="mt-10 flex flex-col gap-3 border-t border-zinc-800/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-zinc-500 sm:text-sm">
          © 2026 Saimon A.S Rocha. Todos os direitos
          reservados.
        </p>

        <a
          href="#inicio"
          className="inline-flex min-h-11 w-fit items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-lime-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-400"
        >
          Voltar ao topo
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
