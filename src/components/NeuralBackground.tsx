"use client";

import React, { useEffect, useRef } from "react";

export default function NeuralBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        const particleCount = 40; // Reduzido de 70 para performance

        const resize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * (canvas?.width || 800);
                this.y = Math.random() * (canvas?.height || 600);
                this.vx = (Math.random() - 0.5) * 0.25;
                this.vy = (Math.random() - 0.5) * 0.25;
                this.size = Math.random() * 1.2 + 0.4;
            }

            update() {
                const dx = mouse.current.x - this.x;
                const dy = mouse.current.y - this.y;
                const distSq = dx * dx + dy * dy;
                const radiusSq = 350 * 350;

                if (distSq < radiusSq) {
                    const dist = Math.sqrt(distSq);
                    const force = (350 - dist) / 350;
                    this.x += (dx / dist) * force * 2.5;
                    this.y += (dy / dist) * force * 2.5;
                }

                this.x += this.vx;
                this.y += this.vy;

                if (canvas) {
                    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(168, 85, 247, 0.4)";
                ctx.fill();
            }
        }

        const init = () => {
            resize();
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.update();
                p.draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < 15625) { // 125 * 125
                        const dist = Math.sqrt(distSq);
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - dist / 125)})`;
                        ctx.lineWidth = 0.4;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        };


        init();
        animate();

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none opacity-65 z-0"
        />
    );
}
