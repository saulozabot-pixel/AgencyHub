"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-fit"
        >
            <div className="glass px-8 py-3 rounded-2xl border-white/10 flex items-center gap-8 shadow-2xl backdrop-blur-3xl">
                <a href="#" className="text-white font-black tracking-tighter text-xl group">
                    HUAB<span className="text-vibrant-green group-hover:animate-pulse">.</span>
                </a>

                <div className="hidden md:flex items-center gap-6">
                    {[
                        { name: "SERVIÇOS", href: "#services" },
                        { name: "PIXEL IA", href: "#pixel" },
                        { name: "CONTATO", href: "#cta" }
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <a
                    href="https://wa.me/5547933805593"
                    target="_blank"
                    className="px-4 py-2 bg-white text-slate-950 text-[10px] font-black rounded-lg hover:scale-105 transition-transform"
                >
                    CONTRATAR
                </a>
            </div>
        </motion.nav>
    );
}
