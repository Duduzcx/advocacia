import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PracticeAreas } from "@/components/PracticeAreas";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
