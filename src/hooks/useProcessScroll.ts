// hooks/useProcessScroll.ts
import { useState, useEffect, useRef } from "react";
import { useScroll, useInView } from "framer-motion";

export default function useProcessScroll(stepCount: number) {
const containerRef = useRef<HTMLElement | null>(null);
const [isMobile, setIsMobile] = useState(false);
const [activeStep, setActiveStep] = useState(0);

const { scrollYProgress } = useScroll({
target: containerRef,
offset: ["start start", "end end"],
});

const isInView = useInView(containerRef, {
margin: "0px 0px 0px 0px",
amount: 0.1,
});

useEffect(() => {
const handleResize = () => setIsMobile(window.innerWidth < 768);
handleResize();
window.addEventListener("resize", handleResize);
return () => window.removeEventListener("resize", handleResize);
}, []);

useEffect(() => {
if (isMobile) return;

const unsubscribe = scrollYProgress.on("change", (progress) => {
const totalSections = stepCount + 1;
const sectionProgress = progress * totalSections;

if (sectionProgress < 0.2) {
setActiveStep(0);
} else {
const current = Math.min(
Math.max(Math.floor((sectionProgress - 0.1) * 1.1), 1),
stepCount
);
setActiveStep(current);
}
});

return () => unsubscribe();
}, [scrollYProgress, stepCount, isMobile]);

useEffect(() => {
if (!isMobile || activeStep !== 0) return;
const timer = setTimeout(() => {
setActiveStep(1);
}, 1500);
return () => clearTimeout(timer);
}, [isMobile, activeStep]);

return {
containerRef,
activeStep,
isInView,
scrollProgress: scrollYProgress,
isMobile,
};
}
