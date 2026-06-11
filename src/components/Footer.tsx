"use client";
import Image from "next/image";

const socials = [
  { name: "Instagram", href: "#", icon: "📷" },
  { name: "TikTok", href: "#", icon: "🎵" },
  { name: "Twitter/X", href: "#", icon: "𝕏" },
  { name: "YouTube", href: "#", icon: "▶" },
  { name: "Facebook", href: "#", icon: "f" },
];

const links = [
  { label: "FAQ", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Press", href: "#" },
  { label: "Vendors", href: "#vendors" },
  { label: "Volunteering", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1a8c2a]/20 overflow-hidden">
      {/* Glow top edge */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #1a8c2a, #00e5d1, #1a8c2a, transparent)" }} />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14">
                <Image src="/logo.png" alt="ACN" fill className="object-contain" />
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-accent)", color: "var(--acn-cyan)" }}>
                  Festival
                </p>
                <p className="text-xl" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
                  Afro Caribbean Nation
                </p>
              </div>
            </div>
            <p className="text-sm opacity-50 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontStyle: "italic" }}>
              One Continent. One Rhythm. One Nation.
            </p>
            <p className="text-xs opacity-40 tracking-widest uppercase" style={{ fontFamily: "var(--font-accent)" }}>
              June 27 ,July 25, August 29, 2026
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs tracking-[0.35em] uppercase mb-6 opacity-50" style={{ fontFamily: "var(--font-accent)" }}>
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm opacity-60 hover:opacity-100 hover:text-[#00e5d1] transition-all duration-200"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Newsletter */}
          <div>
            <p className="text-xs tracking-[0.35em] uppercase mb-6 opacity-50" style={{ fontFamily: "var(--font-accent)" }}>
              Stay Connected
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm hover:border-[#00e5d1] hover:text-[#00e5d1] transition-all duration-300"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <p className="text-xs opacity-50 mb-3 tracking-widest uppercase" style={{ fontFamily: "var(--font-accent)" }}>
              Newsletter
            </p>
            <div className="flex gap-0 rounded-full overflow-hidden border border-[#1a8c2a]/40">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-4 py-3 text-xs outline-none text-[#f0f0e8] placeholder-white/20"
                style={{ fontFamily: "var(--font-accent)" }}
              />
              <button
                className="px-5 py-3 text-xs tracking-widest uppercase font-bold transition-all duration-300 hover:brightness-110"
                style={{
                  fontFamily: "var(--font-accent)",
                  background: "linear-gradient(135deg, #1a8c2a, #00e5d1)",
                  color: "#050a02",
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-25" style={{ fontFamily: "var(--font-accent)" }}>
            © 2026 Afro Caribbean Nation. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Cookie Policy"].map((t) => (
              <a key={t} href="#" className="text-xs opacity-25 hover:opacity-60 transition-opacity" style={{ fontFamily: "var(--font-accent)" }}>
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
