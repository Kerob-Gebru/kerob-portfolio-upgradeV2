"use client";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-sm tracking-tight text-ink hover:text-teal transition-colors"
        >
          kerob<span className="text-amber">@</span>portfolio
        </a>
        <ul className="hidden gap-6 font-mono text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* TODO: replace with a real resume/CV file link */}
        <a
          href="#contact"
          className="rounded-md border border-border px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:border-teal hover:text-teal"
        >
          get in touch
        </a>
      </nav>
    </header>
  );
}
