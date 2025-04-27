
import { Navbar, Hero, About, Skills, Projects, Contact, Footer, Testimonials } from "@/components";

export default function Home() {
  return (
    <main className="dark:bg-black bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials  />
      <Contact />
      <Footer />
    </main>
  );
}