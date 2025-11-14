import { motion, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useProcessSteps from "@/hooks/useProcessStep"

interface Props {
    active: number;
    progress: number | MotionValue<number>;
    visible: boolean;
}

export default function ProgressBar({ active, progress, visible }: Props) {
    const { steps } = useProcessSteps();

    // ensure we have a plain number to use in calculations and styles
    const [progressNumber, setProgressNumber] = useState<number>(
        typeof progress === "number" ? progress : progress.get()
    );

    useEffect(() => {
        if (typeof progress === "number") {
            setProgressNumber(progress);
            return;
        }
        // subscribe to MotionValue changes
        setProgressNumber(progress.get());
        const unsubscribe = progress.onChange((v) => setProgressNumber(v));
        return () => unsubscribe();
    }, [progress]);

    return (
        <motion.div
            className="fixed left-8 lg:left-16 top-1/2 -translate-y-1/2 z-30 hidden md:block"
            animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <div className="relative h-[400px] w-[4px] rounded bg-white/10 overflow-hidden">
                {/* Progress Line */}
                <motion.div
                    className="absolute left-0 top-0 w-full bg-orange-300"
                    style={{ height: `${Math.min(progressNumber * 100, 100)}%` }}
                    transition={{ duration: 0.1 }}
                />

                {/* Step markers */}
                {steps.map((step, idx) => {
                    const isActive = active >= step.id;
                    const isPast = active > step.id;
                    const top = (idx / (steps.length - 1)) * 380;
                    const Icon = step.icon;

                    return (
                        <motion.div
                            key={step.id}
                            className="absolute flex flex-col items-center gap-1"
                            style={{ top, left: "50%", transform: "translateX(-50%)" }}
                        >
                            <motion.div
                                className={`w-8 h-8 rounded-full flex items-center justify-center border backdrop-blur-sm shadow-sm
                                ${isActive ? "bg-orange-300 text-white border-orange-300" : isPast ? "bg-orange-300/20 border-orange-300" : "bg-white/10 border-white/20 text-white/60"}`}
                                animate={{ scale: isActive ? 1.1 : 1 }}
                                transition={{ duration: 0.25 }}
                            >
                                <Icon className="w-4 h-4" />
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
