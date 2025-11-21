// src/components/Starfield.jsx
import { useEffect, useRef } from "react";

/**
 * Starfield canvas + drifting nebula overlay.
 * Place <Starfield /> near top-level of App so it covers the page.
 */

export default function Starfield({
  starCount = 160,        // number of small stars (tweak)
  speed = 0.4,           // base speed multiplier
  nebulaSrc = "/nebula.png", // nebula image in public/
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const nebulaOffset = useRef(0);

  useEffect(() => {
    // Respect reduced-motion preference
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return; // don't animate

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // Resize handler
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // create star objects
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 1.2 + 0.2,      // depth (for parallax & speed)
        r: Math.random() * 1.2 + 0.4,     // radius
        alpha: Math.random() * 0.8 + 0.2, // base alpha
        twinkle: Math.random() * 0.02 + 0.01,
        dir: Math.random() > 0.5 ? 1 : -1 // twinkle direction
      });
    }

    // load nebula image
    const nebula = new Image();
    nebula.src = nebulaSrc;
    nebula.onload = () => {
      // ok
    };

    let last = performance.now();
    function frame(now) {
      const dt = (now - last) / 16.67; // approx frames (1 = 60fps)
      last = now;

      // clear canvas
      ctx.clearRect(0, 0, w, h);

      // draw stars
      for (let s of stars) {
        // parallax movement (very subtle)
        s.x += (s.z - 0.6) * speed * dt * 0.5;
        s.y += Math.sin(now * 0.0005 + s.z * 10) * 0.02 * dt; // slow flow

        // wrap-around
        if (s.x > w + 50) s.x = -50;
        if (s.x < -50) s.x = w + 50;
        if (s.y > h + 50) s.y = -50;
        if (s.y < -50) s.y = h + 50;

        // twinkle
        s.alpha += s.twinkle * s.dir * dt;
        if (s.alpha > 1) { s.alpha = 1; s.dir = -1; }
        if (s.alpha < 0.2) { s.alpha = 0.2; s.dir = 1; }

        // draw glow
        const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 10);
        grd.addColorStop(0, `rgba(255,255,255,${0.9 * s.alpha})`);
        grd.addColorStop(0.3, `rgba(180,200,255,${0.25 * s.alpha})`);
        grd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.arc(s.x, s.y, s.r * 10, 0, Math.PI * 2);
        ctx.fill();

        // central bright dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${0.85 * s.alpha})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // draw fast shooting stars occasionally
      if (Math.random() < 0.006 * dt) {
        // shooting star effect
        const sx = Math.random() * w;
        const sy = Math.random() * h * 0.6;
        shoot(sx, sy);
      }

      // draw nebula overlay drifting (subtle)
      nebulaOffset.current += 0.02 * speed * dt;
      const no = (nebulaOffset.current % 1);
      // draw nebula twice for infinite drift
      if (nebula.complete) {
        const nw = w * 1.2;
        const nh = (nebula.height / nebula.width) * nw;
        const x1 = -nw * no;
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 0.55;
        ctx.drawImage(nebula, x1, h / 6 - nh / 2, nw, nh);
        ctx.drawImage(nebula, x1 + nw, h / 6 - nh / 2, nw, nh);
        ctx.globalAlpha = 1.0;
        ctx.globalCompositeOperation = "source-over";
      }

      rafRef.current = requestAnimationFrame(frame);
    }

    // simple shooting star function
    function shoot(sx, sy) {
      const len = 200 + Math.random() * 300;
      const angle = -0.5 - Math.random() * 0.6;
      const vx = Math.cos(angle) * len;
      const vy = Math.sin(angle) * len;
      const start = performance.now();
      function drawS(now) {
        const t = (now - start) / 350; // duration
        if (t > 1) return;
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = "rgba(255,255,255," + (1 - t) + ")";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + vx * t, sy + vy * t);
        ctx.stroke();
        ctx.restore();
        requestAnimationFrame(drawS);
      }
      requestAnimationFrame(drawS);
    }

    rafRef.current = requestAnimationFrame(frame);

    // cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [starCount, speed, nebulaSrc]);

  // If user prefers reduced motion: render static nebula background
  const reduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div aria-hidden className="starfield-wrap">
      {!reduced && <canvas ref={canvasRef} className="starfield-canvas" />}
      {/* fallback static background for reduced-motion */}
      {reduced && <div className="starfield-static" style={{ backgroundImage: `url(${nebulaSrc})` }} />}
    </div>
  );
}
