import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Eyebrow from "../ui/Eyebrow";

export default function Hero() {
  return (
    <main className="min-h-screen flex items-center">
      <Container>

        <div className="max-w-4xl">
          <Eyebrow>
            Technical Project Manager • Yoga Teacher • Community Builder
          </Eyebrow>

          <Heading>
            Cristina Cendejas
          </Heading>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-600">
            Creating environments where people, ideas, and technology come together to do their best work.
          </p>

        </div>

      </Container>
    </main>
  );
}