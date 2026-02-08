import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PixelIA from "@/components/PixelIA";
import CTA from "@/components/CTA";
import NeuralBackground from "@/components/NeuralBackground";
import GravityWarp from "@/components/GravityWarp";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="mesh-bg min-h-screen selection:bg-accent-purple/30 selection:text-white relative">
      <Navbar />
      <NeuralBackground />
      <GravityWarp />

      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="pixel">
        <PixelIA />
      </div>
      <div id="cta">
        <CTA />
      </div>

      {/* Footer Simples */}
      <footer className="py-10 text-center border-t border-white/5 bg-slate-950/20">
        <p className="text-slate-500 text-sm font-mono tracking-widest">
          © {new Date().getFullYear()} AGENCYHUAB • TODOS OS DIREITOS RESERVADOS
        </p>
      </footer>
    </main>
  );
}
