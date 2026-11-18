import { Reveal, SectionHeading } from './Reveal';
import { EightPointStar, MihrabArch } from './Ornaments';

const stats = [
  { value: '50+', label: 'Penghuni telah merasakan nyamannya tinggal di sini' },
  { value: '98%', label: 'Tingkat kepuasan penghuni' },
  { value: '24/7', label: 'Keamanan dengan CCTV & dukungan pengelola' },
  { value: '2025', label: 'Tahun berdiri, melayani dengan nilai Islami' },
];

export function About() {
  return (
    <section id="tentang" aria-labelledby="tentang-title" className="relative isolate overflow-hidden bg-mint py-24 md:py-32">
      <MihrabArch className="absolute -z-10 -left-20 bottom-0 w-[340px] md:w-[420px] text-emerald-700/10" />
      <MihrabArch className="absolute -z-10 -right-24 top-16 w-[260px] md:w-[320px] text-emerald-700/[0.07]" />
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          id="tentang-title"
          eyebrow="Tentang Kami"
          title={<>Dibangun dengan nilai.<br />Dijalankan dengan hati.</>}
        />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal className="space-y-6 text-lg md:text-xl leading-relaxed text-ink-muted">
            <p>
              Sejak 2025, <strong className="text-ink font-semibold">Dzaki Kost & Homestay Syariah</strong> hadir untuk
              mereka yang mencari hunian <strong className="text-ink font-semibold">nyaman, terjangkau, dan sesuai syariah</strong>{' '}
              di Kota Padangsidimpuan.
            </p>
            <p>
              Kami paham, pelajar, profesional muda, dan keluarga Muslim butuh lingkungan yang aman dan menenangkan. Karena itu
              setiap sudut dikelola dengan nilai-nilai Islam — bersih, tertib, dan saling menghormati.
            </p>
            <p className="text-ink font-semibold">Tujuan kami sederhana: membuat Anda merasa di rumah sendiri.</p>
          </Reveal>

          <dl className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.value} delay={i * 0.08} className="relative overflow-hidden bg-white rounded-3xl p-6 md:p-8 border border-mint-deep">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <EightPointStar className="absolute -top-5 -right-5 w-20 text-leaf/40" />
                  <span className="block text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-br from-forest-700 to-emerald-500 bg-clip-text text-transparent">
                    {s.value}
                  </span>
                  <span className="mt-3 block text-sm md:text-[15px] text-ink-muted leading-snug">{s.label}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
