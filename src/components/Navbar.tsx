"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-fit"
        >
            <div className="glass px-8 py-3 rounded-2xl border-white/10 flex items-center gap-8 shadow-2xl backdrop-blur-3xl">
                <a href="#" className="text-white font-black tracking-tighter text-xl group">
                    HUAB<span className="text-vibrant-green group-hover:animate-pulse">.</span>
                </a>

                <div className="hidden md:flex items-center gap-6">
                    {[
                        { name: "PILARES", href: "#services" },
                        { name: "O PROTOCOLO", href: "#mechanism" },
                        { name: "PIXEL IA", href: "#pixel" }
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <a
                    href={`https://wa.me/5547933805593?text=${encodeURIComponent("Olá! Gostaria de solicitar o Protocolo de Acesso ao Mapa de Evolução Tecnológica da AgencyHub.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-slate-950 text-[10px] font-black rounded-lg hover:bg-vibrant-green hover:shadow-[0_0_20px_rgba(34,255,160,0.4)] transition-all duration-300 active:scale-95"
                >
                    PROTOCOLAR ACESSO
                </a>
            </div>
        </motion.nav>
    );
}
