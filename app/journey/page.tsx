import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-[var(--cream)] pt-32 pb-24">
      <Container>
        <Eyebrow>My Journey</Eyebrow>

        <h1
          className="mt-6 max-w-4xl text-5xl leading-[1.05] tracking-tight md:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Curiosity has always shaped where I go next.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--taupe)]">
          My career hasn&apos;t followed a single path. Each chapter has taught
          me something different about problem solving, leadership, and people.
        </p>

        <div className="mt-20 divide-y divide-[var(--sand)] border-y border-[var(--sand)]">
          <div className="grid gap-6 py-10 md:grid-cols-[0.7fr_1.8fr]">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--olive)]">
              Chemistry
            </p>

            <div>
              <h2
                className="text-3xl text-[var(--espresso)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Learning through precision and challenge
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[var(--taupe)]">
                I started in chemistry, drawn to challenging problems,
                hands-on work, and the precision of the laboratory.
              </p>
            </div>
          </div>

          <div className="grid gap-6 py-10 md:grid-cols-[0.7fr_1.8fr]">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--olive)]">
              Technology
            </p>

            <div>
              <h2
                className="text-3xl text-[var(--espresso)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Five years of growing across technology roles
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[var(--taupe)]">
                Over the past five years, I&apos;ve grown through multiple roles
                in technology with the State, building experience across project
                delivery, web applications, testing, troubleshooting, and
                collaboration with technical teams.
              </p>
            </div>
          </div>

          <div className="grid gap-6 py-10 md:grid-cols-[0.7fr_1.8fr]">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--olive)]">
              Leadership
            </p>

            <div>
              <h2
                className="text-3xl text-[var(--espresso)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Realizing that people are the common thread
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[var(--taupe)]">
                Project management, mentoring, and teaching have all reinforced
                the same lesson: trust, communication, and connection are what
                help people move forward.
              </p>
            </div>
          </div>

          <div className="grid gap-6 py-10 md:grid-cols-[0.7fr_1.8fr]">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--olive)]">
              What&apos;s Next
            </p>

            <div>
              <h2
                className="text-3xl text-[var(--espresso)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Continuing to create meaningful experiences
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[var(--taupe)]">
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