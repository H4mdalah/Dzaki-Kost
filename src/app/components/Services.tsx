import { Check, Home, Moon } from 'lucide-react';
import { Reveal, SectionHeading } from './Reveal';
import { whatsappLink } from '../site';
import { Crescent, EightPointStar, GeometricPattern } from './Ornaments';

const services = [
  {
    icon: Home,
    tag: 'Untuk tinggal lama',
    title: 'Kost Bulanan & Tahunan',
    description:
      'Kamar nyaman dan terjangkau untuk mahasiswi, pekerja, dan umum. Semua kebutuhan harian sudah tersedia — Anda tinggal datang dan menetap.',
    features: ['Sewa bulanan atau tahunan', 'Kamar dengan fasilitas lengkap', 'Dapur bersama & ruang laundry'],
    cta: 'Tanya kamar kost',
    message: 'Assalamualaikum, saya tertarik dengan kamar kost bulanan/tahunan di Dzaki Kost.',
    dark: false,
  },
  {
    icon: Moon,
    tag: 'Untuk menginap & keluarga',
    title: 'Penginapan Syariah',
    description:
      'Homestay yang dijalankan sesuai prinsip syariah. Pilihan tepat bagi keluarga Muslim yang ingin menginap dengan tenang saat berkunjung ke Padangsidimpuan.',
    features: ['Tersedia tempat ibadah', 'Lingkungan halal & terjaga', 'Ramah keluarga'],
    cta: 'Tanya penginapan',
    message: 'Assalamualaikum, saya ingin menanyakan penginapan syariah di Dzaki Kost.',
    dark: true,
  },
];

export function Services() {
  return (
    <section id="layanan" aria-labelledby="layanan-title" className="bg-mint py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          id="layanan-title"
          eyebrow="Layanan"
          title={<>Satu tempat.<br />Dua cara untuk tinggal.</>}
          lead="Mau menetap berbulan-bulan atau hanya beberapa malam, kami punya pilihan yang pas untuk Anda."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.1} as="article">
                <div
                  className={`relative isolate overflow-hidden h-full rounded-[28px] p-8 md:p-12 flex flex-col ${
                    s.dark
                      ? 'bg-gradient-to-br from-forest-800 via-forest-900 to-forest-950 text-white'
                      : 'bg-white text-ink'
                  }`}
                >
                  {s.dark ? (
                    <>
                      <GeometricPattern className="absolute inset-0 -z-10 text-leaf/[0.08]" size={56} />
                      <Crescent className="absolute -z-10 -top-6 -right-6 w-44 md:w-56 text-leaf/15" />
                    </>
                  ) : (
                    <EightPointStar className="absolute -z-10 -top-10 -right-10 w-48 md:w-60 text-leaf/30" />
                  )}
                  <Icon className={s.dark ? 'text-leaf' : 'text-emerald-600'} size={36} strokeWidth={1.6} aria-hidden />
                  <p className={`mt-8 text-sm font-semibold ${s.dark ? 'text-white/70' : 'text-ink-muted'}`}>{s.tag}</p>
                  <h3 className="mt-1 text-3xl md:text-4xl font-semibold tracking-tight">{s.title}</h3>
                  <p className={`mt-4 text-[17px] leading-relaxed ${s.dark ? 'text-white/70' : 'text-ink-muted'}`}>
                    {s.description}
                  </p>
                  <ul className="mt-8 space-y-3 flex-1">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-[17px]">
                        <Check size={18} className={s.dark ? 'text-leaf' : 'text-emerald-600'} aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(s.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-10 self-start text-[17px] font-medium hover:underline ${
                      s.dark ? 'text-leaf' : 'text-emerald-600'
                    }`}
                  >
                    {s.cta} ›
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
