"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

type RobotState = "IDLE" | "TYPING" | "CLEANING" | "THINKING";

export default function PixelIA() {
    const [state, setState] = useState<RobotState>("IDLE");
    const robotRef = useRef<HTMLDivElement>(null);
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

    useEffect(() => {
        const states: RobotState[] = ["IDLE", "TYPING", "THINKING", "CLEANING"];
        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % states.length;
            setState(states[currentIndex]);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background Neural Blueprint Pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Visual Side: The Mascot & Atomic Orbits */}
                    <div className="flex-1 relative min-h-[600px] flex items-center justify-center">

                        {/* Atomic Orbits Blueprint Style */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {[0, 60, 120].map((rotation, i) => (
                                <motion.div
                                    key={i}
                                    style={{
                                        rotate: rotation,
                                        x: useTransform(mouseX, [0, 2000], [-8 * (i + 1), 8 * (i + 1)]),
                                        y: useTransform(mouseY, [0, 2000], [-8 * (i + 1), 8 * (i + 1)]),
                                    }}
                                    animate={{ rotate: rotation + 360 }}
                                    transition={{
                                        rotate: { duration: 30 + i * 10, repeat: Infinity, ease: "linear" }
                                    }}
                                    className="absolute w-[350px] h-[500px] border border-accent-cyan/10 rounded-[50%]"
                                >
                                    {/* Data Particle on Orbit */}
                                    <motion.div
                                        animate={{
                                            left: ["0%", "100%", "0%"],
                                            opacity: [0, 1, 0],
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, delay: i * 1.3 }}
                                        className="absolute top-1/2 w-2 h-2 bg-accent-cyan rounded-full shadow-[0_0_10px_var(--accent-cyan)]"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Pixel Mascot - New Blueprint Silhouette */}
                        <motion.div
                            ref={robotRef}
                            onMouseEnter={() => setState("THINKING")}
                            onMouseLeave={() => setState("IDLE")}
                            animate={{
                                y: state === "TYPING" ? [0, -2, 0] : [-10, 10],
                            }}
                            transition={{
                                y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                            }}
                            className="relative z-20 flex flex-col items-center"
                        >
                            {/* Head Section */}
                            <motion.div
                                style={{
                                    rotateX: useTransform(mouseY, [0, 1200], [10, -10]),
                                    rotateY: useTransform(mouseX, [0, 2000], [-15, 15]),
                                }}
                                className="w-48 h-40 bg-slate-950/90 rounded-[3rem] border border-accent-cyan/20 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative overflow-hidden"
                            >
                                {/* Circuit Pattern Overlay */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L40 10 L40 40 M60 10 L90 10 L90 40 M10 90 L10 60 L40 60 M90 90 L60 90 L60 60' stroke='%2306b6d4' stroke-width='1' fill='none'/%3E%3Ccircle cx='40' cy='40' r='2' fill='%2306b6d4'/%3E%3Ccircle cx='60' cy='60' r='2' fill='%2306b6d4'/%3E%3C/svg%3E")`,
                                        backgroundSize: '50px 50px'
                                    }}
                                />

                                {/* Neural Glow */}
                                <motion.div
                                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    className="absolute inset-0 bg-accent-cyan/5 blur-2xl"
                                />

                                {/* Eyes */}
                                <div className="absolute inset-0 flex items-center justify-center gap-10">
                                    {[0, 1].map((i) => (
                                        <div key={i} className="relative">
                                            <motion.div
                                                animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                                                transition={{ duration: 6, repeat: Infinity, delay: i * 0.2 + 2 }}
                                                className="w-14 h-14 bg-slate-900 rounded-full border border-white/5 flex items-center justify-center overflow-hidden"
                                            >
                                                <motion.div
                                                    style={{
                                                        x: useTransform(mouseX, [0, 2000], [-10, 10]),
                                                        y: useTransform(mouseY, [0, 1200], [-10, 10]),
                                                    }}
                                                    className="w-8 h-8 bg-accent-cyan rounded-full shadow-[0_0_25px_var(--accent-cyan)] relative"
                                                >
                                                    <div className="absolute top-1.5 left-1.5 w-2 h-2 bg-white rounded-full opacity-50" />
                                                </motion.div>
                                            </motion.div>
                                            {/* Glow Ring */}
                                            <div className="absolute inset-[-4px] border border-accent-cyan/20 rounded-full blur-[2px]" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Neck Connection */}
                            <div className="w-6 h-4 bg-slate-800/50 border-x border-accent-cyan/20 z-10" />

                            {/* Body Section (Tapered) */}
                            <motion.div
                                style={{
                                    rotateY: useTransform(mouseX, [0, 2000], [-10, 10]),
                                }}
                                className="w-32 h-36 bg-slate-950/90 rounded-[1.5rem_1.5rem_4rem_4rem] border border-accent-cyan/10 shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden"
                            >
                                {/* Internal Core */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-accent-cyan/5 rounded-full blur-xl animate-pulse" />
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4 h-12 bg-gradient-to-b from-accent-cyan to-transparent opacity-40 rounded-full" />
                            </motion.div>

                            {/* Floating Hands (Blueprint Style) */}
                            <motion.div
                                animate={{ y: [0, 5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -left-16 top-44 w-8 h-8 bg-slate-900/50 border border-accent-cyan/30 rounded-full flex items-center justify-center"
                            >
                                <div className="w-2 h-2 bg-accent-cyan rounded-full shadow-[0_0_10px_var(--accent-cyan)]" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                className="absolute -right-16 top-44 w-8 h-8 bg-slate-900/50 border border-accent-cyan/30 rounded-full flex items-center justify-center"
                            >
                                <div className="w-2 h-2 bg-accent-cyan rounded-full shadow-[0_0_10px_var(--accent-cyan)]" />
                            </motion.div>
                        </motion.div>

                        {/* Shadow / Base Glow */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute bottom-10 w-48 h-12 bg-accent-cyan/20 blur-2xl rounded-[50%]"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono uppercase tracking-widest">
                            <Cpu className="w-3 h-3" />
                            Neural Logic Platform
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            CONHEÇA O PIXEL: <br />
                            <span className="text-gradient">LÓGICA SEM FRONTEIRAS.</span>
                        </h2>

                        <p className="text-slate-400 text-lg leading-relaxed">
                            O Pixel não é apenas um assistente. Ele é o seu **Engenheiro de Lógica Neural**,
                            capaz de entender complexidades técnicas, otimizar arquiteturas e
                            agir como o cérebro por trás da sua próxima inovação.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Análise Consultiva em Tempo Real",
                                "Geração de Arquitetura Técnica",
                                "Lógica Independente Huab Core"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-300">
                                    <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full shadow-[0_0_8px_var(--accent-cyan)]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Icons
function Cpu(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="16" height="16" x="4" y="4" rx="2" />
            <rect width="6" height="6" x="9" y="9" rx="1" />
            <path d="M15 2v2" />
            <path d="M15 20v2" />
            <path d="M2 15h2" />
            <path d="M2 9h2" />
            <path d="M20 15h2" />
            <path d="M20 9h2" />
            <path d="M9 2v2" />
            <path d="M9 20v2" />
        </svg>
    );
}
