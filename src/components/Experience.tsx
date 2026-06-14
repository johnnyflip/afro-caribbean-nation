"use client";

const features = [
  {
    icon: "🎵",
    title: "5 in 1 Stage",
    desc: "Main Stage, Heritage Stage, Diaspora Stage, Roots Stage, and the intimate Acoustic Garden — every genre, every generation.",
    color: "#2ab83e",
  },
  {
    icon: "🍛",
    title: "Food Village",
    desc: "80+ vendors from across Africa and the Caribbean. Jerk chicken, jollof, doubles, suya, roti, and so much more.",
    color: "#00e5d1",
  },
  {
    icon: "🎨",
    title: "Art & Culture",
    desc: "Live painting, sculpture, fashion showcases, photography exhibitions celebrating Afro-Caribbean creativity.",
    color: "#f5e200",
  },
  {
    icon: "💃",
    title: "Dance Village",
    desc: "Master classes in Afrobeats, soca, dancehall, kuduro, and more. All levels welcome, no experience required.",
    color: "#d4a017",
  },
  {
    icon: "🌍",
    title: "Heritage Market",
    desc: "Over 100 artisan stalls showcasing handcrafted goods, textiles, jewelry, and cultural artifacts.",
    color: "#2ab83e",
  },
  {
    icon: "🎙️",
    title: "Talks & Panels",
    desc: "Conversations on identity, diaspora, creative industry, and the future of Afro-Caribbean culture globally.",
    color: "#00e5d1",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-[#1a8c2a]/20 pointer-events-none" />
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-[#1a8c2a]/10 pointer-events-none" />
      <div className="absolute -right-20 top-1/3 w-96 h-96 rounded-full border border-[#00e5d1]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs tracking-[0.5em] uppercase mb-3"
              style={{ fontFamily: "var(--font-accent)", color: "var(--acn-cyan)" }}>
              ✦ More Than A Festival
            </p>
            <h2 className="text-6xl md:text-8xl" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
              <span style={{ color: "var(--acn-white)" }}>THE </span>
              <br />
              <span style={{
                background: "linear-gradient(135deg, #2ab83e, #f5e200)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                EXPERIENCE
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-base opacity-60 lg:text-right" style={{ fontFamily: "var(--font-body)", fontStyle: "italic" }}>
            Three days of music, culture, food, art, and community. ACN is a world unto itself.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className="group relative rounded-xl p-7 border border-white/5 overflow-hidden cursor-default transition-all duration-500 hover:border-white/15 hover:-translate-y-1"
              style={{
                background: "rgba(5,10,2,0.7)",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top left, ${feat.color}15 0%, transparent 60%)`,
                }}
              />

              <span className="text-4xl mb-5 block">{feat.icon}</span>
              <h3
                className="text-2xl mb-3 transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--acn-white)",
                  letterSpacing: "0.03em",
                }}
              >
                {feat.title}
              </h3>
              <p
                className="text-sm leading-relaxed opacity-60"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {feat.desc}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(90deg, ${feat.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "50+", label: "Artists" },
            { num: "1", label: "Stage" },
            { num: "3", label: "Days" },
            { num: "20K+", label: "Expected Attendees" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-5xl md:text-6xl"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "linear-gradient(135deg, #2ab83e, #00e5d1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.num}
              </p>
              <p className="mt-1 text-xs tracking-widest uppercase opacity-50" style={{ fontFamily: "var(--font-accent)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
