'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['/', 'Atlas'],
  ['/studio', 'Studio'],
  ['/archive', 'Archive'],
  ['/species/snow-leopard', 'Species'],
  ['/settings', 'Settings'],
];

export function Nav() {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm tracking-[0.3em] text-bone/90">WILDLENS OS</Link>
        <div className="flex gap-2">
          {links.map(([href, label]) => <Link key={href} href={href} className={`rounded-full px-4 py-2 text-sm transition ${path===href?'bg-white/12 text-bone':'text-bone/60 hover:text-bone hover:bg-white/8'}`}>{label}</Link>)}
        </div>
      </nav>
    </header>
  );
}
