"use client";

import { motion } from "framer-motion";
import { MessageCircle, Rocket } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Intense Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="glass p-12 md:p-20 rounded-[40px] border-white/20 text-center overflow-hidden relative">
                    {/* Internal animations */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-50" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-none">
                            PRONTO PARA <span className="text-accent-cyan underline decoration-accent-cyan/30">DECOLAR</span>?<br />
                            SUA EVOLUÇÃO COMEÇA AGORA.
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                            Não perca tempo com soluções genéricas. Leve a <span className="text-white font-bold">AgencyHuab</span> para dentro do seu projeto e veja a diferença de uma arquitetura de elite.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <motion.a
                                href="https://wa.me/5547933805593"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-10 py-5 bg-vibrant-green text-slate-950 font-black rounded-2xl flex items-center gap-3 text-xl transition-all shadow-[0_0_40px_rgba(190,242,100,0.4)]"
                            >
                                FALAR COM O PIXEL
                                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            </motion.a>

                            <button className="px-10 py-5 glass text-white font-bold rounded-2xl border-white/10 hover:bg-white/5 transition-all text-lg flex items-center gap-2">
                                VER PORTFÓLIO
                                <Rocket className="w-5 h-5 opacity-50" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Abstract small dots */}
                    <div className="absolute top-10 right-10 flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse delay-100" />
                        <div className="w-2 h-2 rounded-full bg-vibrant-green animate-pulse delay-200" />
                    </div>
                </div>
            </div>
        </section>
    );
}
