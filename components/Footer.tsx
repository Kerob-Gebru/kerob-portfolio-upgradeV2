export default function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Kerob. Built with Next.js.</span>
        <a href="https://github.com/Kerob-Gebru" className="hover:text-ink">github.com/Kerob-Gebru</a>
      </div>
    </footer>
  );
}
