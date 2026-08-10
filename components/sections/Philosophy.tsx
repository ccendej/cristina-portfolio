import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="bg-[var(--sand)] py-24 md:py-32"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.4fr] md:gap-24">
          <div>
            <Eyebrow>What I Believe</Eyebrow>
          </div>

          <div>
            <h2
              className="max-w-3xl text-5xl leading-[1.05] tracking-tight md:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Great work begins with trust.
            </h2>

            <div className="mt-10 max-w-2xl space-y-6 text-lg leading-8 text-[var(--taupe)]">
              <p>
                I believe people do their best work when they feel heard,
                supported, and connected.
              </p>

              <p>
                Whether I&apos;m partnering with developers, guiding a yoga
                class, or helping someone navigate an important decision, I
                start by building relationships and understanding what people
                need.
              </p>

              <p>
                Success, to me, means creating connection and knowing that I
                added value to the people, the process, and the work we created
                together.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}