"use client";

import { motion } from "framer-motion";
import { AlertCircle, Target, TrendingDown } from "lucide-react";

const pains = [
    {
        title: "Tetos Técnicos",
        description: "Sistemas genéricos que travam exatamente quando sua empresa precisa de tração e escala.",
        icon: AlertCircle
    },
    {
        title: "Vazamento de Receita",
        description: "Cada erro de arquitetura é uma falha na conversão que você nem sabe que está acontecendo.",
        icon: TrendingDown
    },
    {
        title: "Amadorismo Tecnológico",
        description: "Interfaces que não transmitem a autoridade de uma marca que fatura múltiplos dígitos.",
        icon: Target
    }
];

export default function ProblemSolution() {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-950">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white"
                    >
                        O CUSTO INVISÍVEL DA <br />
                        <span className="text-vibrant-green italic">TECNOLOGIA GENÉRICA</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl leading-relaxed"
                    >
                        Seu próximo nível de escala não será alcançado com as mesmas soluções de prateleira que
                        seus concorrentes usam. O amadorismo tecnológico é o teto silencioso do seu faturamento.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pains.map((pain, index) => (
                        <motion.div
                            key={pain.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl glass border-white/5 hover:border-vibrant-green/20 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-vibrant-green/10 flex items-center justify-center mb-6 border border-vibrant-green/20">
                                <pain.icon className="w-6 h-6 text-vibrant-green" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-vibrant-green transition-colors">
                                {pain.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {pain.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-vibrant-green/10 to-transparent border border-vibrant-green/20 text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        A AgencyHub existe para romper esse teto.
                    </h3>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        Nós não fazemos apenas sistemas. Nós construímos vantagens competitivas
                        blindadas através de engenharia proprietária de alto nível.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
