type Entry = {
  period: string;
  title: string;
  place: string;
  detail: string;
};

const entries: Entry[] = [
  {
    period: "2024 — Present",
    title: "Software Engineer",
    place: "Tech Solutions Inc.",
    detail:
      "Engineered resilient automated service pipelines and database schemas, maintaining 99.99% system availability under heavy workload profiles. Optimized codebases and refactored core components into clean architectural divisions, reducing load bounds and improving developer experience.",
  },
  {
    period: "2022 — 2024",
    title: "Software Developer",
    place: "Innovative Tech Labs",
    detail:
      "Designed and executed end-to-end and unit testing processes, boosting baseline code coverage metrics by 25%.",
  },
  {
    period: "2018 — 2022",
    title: "B.Sc. Computer Science & Engineering",
    place: "Adama Science and Technology University (ASTU)",
    detail: "3.22 major GPA / 3.11 CGPA.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-4 font-mono text-sm text-amber">05 — timeline</p>
      <h2 className="mb-10 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Experience &amp; education
      </h2>
      <ol className="space-y-8 border-l border-border pl-8">
        {entries.map((entry, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-border bg-panel font-mono text-[10px] text-teal">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-mono text-xs text-muted">{entry.period}</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink">
              {entry.title}
            </h3>
            <p className="text-sm text-amber">{entry.place}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              {entry.detail}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
