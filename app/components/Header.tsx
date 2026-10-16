"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/90 backdrop-blur-xl">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={closeMenu}
          aria-label="Saimon — início"
          className="shrink-0 text-base font-bold tracking-tight text-zinc-100 sm:text-lg"
        >
          Saimon A.S Rocha
          <span className="text-lime-400">.</span>
        </a>

        {/* Navegação desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 text-sm text-zinc-400 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 transition-colors duration-200 hover:text-lime-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão mobile */}
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-200 transition hover:border-lime-400/40 hover:text-lime-400 md:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        {/* Menu mobile */}
        {menuOpen && (
          <nav
            id="menu-mobile"
            aria-label="Navegação mobile"
            className="absolute left-0 right-0 top-full border-b border-zinc-800 bg-zinc-950 p-4 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-lime-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}