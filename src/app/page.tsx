import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Certificates from "@/sections/Certificates";
import Contact from "@/sections/Contact";
import CaseStudies from "@/sections/CaseStudies";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* Sticky Global Navigation */}
      <Header />

      {/* Main Structural Wrapper */}
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-32 px-6 py-20 lg:px-8">
        <Hero />
        <Skills />
        <Projects />

        <Experience />
        <Certificates />
        <CaseStudies />

        <Contact />
      </main>

      {/* Persistent Global Footer */}
      <Footer />
    </div>
  );
}
