"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 px-4 relative overflow-hidden">
      {/* Background treatment */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(26,140,42,0.04) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Visual side */}
        <div className="relative flex items-center justify-center order-2 lg:order-1">
          {/* Decorative rings */}
          <div className="absolute w-80 h-80 rounded-full border border-[#1a8c2a]/20 animate-pulse-slow" />
          <div className="absolute w-64 h-64 rounded-full border border-[#00e5d1]/15 animate-pulse-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute w-48 h-48 rounded-full border border-[#f5e200]/10 animate-pulse-slow" style={{ animationDelay: "2s" }} />

          {/* Logo center */}
          <div
            className="relative w-48 h-48 animate-float"
            style={{ filter: "drop-shadow(0 0 40px rgba(26,140,42,0.7)) drop-shadow(0 0 80px rgba(0,229,209,0.3))" }}
          >
            <Image src="/logo.png" alt="Afro Caribbean Nation" fill className="object-contain" />
          </div>
        </div>

        {/* Text side */}
        <div className="order-1 lg:order-2">
          <p className="text-xs tracking-[0.5em] uppercase mb-4"
            style={{ fontFamily: "var(--font-accent)", color: "var(--acn-cyan)" }}>
            ✦ Our Story
          </p>
          <h2
            className="text-5xl md:text-7xl mb-8 leading-none"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
          >
            <span style={{ color: "var(--acn-white)" }}>ONE</span>
            <br />
            <span style={{
              background: "linear-gradient(135deg, #2ab83e, #00e5d1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              NATION
            </span>
          </h2>

          <div className="space-y-5 text-base leading-relaxed opacity-75" style={{ fontFamily: "var(--font-body)" }}>
            <p>
              Afro Caribbean Nation began as a dream — to create a space where the African diaspora and Caribbean communities could come together not just to listen, but to truly celebrate who we are.
            </p>
            <p>
              Born in the heart of kyiv and with roots stretching from Lagos to Kingston, London to Toronto, ACN is a ralying point for every soul that has ever moved to the rhythm of the drum.
            </p>
            <p>
              We are the flower that blooms across continents. Green for our land. Cyan for our waters. Yellow for our sun. We are Afro Caribbean Nation.
            </p>
          </div>

          {/* Values */}
          <div className="mt-10 grid grid-cols-3 gap-5">
            {[
              { label: "Culture", color: "#2ab83e" },
              { label: "Community", color: "#00e5d1" },
              { label: "Heritage", color: "#f5e200" },
            ].map((v) => (
              <div key={v.label} className="text-center">
                <div
                  className="w-full h-0.5 mb-3 rounded-full"
                  style={{ background: v.color }}
                />
                <p className="text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "var(--font-accent)", color: v.color }}>
                  {v.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
