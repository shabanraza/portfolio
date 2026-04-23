import { Suspense, lazy, useState, useEffect } from 'react';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { Hero } from './sections/Hero';
import { StatsBar } from './sections/StatsBar';
import { ScanlineOverlay } from './components/ScanlineOverlay';
import { StatusStrip } from './components/StatusStrip';
import { CommandPalette } from './components/CommandPalette';
import { EasterEgg } from './components/EasterEgg';
import { TweaksPanel } from './components/TweaksPanel';

const Products = lazy(() => import('./sections/Products').then(m => ({ default: m.Products })));
const CaseStudies = lazy(() => import('./sections/CaseStudies').then(m => ({ default: m.CaseStudies })));
const ClientWork = lazy(() => import('./sections/ClientWork').then(m => ({ default: m.ClientWork })));
const Experience = lazy(() => import('./sections/Experience').then(m => ({ default: m.Experience })));
const Stack = lazy(() => import('./sections/Stack').then(m => ({ default: m.Stack })));
const Testimonials = lazy(() => import('./sections/Testimonials').then(m => ({ default: m.Testimonials })));
const Now = lazy(() => import('./sections/Now').then(m => ({ default: m.Now })));
const FAQ = lazy(() => import('./sections/FAQ').then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));

function App() {
  const [cmdOpen, setCmdOpen] = useState(false);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen(o => !o);
      }
      if (e.key === 'Escape') {
        setCmdOpen(false);
        setTweaksOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: 'var(--t-bg)',
        color: 'var(--t-text)',
        fontFamily: 'var(--t-mono)',
      }}
    >
      <ScanlineOverlay />
      <Navbar onCmd={() => setCmdOpen(true)} onTweaks={() => setTweaksOpen(o => !o)} />

      <main className="relative z-10">
        <Hero />
        <StatsBar />
        <Suspense fallback={<div className="h-20" />}>
          <Products />
          <CaseStudies />
          <ClientWork />
          <Experience />
          <Stack />
          <Testimonials />
          <Now />
          <FAQ />
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <StatusStrip />

      {cmdOpen && <CommandPalette onClose={() => setCmdOpen(false)} />}
      {tweaksOpen && <TweaksPanel onClose={() => setTweaksOpen(false)} />}
      <EasterEgg />
    </div>
  );
}

export default App;
