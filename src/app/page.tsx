import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PixelIA from "@/components/PixelIA";
import CTA from "@/components/CTA";
import NeuralBackground from "@/components/NeuralBackground";
import GravityWarp from "@/components/GravityWarp";
import Navbar from "@/components/Navbar";
import ProblemSolution from "@/components/ProblemSolution";
import Mechanism from "@/components/Mechanism";
import Authority from "@/components/Authority";
import Qualification from "@/components/Qualification";

export default function Home() {
  return (
    <main className="mesh-bg min-h-screen selection:bg-accent-purple/30 selection:text-white relative">
      <Navbar />
      <NeuralBackground />
      <GravityWarp />

      <Hero />
      <ProblemSolution />
      <Mechanism />
      <Authority />
      <Qualification />
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
      <footer className="py-20 text-center border-t border-white/5 bg-slate-950/20">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-8 mb-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="text-[10px] font-black tracking-[0.4em] text-white border border-white/20 px-4 py-2 rounded">TRUSTED PARTNER</div>
            <div className="text-[10px] font-black tracking-[0.4em] text-white border border-white/20 px-4 py-2 rounded">ISO 9001 COMPLIANT ALGORITHM</div>
            <div className="text-[10px] font-black tracking-[0.4em] text-white border border-white/20 px-4 py-2 rounded">ELITE SQUAD</div>
          </div>
          <p className="text-slate-500 text-sm font-mono tracking-widest">
            © {new Date().getFullYear()} AGENCYHUAB • TODOS OS DIREITOS RESERVADOS
          </p>
          <p className="text-slate-700 text-[10px] mt-4 font-mono uppercase tracking-[0.5em]">
            Protocolo Neural Core v4.1.2 - Ativo
          </p>
        </div>
      </footer>
    </main>
  );
}
