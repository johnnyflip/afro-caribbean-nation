"use client";
import { useState } from "react";
import { X, Check } from "lucide-react";

const tiers = [
  {
    name: "Early Birds",
    price: "650 UAH",
    usd: "~$28",
    duration: "1 Day",
    color: "#2ab83e",
    glow: "rgba(42,184,62,0.4)",
    perks: [
      "1-day general access",
      "All main stage shows",
      "Festival grounds access",
      "Food & drink vendors",
    ],
    cta: "Buy General",
    featured: false,
  },

  {
    name: "At the Gate",
    price: "800 UAH",
    usd: "~$75",
    duration: "1 Day",
    color: "#00e5d1",
    glow: "rgba(0,229,209,0.4)",
    perks: [
      "1-day general access",
      "All main stage shows",
      "Festival grounds access",
      "Food & drink vendors",
    ],
    cta: "Buy at the gate",
    featured: true,
  },
  {
    name: "Platinum",
    price: "1,950,000 UAT",
    usd: "~$220",
    duration: "3 Day",
    color: "#d4a017",
    glow: "rgba(212,160,23,0.4)",
    perks: [
      "3-day Platinum access",
      "Backstage lounge access",
      "Guaranteed artist meet & greet",
      "Festival photography session",
      "Dedicated concierge",
    ],
    cta: "Buy Platinum",
    featured: false,
  },
];

export default function Tickets() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
          onClick={() => setShowModal(false)}
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
            <button
              onClick={() => setShowModal(false)}
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

            <p className="text-sm opacity-60 mb-6 italic" style={{ fontFamily: "var(--font-body)" }}>
              Reach out to us directly to secure your spot at Afro Caribbean Nation
            </p>

            <div className="flex flex-col gap-3">
              
               <a href="tel:0999031956"
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

              
               <a href="mailto:info@afrocarribbeannation.com"
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
      )}

      {/* TICKETS SECTION */}
      <section id="tickets" className="py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(26,140,42,0.5) 59px, rgba(26,140,42,0.5) 60px),
                repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(26,140,42,0.5) 59px, rgba(26,140,42,0.5) 60px)
              `,
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.5em] uppercase mb-3"
              style={{ fontFamily: "var(--font-accent)", color: "var(--acn-yellow)" }}>
              ✦ Limited Availability
            </p>
            <h2 className="text-6xl md:text-8xl" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
              <span style={{
                background: "linear-gradient(135deg, #f5e200, #d4a017)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                TICKETS
              </span>
            </h2>
            <p className="mt-4 text-sm opacity-60 max-w-md mx-auto" style={{ fontFamily: "var(--font-body)", fontStyle: "italic" }}>
              Secure your place at the most electric celebration of Afro-Caribbean culture.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-7 flex flex-col gap-6 border transition-all duration-300 hover:-translate-y-2 ${tier.featured ? "scale-105 md:scale-110" : ""}`}
                style={{
                  background: tier.featured
                    ? `linear-gradient(145deg, rgba(0,229,209,0.1), rgba(5,10,2,0.95))`
                    : `linear-gradient(145deg, rgba(26,140,42,0.06), rgba(5,10,2,0.95))`,
                  borderColor: tier.featured ? tier.color : "rgba(255,255,255,0.07)",
                  boxShadow: tier.featured ? `0 0 40px ${tier.glow}, 0 0 80px ${tier.glow.replace("0.4", "0.15")}` : "none",
                }}
              >
                {tier.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[0.65rem] tracking-[0.3em] uppercase rounded-full"
                    style={{
                      fontFamily: "var(--font-accent)",
                      background: "linear-gradient(135deg, #00e5d1, #1a8c2a)",
                      color: "#050a02",
                      fontWeight: "bold",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm tracking-[0.25em] uppercase opacity-60"
                      style={{ fontFamily: "var(--font-accent)" }}>
                      {tier.name}
                    </p>
                    <span
                      className="text-[0.6rem] tracking-widest uppercase px-2.5 py-1 rounded-full font-bold"
                      style={{
                        fontFamily: "var(--font-accent)",
                        background: `${tier.color}22`,
                        color: tier.color,
                        border: `1px solid ${tier.color}55`,
                      }}
                    >
                      {tier.duration}
                    </span>
                  </div>
                  <p className="text-4xl" style={{ fontFamily: "var(--font-display)", color: tier.color }}>
                    {tier.price}
                  </p>
                  <p className="text-xs opacity-40 mt-1" style={{ fontFamily: "var(--font-accent)" }}>
                    {tier.usd} USD · Per person · {tier.duration}
                  </p>
                </div>

                <div className="h-px opacity-10 bg-white" />

                <ul className="flex flex-col gap-2.5">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2.5 text-sm opacity-80" style={{ fontFamily: "var(--font-body)" }}>
                      <Check size={13} style={{ color: tier.color, flexShrink: 0 }} />
                      {perk}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setShowModal(true)}
                  className="mt-auto w-full text-center py-3.5 text-sm tracking-[0.25em] uppercase font-bold rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110 cursor-pointer"
                  style={{
                    fontFamily: "var(--font-accent)",
                    background: tier.featured ? `linear-gradient(135deg, ${tier.color}, #1a8c2a)` : "transparent",
                    border: tier.featured ? "none" : `2px solid ${tier.color}`,
                    color: tier.featured ? "#050a02" : tier.color,
                    boxShadow: tier.featured ? `0 0 20px ${tier.glow}` : "none",
                  }}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-xs opacity-30" style={{ fontFamily: "var(--font-accent)" }}>
            Group bookings (10+): contact tickets@afrocaribbeanation.com · All sales final · Age 16+
          </p>
        </div>
      </section>
    </>
  );
}