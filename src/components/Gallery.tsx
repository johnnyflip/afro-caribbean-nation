"use client";
import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/gallery-1.jpg", label: "Squad Goals", span: "col-span-2 row-span-2" },
  { src: "/gallery-2.jpg", label: "The Crew", span: "col-span-1 row-span-1" },
  { src: "/gallery-3.jpg", label: "Vibes", span: "col-span-1 row-span-1" },
  { src: "/gallery-4.jpg", label: "On The Mic", span: "col-span-1 row-span-2" },
  { src: "/gallery-5.jpg", label: "Good Times", span: "col-span-1 row-span-1" },
  { src: "/gallery-6.jpg", label: "Friends", span: "col-span-1 row-span-1" },
  { src: "/gallery-7.jpg", label: "Guess who pulled up", span: "col-span-1 row-span-1" },
  { src: "/gallery-8.jpg", label: "Sunset Moves", span: "col-span-1 row-span-1" },
  { src: "/gallery-9.jpg", label: "Lakeside", span: "col-span-1 row-span-1" },
  { src: "/gallery-10.jpg", label: "Dance Floor", span: "col-span-1 row-span-1" },
  { src: "/gallery-11.jpg", label: "Happy moment", span: "col-span-1 row-span-1" },
    { src: "/gallery-12.jpg", label: "Game Time", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + photos.length) % photos.length : 0));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % photos.length : 0));

  return (
    <section id="gallery" className="py-28 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.5em] uppercase mb-3"
            style={{ fontFamily: "var(--font-accent)", color: "var(--acn-cyan)" }}>
            ✦ Moments From The Nation
          </p>
          <h2 className="text-6xl md:text-8xl" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
            <span style={{
              background: "linear-gradient(135deg, #f0f0e8, #00e5d1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              GALLERY
            </span>
          </h2>
          <p className="mt-3 text-sm opacity-50 italic" style={{ fontFamily: "var(--font-body)" }}>
            Click any photo to view full size
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-4 auto-rows-[180px] gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${photo.span} relative rounded-xl overflow-hidden cursor-pointer group border border-white/5 hover:border-[#00e5d1]/40 transition-all duration-300`}
              onClick={() => setLightbox(i)}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Label slides up */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-accent)", color: "var(--acn-cyan)" }}>
                  {photo.label}
                </p>
              </div>
              {/* Cyan inner glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: "inset 0 0 30px rgba(0,229,209,0.15)" }} />
              {/* Corner dot */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#00e5d1] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all z-10"
            onClick={() => setLightbox(null)}
          >
            <X size={18} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#00e5d1] hover:border-[#00e5d1] transition-all z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl mx-16 aspect-[4/3] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].label}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#00e5d1] hover:border-[#00e5d1] transition-all z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Dot counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  background: i === lightbox ? "#00e5d1" : "rgba(255,255,255,0.3)",
                  transform: i === lightbox ? "scale(1.5)" : "scale(1)",
                }}
              />
            ))}
          </div>

          {/* Photo label */}
          <p className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase opacity-50"
            style={{ fontFamily: "var(--font-accent)" }}>
            {photos[lightbox].label}
          </p>
        </div>
      )}
    </section>
  );
}