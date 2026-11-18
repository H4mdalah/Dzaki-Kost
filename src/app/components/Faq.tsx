import { Plus } from 'lucide-react';
import { Reveal, SectionHeading } from './Reveal';
import { SITE } from '../site';

// Keep in sync with the FAQPage JSON-LD in index.html.
export const FAQS = [
  {
    q: 'Di mana lokasi Dzaki Kost & Homestay Syariah?',
    a: `Kami berada di ${SITE.addressShort}, dekat Universitas Aufa Royhan, Indomaret, dan berbagai fasilitas umum.`,
  },
  {
    q: 'Apakah bisa sewa bulanan atau tahunan?',
    a: 'Bisa. Kamar kost dapat disewa secara bulanan maupun tahunan, sesuai kebutuhan Anda.',
  },
  {
    q: 'Fasilitas apa saja yang ada di dalam kamar?',
    a: 'Setiap kamar dilengkapi AC, kamar mandi dalam, WiFi gratis, meja belajar, dan lemari pakaian.',
  },
  {
    q: 'Apakah keluarga bisa menginap?',
    a: 'Tentu. Layanan Penginapan Syariah kami ramah keluarga, dengan lingkungan halal dan tempat ibadah.',
  },
  {
    q: 'Apakah tersedia parkir untuk mobil?',
    a: 'Ya. Area parkir kami luas dan terpantau CCTV 24 jam, cukup untuk sepeda motor maupun mobil.',
  },
  {
    q: 'Bagaimana cara memesan atau survei kamar?',
    a: `Hubungi kami via WhatsApp di ${SITE.phoneDisplay}. Kunjungan survei dapat dilakukan ${SITE.hours.toLowerCase()}.`,
  },
];

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-5">
        <SectionHeading id="faq-title" eyebrow="FAQ" title="Ada pertanyaan? Kami jawab." />
        <Reveal>
          <div className="divide-y divide-black/10 border-y border-black/10">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none text-lg md:text-xl font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  <h3>{f.q}</h3>
                  <Plus
                    size={22}
                    className="shrink-0 text-ink-muted transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 pr-10 text-[17px] leading-relaxed text-ink-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
