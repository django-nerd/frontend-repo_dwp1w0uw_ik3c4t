import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

const avatarSvg = encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e3a8a"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
  </defs>
  <rect width="256" height="256" rx="32" fill="url(#g)"/>
  <g fill="white" opacity="0.9">
    <circle cx="128" cy="96" r="44"/>
    <path d="M40 220c0-36.5 39.8-66 88-66s88 29.5 88 66v8H40z"/>
  </g>
</svg>`);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(30,58,138,0.2),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="z-10 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Designer • Engineer • Builder
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Crafting intelligent products at the edge of design and technology
          </h1>
          <p className="max-w-prose text-base leading-relaxed text-white/80">
            I blend product design, IoT, and mechatronics to prototype, iterate, and ship
            immersive solutions — from elegant 2D/3D systems to connected devices.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="relative h-[420px] w-full md:h-[520px]">
          {/* Glass profile card overlay */}
          <div className="absolute right-6 top-6 z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 text-white/90 backdrop-blur-lg">
            <img
              src={`data:image/svg+xml;utf8,${avatarSvg}`}
              alt="Profile"
              className="h-10 w-10 rounded-xl object-cover ring-2 ring-white/20"
            />
            <div className="leading-tight">
              <p className="font-semibold">Your Name</p>
              <p className="text-xs text-white/70">Product Design • IoT • Mechatronics</p>
            </div>
          </div>
          {/* Spline scene */}
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/40 to-slate-800/20 shadow-2xl backdrop-blur-md">
            <Spline
              scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* top gradient overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* bottom blur accent */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-20%] h-[40%] bg-[radial-gradient(ellipse_at_bottom,_rgba(56,189,248,0.35),transparent_60%)] blur-3xl" />
    </section>
  );
}
