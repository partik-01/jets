import type { Aircraft } from '@/lib/aircraft-data';

export default function AircraftArt({ item, className = '' }: { item: Aircraft; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-slate-950 ${className}`} style={{ background: `radial-gradient(circle at 60% 35%, ${item.accent}66, transparent 38%), linear-gradient(135deg, #0b1624, #172538)` }}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <svg viewBox="0 0 500 260" className="absolute inset-0 h-full w-full p-5" aria-label={`Illustration of ${item.name}`} role="img">
        <path d="M42 139 L177 118 L250 49 L283 117 L465 137 L287 150 L245 212 L211 151 L42 139 Z" fill={item.accent} fillOpacity=".92" />
        <path d="M42 139 L465 137 M177 118 L211 151 M283 117 L287 150 M250 49 L245 212" fill="none" stroke="white" strokeOpacity=".45" strokeWidth="2" />
        <circle cx="240" cy="137" r="9" fill="#ecf7ff" fillOpacity=".8" />
      </svg>
      <span className="absolute bottom-3 left-4 font-mono text-[10px] tracking-[.26em] text-white/60">EXHIBIT / {item.introductionYear}</span>
    </div>
  );
}
