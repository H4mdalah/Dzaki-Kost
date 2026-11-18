import { Bed, CalendarDays, Users } from 'lucide-react';
import { Reveal, SectionHeading } from './Reveal';
import { whatsappLink } from '../site';

const rooms = [
  {
    title: 'Kamar Single',
    subtitle: 'Privat. Fokus. Milik Anda sendiri.',
    image: '/images/singlebed.jpeg',
    alt: 'Kamar single bed di Dzaki Kost lengkap dengan AC, lemari, dan meja belajar',
    period: 'Bulanan atau tahunan',
    capacity: '1 orang',
    bed: 'Single bed',
    features: ['Kamar privat', 'Kamar mandi dalam', 'AC', 'WiFi gratis', 'Meja belajar', 'Lemari pakaian'],
  },
  {
    title: 'Kamar Bertingkat',
    subtitle: 'Hemat bersama teman sekamar.',
    image: '/images/doublebed.jpeg',
    alt: 'Kamar dengan tempat tidur tingkat untuk dua orang di Dzaki Kost',
    period: 'Bulanan atau tahunan',
    capacity: '2 orang',
    bed: 'Tempat tidur tingkat',
    features: ['Kamar berbagi', 'Kamar mandi dalam', 'AC', 'WiFi gratis', 'Meja belajar', 'Lemari pakaian'],
  },
];

export function Rooms() {
  return (
    <section id="kamar" aria-labelledby="kamar-title" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          id="kamar-title"
          eyebrow="Pilihan Kamar"
          title="Kamar yang pas untuk Anda."
          lead="Setiap kamar sudah dilengkapi AC, kamar mandi dalam, dan WiFi. Tidak perlu repot membawa banyak barang."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {rooms.map((room, i) => (
            <Reveal key={room.title} delay={i * 0.1} as="article">
              <div className="group h-full bg-mint rounded-[28px] overflow-hidden flex flex-col">
                <div className="p-8 md:p-10 pb-0 text-center">
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">{room.title}</h3>
                  <p className="mt-2 text-lg text-ink-muted">{room.subtitle}</p>
                </div>

                <div className="mx-6 md:mx-10 mt-8 rounded-t-[160px] md:rounded-t-[220px] rounded-b-2xl overflow-hidden aspect-[4/3] ring-4 ring-white shadow-lg shadow-forest-900/10">
                  <img
                    src={room.image}
                    alt={room.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                </div>

                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <dl className="grid grid-cols-3 gap-4 text-center pb-8 border-b border-black/10">
                    {[
                      { icon: Users, label: 'Kapasitas', value: room.capacity },
                      { icon: Bed, label: 'Tempat tidur', value: room.bed },
                      { icon: CalendarDays, label: 'Sewa', value: room.period },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label}>
                        <Icon className="mx-auto text-emerald-600 mb-2" size={24} strokeWidth={1.6} aria-hidden />
                        <dt className="sr-only">{label}</dt>
                        <dd className="text-sm text-ink leading-snug">{value}</dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="flex flex-wrap gap-2 pt-8 flex-1 content-start">
                    {room.features.map((f) => (
                      <li key={f} className="text-sm text-forest-800 bg-white border border-mint-deep rounded-full px-3.5 py-1.5">
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(`Assalamualaikum, saya ingin memesan ${room.title} di Dzaki Kost. Apakah masih tersedia?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 block text-center bg-emerald-600 hover:bg-emerald-700 text-white text-[17px] font-medium py-3 rounded-full transition-colors"
                  >
                    Pesan {room.title}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
