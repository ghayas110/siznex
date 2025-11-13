import { motion, AnimatePresence } from "framer-motion";

export default function StepDesktop({ steps, activeStep }: any) {
const active = steps.find((s: any) => s.id === activeStep);

return (
<div className="absolute inset-0 flex items-center justify-center">
<AnimatePresence mode="wait">
{active && (
<motion.div
key={active.id}
className="grid grid-cols-2 gap-20 max-w-6xl mx-auto px-10"
initial={{ opacity: 0, y: 60, scale: 0.95 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
exit={{ opacity: 0, y: -40, scale: 0.95 }}
transition={{ duration: 0.6, ease: "easeOut" }}
>
{/* Text */}
<div className="flex flex-col justify-center space-y-6">
<motion.span className="text-sm text-brand-orange font-medium tracking-widest uppercase">
{active.phase}
</motion.span>
<motion.h3 className="text-5xl font-bold text-white leading-tight">
{active.title}
</motion.h3>
<motion.p className="text-lg text-white/70 leading-relaxed max-w-md">
{active.description}
</motion.p>
</div>

{/* Image */}
<motion.div
className="flex items-center justify-center"
initial={{ opacity: 0, x: active.direction === "left" ? 80 : -80 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: active.direction === "left" ? -80 : 80 }}
transition={{ duration: 0.6, ease: "easeOut" }}
>
<motion.div
className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 shadow-xl"
whileHover={{ scale: 1.02 }}
transition={{ duration: 0.3 }}
>
<img
src={active.image}
alt={active.title}
className="w-[320px] h-[320px] object-contain drop-shadow-xl"
/>
</motion.div>
</motion.div>
</motion.div>
)}
</AnimatePresence>
</div>
);
}
