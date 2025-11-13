// ✅ Single‑file working version — just paste in your project
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useInView, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Code,
  TestTube,
  Rocket,
  HeadphonesIcon,
} from "lucide-react";

// ------------------ Steps Data ------------------
const processSteps = [
  {
    id: 1,
    title: "Ideate",
    phase: "01 • Discovery",
    description:
      "We begin by learning about your goals, audience, and the problem we aim to solve.",
    image: "/images/hero-app-1.svg",
    icon: Lightbulb,
    direction: "left",
  },
  {
    id: 2,
    title: "Design",
    phase: "02 • Creative",
    description: "We plan flows, UI components, and craft a polished design system.",
    image: "/images/hero-app-2.svg",
    icon: Palette,
    direction: "right",
  },
  {
    id: 3,
    title: "Develop",
    phase: "03 • Engineering",
    description:
      "We build with quality code, high performance, and scalable architecture.",
    image: "/images/hero-app-develop.svg",
    icon: Code,
    direction: "left",
  },
  {
    id: 4,
    title: "Test",
    phase: "04 • QA",
    description: "We test across devices, browsers and use‑cases before launch.",
    image: "/images/hero-app-1.svg",
    icon: TestTube,
    direction: "right",
  },
  {
    id: 5,
    title: "Launch",
    phase: "05 • Deployment",
    description: "We deploy smoothly and ensure everything runs perfectly.",
    image: "/images/hero-app-2.svg",
    icon: Rocket,
    direction: "left",
  },
  {
    id: 6,
    title: "Support",
    phase: "06 • Growth",
    description: "We stay with you — updates, improvements, and scaling.",
    image: "/images/hero-app-support.svg",
    icon: HeadphonesIcon,
    direction: "right",
  },
];

// ------------------ Component ------------------
export default function ProductDevelopmentProcess() {
  const containerRef = useRef(null);
  // Start at first step so content shows immediately
  const [active, setActive] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const isInView = useInView(containerRef, { amount: 0.1 });

  // detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // desktop scroll logic
  useEffect(() => {
    if (isMobile) return;
    const unsub = scrollYProgress.on("change", (p) => {
      const s = Math.floor(p * (processSteps.length + 1));
      const step = Math.max(1, Math.min(s, processSteps.length));
      setActive(step);
    });
    return () => unsub();
  }, [isMobile, scrollYProgress]);

  // mobile auto start
  useEffect(() => {
    if (isMobile && active === 0) setTimeout(() => setActive(1), 1200);
  }, [isMobile, active]);

  // swipe logic mobile
  const [current, setCurrent] = useState(0);
  const swipeThreshold = 600;
  const goTo = (i: number) => {
    if (i >= 0 && i < processSteps.length) setCurrent(i);
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-brand-bg min-h-screen"
      style={{ height: isMobile ? "auto" : `${(processSteps.length + 1) * 80}vh` }}
    >
      {/* desktop view */}
      {!isMobile && (
        <div className="sticky top-0 h-screen flex items-center justify-center">
          {/* progress bar */}
          <motion.div
            className="fixed left-10 top-1/2 -translate-y-1/2 hidden md:block"
            animate={{ opacity: isInView ? 1 : 0 }}
          >
            <div className="relative h-[420px] w-[4px] bg-white/10 rounded">
              <motion.div
                className="absolute left-0 top-0 w-full bg-brand-orange"
                style={{ height: scrollYProgress }}
              />

              {processSteps.map((s, i) => {
                const Icon = s.icon;
                const top = (i / (processSteps.length - 1)) * 390;
                const on = active >= s.id;
                return (
                  <div
                    key={s.id}
                    style={{ top, left: "50%", transform: "translateX(-50%)" }}
                    className="absolute"
                  >
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full border backdrop-blur-sm
                      ${on ? "bg-brand-orange text-white" : "bg-white/10 text-white/40"}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* step content */}
          <AnimatePresence mode="wait">
            {active > 0 && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl grid grid-cols-2 gap-16 px-10"
              >
                {(() => {
                  const step = processSteps[active - 1] ?? null;
                  if (!step) return null;
                  const Icon = step.icon;
                  return (
                    <>
                      <div className="flex flex-col justify-center space-y-6">
                        <span className="text-sm text-brand-orange font-semibold uppercase tracking-widest">
                          {step.phase}
                        </span>
                        <h3 className="text-5xl font-bold text-white">{step.title}</h3>
                        <p className="text-lg text-white/70 max-w-md">{step.description}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <motion.div
                          className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                          whileHover={{ scale: 1.03 }}
                        >
                          <img src={step.image} className="w-80 h-80 object-contain" />
                        </motion.div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* mobile slider */}
      {isMobile && (
        <div className="px-4 py-16 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(_, info) => {
                if (info.offset.x * info.velocity.x > swipeThreshold) goTo(current - 1);
                else if (info.offset.x * info.velocity.x < -swipeThreshold) goTo(current + 1);
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="mb-3 text-brand-orange text-xs font-semibold tracking-wider">
                {processSteps[current].phase}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{processSteps[current].title}</h3>
              <p className="text-sm text-white/70 mb-4 leading-relaxed">{processSteps[current].description}</p>
              <div className="bg-white/10 border border-white/10 rounded-xl p-4 flex items-center justify-center">
                <img src={processSteps[current].image} alt={processSteps[current].title} className="w-40 h-40 object-contain" />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-2">
            {processSteps.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${i === current ? "bg-brand-orange scale-125" : "bg-white/30"}`}
              />
            ))}
          </div>

          <div className="flex justify-between mt-4 text-xs text-white/70">
            <button disabled={current === 0} onClick={() => goTo(current - 1)} className={`px-3 py-2 rounded-lg border border-white/10 backdrop-blur-sm ${current === 0 ? "opacity-30" : "active:scale-95"}`}>Prev</button>
            <button disabled={current === processSteps.length - 1} onClick={() => goTo(current + 1)} className={`px-3 py-2 rounded-lg border border-white/10 backdrop-blur-sm ${current === processSteps.length - 1 ? "opacity-30" : "active:scale-95"}`}>Next</button>
          </div>
        </div>
      )}
    </section>
  );
}
