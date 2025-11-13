"use client";

import { useState, useEffect } from "react";
import { MotionValue } from "framer-motion";

export function useProcessSteps(scrollYProgress: MotionValue<number>, totalSteps: number) {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // scroll logic only on desktop
  useEffect(() => {
    if (isMobile) return;
    const unsub = scrollYProgress.onChange((p) => {
      const stepIndex = Math.floor(p * totalSteps);
      setActiveStep(Math.max(0, Math.min(stepIndex, totalSteps)));
    });
    return () => unsub();
  }, [scrollYProgress, totalSteps, isMobile]);

  return { activeStep, setActiveStep, isMobile };
}
