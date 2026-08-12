import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="bg-[rgba(247,243,237,0.56)] pt-12 pb-16 md:pt-20 md:pb-32"
    >
      <Container>
        <Eyebrow>Selected Work</Eyebrow>

        <h2
          className="max-w-4xl text-[34px] leading-[1.08] text-[var(--text-dark)] md:text-6xl md:leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Leading technical work by creating clarity, trust, and momentum.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:mt-8 md:text-lg md:leading-8">
          I work closely with developers to deliver web applications, support
          testing, troubleshoot issues, and reduce friction that can pull
          engineering teams away from higher-value work.
        </p>

        <div className="mt-14 space-y-12 md:mt-20 md:space-y-16">
          <article className="border-t border-black/10 pt-7 md:pt-8">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Project Leadership
            </p>

            <h3
              className="mt-3 text-[28px] leading-tight text-[var(--text-dark)] md:mt-4 md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Coordinating web application delivery
            </h3>

            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 md:mt-5">
              Partnering with developers and stakeholders to keep technical work
              aligned, remove blockers, and maintain progress from planning
              through delivery.
            </p>
          </article>

          <article className="border-t border-black/10 pt-7 md:pt-8">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Testing &amp; Troubleshooting
            </p>

            <h3
              className="mt-3 text-[28px] leading-tight text-[var(--text-dark)] md:mt-4 md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Protecting developer focus
            </h3>

            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 md:mt-5">
              Supporting testing and investigating support issues before they
              reach developers, helping the team spend more time building and
              less time sorting through avoidable interruptions.
            </p>
          </article>

          <article className="border-t border-black/10 pt-7 md:pt-8">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Collaboration
            </p>

            <h3
              className="mt-3 text-[28px] leading-tight text-[var(--text-dark)] md:mt-4 md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Building trust with technical teams
            </h3>

            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 md:mt-5">
              I focus on relationships first. Creating trust makes it easier for
              developers to surface concerns, challenge assumptions, and work
              collaboratively toward faster resolutions.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}