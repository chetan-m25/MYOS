import { useEffect, useRef } from "react";
import "./cursor.scss";

export default function BootCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let sparkles = [];

    let mouse = {
      x: 0,
      y: 0,
      active: false,
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    window.addEventListener("mouseenter", () => {
      mouse.active = true;
    });

    window.addEventListener("mouseleave", () => {
      mouse.active = false;
    });

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      spawnParticles();
    });

    const logo = document.querySelector(".logo");

    let logoPos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    if (logo) {
      const rect = logo.getBoundingClientRect();
      logoPos = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }

    const colors = [
      "rgba(255,215,0,",
      "rgba(138,43,226,",
      "rgba(0,255,255,",
      "rgba(255,105,180,",
      "rgba(173,216,230,",
    ];

    function spawnParticles() {
      if (!mouse.active) return;

      for (let i = 0; i < 3; i++) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          life: 1,
          size: Math.random() * 2 + 0.8,
          color: colors[Math.floor(Math.random() * colors.length)],
        });

        if (Math.random() < 0.2) {
          sparkles.push({
            x: mouse.x,
            y: mouse.y,
            life: 1,
            size: Math.random() * 3 + 1.5,
          });
        }
      }
    }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.vx *= 0.94;
        p.vy *= 0.94;

        const age = 1 - p.life;
        const spread = age * 0.35;

        p.vx += (Math.random() - 0.5) * (0.05 + spread);
        p.vy += (Math.random() - 0.5) * (0.05 + spread);

        p.x += p.vx;
        p.y += p.vy;

        const angle = Math.atan2(p.vy, p.vx);

        p.x += Math.cos(angle + Math.PI / 2) * (0.15 + age * 0.35);
        p.y += Math.sin(angle + Math.PI / 2) * (0.15 + age * 0.35);

        const dx = logoPos.x - p.x;
        const dy = logoPos.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 260) {
          p.vx += dx * 0.00025;
          p.vy += dy * 0.00025;
        }

        p.life -= 0.01;

        ctx.beginPath();
        ctx.fillStyle = `${p.color}${p.life})`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = p.color + "1)";
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      });

      sparkles.forEach((s, i) => {
        s.life -= 0.04;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${s.life})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "white";
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        if (s.life <= 0) {
          sparkles.splice(i, 1);
        }
      });

      requestAnimationFrame(update);
    }

    update();
  }, []);

  return <canvas ref={canvasRef} className="boot-cursor-canvas" />;
}
