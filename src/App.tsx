import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { Hero } from './sections/Hero';
import { ProblemSolution } from './sections/ProblemSolution';
import { Projects } from './sections/Projects';
import { Process } from './sections/Process';
import { Comparison } from './sections/Comparison';
import { Services } from './sections/Services';
import { Guarantee } from './sections/Guarantee';
import { Testimonials } from './sections/Testimonials';
import { About } from './sections/About';
import { LeadMagnet } from './sections/LeadMagnet';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { StickyCTA } from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative selection:bg-primary/30 selection:text-white">
      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <ProblemSolution />
        <Projects />
        <Process />
        <Comparison />
        <Services />
        <Guarantee />
        <Testimonials />
        <About />
        <LeadMagnet />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
