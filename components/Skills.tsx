import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-4 font-mono text-sm text-amber">03 — skills</p>
      <h2 className="mb-10 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Toolbox
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-lg border border-border bg-panel p-5"
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-teal">
              --{group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-ink/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
