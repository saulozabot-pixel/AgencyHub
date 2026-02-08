"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
            {/* Dynamic Auras */}
            <div className="aura top-[-10%] left-[-10%] bg-accent-purple/20" />
            <div className="aura bottom-[-20%] right-[-10%] bg-accent-cyan/20 delay-700" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-accent-purple/30"
                >
                    <Sparkles className="w-4 h-4 text-accent-purple" />
                    <span className="text-sm font-medium tracking-wider text-accent-purple">
                        ENGENHARIA DE ALTA DISPONIBILIDADE
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none"
                >
                    <span className="text-white">ARQUITETURAS QUE SUSTENTAM A</span>
                    <br />
                    <span className="text-gradient">ESCALA DE LÍDERES</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed"
                >
                    Na <span className="text-white font-bold">AgencyHub</span>, não entregamos apenas código.
                    Projetamos ecossistemas robustos para empresas que já escalam e precisam de previsibilidade, segurança e inteligência adaptativa.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <a
                        href={`https://wa.me/5547933805593?text=${encodeURIComponent("Olá! Estou no site da AgencyHub e sinto que é hora de iniciar a evolução do meu projeto. Podemos conversar?")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-4 bg-white text-slate-950 font-black rounded-xl overflow-hidden active:scale-95 transition-all text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            SOLICITAR MAPA DE EVOLUÇÃO
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-vibrant-green translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-custom" />
                    </a>

                    <a href="#services" className="px-8 py-4 glass text-white font-bold rounded-xl border-white/10 hover:bg-white/5 transition-all text-lg tracking-tight">
                        O PROTOCOLO NCP
                    </a>
                </motion.div>
            </div>

            {/* Floating Elements Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: Math.random() * 0.5,
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{
                            y: ["-10%", "10%"],
                            opacity: [0.1, 0.4, 0.1]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                        className="absolute w-1 h-1 bg-accent-cyan rounded-full"
                    />
                ))}
            </div>
        </section>
    );
}
