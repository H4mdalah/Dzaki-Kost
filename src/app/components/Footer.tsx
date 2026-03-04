import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

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

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-white mb-4">Dzaki Kost & Homestay Syariah</h4>
            <p className="text-gray-400 mb-4">
              Menyediakan akomodasi nyaman dan terjangkau dengan nilai-nilai Islami 2025.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Akses Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a 
                href="#home" className="text-gray-400 hover:text-emerald-400 transition-colors" onClick={(e) => handleSmoothScroll(e, '#home')}>
                  Beranda
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors" onClick={(e) => handleSmoothScroll(e, '#services')}>
                  Layanan
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-gray-400 hover:text-emerald-400 transition-colors" onClick={(e) => handleSmoothScroll(e, '#rooms')}>
                  Kamar
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Layanan Kami</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Kamar Kost</li>
              <li className="text-gray-400">Penginapan Syariah</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Kontak dan Informasi</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Jln Rajainal Siregar no 189, Padangsidimpuan</li>
              <li>0852-0608-6826</li>
              <li>karuniajayacv@gmail.com</li>
              <li>Setiap Hari pukul 09.00 - 18.00 WIB</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Dzaki Kost & Homestay Syariah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
