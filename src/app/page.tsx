import { Hero } from "@/src/components/Hero";
import { Projects } from "@/src/components/Project/Projects";
import { Skills } from "@/src/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
