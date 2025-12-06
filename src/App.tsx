import { Suspense, lazy } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { Hero } from './sections/Hero';
import { StickyCTA } from './components/StickyCTA';

// Lazy load sections below the fold to improve initial load time
const ProblemSolution = lazy(() => import('./sections/ProblemSolution').then(module => ({ default: module.ProblemSolution })));
const Projects = lazy(() => import('./sections/Projects').then(module => ({ default: module.Projects })));
const Process = lazy(() => import('./sections/Process').then(module => ({ default: module.Process })));
const Comparison = lazy(() => import('./sections/Comparison').then(module => ({ default: module.Comparison })));
const Services = lazy(() => import('./sections/Services').then(module => ({ default: module.Services })));
const Guarantee = lazy(() => import('./sections/Guarantee').then(module => ({ default: module.Guarantee })));
const Testimonials = lazy(() => import('./sections/Testimonials').then(module => ({ default: module.Testimonials })));
const About = lazy(() => import('./sections/About').then(module => ({ default: module.About })));
const LeadMagnet = lazy(() => import('./sections/LeadMagnet').then(module => ({ default: module.LeadMagnet })));
const FAQ = lazy(() => import('./sections/FAQ').then(module => ({ default: module.FAQ })));
const Contact = lazy(() => import('./sections/Contact').then(module => ({ default: module.Contact })));

function App() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative selection:bg-primary/30 selection:text-white">
      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<div className="h-20" />}>
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
        </Suspense>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
