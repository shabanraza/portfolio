import { Suspense, lazy } from 'react';
import { AuroraBackground } from './components/AuroraBackground';
import { CommandPalette } from './components/CommandPalette';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { Hero } from './sections/Hero';
import { StickyCTA } from './components/StickyCTA';

// Lazy load sections below the fold to improve initial load time
const Products = lazy(() => import('./sections/Products').then(m => ({ default: m.Products })));
const Projects = lazy(() => import('./sections/Projects').then(m => ({ default: m.Projects })));
const Services = lazy(() => import('./sections/Services').then(m => ({ default: m.Services })));
const Guarantee = lazy(() => import('./sections/Guarantee').then(m => ({ default: m.Guarantee })));
const About = lazy(() => import('./sections/About').then(m => ({ default: m.About })));
const LeadMagnet = lazy(() => import('./sections/LeadMagnet').then(m => ({ default: m.LeadMagnet })));
const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));

function App() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative selection:bg-primary/30 selection:text-white">
      <AuroraBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<div className="h-20" />}>
          <Products />
          <Projects />
          <Services />
          <Guarantee />
          <About />
          <LeadMagnet />
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <StickyCTA />
      <CommandPalette />
    </div>
  );
}

export default App;
