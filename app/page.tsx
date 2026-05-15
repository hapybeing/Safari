'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { features } from '@/lib/mock-data';

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <section className="panel relative overflow-hidden p-10 md:p-16">
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-amberdeep/20 blur-3xl" />
        <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">Compose wildlife cinema with intelligence, gravity, and soul.</motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-bone/70">A cinematic conservation system for directors, educators, and field teams turning species data into emotionally accurate films.</p>
        <div className="mt-10 flex gap-4"><Link className="rounded-full bg-bone px-6 py-3 text-black" href="/studio">Enter Studio</Link><Link className="rounded-full border border-white/20 px-6 py-3" href="/archive">View Archive</Link></div>
      </section>
      <section className="mt-16 grid gap-4 md:grid-cols-2">
        {features.map((f, i)=><motion.article key={f.t} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} transition={{delay:i*.07}} className="panel p-6"><h3 className="text-xl">{f.t}</h3><p className="mt-2 text-bone/70">{f.d}</p></motion.article>)}
      </section>
      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="panel p-8"><h2 className="text-3xl">Output Suite</h2><p className="mt-3 text-bone/70">Narration scripts, poster concepts, scene maps, short captions, and archive-ready metadata.</p></div>
        <div className="panel p-8"><h2 className="text-3xl">Studio Preview</h2><p className="mt-3 text-bone/70">Species prompt + source material + tone direction. The system orchestrates cinematic outputs with visible reasoning stages.</p></div>
      </section>
      <footer className="mt-20 flex justify-between border-t border-white/10 py-8 text-sm text-bone/50"><span>WildLens OS © 2030</span><span>Field Ethics · Terms · Contact</span></footer>
    </main>
  );
}
