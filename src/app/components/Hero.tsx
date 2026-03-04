import { ImageWithFallback } from './figma/ImageWithFallback';

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/home.jpeg"
          alt="Dzaki Kost & Syariah Eksterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-white mb-6">Selamat Datang di Dzaki Kost & Syariah Homestay</h1>
        <p className="mb-8 max-w-2xl mx-auto">
          Rasakan kenyamanan dan kemudahan tinggal di penginapan dan kost syariah kami.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#rooms"
            onClick={(e) => handleSmoothScroll(e, '#rooms')}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Kamar
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
