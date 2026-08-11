import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function Philosophy() {
  return (
<section
  id="philosophy"
  className="border-t border-[var(--accent)]/20 bg-[var(--porcelain)] py-16 md:py-20"
>
      <Container>
        <div className="md:pl-12">
          <div>
            <Eyebrow>What I Believe</Eyebrow>
          </div>

          <div>
            <h2
  className="text-4xl leading-tight md:text-5xl"
  style={{ fontFamily: "var(--font-heading)" }}
>
  Great work begins with trust.
</h2>

            <div className="mt-10 max-w-2xl space-y-7 text-[20px] leading-[1.7] text-[var(--text-soft)] md:text-[21px]">
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
                Success, to me, means creating meaningful connections and knowing
                that I added value to the people, the process, and the work we 
                created together.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}