'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 70, damping: 30, mass: 0.6 });
  const glowY = useSpring(mouseY, { stiffness: 70, damping: 30, mass: 0.6 });
  const mistShift = useTransform(glowX, [0, 1600], ['-3%', '3%']);

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-black text-bone"
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
    >
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(420px circle at var(--x) var(--y), rgba(213,159,74,0.18), rgba(0,0,0,0) 65%)',
          ['--x' as string]: useTransform(glowX, (v) => `${v}px`),
          ['--y' as string]: useTransform(glowY, (v) => `${v}px`),
        }}
      />

      <motion.div className="pointer-events-none absolute inset-0 z-0" style={{ x: mistShift }}>
        <div className="absolute left-[-20%] top-[8%] h-[35rem] w-[35rem] rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute right-[-15%] top-[30%] h-[30rem] w-[30rem] rounded-full bg-amberdeep/10 blur-3xl" />
      </motion.div>

      <section className="relative z-10 mx-auto flex min-h-[90vh] max-w-[96rem] flex-col justify-between px-6 pb-12 pt-16 md:px-10 md:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-xs text-[10px] uppercase tracking-[0.45em] text-bone/55"
        >
          WILDLENS OS • CONSERVATION ARCHIVE PROTOCOL • 2030
        </motion.p>

        <div className="mt-10 grid flex-1 items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="max-w-5xl text-[15vw] font-semibold uppercase leading-[0.86] tracking-[-0.04em] text-bone sm:text-[12vw] lg:text-[10rem]"
            >
              Film the
              <br />
              Species
              <br />
              We Might
              <br />
              Lose.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 1.1 }}
              className="mt-8 max-w-xl text-sm leading-relaxed text-bone/68 md:text-base"
            >
              A cinematic intelligence system for transforming fragile field evidence into visual testimony with emotional precision.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mb-4 space-y-6 lg:justify-self-end"
          >
            <div className="w-full max-w-md border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
              <p className="text-[11px] uppercase tracking-[0.34em] text-bone/50">Live Sequence</p>
              <div className="mt-4 space-y-3">
                {['Terrain scan aligned', 'Threat signal elevated', 'Narrative architecture assembling'].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0.25 }}
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.6 }}
                    className="flex items-center justify-between border-b border-white/8 pb-2 text-xs text-bone/75"
                  >
                    <span>{item}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-amberdeep/80" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Link href="/studio" className="rounded-full bg-bone px-6 py-3 text-sm text-black transition hover:bg-bone/90">
                Enter Studio
              </Link>
              <Link href="/archive" className="rounded-full border border-white/20 px-6 py-3 text-sm text-bone/80 transition hover:border-white/40 hover:text-bone">
                Open Archive
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[96rem] px-6 pb-28 md:px-10">
        <div className="grid items-end gap-10 border-t border-white/12 pt-12 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="max-w-sm text-xs uppercase tracking-[0.3em] text-bone/45">Interface Fragments</p>
          <div className="relative h-72 overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-amberdeep/[0.08]">
            <div className="absolute -left-12 top-8 h-56 w-80 border border-white/15 bg-black/60 p-4">
              <p className="text-[10px] uppercase tracking-[0.26em] text-bone/55">Species Intelligence</p>
              <p className="mt-6 text-2xl">Panthera uncia</p>
              <p className="mt-2 text-xs text-bone/60">Elevation corridor volatility: high.</p>
            </div>
            <div className="absolute bottom-[-2.2rem] right-[-2rem] h-52 w-80 border border-white/10 bg-black/70 p-4 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.26em] text-bone/55">Scene Draft • 04</p>
              <p className="mt-4 text-sm text-bone/75">A lone silhouette crosses a fractured ridge while distant settlement light bleeds into the snow haze.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
