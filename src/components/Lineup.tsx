"use client";

const days = [
  {
    day: "Day 01",
    date: "June 27",
    label: "Saturday",
    color: "#00e5d1",
    artists: [
      { name: "UnrulyDJChriz", genre: "Host DJ", role: "Headline" },
      { name: "Lagrace", genre: "Afropop", role: "Headline" },
      { name: "GreenJora", genre: "Afrodisiak", role: "Headline" },
      { name: "Jason", genre: "Afrosoul", role: "Headline" },
      { name: "Mila Sabadoh", genre: "Hype Man", role: "Headline" },
      { name: "Dj Baha", genre: "Guest DJ", role: "Headline" },
    ],
  },
  {
    day: "Day 02",
    date: "July 25",
    label: "Saturday",
    color: "#f5e200",
    artists: [
       { name: "UnrulyDJChriz", genre: "Host DJ", role: "Headline" },
      { name: "Lagrace", genre: "Afropop", role: "Headline" },
      { name: "Bercoarter", genre: "Afropop", role: "Main Stage" },
      { name: "Sandepac", genre: "Dancehall", role: "Main Stage" },
      { name: "Dj Biggy Blaze", genre: "Guest DJ", role: "Main Stage" },
      { name: "Raul DJ", genre: "Guest DJ", role: "Main Stage" },
      { name: "Lordie", genre: "Guest DJ", role: "Main Stage" },
    ],
  },
  {
    day: "Day 03",
    date: "Aug 29",
    label: "Saturday",
    color: "#2ab83e",
    artists: [
       { name: "UnrulyDJChriz", genre: "Host DJ", role: "Headline" },
      { name: "Lagrace", genre: "Afropop", role: "Headline" },
      { name: "Saga", genre: "Afropop / R&B", role: "Main Stage" },
      { name: "Unsolved", genre: "Afropop", role: "Main Stage" },
      { name: "Booyakka", genre: "Afropop", role: "Main Stage" },
      { name: "Steve Ukraine", genre: "Afro-fusion", role: "Main Stage" },
       { name: "Shervna DJ", genre: "Guest DJ", role: "Main Stage" },
    ],
  },
];

const roleStyles: Record<string, string> = {
  Headline: "border-[#f5e200] text-[#f5e200]",
  "Main Stage": "border-[#00e5d1] text-[#00e5d1]",
  "Legacy Stage": "border-[#2ab83e] text-[#2ab83e]",
  "Rising Star": "border-[#f0f0e8]/40 text-[#f0f0e8]/60",
};

export default function Lineup() {
  return (
    <section id="lineup" className="py-28 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10"
          style={{ background: "#1a8c2a" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10"
          style={{ background: "#00e5d1" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.5em] uppercase mb-3"
            style={{ fontFamily: "var(--font-accent)", color: "var(--acn-cyan)" }}
          >
            ✦ 2026 Edition
          </p>
          <h2
            className="text-6xl md:text-8xl"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
          >
            <span style={{ color: "var(--acn-white)" }}>THE </span>
            <span
              style={{
                background: "linear-gradient(135deg, #2ab83e, #00e5d1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              LINE-UP
            </span>
          </h2>
          <p className="mt-4 text-base opacity-60 max-w-lg mx-auto" style={{ fontFamily: "var(--font-body)", fontStyle: "italic" }}>
            Three nights. Legends and rising stars. The greatest gathering of Afro-Caribbean talent on earth.
          </p>
        </div>

        {/* Day tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {days.map((day) => (
            <div
              key={day.day}
              className="relative rounded-2xl overflow-hidden border border-white/5 p-6 flex flex-col gap-5"
              style={{
                background: "linear-gradient(145deg, rgba(26,140,42,0.08) 0%, rgba(5,10,2,0.9) 100%)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Day header */}
              <div className="flex items-end justify-between mb-2">
                <div>
                  <span
                    className="text-4xl"
                    style={{ fontFamily: "var(--font-display)", color: day.color, letterSpacing: "0.03em" }}
                  >
                    {day.day}
                  </span>
                  <p className="text-xs tracking-widest uppercase opacity-50 mt-1"
                    style={{ fontFamily: "var(--font-accent)" }}>
                    {day.label}
                  </p>
                </div>
                <span
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: day.color, opacity: 0.4 }}
                >
                  {day.date}
                </span>
              </div>

              <div className="h-px opacity-20" style={{ background: day.color }} />

              {/* Artists */}
              <div className="flex flex-col gap-3">
                {day.artists.map((artist) => (
                  <div
                    key={artist.name}
                    className="flex items-center justify-between group cursor-default py-2 border-b border-white/5 last:border-0"
                  >
                    <div>
                      <p
                        className="text-lg transition-colors duration-200 group-hover:text-[#00e5d1]"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "var(--acn-white)",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {artist.name}
                      </p>
                      <p
                        className="text-xs opacity-50"
                        style={{ fontFamily: "var(--font-accent)" }}
                      >
                        {artist.genre}
                      </p>
                    </div>
                    <span
                      className={`text-[0.6rem] tracking-widest uppercase px-2 py-1 rounded-full border ${roleStyles[artist.role]}`}
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      {artist.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full lineup CTA */}
        <div className="mt-12 text-center">
          <a
            href="#tickets"
            className="inline-block px-8 py-3 text-xs tracking-[0.3em] uppercase rounded-full border transition-all duration-300 hover:bg-white/5"
            style={{
              fontFamily: "var(--font-accent)",
              borderColor: "rgba(240,240,232,0.25)",
              color: "rgba(240,240,232,0.6)",
            }}
          >
            More artists to be announced →
          </a>
        </div>
      </div>
    </section>
  );
}
