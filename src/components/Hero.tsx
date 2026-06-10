"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Small delay for entrance animation
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
    >
      {/* === FULL-SCREEN VIDEO === */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.55) saturate(1.4)" }}
      >
        <source src="/festival.mp4" type="video/mp4" />
        <source src="/festival.mp4" type="video/quicktime" />
      </video>

      {/* Crowd overlay — dense particle simulation using CSS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient crowd silhouette at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{
            background: `
              radial-gradient(ellipse 120% 60% at 50% 110%, rgba(26,140,42,0.25) 0%, transparent 70%),
              linear-gradient(to top, rgba(5,10,2,0.7) 0%, transparent 100%)
            `,
          }}
        />
        {/* Crowd silhouette SVG strip */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,180 L0,140 Q20,120 40,130 Q60,140 80,120 Q100,100 120,115 Q140,130 160,110 Q180,90 200,105 Q220,120 240,100 Q260,80 280,95 Q300,110 320,90 Q340,70 360,85 Q380,100 400,80 Q420,60 440,75 Q460,90 480,70 Q500,50 520,65 Q540,80 560,60 Q580,40 600,55 Q620,70 640,50 Q660,30 680,45 Q700,60 720,40 Q740,20 760,35 Q780,50 800,35 Q820,20 840,38 Q860,55 880,40 Q900,25 920,42 Q940,58 960,45 Q980,32 1000,50 Q1020,68 1040,55 Q1060,42 1080,60 Q1100,78 1120,65 Q1140,52 1160,70 Q1180,88 1200,75 Q1220,62 1240,80 Q1260,98 1280,85 Q1300,72 1320,90 Q1340,108 1360,95 Q1380,82 1400,100 Q1420,118 1440,110 L1440,180 Z"
            fill="rgba(5,10,2,0.85)"
          />
          {/* Arms raised silhouettes */}
          {Array.from({ length: 28 }).map((_, i) => {
            const x = (i / 28) * 1440 + 20;
            const h = 70 + Math.sin(i * 2.7) * 30;
            return (
              <g key={i} transform={`translate(${x}, ${180 - h})`}>
                {/* Body */}
                <rect x="-5" y="20" width="10" height="30" rx="5" fill="rgba(5,10,2,0.9)" />
                {/* Head */}
                <circle cx="0" cy="14" r="9" fill="rgba(5,10,2,0.9)" />
                {/* Left arm raised */}
                <line x1="-5" y1="28" x2={-18 + Math.sin(i) * 5} y2={5 + Math.cos(i * 1.3) * 8} stroke="rgba(5,10,2,0.9)" strokeWidth="5" strokeLinecap="round" />
                {/* Right arm raised */}
                <line x1="5" y1="28" x2={18 + Math.cos(i) * 5} y2={5 + Math.sin(i * 1.7) * 8} stroke="rgba(5,10,2,0.9)" strokeWidth="5" strokeLinecap="round" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050a02]/60 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050a02] to-transparent" />
        {/* Side vignette */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050a02]/40 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050a02]/40 to-transparent" />
        {/* Green atmospheric glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] rounded-full blur-[80px] opacity-30"
          style={{ background: "radial-gradient(circle, #1a8c2a 0%, transparent 70%)" }}
        />
        {/* Cyan accent glow */}
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-20"
          style={{ background: "#00e5d1" }}
        />
      </div>

      {/* Mute Toggle */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-20 w-11 h-11 rounded-full border border-[#f0f0e8]/30 flex items-center justify-center text-[#f0f0e8]/70 hover:text-[#00e5d1] hover:border-[#00e5d1] transition-all duration-300 backdrop-blur-sm bg-black/20"
        aria-label="Toggle mute"
      >
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      {/* === HERO CONTENT === */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-4"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      >
        {/* Tag line */}
        <p
          className="mb-6 text-xs tracking-[0.5em] uppercase"
          style={{
            fontFamily: "var(--font-accent)",
            color: "var(--acn-cyan)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
          }}
        >
          ★ Kiev • Kingston • Lagos • London ★
        </p>

        {/* Logo */}
        <div
          className="relative w-40 h-40 md:w-56 md:h-56 mb-6 animate-float"
          style={{
            filter: "drop-shadow(0 0 30px rgba(26,140,42,0.8)) drop-shadow(0 0 60px rgba(0,229,209,0.4))",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease 0.5s",
          }}
        >
          <Image src="/logo.png" alt="Afro Caribbean Nation" fill className="object-contain" />
        </div>

        {/* Main Title */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1s ease 0.7s, transform 1s ease 0.7s",
          }}
        >
          <h1
            className="text-6xl sm:text-8xl md:text-[9rem] lg:text-[11rem] leading-none"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "0.04em",
              background: "linear-gradient(135deg, #f0f0e8 0%, #00e5d1 40%, #2ab83e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
            }}
          >
            AFRO
          </h1>
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none -mt-3"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "0.12em",
              background: "linear-gradient(135deg, #00e5d1 0%, #f5e200 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CARIBBEAN NATION
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="mt-4 text-base md:text-lg max-w-xl"
          style={{
            fontFamily: "var(--font-body)",
            color: "rgba(240,240,232,0.8)",
            fontStyle: "italic",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease 1s",
          }}
        >
          One Continent. One Rhythm. One Nation.
        </p>

        {/* Date */}
        <div
          className="mt-6 flex items-center gap-4"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease 1.1s",
          }}
        >
          <span className="h-px w-12 bg-[#00e5d1]/50" />
          <p
            className="text-sm tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-accent)", color: "var(--acn-yellow)" }}
          >
            June 27,July 25, 2026, August 29
          </p>
          <span className="h-px w-12 bg-[#00e5d1]/50" />
        </div>

        {/* CTA Buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease 1.3s, transform 1s ease 1.3s",
          }}
        >
          <a
            href="#tickets"
            className="px-10 py-4 text-sm tracking-[0.25em] uppercase font-bold rounded-full transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: "var(--font-accent)",
              background: "linear-gradient(135deg, #1a8c2a, #00e5d1)",
              color: "#050a02",
              boxShadow: "0 0 30px rgba(26,140,42,0.5), 0 0 60px rgba(0,229,209,0.2)",
            }}
          >
            Get Your Tickets
          </a>
          <a
            href="#lineup"
            className="px-10 py-4 text-sm tracking-[0.25em] uppercase font-bold rounded-full border-2 transition-all duration-300 hover:bg-white/5"
            style={{
              fontFamily: "var(--font-accent)",
              borderColor: "rgba(240,240,232,0.4)",
              color: "rgba(240,240,232,0.85)",
            }}
          >
            View Line-Up
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-60">
        <ChevronDown size={28} color="#00e5d1" />
      </div>
    </section>
  );
}
