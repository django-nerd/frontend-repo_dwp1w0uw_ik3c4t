import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-xl font-semibold text-transparent">
            Magnificent Blue
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Your Name — All rights reserved.
      </footer>
    </div>
  );
}
