import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="border-t border-black/10 py-24 md:py-32"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <Eyebrow>What I Believe</Eyebrow>

            <h2
              className="text-4xl md:text-5xl leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Great work begins with trust.
            </h2>
          </div>

          <div className="max-w-2xl space-y-6 text-lg leading-8 text-neutral-600">
            <p>
              I believe people do their best work when they feel heard,
              supported, and connected.
            </p>

            <p>
              Whether I&apos;m partnering with developers, guiding a yoga
              class, or helping someone navigate an important decision, I start
              by building relationships and understanding what people need.
            </p>

            <p>
              Success, to me, means creating connection and knowing that I
              added value to the people, the process, and the work we created
              together.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-black/10 pt-12 md:grid-cols-3">
          <div>
            <p className="text-sm text-neutral-400">01</p>
            <h3
              className="mt-4 text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Build Trust
            </h3>
            <p className="mt-4 leading-7 text-neutral-600">
              Relationships create the foundation for stronger collaboration
              and more honest communication.
            </p>
          </div>

          <div>
            <p className="text-sm text-neutral-400">02</p>
            <h3
              className="mt-4 text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Simplify Complexity
            </h3>
            <p className="mt-4 leading-7 text-neutral-600">
              I enjoy bringing structure and clarity to complicated problems so
              teams can move forward with confidence.
            </p>
          </div>

          <div>
            <p className="text-sm text-neutral-400">03</p>
            <h3
              className="mt-4 text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Add Value
            </h3>
            <p className="mt-4 leading-7 text-neutral-600">
              I measure success by what becomes stronger, clearer, or more
              connected because I contributed.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}