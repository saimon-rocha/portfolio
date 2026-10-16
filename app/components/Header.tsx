export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
      <a
        href="#inicio"
        className="text-lg font-bold tracking-tight"
        aria-label="Saimon — início"
      >
        saimon<span className="text-lime-400">.</span>
      </a>

      <nav
        aria-label="Navegação principal"
        className="flex items-center gap-4 text-sm text-zinc-400 sm:gap-6"
      >
        <a href="#projetos" className="transition hover:text-white">
          Projetos
        </a>

        <a href="#sobre" className="transition hover:text-white">
          Sobre
        </a>

        <a href="#contato" className="transition hover:text-white">
          Contato
        </a>
      </nav>
    </header>
  );
}
