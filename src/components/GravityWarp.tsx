"use client";

import React, { useEffect, useRef } from "react";

export default function GravityWarp() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const drawGrid = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const spacing = 60; // Aumentado de 40 para performance
            const rows = Math.ceil(canvas.height / spacing);
            const cols = Math.ceil(canvas.width / spacing);
            const radius = 300;
            const strength = 60;

            for (let i = 0; i <= rows; i++) {
                for (let j = 0; j <= cols; j++) {
                    let x = j * spacing;
                    let y = i * spacing;

                    const dx = mouse.current.x - x;
                    const dy = mouse.current.y - y;
                    const distSq = dx * dx + dy * dy; // Use distance squared for performance
                    const radiusSq = radius * radius;

                    if (distSq < radiusSq) {
                        const dist = Math.sqrt(distSq);
                        const angle = Math.atan2(dy, dx);
                        const force = (radius - dist) / radius;
                        x += Math.cos(angle) * force * strength;
                        y += Math.sin(angle) * force * strength;

                        ctx.beginPath();
                        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(6, 182, 212, ${0.4 * (1 - dist / radius)})`;
                        ctx.fill();
                    } else {
                        ctx.beginPath();
                        ctx.arc(x, y, 0.8, 0, Math.PI * 2);
                        ctx.fillStyle = "rgba(168, 85, 247, 0.08)";
                        ctx.fill();
                    }
                }
            }


            requestAnimationFrame(drawGrid);
        };

        resize();
        drawGrid();
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
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
}
