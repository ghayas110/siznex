"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useInView, MotionValue } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Code,
  TestTube,
  Rocket,
  HeadphonesIcon,
  LucideIcon,
} from "lucide-react";

// Types
interface ProcessStep {
  id: number;
  title: string;
  phase: string;
  description: string;
  image: string;
  icon: LucideIcon;
  gradient: string;
  accentColor: string;
  direction: "left" | "right";
}

interface ProfessionalProgressBarProps {
  activeStep: number;
  scrollProgress: number;
  isVisible: boolean;
}

// Data
const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Ideate",
    phase: "01 • Discovery",
    description:
      "We kick things off with discovery — learning about your users, business, and goals.",
    image: "/images/hero-app-1.svg",
    icon: Lightbulb,
    gradient: "from-brand-orange/30 via-brand-orange/20 to-brand-orange/10",
    accentColor: "brand-orange",
    direction: "left",
  },
  {
    id: 2,
    title: "Design",
    phase: "02 • Creative",
    description:
      "Siznex design team maps out the flow, look, and feel of your product.",
    image: "/images/hero-app-2.svg",
    icon: Palette,
    gradient: "from-blue-500/30 via-blue-500/20 to-blue-500/10",
    accentColor: "blue-500",
    direction: "right",
  },
  {
    id: 3,
    title: "Develop",
    phase: "03 • Engineering",
    description:
      "Siznex developers build it out with clean, scalable code and real-world performance in mind.",
    image: "/images/hero-app-develop.svg",
    icon: Code,
    gradient: "from-green-500/30 via-green-500/20 to-green-500/10",
    accentColor: "green-500",
    direction: "left",
  },
  {
    id: 4,
    title: "Test",
    phase: "04 • Quality Assurance",
    description:
      "We test everything — functionality, speed, design — before launch.",
    image: "/images/hero-app-1.svg",
    icon: TestTube,
    gradient: "from-purple-500/30 via-purple-500/20 to-purple-500/10",
    accentColor: "purple-500",
    direction: "right",
  },
  {
    id: 5,
    title: "Launch",
    phase: "05 • Deployment",
    description:
      "We help you go live without stress, including store submission and setup.",
    image: "/images/hero-app-2.svg",
    icon: Rocket,
    gradient: "from-yellow-500/30 via-yellow-500/20 to-yellow-500/10",
    accentColor: "yellow-500",
    direction: "left",
  },
  {
    id: 6,
    title: "Support",
    phase: "06 • Maintenance",
    description:
      "We stick around after launch to fix bugs, make updates, and help you scale.",
    image: "/images/hero-app-support.svg",
    icon: HeadphonesIcon,
    gradient: "from-red-500/30 via-red-500/20 to-red-500/10",
    accentColor: "red-500",
    direction: "right",
  },
];

