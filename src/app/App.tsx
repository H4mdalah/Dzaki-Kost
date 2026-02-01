import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Rooms } from './components/Rooms';
import { Amenities } from './components/Amenities';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Rooms />
      <Amenities />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
