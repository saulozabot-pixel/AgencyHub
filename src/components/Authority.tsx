"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Globe, Users, Award } from "lucide-react";

const metrics = [
    { label: "Volume de Dados Geridos", value: "+1.5TB/dia", icon: TrendingUp },
    { label: "Uptime do Protocolo NCP", value: "99.99%", icon: Shield },
    { label: "Ecossistemas em Escala", value: "40+", icon: Globe },
    { label: "Decisores Impactados", value: "2.5k", icon: Users }
];

export default function Authority() {
    return (
        <section className="py-24 relative bg-slate-950 border-y border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <Award className="w-5 h-5 text-vibrant-green" />
                            <span className="text-xs font-black tracking-[0.4em] text-slate-500 uppercase">
                                Padrão de Excelência Global
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-white tracking-tighter"
                        >
                            NÚMEROS QUE VALIDAM A <br />
                            <span className="text-gradient">SOBERANIA TÉCNICA.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex gap-4"
                    >
                        {/* Premium Badges */}
                        <div className="flex flex-col items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default text-center">
                            <div className="w-16 h-16 rounded-full border border-vibrant-green/30 flex items-center justify-center bg-vibrant-green/5">
                                <Shield className="w-8 h-8 text-vibrant-green" />
                            </div>
                            <span className="text-[10px] font-bold text-white tracking-widest leading-tight">ELITE<br />ENGINEERING</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default text-center">
                            <div className="w-16 h-16 rounded-full border border-accent-purple/30 flex items-center justify-center bg-accent-purple/5">
                                <TrendingUp className="w-8 h-8 text-accent-purple" />
                            </div>
                            <span className="text-[10px] font-bold text-white tracking-widest leading-tight">SCALABILITY<br />CERTIFIED</span>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl glass border-white/5 hover:border-vibrant-green/20 transition-all text-center group"
                        >
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4 group-hover:text-vibrant-green transition-colors leading-relaxed">
                                {metric.label}
                            </p>
                            <p className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
                                {metric.value}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="text-slate-500 text-sm font-light max-w-2xl mx-auto italic">
                        "A AgencyHub não é apenas uma fornecedora; é o alicerce técnico de nossas operações de alta complexidade."
                        <br />
                        <span className="text-white font-bold mt-2 block not-italic">— FUNDADOR DE SCALE-UP EM FINTECH</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
