"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Terminal, Zap } from "lucide-react";

// Componente para o fluxo de código lateral (refinado)
const CodeStream = () => {
    const [lines, setLines] = useState<string[]>([]);
    const codeSnippets = [
        "synapse.initialize()",
        "fetch('neural/abstraction')",
        "process.stream(L_CORE)",
        "logic_v5.deploy()",
        "await neural_handshake",
        "const AI = new Avatar()",
        "optimizing_synaptic_path",
        "huab_core.status = 1",
        "vector.math.inject()",
        "shading_blueprints..."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setLines(prev => {
                const newLines = [...prev, codeSnippets[Math.floor(Math.random() * codeSnippets.length)]];
                return newLines.slice(-10);
            });
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-mono text-[9px] text-accent-cyan/50 space-y-0.5 leading-tight">
            <AnimatePresence mode="popLayout">
                {lines.map((line, i) => (
                    <motion.p
                        key={line + i}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                    >
                        {"> "}{line}
                    </motion.p>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default function PixelIA() {
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

    // Movimentos sutis de paralaxe
    const faceX = useTransform(mouseX, [0, 2000], [-10, 10]);
    const faceY = useTransform(mouseY, [0, 1200], [-10, 10]);
    const glowX = useTransform(mouseX, [0, 2000], [5, -5]);
    const glowY = useTransform(mouseY, [0, 1200], [5, -5]);

    return (
        <section className="py-24 relative overflow-hidden bg-background min-h-[700px] flex items-center">
            {/* Ambient Bokeh Particles (Background) */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1],
                            y: [0, -20, 0]
                        }}
                        transition={{ duration: 4 + i, repeat: Infinity, delay: i }}
                        className="absolute rounded-full blur-3xl bg-accent-cyan/10"
                        style={{
                            width: `${100 + i * 50}px`,
                            height: `${100 + i * 50}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Visual: High-Fidelity Neural Avatar */}
                    <div className="flex-1 relative flex items-center justify-center">

                        <motion.div
                            style={{ x: faceX, y: faceY }}
                            className="relative w-[450px] h-[450px]"
                        >
                            {/* Neural Synapse Dots (Brain Region) */}
                            <div className="absolute top-[15%] left-[30%] w-[180px] h-[120px] z-20">
                                {[...Array(25)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            opacity: [0.2, 1, 0.2],
                                            scale: [0.8, 1.2, 0.8],
                                            filter: ["drop-shadow(0 0 2px #06b6d4)", "drop-shadow(0 0 5px #06b6d4)", "drop-shadow(0 0 2px #06b6d4)"]
                                        }}
                                        transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                                        className="absolute w-1 h-1 bg-accent-cyan rounded-full"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.sin(i * 0.5) * 40 + 50}%`,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Main Humanoid Profile SVG */}
                            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                                <defs>
                                    <linearGradient id="faceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0f172a" />
                                        <stop offset="40%" stopColor="#1e293b" />
                                        <stop offset="100%" stopColor="#0f172a" />
                                    </linearGradient>
                                    <filter id="eyeGlow">
                                        <feGaussianBlur stdDeviation="5" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>

                                {/* Head Silhouette Path (Side Profile) */}
                                <path
                                    d="M150,50 C230,20 330,80 340,180 C345,280 300,340 250,370 L180,380 C180,380 140,300 130,220 C120,140 100,80 150,50"
                                    fill="url(#faceGradient)"
                                    stroke="rgba(6,182,212,0.2)"
                                    strokeWidth="1"
                                />

                                {/* Glowing Eye Area */}
                                <circle cx="280" cy="160" r="15" fill="#06b6d4" filter="url(#eyeGlow)" opacity="0.6">
                                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
                                </circle>
                                <circle cx="280" cy="160" r="4" fill="white" opacity="0.8" />

                                {/* Ear HUD Interface (The Circular Interface from image) */}
                                <g transform="translate(200, 220)">
                                    <motion.circle
                                        r="45"
                                        fill="none"
                                        stroke="#06b6d4"
                                        strokeWidth="1"
                                        strokeDasharray="10 20"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        opacity="0.3"
                                    />
                                    <motion.circle
                                        r="35"
                                        fill="none"
                                        stroke="#06b6d4"
                                        strokeWidth="3"
                                        strokeDasharray="40 100"
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        opacity="0.8"
                                    />
                                    <circle r="15" fill="#ef4444" opacity="0.4">
                                        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
                                    </circle>
                                </g>

                                {/* Connecting Neural Lines (Flowing from back) */}
                                <path
                                    d="M100,300 Q150,280 200,220"
                                    fill="none"
                                    stroke="#06b6d4"
                                    strokeWidth="0.5"
                                    strokeDasharray="5 10"
                                    opacity="0.3"
                                />
                                <path
                                    d="M80,350 Q130,320 200,220"
                                    fill="none"
                                    stroke="#06b6d4"
                                    strokeWidth="0.5"
                                    strokeDasharray="2 5"
                                    opacity="0.2"
                                />
                            </svg>

                            {/* Internal Face Code Stream (Overlay) */}
                            <motion.div
                                style={{ x: glowX, y: glowY }}
                                className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center pl-20"
                            >
                                <div className="bg-slate-900/40 backdrop-blur-[2px] p-2 border-l border-accent-cyan/30 rounded-r-lg">
                                    <CodeStream />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Floating Status Badge */}
                        <div className="absolute top-0 right-0 glass px-4 py-2 rounded-full flex items-center gap-2 border-accent-cyan/30">
                            <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse shadow-[0_0_10px_#06b6d4]" />
                            <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-tighter">Neural Link: Stable</span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-8 lg:pl-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono uppercase tracking-widest">
                            <Zap className="w-3 h-3" />
                            Huab Intelligence Core
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                            PIXEL IA: <br />
                            <span className="text-gradient">O CÉREBRO DIGITAL.</span>
                        </h2>

                        <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                            Replicando a complexidade neural para resolver problemas reais.
                            O Pixel agora processa informações em camadas, simulando a inteligência
                            humana com a velocidade do silício.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-3 bg-accent-cyan text-slate-950 font-bold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all">
                                Explorar Algoritmos
                            </button>
                            <button className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                                Ver Documentação
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
