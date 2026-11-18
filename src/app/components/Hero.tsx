import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { whatsappLink } from '../site';
import { Crescent, GeometricPattern, Lantern, OrnamentDivider } from './Ornaments';

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'center center'] });
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.88, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], reduce ? [28, 28] : [40, 20]);

  const ease = [0.16, 1, 0.3, 1] as const;
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease },
        };

  return (
    <section id="beranda" aria-labelledby="hero-title" className="relative isolate pt-28 md:pt-36 pb-16 bg-gradient-to-b from-mint via-white to-white overflow-hidden">
      {/* soft Islamic star lattice, faded out towards the bottom */}
      <GeometricPattern
        className="absolute inset-x-0 top-0 h-[640px] -z-10 text-emerald-700/[0.07] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        size={72}
      />
      <div className="absolute -z-10 -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-leaf/25 blur-3xl" />
      <Lantern className="hidden md:block absolute top-14 left-[5%] lg:left-[9%] w-9 lg:w-11 text-forest-700/80 origin-top animate-[sway_6s_ease-in-out_infinite]" />
      <Lantern className="hidden lg:block absolute top-14 left-[15%] w-7 h-36 text-emerald-600/50 origin-top animate-[sway_7.5s_ease-in-out_infinite_reverse]" />
      <Lantern className="hidden md:block absolute top-14 right-[5%] lg:right-[9%] w-9 lg:w-11 h-56 text-forest-700/80 origin-top animate-[sway_6.8s_ease-in-out_infinite]" />
      <Crescent className="hidden lg:block absolute top-32 right-[17%] w-12 text-leaf" />

      <div className="max-w-5xl mx-auto px-5 text-center">
        <motion.div {...fade(0)} className="flex justify-center mb-4 text-emerald-600/70">
          <OrnamentDivider className="w-40 md:w-52" />
        </motion.div>
        <motion.p {...fade(0)} className="text-emerald-700 font-semibold text-sm md:text-base mb-4 tracking-wide">
          Kost & Homestay Syariah · Padangsidimpuan
        </motion.p>
        <motion.h1
          {...fade(0.1)}
          id="hero-title"
          className="text-[44px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-ink"
        >
          Rumah kedua.
          <br />
          <span className="bg-gradient-to-r from-forest-700 via-emerald-600 to-lime-600 bg-clip-text text-transparent">
            Tenang dan berkah.
          </span>
        </motion.h1>
        <motion.p {...fade(0.2)} className="mt-6 max-w-2xl mx-auto text-lg md:text-2xl leading-snug text-ink-muted">
          <strong className="font-semibold text-ink">Dzaki Kost & Homestay Syariah</strong> — hunian bersih, aman,
          dan islami di jantung Padangsidimpuan. Untuk mahasiswi, profesional, dan keluarga Muslim.
        </motion.p>
        <motion.div {...fade(0.3)} className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <a
            href={whatsappLink('Assalamualaikum, saya ingin memesan kamar di Dzaki Kost.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-[17px] font-medium px-7 py-3 rounded-full transition-colors"
          >
            Pesan kamar sekarang
          </a>
          <a href="#kamar" className="text-emerald-600 hover:underline text-[17px] font-medium">
            Lihat pilihan kamar ›
          </a>
        </motion.div>
      </div>

      <div className="mt-14 md:mt-20 px-3 md:px-5">
        <motion.div
          ref={imageRef}
          style={{ scale, borderRadius: radius }}
          className="relative max-w-6xl mx-auto overflow-hidden aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/8] shadow-2xl shadow-forest-900/15 ring-1 ring-leaf/40 will-change-transform"
        >
          <img
            src="/images/home.jpeg"
            alt="Tampak depan bangunan Dzaki Kost & Homestay Syariah di Padangsidimpuan"
            className="absolute inset-0 w-full h-full object-cover"
            {...{ fetchpriority: 'high' }}
            decoding="async"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-950/70 to-transparent" />
          <ul className="absolute bottom-5 md:bottom-8 inset-x-0 flex flex-wrap justify-center gap-2 md:gap-3 px-4 text-white text-xs md:text-sm font-medium">
            {['Lingkungan islami', 'CCTV 24 jam', 'Kamar mandi dalam', 'Dekat Univ. Aufa Royhan'].map((t) => (
              <li key={t} className="bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5">
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
