import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Journey from "@/components/sections/Journey";
import Community from "@/components/sections/Community";

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <FeaturedWork />
      <Journey />
      <Community />
    </main>
  );
}