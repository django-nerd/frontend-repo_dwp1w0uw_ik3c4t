export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white/90 shadow-xl backdrop-blur-md">
        <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent">About</h2>
        <p className="leading-relaxed text-white/80">
          I'm a designer-engineer specializing in product design, IoT, and mechatronics. I prototype end-to-end experiences — from human-centered interfaces and elegant 2D/3D visuals to firmware and cloud connectivity. My work focuses on clarity, performance, and thoughtful detail.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-4">
            <p className="text-sm text-white/60">Core</p>
            <p className="font-semibold">Product Design</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-4">
            <p className="text-sm text-white/60">Hardware</p>
            <p className="font-semibold">IoT & Embedded</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-4">
            <p className="text-sm text-white/60">Systems</p>
            <p className="font-semibold">Mechatronics</p>
          </div>
        </div>
      </div>
    </section>
  );
}
