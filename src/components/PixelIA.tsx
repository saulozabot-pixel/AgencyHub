"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Cpu, Terminal, Activity, Zap } from "lucide-react";

// Componente para o fluxo de código lateral
const CodeStream = () => {
    const [lines, setLines] = useState<string[]>([]);
    const codeSnippets = [
        "Initializing neural_link...",
        "GET /api/v1/huab-core/logic",
        "process.env.PIXEL_MODE = 'NEURAL'",
        "compiling high_level_abstractions",
        "injecting_logic_v4.2.0",
        "optimizing_gpu_clusters...",
        "shading_neural_nodes",
        "synapse_connection_established",
        "await agencyHuab.evolution()",
        "const pixel = new NeuralAvatar()"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setLines(prev => {
                const newLines = [...prev, codeSnippets[Math.floor(Math.random() * codeSnippets.length)]];
                return newLines.slice(-8); // Mantém apenas as últimas 8 linhas
            });
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-mono text-[10px] text-accent-cyan/60 space-y-1">
            <AnimatePresence mode="popLayout">
                {lines.map((line, i) => (
                    <motion.p
                        key={line + i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.5 }}
                    >
                        {"> "}{line}
                    </motion.p>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default function PixelIA() {
    const [state, setState] = useState<"IDLE" | "THINKING">("IDLE");
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Movimentos suaves da face
    const rotateX = useTransform(mouseY, [0, 1200], [15, -15]);
    const rotateY = useTransform(mouseX, [0, 2000], [-20, 20]);

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Grid de Fundo Blueprint */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Visual: Neural Avatar Side */}
                    <div className="flex-1 relative min-h-[500px] flex items-center justify-center">

                        {/* Conexões Neurais Externas (Efeito de Movimento) */}
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    style={{
                                        x: useTransform(mouseX, [0, 2000], [-20 * (i + 1), 20 * (i + 1)]),
                                        y: useTransform(mouseY, [0, 1200], [-10 * (i + 1), 10 * (i + 1)]),
                                    }}
                                    className="absolute"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ duration: 3 + i, repeat: Infinity }}
                                >
                                    <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                                        <path
                                            d={`M 200 200 Q ${100 + i * 50} ${50 + i * 30} ${50} ${350}`}
                                            stroke="url(#neuralGradient)"
                                            strokeWidth="0.5"
                                            strokeDasharray="5 5"
                                        />
                                        <defs>
                                            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                                                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
                                                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </motion.div>
                            ))}
                        </div>

                        {/* O Avatar Neural */}
                        <motion.div
                            style={{ rotateX, rotateY }}
                            onMouseEnter={() => setState("THINKING")}
                            onMouseLeave={() => setState("IDLE")}
                            className="relative w-80 h-96 flex items-center justify-center cursor-pointer group"
                        >
                            {/* Silhueta da Face (SVG Masked/Circuit) */}
                            <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm rounded-full border border-accent-cyan/10 shadow-[0_0_50px_rgba(6,182,212,0.1)] overflow-hidden">
                                {/* Circuit Pattern Overlay */}
                                <div className="absolute inset-0 opacity-20"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L40 10 L40 40 M60 10 L90 10 L90 40 M10 90 L10 60 L40 60 M90 90 L60 90 L60 60' stroke='%2306b6d4' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
                                        backgroundSize: '40px 40px'
                                    }}
                                />

                                {/* Glow de Fundo Core */}
                                <motion.div
                                    animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.1, 1] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute inset-x-10 inset-y-20 bg-accent-cyan/10 blur-3xl rounded-full"
                                />
                            </div>

                            {/* Olhos Cibernéticos Brilhantes */}
                            <div className="z-20 flex gap-12 mb-10">
                                {[0, 1].map(i => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            boxShadow: state === "THINKING" ? "0 0 30px #06b6d4" : "0 0 15px #06b6d4",
                                            scale: state === "THINKING" ? 1.1 : 1
                                        }}
                                        className="w-16 h-16 rounded-full border border-accent-cyan/30 flex items-center justify-center bg-slate-900/80 overflow-hidden relative"
                                    >
                                        <motion.div
                                            style={{
                                                x: useTransform(mouseX, [0, 2000], [-10, 10]),
                                                y: useTransform(mouseY, [0, 1200], [-10, 10]),
                                            }}
                                            className="w-8 h-8 bg-accent-cyan rounded-full shadow-[0_0_20px_var(--accent-cyan)] flex items-center justify-center"
                                        >
                                            <div className="w-2 h-2 bg-white rounded-full opacity-60" />
                                        </motion.div>

                                        {/* Efeito de Reflexo no Olho */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Painel lateral de Code Stream (Flutuante ao lado do rosto) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="absolute -right-48 top-1/4 glass p-4 rounded-xl border-accent-cyan/20 w-56 hidden md:block"
                            >
                                <div className="flex items-center gap-2 mb-2 text-accent-cyan text-[10px] uppercase tracking-widest font-bold">
                                    <Terminal className="w-3 h-3" />
                                    <span>Neural Core Feed</span>
                                </div>
                                <CodeStream />
                                <div className="mt-4 pt-2 border-t border-accent-cyan/10 flex justify-between items-center text-[8px] text-slate-500 font-mono">
                                    <span>Latency: 0.4ms</span>
                                    <span>Status: Active</span>
                                </div>
                            </motion.div>

                            {/* Cérebro Neural (Partículas internas simuladas) */}
                            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-32 opacity-30 pointer-events-none">
                                {[...Array(12)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            opacity: [0.2, 1, 0.2],
                                            scale: [0.5, 1, 0.5]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                        className="absolute w-1 h-1 bg-accent-cyan rounded-full"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Base Glow */}
                        <motion.div
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute bottom-10 w-64 h-12 bg-accent-cyan/20 blur-2xl rounded-[50%]"
                        />
                    </div>

                    {/* Content Side: AgencyHub Evolution */}
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono uppercase tracking-widest">
                            <Zap className="w-3 h-3" />
                            AgencyHub Digital Evolution
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            PIXEL IA: <br />
                            <span className="text-gradient">A MENTE POR TRÁS DA LÓGICA.</span>
                        </h2>

                        <p className="text-slate-400 text-lg leading-relaxed">
                            Mais que um assistente, o Pixel é uma entidade de processamento neural projetada para
                            desvendar arquiteturas complexas e transformar dados brutos em decisões estratégicas de elite.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl border border-white/5 bg-slate-900/50 backdrop-blur-sm">
                                <Activity className="w-5 h-5 text-accent-cyan mb-2" />
                                <h4 className="text-white font-bold text-sm">Alta Performance</h4>
                                <p className="text-slate-500 text-xs mt-1">Otimização extrema em tempo real.</p>
                            </div>
                            <div className="p-4 rounded-xl border border-white/5 bg-slate-900/50 backdrop-blur-sm">
                                <Cpu className="w-5 h-5 text-accent-purple mb-2" />
                                <h4 className="text-white font-bold text-sm">Lógica Neural</h4>
                                <p className="text-slate-500 text-xs mt-1">Processamento de dados consultivo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
