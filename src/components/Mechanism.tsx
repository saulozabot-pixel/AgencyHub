"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Zap, Network } from "lucide-react";

const steps = [
    {
        title: "Mapeamento Neuronal",
        description: "Análise profunda da arquitetura de dados e gargalos de conversão antes da primeira linha de código.",
        icon: Network,
        delay: 0.1
    },
    {
        title: "Core Adaptativo",
        description: "Desenvolvimento de núcleos de processamento que se ajustam em tempo real à demanda de tráfego e escala.",
        icon: Cpu,
        delay: 0.2
    },
    {
        title: "Protocolo de Blindagem",
        description: "Integração de camadas de segurança e integridade de dados que excedem os padrões de mercado.",
        icon: ShieldCheck,
        delay: 0.3
    },
    {
        title: "Alta Disponibilidade",
        description: "Garantia de performance máxima constante, eliminando quedas e instabilidades sob pressão.",
        icon: Zap,
        delay: 0.4
    }
];

export default function Mechanism() {
    return (
        <section id="mechanism" className="py-24 relative bg-slate-900 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-vibrant-green/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-black tracking-[0.3em] text-vibrant-green mb-4">
                                O DIFERENCIAL ESTRATÉGICO
                            </h2>
                            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                                NEURAL CORE <br />
                                <span className="text-gradient">PROTOCOL (NCP)</span>
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
                                Cansado de soluções frágeis? O NCP é o nosso framework proprietário desenvolvido para
                                resolver o maior problema de quem escala: o colapso tecnológico.
                                Cada projeto é construído sobre um alicerce de inteligência adaptativa.
                            </p>

                            <div className="flex flex-col gap-6">
                                {steps.map((step) => (
                                    <motion.div
                                        key={step.title}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: step.delay }}
                                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-vibrant-green/10 flex items-center justify-center shrink-0">
                                            <step.icon className="w-5 h-5 text-vibrant-green" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">{step.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square max-w-[500px] mx-auto"
                        >
                            {/* Abstract visualization of a protocol/core */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-vibrant-green/20 to-accent-purple/20 rounded-full animate-pulse" />
                            <div className="absolute inset-4 border border-white/10 rounded-full" />
                            <div className="absolute inset-12 border border-vibrant-green/20 rounded-full animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-24 border border-accent-purple/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="glass w-32 h-32 rounded-3xl flex items-center justify-center border-vibrant-green/30 shadow-[0_0_50px_rgba(34,255,160,0.2)]">
                                    <div className="text-4xl font-black text-white italic">NCP</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
