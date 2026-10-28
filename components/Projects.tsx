"use client";

import { useState } from "react";
import { projects, categoryLabels, type Category } from "@/data/projects";

const statusColor: Record<string, string> = {
  "In progress": "text-amber",
  Shipped: "text-teal",
  Prototype: "text-muted",
  Coursework: "text-muted",
};

const filters: ("all" | Category)[] = [
  "all",
  "full-stack",
  "backend",
  "frontend",
  "blockchain",
  "systems",
];

export default function Projects() {
  const [active, setActive] = useState<"all" | Category>("all");

  const visible = projects.filter(
    (p) => active === "all" || p.category === active
  );

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-4 font-mono text-sm text-amber">04 — projects</p>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Selected work
        </h2>
        <div
          role="tablist"
          aria-label="Filter projects"
          className="flex flex-wrap gap-2 font-mono text-xs"
        >
          {filters.map((f) => {
            const count =
              f === "all"
                ? projects.length
                : projects.filter((p) => p.category === f).length;
            const isActive = active === f;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(f)}
                className={`rounded-md border px-3 py-1.5 transition-colors ${
                  isActive
                    ? "border-teal text-teal"
                    : "border-border text-muted hover:text-ink"
                }`}
              >
                {f === "all" ? "all" : categoryLabels[f]}
                <span className="ml-1.5 text-muted/70">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <article
            key={project.id}
            className={`group flex flex-col rounded-xl border border-border bg-panel p-6 transition-colors hover:border-teal/50 sm:p-7 ${
              project.featured ? "ring-1 ring-amber/20 md:col-span-2" : ""
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{project.tagline}</p>
              </div>
              <span
                className={`whitespace-nowrap font-mono text-xs ${
                  statusColor[project.status]
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-ink/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-4 pt-5 font-mono text-sm">
              {project.links?.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline-offset-4 hover:underline"
                >
                  {link.label} →
                </a>
              ))}
              {project.private && (
                <span className="text-xs text-muted">
                  private repository — happy to walk through it
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
