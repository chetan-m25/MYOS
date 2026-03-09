import { useEffect, useRef } from "react";

export default function LiveWallpaper() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let spheres = [];
    let animationFrameId;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const sphereCount = 12;

    for (let i = 0; i < sphereCount; i++) {
      spheres.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 80 + 40,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
      });
    }

    let auroraOffset = 0;

    function drawAurora() {
      auroraOffset += 0.002;

      const gradient = ctx.createLinearGradient(
        0,
        0,
        window.innerWidth,
        window.innerHeight,
      );

      gradient.addColorStop(
        0,
        `hsl(${220 + Math.sin(auroraOffset) * 20},70%,8%)`,
      );

      gradient.addColorStop(
        0.5,
        `hsl(${240 + Math.cos(auroraOffset) * 30},70%,10%)`,
      );

      gradient.addColorStop(
        1,
        `hsl(${210 + Math.sin(auroraOffset) * 20},70%,8%)`,
      );

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }

    let liquidTime = 0;

    function drawLiquidGlow() {
      liquidTime += 0.01;

      for (let i = 0; i < 3; i++) {
        const x =
          window.innerWidth / 2 +
          Math.sin(liquidTime + i * 2) * window.innerWidth * 0.3;

        const y =
          window.innerHeight / 2 +
          Math.cos(liquidTime + i * 2) * window.innerHeight * 0.25;

        const radius = window.innerWidth * 0.4;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);

        gradient.addColorStop(0, "rgba(120,170,255,0.15)");
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawSpheres() {
      spheres.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < -100) s.x = window.innerWidth + 100;
        if (s.x > window.innerWidth + 100) s.x = -100;

        if (s.y < -100) s.y = window.innerHeight + 100;
        if (s.y > window.innerHeight + 100) s.y = -100;

        const gradient = ctx.createRadialGradient(
          s.x - s.r * 0.3,
          s.y - s.r * 0.3,
          s.r * 0.1,
          s.x,
          s.y,
          s.r,
        );

        gradient.addColorStop(0, "rgba(255,255,255,0.25)");
        gradient.addColorStop(1, "rgba(255,255,255,0.03)");

        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function animate() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      drawAurora();
      drawLiquidGlow();
      drawSpheres();

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
      }}
    />
  );
}
