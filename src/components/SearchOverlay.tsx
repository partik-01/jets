'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { aircraft } from '@/lib/aircraft-data';
import { useSearchStore } from '@/lib/store';

export default function SearchOverlay() {
  const { searchOpen, closeSearch } = useSearchStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { if (searchOpen) window.setTimeout(() => inputRef.current?.focus(), 0); }, [searchOpen]);
  useEffect(() => { const handler = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); useSearchStore.getState().openSearch(); } if (event.key === 'Escape') closeSearch(); }; window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler); }, [closeSearch]);
  const results = useMemo(() => aircraft.filter((item) => `${item.name} ${item.role} ${item.country}`.toLowerCase().includes(query.toLowerCase())).slice(0, 5), [query]);
  if (!searchOpen) return null;
  return <div className="fixed inset-0 z-50 bg-slate-950/55 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Search exhibits" onMouseDown={closeSearch}>
    <div className="mx-auto mt-[12vh] max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-card shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
      <div className="flex items-center gap-3 border-b border-border px-5"><Search className="h-5 w-5 text-accent" /><input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} className="h-16 min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground" placeholder="Search aircraft, roles, or countries…" /><button onClick={closeSearch} aria-label="Close search"><X className="h-5 w-5 text-muted-foreground" /></button></div>
      <div className="p-2">{results.length ? results.map((item) => <Link key={item.slug} href={`/aircraft/${item.slug}`} onClick={closeSearch} className="flex items-center justify-between rounded-xl px-4 py-3 hover:bg-background-alt"><span><span className="block font-heading text-lg">{item.name}</span><span className="text-xs text-muted-foreground">{item.role} · {item.country}</span></span><span className="font-mono text-xs text-accent">{item.introductionYear}</span></Link>) : <p className="p-5 text-sm text-muted-foreground">No exhibits match that search.</p>}</div>
      <div className="border-t border-border px-5 py-3 text-xs text-muted-foreground">Press <kbd className="rounded border border-border px-1">Esc</kbd> to close</div>
    </div>
  </div>;
}
