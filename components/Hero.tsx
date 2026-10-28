"use client";

import { useEffect, useState } from "react";

type Line = { prompt: string; output: string };

const lines: Line[] = [
  { prompt: "whoami", output: "Kerob — full-stack software engineer" },
  { prompt: "location", output: "Addis Ababa, Ethiopia" },
  {
    prompt: "currently building",
    output: "KBCoffeeLink — a B2B marketplace for Ethiopian coffee",
  },
  { prompt: "status", output: "open to new opportunities" },
];

function useTypedLines(lines: Line[]) {
  const [renderedCount, setRenderedCount] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (renderedCount >= lines.length) {
      setDone(true);
      return;
    }
    const current = lines[renderedCount].output;
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 18);
      return () => clearTimeout(t);
    }
    const pause = setTimeout(() => {
      setRenderedCount((n) => n + 1);
      setCharIndex(0);
    }, 320);
    return () => clearTimeout(pause);
  }, [charIndex, renderedCount, lines]);

  return { renderedCount, charIndex, done };
}

export default function Hero() {
  const { renderedCount, charIndex, done } = useTypedLines(lines);

  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-14 px-6 pb-24 pt-16 sm:pt-24 lg:flex-row lg:items-center">
      <div className="flex-1">
        <p className="mb-4 font-mono text-sm text-amber">01 — introduction</p>
        <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          Full-stack engineer building{" "}
          <span className="gradient-text">tech rooted in Ethiopia.</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
          I design and ship full-stack products end to end — from
          microservices architecture to the interfaces people actually use —
          with a focus on solutions for the Ethiopian market.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
          <a
            href="#projects"
            className="rounded-md bg-brand-gradient px-4 py-2 font-medium text-bg transition-transform hover:scale-[1.03]"
          >
            view projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-4 py-2 text-ink transition-colors hover:border-teal hover:text-teal"
          >
            contact me
          </a>
        </div>
      </div>

      <div className="flex-1">
        <div className="overflow-hidden rounded-xl border border-border bg-panel shadow-[0_0_60px_-15px_rgba(53,208,192,0.15)]">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#E8746A]" />
            <span className="h-3 w-3 rounded-full bg-[#E8B84A]" />
            <span className="h-3 w-3 rounded-full bg-[#5CC685]" />
            <span className="ml-3 font-mono text-xs text-muted">
              kerob@portfolio: ~
            </span>
          </div>
          <div className="min-h-[220px] px-5 py-5 font-mono text-sm leading-relaxed">
            {lines.slice(0, renderedCount).map((line, i) => (
              <div key={i} className="mb-3">
                <span className="text-teal">$ </span>
                <span className="text-muted">{line.prompt}</span>
                <div className="text-ink">{line.output}</div>
              </div>
            ))}
            {renderedCount < lines.length && (
              <div className="mb-3">
                <span className="text-teal">$ </span>
                <span className="text-muted">
                  {lines[renderedCount].prompt}
                </span>
                <div className="text-ink">
                  {lines[renderedCount].output.slice(0, charIndex)}
                  <span className="animate-blink">▌</span>
                </div>
              </div>
            )}
            {done && (
              <div>
                <span className="text-teal">$ </span>
                <span className="animate-blink text-ink">▌</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
