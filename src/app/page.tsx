import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Lineup from "@/components/Lineup";
import Tickets from "@/components/Tickets";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Vendor from "@/components/Vendors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050a02] text-[#f0f0e8] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Lineup />
      <Tickets />
      <Experience />
      <Gallery />
      <About />
      <Vendor/>
      <Footer />
    </main>
  );
}