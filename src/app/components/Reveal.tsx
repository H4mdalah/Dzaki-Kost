import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { EightPointStar } from './Ornaments';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'li' | 'article';
};

/** Fades and lifts content into view once, Apple-style. */
export function Reveal({ children, className, delay = 0, y = 40, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  dark = false,
  align = 'center',
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  id: string;
  dark?: boolean;
  align?: 'center' | 'left';
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <Reveal className={`max-w-3xl ${alignCls} mb-14 md:mb-20`}>
      <p
        className={`inline-flex items-center gap-2.5 text-sm md:text-base font-semibold mb-3 tracking-wide ${
          dark ? 'text-leaf' : 'text-emerald-700'
        }`}
      >
        <EightPointStar filled className={`w-3 h-3 ${dark ? 'text-leaf/70' : 'text-leaf'}`} />
        {eyebrow}
        <EightPointStar filled className={`w-3 h-3 ${dark ? 'text-leaf/70' : 'text-leaf'}`} />
      </p>
      <h2
        id={id}
        className={`text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] ${dark ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-lg md:text-xl leading-relaxed ${dark ? 'text-white/70' : 'text-ink-muted'}`}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
