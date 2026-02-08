"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Zap, Activity, Cpu } from "lucide-react";

// Componente para faíscas de energia (focadas apenas na periferia/filamentos)
const EnergySpark = ({ delay }: { delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0, 0.7, 0],
                scale: [0.3, 0.7, 0.3],
                // Spawna mais longe do centro para focar nos fios
                x: [Math.sign(Math.random() - 0.5) * (140 + Math.random() * 60), Math.sign(Math.random() - 0.5) * (220 + Math.random() * 100)],
                y: [Math.sign(Math.random() - 0.5) * (140 + Math.random() * 60), Math.sign(Math.random() - 0.5) * (220 + Math.random() * 100)],
            }}
            transition={{
                duration: 5 + Math.random() * 4,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-accent-cyan rounded-full shadow-[0_0_15px_#06b6d4] z-40 pointer-events-none"
        />
    );
};

export default function PixelIA() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [sparks, setSparks] = useState<number[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        setSparks(Array.from({ length: 16 }, (_, i) => i));
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Paralaxe suave
    const rotateX = useTransform(mouseY, [0, 1200], [6, -6]);
    const rotateY = useTransform(mouseX, [0, 2000], [-8, 8]);
    const scale = useTransform(mouseX, [0, 2000], [1, 1.03]);

    return (
        <section className="py-24 relative overflow-hidden bg-slate-950 min-h-[1000px] flex items-center">

            {/* FILTRO DE ONDULAÇÃO (Sutil para filamentos) */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="filament_flux">
                    <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="1" result="noise">
                        <animate attributeName="baseFrequency" values="0.012;0.018;0.012" dur="20s" repeatCount="indefinite" />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
                </filter>
            </svg>

            {/* Atmosfera de Fundo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-accent-cyan/10 rounded-full blur-[170px] opacity-20" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

                    {/* VISUAL: DUAL-LAYER NEURAL CORE */}
                    <div className="flex-1 relative flex items-center justify-center">
                        <motion.div
                            style={{ rotateX, rotateY, scale, perspective: 2000 }}
                            className="relative w-[550px] h-[550px] flex items-center justify-center"
                        >
                            {/* Partículas de Fluxo */}
                            {sparks.map((s) => (
                                <EnergySpark key={s} delay={s * 0.5} />
                            ))}

                            {/* Glow e Anéis Orbitais */}
                            <div className="absolute inset-x-0 inset-y-0 bg-accent-cyan/5 rounded-full blur-[120px] opacity-25 animate-pulse" />
                            <div className="absolute inset-0 rounded-full border border-white/5 bg-slate-950/20 backdrop-blur-[2px]" />
                            <motion.div
                                animate={{ rotate: 360, opacity: [0.1, 0.2, 0.1] }}
                                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[460px] h-[460px] border border-accent-cyan/20 rounded-full border-dashed"
                            />

                            {/* CAMADA 1: NÚCLEO ESTÁTICO (Centro sólido e nítido) */}
                            <motion.div
                                className="absolute z-20 w-[600px] h-[600px] flex items-center justify-center"
                                style={{
                                    // Máscara que mostra APENAS o centro
                                    WebkitMaskImage: 'radial-gradient(circle at center, black 15%, transparent 45%)',
                                    maskImage: 'radial-gradient(circle at center, black 15%, transparent 45%)',
                                    opacity: 0.85
                                }}
                            >
                                <img
                                    src="/neural-brain.png"
                                    alt="Static Core"
                                    className="w-full h-full object-contain brightness-110 contrast-125 mix-blend-screen"
                                />
                            </motion.div>

                            {/* CAMADA 2: FILAMENTOS DINÂMICOS (Ondulação externa) */}
                            <motion.div
                                animate={{ opacity: [0.5, 0.7, 0.5] }}
                                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute z-10 w-[600px] h-[600px] flex items-center justify-center"
                                style={{
                                    // Máscara que "limpa" o centro e foca nos fios
                                    // E suaviza EXTREMAMENTE a transição para o fundo
                                    WebkitMaskImage: 'radial-gradient(circle at center, transparent 15%, black 40%, transparent 62%)',
                                    maskImage: 'radial-gradient(circle at center, transparent 15%, black 40%, transparent 62%)',
                                    filter: 'url(#filament_flux)'
                                }}
                            >
                                <img
                                    src="/neural-brain.png"
                                    alt="Animated Filaments"
                                    className="w-full h-full object-contain brightness-125 contrast-125 mix-blend-screen"
                                    style={{ transform: 'scale(1.15)' }}
                                />
                            </motion.div>

                            {/* Bloom Central para integração de luz */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none z-30 mix-blend-plus-lighter" />
                        </motion.div>
                    </div>

                    {/* Content Section: ASPIRATIONAL NARRATIVE */}
                    <div className="flex-1 space-y-10 lg:max-w-xl text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-[10px] font-black uppercase tracking-[0.3em]"
                        >
                            <Cpu className="w-4 h-4" />
                            GUARDIÃO DO PROTOCOLO NCP
                        </motion.div>

                        <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-white">
                            O NÚCLEO DA <br />
                            <span className="text-gradient underline decoration-vibrant-green/20 decoration-4 underline-offset-8">ESTRATÉGIA.</span>
                        </h2>

                        <p className="text-slate-400 text-xl leading-relaxed font-light">
                            O Pixel não apenas processa dados; ele governa o **Neural Core Protocol**. Uma arquitetura soberana que elimina a incerteza tecnológica para entregar previsibilidade absoluta em operações de alta escala.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            {[
                                { label: "Eficiência do NCP", val: "100%", icon: Zap },
                                { label: "Latência de Resposta", val: "< 1ms", icon: Activity }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-4 hover:border-accent-cyan/20 transition-all group cursor-default">
                                    <stat.icon className="w-8 h-8 text-accent-cyan group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">{stat.label}</p>
                                        <p className="text-white text-2xl font-black tracking-tight">{stat.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <motion.a
                                href={`https://wa.me/5547933805593?text=${encodeURIComponent("Olá! Acabo de descobrir o Neural Core Protocol no site da AgencyHub. Gostaria de entender mais sobre como o Pixel governa a estratégia tecnológica.")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block px-12 py-5 bg-vibrant-green text-slate-950 font-black rounded-2xl text-lg uppercase tracking-[0.15em] hover:shadow-[0_0_60px_rgba(190,242,100,0.6)] transition-all group relative overflow-hidden"
                            >
                                <span className="relative z-10 text-slate-950">SOLICITAR DIAGNÓSTICO</span>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
