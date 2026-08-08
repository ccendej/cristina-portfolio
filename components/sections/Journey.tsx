import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function Journey() {
  return (
    <section className="border-t border-black/10 py-24 md:py-32">
      <Container>
        <Eyebrow>My Journey</Eyebrow>

        <h2
          className="max-w-4xl text-4xl leading-tight md:text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Curiosity has always shaped where I go next.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
          My career hasn&apos;t followed a single path. Each chapter has taught
          me something different about problem solving, leadership, and people.
        </p>

        <div className="mt-20">
          <div className="grid gap-6 border-t border-black/10 py-8 md:grid-cols-[1fr_2fr]">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Chemistry
            </p>

            <div>
              <h3
                className="text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Learning to solve complex problems
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-neutral-600">
                I started in chemistry, drawn to challenging problems,
                hands-on work, and the precision of the laboratory.
              </p>
            </div>
          </div>

          <div className="grid gap-6 border-t border-black/10 py-8 md:grid-cols-[1fr_2fr]">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Technology
            </p>

            <div>
              <h3
                className="text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Moving from experiments to digital products
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-neutral-600">
                Technology gave me the variety I was looking for and the
                opportunity to combine analytical thinking with collaboration,
                problem solving, and continuous learning.
              </p>
            </div>
          </div>

          <div className="grid gap-6 border-t border-black/10 py-8 md:grid-cols-[1fr_2fr]">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Leadership
            </p>

            <div>
              <h3
                className="text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Discovering that people are the common thread
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-neutral-600">
                Project management, mentorship, and teaching showed me that the
                work I find most meaningful begins with understanding people,
                building trust, and helping others move forward.
              </p>
            </div>
          </div>

          <div className="grid gap-6 border-y border-black/10 py-8 md:grid-cols-[1fr_2fr]">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              What&apos;s Next
            </p>

            <div>
              <h3
                className="text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Creating experiences that bring it all together
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-neutral-600">
                I&apos;m continuing to explore the intersection of technology,
                leadership, community, and creative experiences while staying
                open to where curiosity leads next.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}