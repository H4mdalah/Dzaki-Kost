import { Clock, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Reveal, SectionHeading } from './Reveal';
import { SITE, whatsappLink } from '../site';
import { Crescent, GeometricPattern } from './Ornaments';

const inputCls =
  'w-full bg-white px-4 py-3.5 rounded-xl border border-black/10 text-[17px] text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-4 focus:ring-emerald-600/20 focus:border-emerald-600 transition';

export function Contact() {
  const [form, setForm] = useState({ name: '', service: 'Kost bulanan/tahunan', message: '' });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      'Assalamualaikum, Dzaki Kost.',
      `Nama: ${form.name}`,
      `Tertarik: ${form.service}`,
      form.message && `Pesan: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n');
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer');
  };

  const info = [
    { icon: MessageCircle, label: 'WhatsApp', value: SITE.phoneDisplay, href: whatsappLink('Assalamualaikum, Dzaki Kost.') },
    { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Clock, label: 'Jam layanan', value: SITE.hours },
    { icon: MapPin, label: 'Alamat', value: SITE.addressShort, href: SITE.mapsLink },
  ];

  return (
    <section id="kontak" aria-labelledby="kontak-title" className="relative isolate overflow-hidden bg-mint py-24 md:py-32">
      <GeometricPattern className="absolute inset-0 -z-10 text-emerald-700/[0.05] [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" size={72} />
      <Crescent className="absolute -z-10 top-24 -left-10 w-40 md:w-56 text-leaf/30" />
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          id="kontak-title"
          eyebrow="Hubungi Kami"
          title={<>Siap pindah?<br />Kami siap menyambut.</>}
          lead="Tanya ketersediaan kamar, atur jadwal survei, atau langsung pesan. Kami balas secepatnya lewat WhatsApp."
        />

        <div className="grid lg:grid-cols-5 gap-5">
          <Reveal className="lg:col-span-3">
            <form onSubmit={onSubmit} className="h-full bg-white rounded-[28px] p-8 md:p-10 space-y-5">
              <h3 className="text-2xl font-semibold tracking-tight text-ink">Kirim pesan lewat WhatsApp</h3>
              <div>
                <label htmlFor="name" className="block text-sm text-ink-muted mb-2">Nama lengkap</label>
                <input
                  id="name"
                  required
                  autoComplete="name"
                  className={inputCls}
                  placeholder="Nama Anda"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm text-ink-muted mb-2">Saya tertarik dengan</label>
                <select
                  id="service"
                  className={inputCls}
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option>Kost bulanan/tahunan</option>
                  <option>Penginapan syariah</option>
                  <option>Jadwal survei kamar</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-ink-muted mb-2">Pesan (opsional)</label>
                <textarea
                  id="message"
                  rows={4}
                  className={inputCls}
                  placeholder="Contoh: Apakah kamar single masih tersedia untuk bulan depan?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-[17px] font-medium py-3.5 rounded-full transition-colors"
              >
                Kirim via WhatsApp
              </button>
            </form>
          </Reveal>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <Reveal delay={0.1}>
              <ul className="bg-white rounded-[28px] p-8 space-y-6">
                {info.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex gap-4">
                    <Icon className="text-emerald-600 shrink-0 mt-0.5" size={22} strokeWidth={1.8} aria-hidden />
                    <div>
                      <p className="text-sm text-ink-muted">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-[17px] text-ink hover:text-emerald-600 break-words"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[17px] text-ink">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2} className="flex-1">
              <div className="h-full min-h-64 rounded-[28px] overflow-hidden bg-white">
                <iframe
                  title="Peta lokasi Dzaki Kost & Homestay Syariah di Padangsidimpuan"
                  src={SITE.mapsEmbed}
                  className="w-full h-full min-h-64 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
