"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const vendors = [
  {
    name: "The Asun Doctor",
    logo: "/vendor-asun.jpg",
    category: "Grills & BBQ",
    description: "The hottest asun in the nation. Perfectly spiced, flame-grilled goat meat that will set your taste buds on fire.",
    specialty: "Asun · Peppered Goat · Grilled Meat",
    color: "#e63012",
    glow: "rgba(230,48,18,0.4)",
  },
  {
    name: "Piquant Foods",
    logo: "/vendor-piquant.jpg",
    category: "Continental & Pastries",
    description: "Love in each bite. Piquant Foods brings artisanal pastries, continental dishes and handcrafted delights to the festival.",
    specialty: "Pastries · Continental · Artisan Bread",
    color: "#4a4a4a",
    glow: "rgba(74,74,74,0.4)",
  },
  {
    name: "Lolidee's Cuisine",
    logo: "/vendor-lolidee.jpg",
    category: "Nigerian Cuisine",
    description: "Fresh, fast and tasty since 2018. Lolidee's brings authentic Nigerian flavours cooked with love to every plate.",
    specialty: "Nigerian · Fast Food · Local Delicacies",
    color: "#f5a800",
    glow: "rgba(245,168,0,0.4)",
  },
];

export default function Vendors() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="vendors" className="py-28 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-10"
          style={{ background: "radial-gradient(circle, #1a8c2a, #00e5d1)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.5em] uppercase mb-3"
            style={{ fontFamily: "var(--font-accent)", color: "var(--acn-cyan)" }}
          >
            ✦ Festival Food Village
          </p>
          <h2
            className="text-6xl md:text-8xl"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #f5e200, #2ab83e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              VENDORS
            </span>
          </h2>
          <p
            className="mt-4 text-base opacity-60 max-w-lg mx-auto italic"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Meet the talented food vendors bringing incredible flavours to Afro Caribbean Nation 2026.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="h-px w-16 bg-[#00e5d1]/30" />
            <span
              className="text-[#00e5d1] text-xs tracking-widest"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              {vendors.length} VENDORS
            </span>
            <span className="h-px w-16 bg-[#00e5d1]/30" />
          </div>
        </div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vendors.map((vendor, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-white/5 cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:border-white/20"
              style={{
                background: "linear-gradient(145deg, rgba(26,140,42,0.06), rgba(5,10,2,0.95))",
              }}
              onClick={() => setSelected(i)}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ boxShadow: `0 0 40px ${vendor.glow}` }}
              />

              {/* Logo area */}
              <div className="relative h-64 bg-white overflow-hidden">
                <Image
                  src={vendor.logo}
                  alt={vendor.name}
                  fill
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#050a02] to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-2"
                  style={{ fontFamily: "var(--font-accent)", color: vendor.color }}
                >
                  {vendor.category}
                </p>
                <h3
                  className="text-2xl mb-3"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
                >
                  {vendor.name}
                </h3>
                <p
                  className="text-sm opacity-60 leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {vendor.description}
                </p>
                <div
                  className="text-xs tracking-wider opacity-50 pt-4 border-t border-white/5"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  {vendor.specialty}
                </div>
              </div>

              {/* View badge */}
              <div
                className="absolute top-4 right-4 text-[0.6rem] tracking-widest uppercase px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  fontFamily: "var(--font-accent)",
                  background: `${vendor.color}22`,
                  color: vendor.color,
                  border: `1px solid ${vendor.color}55`,
                }}
              >
                View
              </div>
            </div>
          ))}
        </div>

        {/* Become a vendor CTA */}
        <div
          className="mt-20 rounded-2xl p-10 text-center border border-white/5"
          style={{
            background: "linear-gradient(145deg, rgba(26,140,42,0.08), rgba(5,10,2,0.95))",
          }}
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-3"
            style={{ fontFamily: "var(--font-accent)", color: "var(--acn-cyan)" }}
          >
            ✦ Join The Village
          </p>
          <h3
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
          >
            BECOME A VENDOR
          </h3>
          <p
            className="text-sm opacity-60 max-w-md mx-auto mb-8 italic"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Want to showcase your food at Afro Caribbean Nation 2026? We'd love to have you.
          </p>
          
            <a href="mailto:info@afrocarribbeannation.com"
            className="inline-block px-10 py-4 text-sm tracking-[0.25em] uppercase font-bold rounded-full transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: "var(--font-accent)",
              background: "linear-gradient(135deg, #1a8c2a, #00e5d1)",
              color: "#050a02",
              boxShadow: "0 0 30px rgba(26,140,42,0.4)",
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-lg w-full rounded-2xl overflow-hidden border"
            style={{
              borderColor: vendors[selected].color,
              boxShadow: `0 0 60px ${vendors[selected].glow}`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all bg-black/40"
            >
              <X size={16} />
            </button>

            <div className="relative h-72 bg-white">
              <Image
                src={vendors[selected].logo}
                alt={vendors[selected].name}
                fill
                className="object-contain p-8"
                sizes="90vw"
              />
            </div>

            <div className="p-8" style={{ background: "rgba(5,10,2,0.98)" }}>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-2"
                style={{ fontFamily: "var(--font-accent)", color: vendors[selected].color }}
              >
                {vendors[selected].category}
              </p>
              <h3 className="text-3xl mb-3" style={{ fontFamily: "var(--font-display)" }}>
                {vendors[selected].name}
              </h3>
              <p
                className="text-sm opacity-70 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {vendors[selected].description}
              </p>
              <p
                className="mt-4 text-xs opacity-40 tracking-wider"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                {vendors[selected].specialty}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}