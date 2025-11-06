import { Mail, Github, Linkedin, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white/90 shadow-xl backdrop-blur-md">
        <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent">Get in touch</h2>
        <p className="mb-6 text-white/75">Open to collaborations, consulting, and new opportunities. Prefer concise messages with links to context.</p>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10">
            <Mail size={18} /> hello@example.com
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10">
            <Github size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="https://your-portfolio.example" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10">
            <Globe size={18} /> Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
