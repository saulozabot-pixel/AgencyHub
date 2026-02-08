"use client";

import { motion } from "framer-motion";
import { Smartphone, Cpu, Zap, Code2, Layers, Repeat } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "SISTEMAS DE ALTA DISPONIBILIDADE",
        description: "Engenharia de backend robusta projetada para suportar picos de tráfego e operações críticas sem latência.",
        icon: Cpu,
        color: "text-accent-purple",
        borderColor: "hover:border-accent-purple/50",
        shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
    },
    {
        title: "INTELIGÊNCIA ESTRATÉGICA",
        description: "Automações inteligentes e modelos de IA que não apenas executam, mas otimizam sua margem de lucro.",
        icon: Zap,
        color: "text-vibrant-green",
        borderColor: "hover:border-vibrant-green/50",
        shadow: "hover:shadow-[0_0_30px_rgba(190,242,100,0.2)]"
    },
    {
        title: "INTERFACES DE ALTA PERFORMANCE",
        description: "Ecossistemas mobile e web com foco absoluto em conversão e experiência de marca premium.",
        icon: Smartphone,
        color: "text-accent-cyan",
        borderColor: "hover:border-accent-cyan/50",
        shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
    }
];

export default function Services() {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-950/50">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                        PILARES DE <span className="text-gradient">EXPANSÃO</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto italic">
                        Não entregamos ferramentas. Construímos os ativos tecnológicos que sustentam seu próximo nível de escala.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={cn(
                                "group p-8 rounded-3xl glass transition-all duration-500",
                                service.borderColor,
                                service.shadow
                            )}
                        >
                            <div className={cn("mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-500", service.color)}>
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">Evolução nível {index + 1}</span>
                                <div className={cn("w-2 h-2 rounded-full", service.color.replace("text-", "bg-"))} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
