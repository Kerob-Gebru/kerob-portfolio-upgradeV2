export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <p className="mb-4 font-mono text-sm text-amber">06 — contact</p>
      <div className="rounded-xl border border-border bg-panel px-6 py-14 text-center sm:px-14">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Let's <span className="gradient-text">build something.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          Open to opportunities, collaborations, and conversations about
          building technology for local markets.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 font-mono text-sm">
          <a
            href="mailto:kerobgebru32@gmail.com"
            className="rounded-md bg-brand-gradient px-5 py-2.5 font-medium text-bg transition-transform hover:scale-[1.03]"
          >
            kerobgebru32@gmail.com
          </a>
          <a
            href="https://github.com/Kerob-Gebru"
            className="rounded-md border border-border px-5 py-2.5 text-ink transition-colors hover:border-teal hover:text-teal"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/kerob-gebru-108740348"
            className="rounded-md border border-border px-5 py-2.5 text-ink transition-colors hover:border-teal hover:text-teal"
          >
            linkedin
          </a>
        </div>
        {/* TODO: double-check this phone number matches what you want public — it differed slightly between your two resume files */}
        <p className="mt-6 font-mono text-xs text-muted">+251 972 504 059</p>
      </div>
    </section>
  );
}