// Professional Progress Bar Component
function ProfessionalProgressBar({
  activeStep,
  scrollProgress,
  isVisible,
}: ProfessionalProgressBarProps): React.ReactElement {
  return (
    <motion.div
      className="fixed left-6 lg:left-16 xl:left-20 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -60,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="relative">
        {/* Enhanced Progress Line Background */}
        <div className="w-0.5 md:w-1 h-80 md:h-96 lg:h-[420px] bg-gradient-to-b from-brand-border/40 via-brand-border/20 to-brand-border/40 rounded-full shadow-inner">
          <motion.div
            className="w-full rounded-full bg-gradient-to-b from-brand-orange via-brand-orange/90 to-brand-orange/70 shadow-lg"
            style={{
              boxShadow:
                "0 0 20px rgba(217, 126, 27, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.1)",
            }}
            animate={{
              height: `${Math.min(scrollProgress * 100, 100)}%`,
              boxShadow: `0 0 ${
                20 + scrollProgress * 10
              }px rgba(217, 126, 27, ${0.3 + scrollProgress * 0.2})`,
            }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>

        {/* Enhanced Step Indicators */}
        {processSteps.map((step, index) => {
          const isActive = activeStep >= step.id;
          const isPassed = activeStep > step.id;
          const Icon = step.icon;

          return (
            <motion.div
              key={step.id}
              className="absolute flex items-center"
              style={{
                top: `${(index / (processSteps.length - 1)) * 320}px`,
                left: "50%",
                transform: "translateX(-50%)",
              }}
              initial={{ opacity: 0, scale: 0, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                delay: index * 0.1 + 0.3,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
            >
              {/* Enhanced Step Circle */}
              <motion.div
                className={`relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 flex items-center justify-center z-10 backdrop-blur-sm ${
                  isActive
                    ? "bg-brand-orange border-brand-orange text-brand-bg shadow-xl"
                    : isPassed
                    ? "bg-brand-orange/20 border-brand-orange text-brand-orange shadow-lg"
                    : "bg-brand-bg/80 border-brand-border text-text-muted shadow-md"
                }`}
                animate={{
                  scale: isActive ? 1.15 : isPassed ? 1.05 : 1,
                  boxShadow: isActive
                    ? "0 0 30px rgba(217, 126, 27, 0.6), 0 8px 25px rgba(217, 126, 27, 0.3)"
                    : isPassed
                    ? "0 0 15px rgba(217, 126, 27, 0.3), 0 4px 15px rgba(217, 126, 27, 0.2)"
                    : "0 2px 10px rgba(0, 0, 0, 0.1)",
                  borderColor: isActive
                    ? "#D97E1B"
                    : isPassed
                    ? "#D97E1B"
                    : "#2A1A12",
                }}
                whileHover={{
                  scale: isActive ? 1.2 : 1.1,
                  boxShadow: "0 0 35px rgba(217, 126, 27, 0.4)",
                }}
                transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
              >
                <Icon className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />

                {/* Pulse effect for active step */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-brand-orange"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>

              {/* Enhanced Step Label */}
              <motion.div
                className="absolute left-10 md:left-12 lg:left-16 min-w-[100px] md:min-w-[120px] lg:min-w-[140px]"
                animate={{
                  opacity: isActive ? 1 : 0.8,
                  x: isActive ? 0 : -8,
                  scale: isActive ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className={`text-xs md:text-sm font-bold font-grotesk ${
                    isActive
                      ? "text-brand-orange"
                      : isPassed
                      ? "text-brand-orange/80"
                      : "text-text-primary"
                  }`}
                  animate={{
                    textShadow: isActive
                      ? "0 0 10px rgba(217, 126, 27, 0.3)"
                      : "none",
                  }}
                >
                  {step.title}
                </motion.div>
                <div className="text-xs text-text-muted mt-0.5 md:mt-1 font-medium">
                  {step.phase.split(" • ")[1]}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

// Main Professional Section Component
export function ProductDevelopmentProcessProfessional(): React.ReactElement {
  const containerRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track if the section is in view
  const isInView: boolean = useInView(containerRef, {
    margin: "0px 0px 0px 0px",
    amount: 0.1,
  });

  // Mobile detection effect
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = (): void => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Enhanced scroll progress tracking with mobile-optimized sensitivity
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress: number) => {
      // Skip scroll-based updates on mobile - use manual navigation instead
      if (isMobileView) return;

      const totalSteps: number = processSteps.length;
      const totalSections: number = totalSteps + 1; // +1 for intro

      // More sensitive scroll detection for desktop
      const sectionProgress: number = progress * totalSections;

      if (sectionProgress < 0.15) {
        setActiveStep(0); // Show intro/heading
      } else {
        // Calculate step with better sensitivity
        const currentStep: number = Math.min(
          Math.max(Math.floor((sectionProgress - 0.1) * 1.2), 1),
          totalSteps
        );
        setActiveStep(currentStep);
      }
    });

    return unsubscribe;
  }, [scrollYProgress, isMobileView]);

  // Auto-advance for mobile - start with first step
  useEffect(() => {
    if (isMobileView && activeStep === 0) {
      // Auto-start with first step after 2 seconds on mobile
      const timer = setTimeout(() => {
        console.log("Auto-advancing to step 1 on mobile");
        setActiveStep(1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isMobileView, activeStep]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{
        // Desktop: Full scroll-based height, Mobile: Auto height
        height: isMobileView ? "auto" : `${(processSteps.length + 1) * 70}vh`,
        minHeight: isMobileView
          ? "auto"
          : `${(processSteps.length + 1) * 500}px`,
      }}
    >
      {/* Enhanced Sticky Content Container - Desktop Only */}
      <div className="hidden md:block sticky top-0 h-screen bg-gradient-to-br from-brand-bg via-brand-bg to-brand-bg/95 overflow-hidden">
        {/* Professional Background Elements */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(217, 126, 27, 0.15) 0%, rgba(217, 126, 27, 0.05) 40%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)",
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
              x: [0, -80, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(245, 245, 245, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245, 245, 245, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Enhanced Progress Bar - Desktop Only */}
        <ProfessionalProgressBar
          activeStep={activeStep}
          scrollProgress={scrollYProgress.get()}
          isVisible={isInView}
        />

        {/* Professional Content Container - Desktop Only */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20 xl:px-28 w-full">
            {/* Enhanced Header - Show when activeStep is 0 */}
            <motion.div
              className="text-center"
              animate={{
                opacity: activeStep === 0 ? 1 : 0,
                y: activeStep === 0 ? 0 : -60,
                scale: activeStep === 0 ? 1 : 0.9,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full bg-gradient-to-r from-brand-orange/15 to-brand-orange/10 border border-brand-orange/30 backdrop-blur-sm mb-6 md:mb-8 lg:mb-12 shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(217, 126, 27, 0.3)",
                  borderColor: "rgba(217, 126, 27, 0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-orange rounded-full animate-pulse" />
                <span className="text-brand-orange font-semibold text-sm md:text-base lg:text-lg tracking-wide">
                  Our Process
                </span>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-orange rounded-full animate-pulse" />
              </motion.div>

              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold font-grotesk text-text-primary mb-4 md:mb-6 lg:mb-8 leading-tight"
                style={{
                  textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                }}
              >
                Product Development
                <motion.span
                  className="block bg-gradient-to-r from-brand-orange via-brand-orange to-brand-orange/80 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Process
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
                style={{
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                From initial concept to ongoing support, we guide your product
                through every stage of development with
                <span className="text-brand-orange font-semibold">
                  {" "}
                  precision
                </span>
                ,
                <span className="text-brand-orange font-semibold">
                  {" "}
                  expertise
                </span>
                , and
                <span className="text-brand-orange font-semibold">
                  {" "}
                  innovation
                </span>
                .
              </motion.p>

              {/* Scroll indicator */}
              <motion.div
                className="mt-8 md:mt-12 lg:mt-16 flex flex-col items-center gap-3 md:gap-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-text-muted text-xs md:text-sm font-medium tracking-wide text-center px-4">
                  Scroll to explore our process
                </span>
                <motion.div
                  className="w-5 h-8 md:w-6 md:h-10 border-2 border-brand-orange/40 rounded-full flex justify-center relative overflow-hidden"
                  whileHover={{ borderColor: "rgba(217, 126, 27, 0.8)" }}
                >
                  <motion.div
                    className="w-0.5 md:w-1 h-2 md:h-3 bg-brand-orange rounded-full mt-1.5 md:mt-2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>

              {/* Mobile Navigation Controls */}
              <motion.div
                className="mt-8 md:hidden flex flex-col items-center gap-4 bg-brand-bg/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-orange/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="text-center">
                  <h3 className="text-brand-orange font-semibold text-sm mb-1">
                    Development Process
                  </h3>
                  <span className="text-text-muted text-xs">
                    Tap any step to explore
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 w-full max-w-sm">
                  {processSteps.map((step) => (
                    <motion.button
                      key={step.id}
                      onClick={() => {
                        console.log(
                          `Mobile button clicked: Setting step to ${step.id}`
                        );
                        setActiveStep(step.id);
                      }}
                      className={`px-4 py-3 rounded-xl text-xs font-medium transition-all duration-300 flex flex-col items-center gap-1 ${
                        activeStep === step.id
                          ? "bg-brand-orange text-brand-bg shadow-lg scale-105"
                          : "bg-brand-orange/10 text-brand-orange border border-brand-orange/30 hover:bg-brand-orange/20"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <step.icon className="w-4 h-4" />
                      <span>{step.title}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Process Steps - Animated Content - Desktop Only */}
            <div className="absolute inset-0 flex items-center justify-center">
              {processSteps.map((step) => {
                const isActive = activeStep === step.id;
                const Icon = step.icon;

                // Only render the active step to prevent overlapping
                if (!isActive) return null;

                return (
                  <motion.div
                    key={step.id}
                    className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24"
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      y: 50,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 xl:gap-24 items-center w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20 xl:px-28 ${
                        step.direction === "right"
                          ? "lg:grid-flow-col-dense"
                          : ""
                      }`}
                    >
                      {/* Enhanced Content Section */}
                      <motion.div
                        className={`space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 ${
                          step.direction === "right" ? "lg:col-start-2" : ""
                        } flex flex-col justify-center min-h-[300px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] py-4 md:py-6 lg:py-8 xl:py-12`}
                        initial={{
                          x: step.direction === "left" ? -80 : 80,
                          opacity: 0,
                          scale: 0.95,
                        }}
                        animate={{
                          x: isActive
                            ? 0
                            : step.direction === "left"
                            ? -80
                            : 80,
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0.95,
                        }}
                        transition={{
                          duration: 0.7,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          delay: isActive ? 0.1 : 0,
                        }}
                      >
                        {/* Enhanced Phase Badge */}
                        <motion.div
                          className={`inline-flex items-center gap-2 md:gap-3 lg:gap-4 px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full bg-gradient-to-r from-${step.accentColor}/15 to-${step.accentColor}/10 border border-${step.accentColor}/30 backdrop-blur-sm shadow-lg`}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: `0 0 30px rgba(217, 126, 27, 0.3)`,
                            borderColor: `rgba(217, 126, 27, 0.5)`,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div
                            className={`p-2 rounded-full bg-${step.accentColor}/20`}
                          >
                            <Icon
                              className={`w-5 h-5 text-${
                                step.accentColor === "brand-orange"
                                  ? "brand-orange"
                                  : step.accentColor
                              }`}
                            />
                          </div>
                          <span
                            className={`text-xs md:text-sm font-bold tracking-wider ${
                              step.accentColor === "brand-orange"
                                ? "text-brand-orange"
                                : `text-${step.accentColor}`
                            }`}
                          >
                            {step.phase}
                          </span>
                        </motion.div>

                        {/* Enhanced Title */}
                        <motion.div className="overflow-hidden">
                          <motion.h3
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-grotesk text-text-primary leading-tight"
                            style={{
                              textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                            }}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{
                              y: isActive ? 0 : 100,
                              opacity: isActive ? 1 : 0,
                              textShadow: isActive
                                ? "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(217, 126, 27, 0.1)"
                                : "0 4px 20px rgba(0, 0, 0, 0.3)",
                            }}
                            transition={{
                              duration: 0.8,
                              ease: [0.25, 0.46, 0.45, 0.94],
                              delay: isActive ? 0.2 : 0,
                            }}
                          >
                            {step.title}
                          </motion.h3>
                        </motion.div>

                        {/* Enhanced Description */}
                        <motion.div className="overflow-hidden">
                          <motion.p
                            className="text-sm md:text-base lg:text-lg xl:text-xl text-text-muted leading-relaxed max-w-2xl"
                            style={{
                              textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                            }}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{
                              y: isActive ? 0 : 50,
                              opacity: isActive ? 1 : 0,
                            }}
                            transition={{
                              duration: 0.6,
                              ease: [0.25, 0.46, 0.45, 0.94],
                              delay: isActive ? 0.3 : 0,
                            }}
                          >
                            {step.description}
                          </motion.p>
                        </motion.div>

                        {/* Enhanced CTA Button */}
                        <motion.div className="overflow-hidden hidden md:block">
                          <motion.button
                            className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-brand-orange via-brand-orange to-brand-orange/90 text-brand-bg font-bold text-lg rounded-2xl shadow-xl relative overflow-hidden"
                            initial={{ y: 30, opacity: 0, scale: 0.9 }}
                            animate={{
                              y: isActive ? 0 : 30,
                              opacity: isActive ? 1 : 0,
                              scale: isActive ? 1 : 0.9,
                            }}
                            whileHover={{
                              scale: 1.05,
                              boxShadow:
                                "0 25px 50px rgba(217, 126, 27, 0.4), 0 0 50px rgba(217, 126, 27, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                              duration: 0.5,
                              ease: [0.25, 0.46, 0.45, 0.94],
                              delay: isActive ? 0.4 : 0,
                            }}
                          >
                            {/* Button shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatDelay: 2,
                              }}
                            />

                            <span className="relative z-10">
                              Explore {step.title}
                            </span>
                            <motion.div
                              className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                              animate={{ x: [0, 8, 0] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 4,
                              }}
                            >
                              →
                            </motion.div>
                          </motion.button>
                        </motion.div>
                      </motion.div>

                      {/* Enhanced Image Section */}
                      <motion.div
                        className={`${
                          step.direction === "right" ? "lg:col-start-1" : ""
                        } flex items-center justify-center min-h-[300px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] py-4 md:py-6 lg:py-8 xl:py-12`}
                        initial={{
                          x: step.direction === "left" ? 100 : -100,
                          opacity: 0,
                          scale: 0.8,
                          rotateY: step.direction === "left" ? -15 : 15,
                        }}
                        animate={{
                          x: isActive
                            ? 0
                            : step.direction === "left"
                            ? 100
                            : -100,
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0.8,
                          rotateY: isActive
                            ? 0
                            : step.direction === "left"
                            ? -15
                            : 15,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          delay: isActive ? 0.2 : 0,
                        }}
                      >
                        <motion.div
                          className={`relative p-6 md:p-8 lg:p-12 xl:p-16 rounded-2xl md:rounded-3xl bg-gradient-to-br ${step.gradient} backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden`}
                          whileHover={{
                            scale: 1.02,
                            rotateY: step.direction === "left" ? 8 : -8,
                            boxShadow: "0 40px 80px rgba(0, 0, 0, 0.4)",
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          style={{
                            boxShadow:
                              "0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          {/* Enhanced Floating Elements */}
                          <motion.div
                            className={`absolute top-6 right-6 w-24 h-24 bg-${
                              step.accentColor === "brand-orange"
                                ? "brand-orange"
                                : step.accentColor
                            }/20 rounded-full blur-2xl`}
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.4, 0.8, 0.4],
                              rotate: [0, 180, 360],
                            }}
                            transition={{ duration: 6, repeat: Infinity }}
                          />

                          <motion.div
                            className={`absolute bottom-6 left-6 w-16 h-16 bg-${
                              step.accentColor === "brand-orange"
                                ? "brand-orange"
                                : step.accentColor
                            }/15 rounded-full blur-xl`}
                            animate={{
                              scale: [1.2, 1, 1.2],
                              opacity: [0.3, 0.6, 0.3],
                              rotate: [360, 180, 0],
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              delay: 2,
                            }}
                          />

                          <motion.div
                            className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[420px] z-10 flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="relative w-full h-full max-w-[280px] md:max-w-[320px] lg:max-w-[400px] max-h-[280px] md:max-h-[320px] lg:max-h-[400px] flex items-center justify-center">
                              <img
                                src={step.image}
                                alt={`${step.title} process illustration`}
                                className="w-full h-full object-contain drop-shadow-2xl"
                                style={{
                                  filter:
                                    "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.2))",
                                  maxWidth: "100%",
                                  maxHeight: "100%",
                                }}
                                loading="lazy"
                                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                  console.log(
                                    `Failed to load image: ${step.image}`
                                  );
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = "none";
                                  const fallback = target.parentElement?.querySelector(
                                    ".fallback-icon"
                                  ) as HTMLElement | null;
                                  if (fallback) fallback.style.display = "flex";
                                }}
                                onLoad={() => {
                                  console.log(
                                    `Successfully loaded image: ${step.image}`
                                  );
                                }}
                              />
                              {/* Fallback Icon */}
                              <div
                                className="fallback-icon absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 rounded-xl md:rounded-2xl border border-brand-orange/20"
                                style={{ display: "none" }}
                              >
                                <Icon className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-brand-orange" />
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-Only: Primary Step Display */}
      <div className="md:hidden bg-brand-bg min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold font-grotesk text-text-primary mb-4">
              Our Development Process
            </h2>
            <p className="text-text-muted text-sm">
              Swipe through each step of our proven methodology
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  className="bg-gradient-to-br from-brand-bg via-brand-bg to-brand-bg/95 rounded-2xl p-6 border border-brand-orange/20"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-brand-orange" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-brand-orange">
                          {step.phase}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold font-grotesk text-text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="w-full h-32 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 rounded-xl flex items-center justify-center">
                        <img
                          src={step.image}
                          alt={`${step.title} illustration`}
                          className="w-24 h-24 object-contain"
                          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const sibling = target.nextElementSibling as HTMLElement | null;
                            if (sibling) sibling.style.display = "flex";
                          }}
                        />
                        <div className="hidden w-24 h-24 items-center justify-center">
                          <Icon className="w-12 h-12 text-brand-orange/60" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}