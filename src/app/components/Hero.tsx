import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1709056330726-00a8ea31059a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib2FyZGluZyUyMGhvdXNlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY3MjgzNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Boarding House Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-white mb-6">Selamat Datang di Dzaki Kost & Syariah Homestay</h1>
        <p className="mb-8 max-w-2xl mx-auto">
          Rasakan kenyamanan dan kemudahan menginap dengan layanan kost modern dan homestay syariah kami.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#rooms"
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Kamar
          </a>
          <a
            href="#contact"
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
