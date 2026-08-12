import Image from "next/image";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

const basePath =
  process.env.NODE_ENV === "production" ? "/cristina-portfolio" : "";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="bg-[rgba(247,243,237,0.57)] pt-12 pb-16 md:pt-20 md:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <Eyebrow>What I Believe</Eyebrow>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
            {/* LEFT — heading + paragraphs */}
            <div>
              <h2
                className="max-w-3xl text-4xl leading-[1.05] tracking-tight text-[var(--text-dark)] md:text-6xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Great work begins with{" "}
                <span className="italic">Trust.</span>
              </h2>

              <div className="mt-10 max-w-xl space-y-6 text-lg leading-[1.7] text-[var(--text-soft)] md:mt-12 md:space-y-7 md:text-[20px] md:leading-[1.75]">
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
                  Success, to me, means creating meaningful connections and
                  knowing that I added value to the people, the process, and the
                  work we created together.
                </p>
              </div>
            </div>

            {/* RIGHT — image */}
            <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={`${basePath}/pictures/yoga.jpeg`}
                  alt="Cristina practicing yoga in a studio"
                  fill
                  className="object-cover object-[center_58%]"
                  sizes="(max-width: 1024px) 420px, 42vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}