"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const criteria = [
    {
        type: "positive",
        text: "Empresas em estágio de tração e escala consolidada.",
        description: "Operações que já possuem demanda real e precisam de robustez para o próximo nível."
    },
    {
        type: "positive",
        text: "Decisores que buscam Ativos, não apenas Ferramentas.",
        description: "Para quem entende que tecnologia é investimento estratégico, não custo operacional."
    },
    {
        type: "negative",
        text: "Projetos sem orçamento de escala definido.",
        description: "O Neural Core Protocol exige um compromisso com a excelência e execução de elite."
    },
    {
        type: "negative",
        text: "Busca por soluções rápidas e genéricas.",
        description: "Não trabalhamos com 'atalhos'. Construímos engenharia de alta disponibilidade."
    }
];

export default function Qualification() {
    return (
        <section className="py-24 relative bg-slate-900 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6"
                    >
                        ESTE PROTOCOLO <span className="text-vibrant-green underline decoration-vibrant-green/20">NÃO É</span> PARA TODOS.
                    </motion.h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        A exclusividade é a base da nossa entrega. Filtramos nossos parceiros para garantir
                        que o Neural Core Protocol seja aplicado apenas onde há potencial real de dominância de mercado.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Coluna Positiva */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-xl font-bold text-white flex items-center gap-3">
                            <span className="w-8 h-px bg-vibrant-green"></span>
                            PARA QUEM É A AGENCYHUB
                        </h3>
                        {criteria.filter(c => c.type === "positive").map((item, idx) => (
                            <div key={idx} className="group">
                                <div className="flex items-start gap-4 mb-2">
                                    <CheckCircle2 className="w-6 h-6 text-vibrant-green shrink-0 mt-1" />
                                    <p className="text-white font-bold text-lg">{item.text}</p>
                                </div>
                                <p className="text-slate-500 pl-10 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Coluna Negativa */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-xl font-bold text-slate-500 flex items-center gap-3">
                            <span className="w-8 h-px bg-slate-500"></span>
                            QUEM NÃO ATENDEMOS
                        </h3>
                        {criteria.filter(c => c.type === "negative").map((item, idx) => (
                            <div key={idx} className="group opacity-60 hover:opacity-100 transition-opacity">
                                <div className="flex items-start gap-4 mb-2">
                                    <XCircle className="w-6 h-6 text-red-500/50 shrink-0 mt-1" />
                                    <p className="text-slate-300 font-bold text-lg italic">{item.text}</p>
                                </div>
                                <p className="text-slate-600 pl-10 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-col items-center"
                >
                    <div className="glass px-8 py-6 rounded-3xl border-vibrant-green/10 text-center max-w-xl">
                        <p className="text-white font-mono text-sm tracking-widest uppercase mb-4">
                            STATUS: VAGAS DISPONÍVEIS PARA Q1 2026
                        </p>
                        <p className="text-slate-400 text-sm mb-6">
                            Nossa equipe técnica é intencionalmente enxuta. Atendemos apenas 3 novos projetos por trimestre para garantir o rigor do NCP.
                        </p>
                        <a
                            href="#cta"
                            className="inline-flex items-center gap-2 text-vibrant-green font-black text-xs tracking-widest hover:gap-4 transition-all"
                        >
                            VERIFICAR ELEGIBILIDADE <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
