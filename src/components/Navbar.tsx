"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Line-Up", href: "#lineup" },
  { label: "Tickets", href: "#tickets" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
];

function TicketModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full rounded-2xl p-8 text-center border"
        style={{
          background: "linear-gradient(145deg, rgba(26,140,42,0.15), rgba(5,10,2,0.98))",
          borderColor: "#00e5d1",
          boxShadow: "0 0 60px rgba(0,229,209,0.2), 0 0 120px rgba(26,140,42,0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all"
        >
          <X size={15} />
        </button>

        <div className="text-4xl mb-4">🎟️</div>

        <h3
          className="text-3xl mb-2"
          style={{
            fontFamily: "var(--font-display)",
            background: "linear-gradient(135deg, #2ab83e, #00e5d1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.05em",
          }}
        >
          GET YOUR TICKET
        </h3>

        <p
          className="text-sm opacity-60 mb-6 italic"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Reach out to us directly to secure your spot at Afro Caribbean Nation
        </p>

        <div className="flex flex-col gap-3">
          
          <a  href="tel:0999031956"
            className="flex items-center justify-center gap-3 py-3.5 px-5 rounded-full border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "#2ab83e",
              background: "rgba(26,140,42,0.1)",
              fontFamily: "var(--font-accent)",
              color: "#2ab83e",
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
            }}
          >
            📞 0999031956
          </a>

          
          <a  href="mailto:info@afrocarribbeannation.com"
            className="flex items-center justify-center gap-3 py-3.5 px-5 rounded-full border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "#00e5d1",
              background: "rgba(0,229,209,0.08)",
              fontFamily: "var(--font-accent)",
              color: "#00e5d1",
              fontSize: "0.75rem",
              letterSpacing: "0.03em",
            }}
          >
            ✉️ info@afrocarribbeannation.com
          </a>
        </div>

        <p className="mt-5 text-xs opacity-30" style={{ fontFamily: "var(--font-accent)" }}>
          Click anywhere outside to close
        </p>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showModal && <TicketModal onClose={() => setShowModal(false)} />}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050a02]/95 backdrop-blur-md border-b border-[#1a8c2a]/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 animate-float">
              <Image
                src="/logo.png"
                alt="Afro Caribbean Nation"
                fill
                className="object-contain drop-shadow-[0_0_12px_rgba(26,140,42,0.8)]"
              />
            </div>
            <div className="hidden sm:block">
              <p
                className="text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-accent)", color: "var(--acn-cyan)" }}
              >
                Festival
              </p>
              <p
                className="text-xl leading-none"
                style={{ fontFamily: "var(--font-display)", color: "var(--acn-white)", letterSpacing: "0.05em" }}
              >
                Afro Caribbean Nation
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                
                <a  href={link.href}
                  className="text-sm tracking-widest uppercase transition-all duration-300 hover:text-[#00e5d1] relative group"
                  style={{ fontFamily: "var(--font-accent)", color: "var(--acn-white)", opacity: 0.85 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00e5d1] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-2.5 text-sm tracking-widest uppercase font-bold rounded-full border-2 border-[#f5e200] text-[#f5e200] hover:bg-[#f5e200] hover:text-[#050a02] transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Get Tickets
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#f0f0e8] p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#050a02]/98 backdrop-blur-md border-t border-[#1a8c2a]/30 px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              
               <a key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg tracking-widest uppercase text-[#f0f0e8] hover:text-[#00e5d1] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); setShowModal(true); }}
              className="mt-2 px-6 py-3 text-center text-sm tracking-widest uppercase font-bold rounded-full border-2 border-[#f5e200] text-[#f5e200] hover:bg-[#f5e200] hover:text-[#050a02] transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Get Tickets
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}