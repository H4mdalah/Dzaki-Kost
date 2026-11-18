import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Statement } from './components/Statement';
import { Services } from './components/Services';
import { Rooms } from './components/Rooms';
import { Amenities } from './components/Amenities';
import { About } from './components/About';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:rounded-full focus:shadow"
      >
        Langsung ke konten
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Statement />
        <Services />
        <Rooms />
        <Amenities />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
