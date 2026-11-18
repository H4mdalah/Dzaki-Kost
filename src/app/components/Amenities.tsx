import { Car, Coffee, Droplets, Shield, Sofa, Utensils, Wifi, Wind } from 'lucide-react';
import { Reveal, SectionHeading } from './Reveal';
import { ArchEdge, GeometricPattern, Lantern } from './Ornaments';

const amenities = [
  { icon: Wifi, label: 'WiFi cepat', note: 'Untuk kuliah & kerja' },
  { icon: Wind, label: 'Kamar ber-AC', note: 'Sejuk sepanjang hari' },
  { icon: Shield, label: 'CCTV 24 jam', note: 'Aman setiap saat' },
  { icon: Utensils, label: 'Dapur bersama', note: 'Masak sendiri, hemat' },
  { icon: Droplets, label: 'Ruang laundry', note: 'Cuci tanpa repot' },
  { icon: Sofa, label: 'Ruang santai', note: 'Tempat melepas lelah' },
  { icon: Car, label: 'Parkir luas', note: 'Motor & mobil' },
  { icon: Coffee, label: 'Dekat kafe', note: 'Nongkrong cukup jalan kaki' },
];

export function Amenities() {
  return (
    <section
      id="fasilitas"
      aria-labelledby="fasilitas-title"
      className="relative isolate overflow-hidden bg-gradient-to-b from-forest-900 via-forest-800 to-forest-900 py-28 md:py-40"
    >
      {/* arch skyline edges blending into the neighbouring white / mint sections */}
      <ArchEdge className="absolute top-0 inset-x-0 text-white" flip />
      <ArchEdge className="absolute bottom-0 inset-x-0 text-mint" />
      <GeometricPattern className="absolute inset-0 -z-10 text-leaf/[0.07]" size={72} />
      <div className="absolute -z-10 left-1/2 top-24 -translate-x-1/2 w-[720px] h-[420px] rounded-full bg-leaf/10 blur-3xl" />
      <Lantern className="hidden lg:block absolute top-6 left-[6%] w-10 text-leaf/70 origin-top animate-[sway_6s_ease-in-out_infinite]" />
      <Lantern className="hidden lg:block absolute top-6 left-[12%] w-7 h-40 text-leaf/50 origin-top animate-[sway_7s_ease-in-out_infinite_reverse]" />
      <Lantern className="hidden lg:block absolute top-6 right-[8%] w-10 h-52 text-leaf/70 origin-top animate-[sway_6.5s_ease-in-out_infinite]" />

      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          dark
          id="fasilitas-title"
          eyebrow="Fasilitas"
          title={<>Semua sudah ada.<br />Anda tinggal datang.</>}
          lead="Fasilitas lengkap yang dirancang untuk kenyamanan, keamanan, dan kemudahan hidup sehari-hari."
        />

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {amenities.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.label} as="li" delay={(i % 4) * 0.06} y={24}>
                <div className="group h-full bg-white/[0.06] backdrop-blur-sm border border-white/10 hover:border-leaf/40 hover:bg-white/[0.09] transition-colors rounded-3xl p-6 md:p-7">
                  <span className="inline-grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-leaf to-emerald-500 text-forest-950 shadow-lg shadow-black/10">
                    <Icon size={24} strokeWidth={1.8} aria-hidden />
                  </span>
                  <p className="mt-6 text-lg md:text-xl font-semibold text-white tracking-tight">{a.label}</p>
                  <p className="mt-1 text-sm text-white/65">{a.note}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {[
            {
              img: '/images/park.jpeg',
              alt: 'Area parkir luas Dzaki Kost untuk sepeda motor dan mobil',
              title: 'Parkir luas & aman.',
              text: 'Bawa motor atau mobil tanpa khawatir. Area parkir lega dan terpantau CCTV.',
            },
            {
              img: '/images/strategis.jpeg',
              alt: 'Lokasi strategis Dzaki Kost dekat Indomaret dan fasilitas umum di Padangsidimpuan',
              title: 'Semua serba dekat.',
              text: 'Dekat Universitas Aufa Royhan, Indomaret, dan fasilitas umum lainnya.',
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1} as="article">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[5/4]">
                <img src={f.img} alt={f.alt} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/25 to-transparent" />
                <div className="absolute bottom-0 p-7 md:p-9">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">{f.title}</h3>
                  <p className="mt-2 text-[17px] text-white/80 max-w-sm">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
