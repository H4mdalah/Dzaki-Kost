import { NAV_ITEMS, SITE, whatsappLink } from '../site';
import { ArchEdge, GeometricPattern } from './Ornaments';

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-forest-950 text-[13px] text-white/65">
      <ArchEdge className="absolute top-0 inset-x-0 text-mint" flip />
      <GeometricPattern className="absolute inset-0 -z-10 text-leaf/[0.06]" size={64} />
      <div className="max-w-6xl mx-auto px-5 pt-16 pb-10">
        <div className="grid sm:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-grid place-items-center w-12 h-12 rounded-2xl bg-white">
                <img src="/images/logo-nobg.png" alt="" width={40} height={40} className="w-10 h-10 object-contain" />
              </span>
              <p className="font-semibold text-white text-[15px] leading-tight">{SITE.name}</p>
            </div>
            <address className="not-italic leading-relaxed">
              {SITE.address}
            </address>
          </div>
          <nav aria-label="Navigasi footer">
            <p className="font-semibold text-leaf mb-2">Jelajahi</p>
            <ul className="space-y-1.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white hover:underline">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-semibold text-leaf mb-2">Hubungi</p>
            <ul className="space-y-1.5">
              <li>
                <a href={whatsappLink('Assalamualaikum, Dzaki Kost.')} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
                  WhatsApp {SITE.phoneDisplay}
                </a>
              </li>
              <li><a href={`mailto:${SITE.email}`} className="hover:text-white hover:underline">{SITE.email}</a></li>
              <li>{SITE.hours}</li>
              <li>
                <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
                  Buka di Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="pt-6">
          &copy; {new Date().getFullYear()} {SITE.name}. Kost & penginapan syariah di Kota Padangsidimpuan, Sumatera Utara.
        </p>
      </div>
    </footer>
  );
}
