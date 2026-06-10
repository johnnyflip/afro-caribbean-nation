"use client";

const items = [
  "★ AFROBEATS",
  "✦ SOCA",
  "★ DANCEHALL",
  "✦ HIGHLIFE",
  "★ AMAPIANO",
  "✦ REGGAE",
  "★ JUJU",
  "✦ ZOUK",
  "★ BONGO FLAVA",
  "✦ KOMPA",
  "★ AFRO-FUSION",
  "✦ CALYPSO",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-4 border-y"
      style={{
        background: "linear-gradient(90deg, #1a8c2a, #0d4f18)",
        borderColor: "#2ab83e",
      }}
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #1a8c2a, transparent)" }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #1a8c2a, transparent)" }} />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-6 text-sm tracking-[0.35em] uppercase"
            style={{
              fontFamily: "var(--font-accent)",
              color: i % 3 === 0 ? "#f5e200" : i % 3 === 1 ? "#f0f0e8" : "#00e5d1",
              fontSize: "0.7rem",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
