import { Suspense, lazy } from 'react';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { Hero } from './sections/Hero';
import { StatsBar } from './sections/StatsBar';

const Products = lazy(() => import('./sections/Products').then(m => ({ default: m.Products })));
const CaseStudies = lazy(() => import('./sections/CaseStudies').then(m => ({ default: m.CaseStudies })));
const Experience = lazy(() => import('./sections/Experience').then(m => ({ default: m.Experience })));
const Stack = lazy(() => import('./sections/Stack').then(m => ({ default: m.Stack })));
const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <StatsBar />
        <Suspense fallback={<div className="h-20" />}>
          <Products />
          <CaseStudies />
          <Experience />
          <Stack />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
