import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { useRef } from 'react';
import { EightPointStar, OrnamentDivider } from './Ornaments';

const TEXT =
  'Lokasi strategis. Lingkungan yang islami. Fasilitas lengkap. Harga yang bersahabat. Semua yang Anda cari dari sebuah hunian, kini ada di satu tempat.';

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
}

/** Apple-style statement whose words light up as you scroll. */
export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const words = TEXT.split(' ');

  return (
    <section aria-label="Keunggulan Dzaki Kost" className="relative isolate overflow-hidden bg-white py-24 md:py-40">
      <EightPointStar className="absolute -z-10 top-1/2 -translate-y-1/2 -right-40 md:-right-24 w-[420px] md:w-[560px] text-leaf/25 animate-[spin_120s_linear_infinite] motion-reduce:animate-none" />
      <EightPointStar className="absolute -z-10 -left-16 top-10 w-40 text-emerald-600/10" />
      <div className="max-w-5xl mx-auto px-5">
        <OrnamentDivider className="w-36 mb-8 text-emerald-600/60" />
        <p ref={ref} className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-[1.15] text-ink">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
}
