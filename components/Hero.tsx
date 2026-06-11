"use client";

import { motion } from "motion/react";
import { Suspense, lazy, useState, useEffect, useRef } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

function SplineLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center animate-pulse">
          <div
            className="w-8 h-8 border-2 border-white/30 border-dashed rounded-full animate-spin"
            style={{ animationDuration: "3s" }}
          ></div>
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
          Loading 3D Scene
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intercept wheel & touch events in the capture phase so they never reach
  // the Spline canvas. Because no handler calls preventDefault(), the browser
  // still performs its native scroll — but Spline can no longer block it.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const stop = (e: Event) => e.stopPropagation();

    el.addEventListener("wheel", stop, { capture: true, passive: true });
    el.addEventListener("touchmove", stop, { capture: true, passive: true });

    return () => {
      el.removeEventListener("wheel", stop, { capture: true });
      el.removeEventListener("touchmove", stop, { capture: true });
    };
  }, []);

  // Remove the "Built with Spline" watermark whenever it appears in the DOM
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const removeLogo = () => {
      // Target any anchor linking to spline
      el.querySelectorAll('a[href*="spline"]').forEach((a) => {
        const parent = a.closest("div:not([class])") || a.parentElement;
        if (parent && parent !== el) {
          (parent as HTMLElement).style.display = "none";
        }
        (a as HTMLElement).style.display = "none";
      });
      // Also target the logo image directly
      el.querySelectorAll('img[src*="spline"], img[alt*="spline" i]').forEach(
        (img) => {
          const parent = img.closest("div:not([class])") || img.parentElement;
          if (parent && parent !== el) {
            (parent as HTMLElement).style.display = "none";
          }
          (img as HTMLElement).style.display = "none";
        }
      );
    };

    // Run immediately in case it's already rendered
    removeLogo();

    // Watch for the watermark being injected asynchronously
    const observer = new MutationObserver(() => removeLogo());
    observer.observe(el, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-[100svh] overflow-hidden bg-[#0d0d0f] border-b border-white/10">
      {/* Dot grid fallback that fades once the scene loads */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
        style={{
          opacity: sceneLoaded ? 0 : 0.15,
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Spline 3D Scene — mouse move/click pass through, scroll is intercepted */}
      <div ref={containerRef} className="w-full h-full">
        <Suspense fallback={<SplineLoader />}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: sceneLoaded ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Spline
              scene="https://prod.spline.design/JZs7lh3z0SXpud6V/scene.splinecode"
              onLoad={() => setSceneLoaded(true)}
              style={{ width: "100%", height: "100%" }}
            />
          </motion.div>
        </Suspense>
      </div>
    </section>
  );
}
