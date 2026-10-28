export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-4 font-mono text-sm text-amber">02 — about</p>
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Background
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-muted">
          <p>
            I'm a Computer Science &amp; Engineering graduate of Adama
            Science and Technology University (ASTU) and a software engineer
            based in Addis Ababa, Ethiopia, focused on building high-impact
            technical solutions and modular, reliable systems.
          </p>
          <p>
            My work spans full-stack development, microservices
            architecture, and cloud infrastructure — engineering automated
            service pipelines and database schemas that hold up under heavy
            load, and refactoring codebases into clean architectural
            divisions that are easier to build on.
          </p>
          <p>
            Right now that experience is going into{" "}
            <span className="text-ink">KBCoffeeLink</span>, a B2B
            marketplace connecting Ethiopian coffee washing stations and
            suppliers directly with licensed export companies — covering lot
            management, contracting, negotiation, messaging, and quality
            tracking end to end.
          </p>
          <p>
            I prefer working close to the code: runnable, editable projects
            over static mockups, and shipping something real over polishing
            a plan.
          </p>
        </div>
      </div>
    </section>
  );
}
