import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Parametric Chair — 3D CAD',
    description: 'Exploration in generative design using NURBS surfaces and CNC constraints.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/',
    link: 'https://github.com/'
  },
  {
    title: 'Smart Sensor Node — IoT',
    description: 'Low-power ESP32 device with MQTT, OTA, and edge ML for anomaly detection.',
    image: 'https://images.unsplash.com/photo-1582775764915-6b78a5e9904d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbWFydCUyMFNlbnNvciUyME5vZGUlMjAlRTIlODAlOTQlMjBJb1R8ZW58MHwwfHx8MTc2MjQxNTA0OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    github: 'https://github.com/',
    link: 'https://github.com/'
  },
  {
    title: 'Haptic Interface — Mechatronics',
    description: 'Force-feedback controller with brushless drivers and real-time control.',
    image: 'https://images.unsplash.com/photo-1546778316-dfda79f1c84e?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/',
    link: 'https://github.com/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent">Featured Work</h2>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-300/90 hover:text-cyan-200">
          <Github size={18} /> View GitHub
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/40 to-slate-800/20 shadow-xl backdrop-blur">
            <div className="relative h-44 w-full overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
            </div>
            <div className="p-4 text-white/90">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/90 hover:bg-white/10">
                  <Github size={14} /> Code
                </a>
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-2 py-1 text-xs text-white">
                  <ExternalLink size={14} /> Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
