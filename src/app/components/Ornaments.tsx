import { useId } from 'react';

/**
 * Decorative vectors inspired by Islamic geometric art and the Dzaki Kost logo.
 * All are purely decorative (aria-hidden) and colour themselves via `currentColor`.
 */

type SvgProps = { className?: string };

const safeId = (id: string) => id.replace(/[^a-zA-Z0-9_-]/g, '');

/** Rub el Hizb — the classic eight-pointed star made of two overlapping squares. */
export function EightPointStar({ className, filled = false }: SvgProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden focusable="false">
      <g
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 4}
        strokeLinejoin="round"
      >
        <rect x="21" y="21" width="58" height="58" />
        <rect x="21" y="21" width="58" height="58" transform="rotate(45 50 50)" />
      </g>
      {!filled && <circle cx="50" cy="50" r="11" fill="none" stroke="currentColor" strokeWidth="4" />}
    </svg>
  );
}

/** Tileable girih-style star lattice, used as a subtle background texture. */
export function GeometricPattern({ className, size = 64 }: SvgProps & { size?: number }) {
  const id = `geo-${safeId(useId())}`;
  return (
    <svg className={className} aria-hidden focusable="false" width="100%" height="100%">
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse" viewBox="0 0 64 64">
          <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
            {/* central eight-point star */}
            <rect x="20" y="20" width="24" height="24" />
            <rect x="20" y="20" width="24" height="24" transform="rotate(45 32 32)" />
            <circle cx="32" cy="32" r="5" />
            {/* lattice lines linking stars across tiles */}
            <path d="M32 15 V0 M32 49 V64 M15 32 H0 M49 32 H64" />
            {/* corner diamonds that complete the tiling */}
            <path d="M0 8 L8 0 M56 0 L64 8 M64 56 L56 64 M8 64 L0 56" />
            <path d="M0 -8 L8 0 L0 8 L-8 0 Z M64 -8 L72 0 L64 8 L56 0 Z M64 56 L72 64 L64 72 L56 64 Z M0 56 L8 64 L0 72 L-8 64 Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/** Crescent moon with a small star. */
export function Crescent({ className }: SvgProps) {
  const id = `cres-${safeId(useId())}`;
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden focusable="false">
      <defs>
        <mask id={id}>
          <rect width="100" height="100" fill="white" />
          <circle cx="62" cy="40" r="32" fill="black" />
        </mask>
      </defs>
      <circle cx="46" cy="52" r="38" fill="currentColor" mask={`url(#${id})`} />
      <path
        d="M78 58 l3.2 7.6 8.2.6 -6.3 5.3 2 8 -7.1 -4.4 -7.1 4.4 2 -8 -6.3 -5.3 8.2 -.6 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Hanging Middle-Eastern lantern (fanous). The window glows with `glow` colour. */
export function Lantern({ className, glow = '#c4ea7a' }: SvgProps & { glow?: string }) {
  return (
    <svg viewBox="0 0 60 170" className={className} aria-hidden focusable="false">
      <g stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" fill="none">
        <path d="M30 0 V42" />
        <circle cx="30" cy="46" r="4" />
        <path d="M17 62 Q30 44 43 62 Z" fill="currentColor" />
        <path d="M14 62 H46 V68 H14 Z" fill="currentColor" />
        <path d="M15 68 L10 104 L18 124 H42 L50 104 L45 68 Z" />
        <path d="M10 104 H50" />
        <path d="M23 116 V88 Q30 76 37 88 V116 Z" fill={glow} fillOpacity="0.85" />
        <path d="M18 124 H42 L36 134 H24 Z" fill="currentColor" />
        <path d="M30 134 V146" />
        <circle cx="30" cy="150" r="3" fill="currentColor" />
      </g>
    </svg>
  );
}

/**
 * A row of pointed Islamic arches/domes used as a section edge.
 * Place it at the top of a section with `fill` = the colour of the section it grows from.
 */
export function ArchEdge({ className, flip = false }: SvgProps & { flip?: boolean }) {
  const id = `arch-${safeId(useId())}`;
  return (
    <svg
      className={className}
      aria-hidden
      focusable="false"
      width="100%"
      height="28"
      preserveAspectRatio="none"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
    >
      <defs>
        <pattern id={id} width="56" height="28" patternUnits="userSpaceOnUse">
          <path d="M0 28 V20 C12 20 22 14 28 2 C34 14 44 20 56 20 V28 Z" fill="currentColor" />
          <circle cx="28" cy="2" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="28" fill={`url(#${id})`} />
    </svg>
  );
}

/** Outline of a pointed mihrab arch — used as a large background motif. */
export function MihrabArch({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 200 300" className={className} aria-hidden focusable="false" fill="none">
      <g stroke="currentColor" strokeWidth="2">
        <path d="M10 300 V130 C10 70 60 38 100 6 C140 38 190 70 190 130 V300" />
        <path d="M30 300 V136 C30 86 70 58 100 32 C130 58 170 86 170 136 V300" />
        <path d="M100 6 V-10" />
      </g>
      <g transform="translate(84 92) scale(0.32)" stroke="currentColor" strokeWidth="5" fill="none">
        <rect x="21" y="21" width="58" height="58" />
        <rect x="21" y="21" width="58" height="58" transform="rotate(45 50 50)" />
      </g>
    </svg>
  );
}

/** Ornamental horizontal divider: line · diamond · star · diamond · line. */
export function OrnamentDivider({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 220 24" className={className} aria-hidden focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M0 12 H78 M142 12 H220" />
        <path d="M84 12 L90 6 L96 12 L90 18 Z M124 12 L130 6 L136 12 L130 18 Z" />
      </g>
      <g transform="translate(100 2) scale(0.2)" fill="currentColor">
        <rect x="21" y="21" width="58" height="58" />
        <rect x="21" y="21" width="58" height="58" transform="rotate(45 50 50)" />
      </g>
    </svg>
  );
}
