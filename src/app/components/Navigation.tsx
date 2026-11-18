import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { NAV_ITEMS, SITE, whatsappLink } from '../site';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || isOpen
          ? 'bg-white/75 backdrop-blur-xl backdrop-saturate-150 border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <nav aria-label="Navigasi utama" className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="#beranda" className="flex items-center gap-2" aria-label={`${SITE.name} — kembali ke atas`}>
          <img src="/images/logo-nobg.png" alt="" width={32} height={32} className="w-8 h-8 object-contain" />
          <span className="text-[15px] font-semibold tracking-tight text-ink">
            Dzaki Kost<span className="hidden sm:inline text-ink-muted font-normal"> & Homestay Syariah</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-[13px] text-ink/80 hover:text-ink transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink('Assalamualaikum, saya ingin menanyakan ketersediaan kamar di Dzaki Kost.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-emerald-600 hover:bg-emerald-700 text-white text-[13px] font-medium px-4 py-1.5 rounded-full transition-colors"
          >
            Pesan Sekarang
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-ink"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="px-5 pt-2 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-2xl font-semibold tracking-tight text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href={whatsappLink('Assalamualaikum, saya ingin menanyakan ketersediaan kamar di Dzaki Kost.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-emerald-600 text-white font-medium py-3 rounded-full"
                >
                  Pesan via WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
