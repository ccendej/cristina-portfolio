import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function JourneyPage() {
  return (
    <main className="bg-[rgba(247,243,237,0.57)] pt-12 pb-16 md:pt-20 md:pb-32">
      <Container>
        <Eyebrow>My Journey</Eyebrow>

        <h1
          className="mt-5 max-w-4xl text-[36px] leading-[1.05] tracking-tight md:mt-6 md:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Curiosity has always shaped where I go next.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--taupe)] md:mt-8 md:text-lg md:leading-8">
          My career hasn&apos;t followed a single path. Each chapter has taught
          me something different about problem solving, leadership, and people.
        </p>

        <div className="mt-14 divide-y divide-[var(--sand)] border-y border-[var(--sand)] md:mt-20">
          <div className="grid gap-5 py-8 md:grid-cols-[0.7fr_1.8fr] md:gap-6 md:py-10">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--olive)]">
              Chemistry
            </p>

            <div>
              <h2
                className="text-[28px] leading-tight text-[var(--espresso)] md:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Learning through precision and challenge
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--taupe)]">
                I started in chemistry, drawn to challenging problems,
                hands-on work, and the precision of the laboratory.
              </p>
            </div>
          </div>

          <div className="grid gap-5 py-8 md:grid-cols-[0.7fr_1.8fr] md:gap-6 md:py-10">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--olive)]">
              Technology
            </p>

            <div>
              <h2
                className="text-[28px] leading-tight text-[var(--espresso)] md:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Five years of growing across technology roles
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--taupe)]">
                Over the past five years, I&apos;ve grown through multiple roles
                in technology, building experience across project delivery, web
                applications, testing, troubleshooting, and collaboration with
                technical teams.
              </p>
            </div>
          </div>

          <div className="grid gap-5 py-8 md:grid-cols-[0.7fr_1.8fr] md:gap-6 md:py-10">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--olive)]">
              Leadership
            </p>

            <div>
              <h2
                className="text-[28px] leading-tight text-[var(--espresso)] md:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Realizing that people are the common thread
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--taupe)]">
                Project management, mentoring, and teaching have all reinforced
                the same lesson: trust, communication, and connection are what
                help people move forward.
              </p>
            </div>
          </div>

          <div className="grid gap-5 py-8 md:grid-cols-[0.7fr_1.8fr] md:gap-6 md:py-10">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--olive)]">
              What&apos;s Next
            </p>

            <div>
              <h2
                className="text-[28px] leading-tight text-[var(--espresso)] md:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Continuing to create meaningful experiences
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--taupe)]">
                I&apos;m continuing to explore the intersection of technology,
                leadership, teaching, and community while staying open to where
                curiosity leads next.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}