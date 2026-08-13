import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience/Experience";
import Certificates from "@/components/sections/certifications/Certificates";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";
import VerifiedProfiles from "@/components/sections/VerifiedProfiles";
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-32 px-6 py-20 lg:px-8">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <VerifiedProfiles />
        <CaseStudies />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
