import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black relative pt-16 pb-12 border-t border-purple-900/30 overflow-hidden">
      {/* Gradient Top Glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-600/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white font-bold shadow-lg shadow-purple-500/30">
                DM
              </span>
              <div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
                  Danish Mukhtar
                </h3>
                <p className="text-xs text-purple-400 font-medium">MCA • AI Developer • Software Architect</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
              Engineering high-impact AI agents, bespoke enterprise web platforms, and mobile apps. 
              Dedicated to building fast, scalable, and intelligent software that elevates businesses to their next level.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/70 border border-emerald-500/40 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                Available for New Projects
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/70 border border-purple-500/40 text-purple-300">
                Fast Turnaround Guaranteed
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-xs text-purple-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'AI Video Showcase', href: '#ai-video' },
                { name: 'Qualifications & MCA', href: '#qualifications' },
                { name: 'Why Work With Me', href: '#why-me' },
                { name: 'Build For Your Business', href: '#services' },
                { name: 'Contact Danish', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="text-purple-500 mr-2 group-hover:translate-x-1 transition-transform">▸</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-xs text-purple-400">
              Direct Contact
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <div className="text-xs text-gray-500">Phone / WhatsApp</div>
                <a
                  href="tel:8825062835"
                  className="font-medium text-purple-300 hover:text-white transition-colors block"
                >
                  +91 8825062835
                </a>
              </li>
              <li>
                <div className="text-xs text-gray-500">Email Address</div>
                <a
                  href="mailto:mukhtardanish13@gmail.com"
                  className="font-medium text-purple-300 hover:text-white transition-colors block break-all"
                >
                  mukhtardanish13@gmail.com
                </a>
              </li>
              <li>
                <div className="text-xs text-gray-500">Quick WhatsApp Chat</div>
                <a
                  href="https://wa.me/918825062835?text=Hi%20Danish,%20I%20saw%20your%20portfolio%20and%20want%20to%20talk%20about%20a%20project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 px-3.5 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-900 transition-colors text-xs font-semibold"
                >
                  <span>Chat on WhatsApp</span>
                  <span>↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-xs">
            © {currentYear} <strong className="text-gray-300">Danish Mukhtar</strong>. All rights reserved. Built with Next.js, Three.js & Tailwind CSS.
          </p>
          <p className="text-gray-600 text-xs">
            MCA Graduate • AI Developer • Software & Mobile Engineer
          </p>
        </div>
      </div>
    </footer>
  );
}
