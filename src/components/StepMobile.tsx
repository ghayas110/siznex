import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function StepMobile({ steps }: any) {
const [current, setCurrent] = useState(0);

const goTo = (index: number) => {
if (index < 0 || index >= steps.length) return;
setCurrent(index);
};

const swipeConfidence = (offset: number, velocity: number) => {
return Math.abs(offset) * velocity;
};

const swipeThreshold = 600;

return (
<div className="w-full px-4 py-16 space-y-6">
<AnimatePresence initial={false} mode="wait">
<motion.div
key={steps[current].id}
className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 text-center shadow-lg"
drag="x"
dragConstraints={{ left: 0, right: 0 }}
dragElastic={0.3}
onDragEnd={(_, info) => {
const swipe = swipeConfidence(info.offset.x, info.velocity.x);
if (swipe > swipeThreshold) goTo(current - 1);
else if (swipe < -swipeThreshold) goTo(current + 1);
}}
initial={{ opacity: 0, y: 40, scale: 0.96 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
exit={{ opacity: 0, y: -40, scale: 0.96 }}
transition={{ duration: 0.4, ease: "easeOut" }}
>
<div className="mb-4 text-brand-orange text-xs font-semibold tracking-wider">
{steps[current].phase}
</div>
<h3 className="text-xl font-bold text-white mb-3">
{steps[current].title}
</h3>
<p className="text-sm text-white/70 mb-4 leading-relaxed">
{steps[current].description}
</p>
<div className="bg-white/10 border border-white/10 rounded-xl p-4 flex items-center justify-center">
<img
src={steps[current].image}
alt={steps[current].title}
className="w-40 h-40 object-contain drop-shadow-xl"
/>
</div>
</motion.div>
</AnimatePresence>

{/* Indicators */}
<div className="flex justify-center gap-2 mt-2">
{steps.map((_: any, i: number) => (
<button
key={i}
onClick={() => goTo(i)}
className={`h-2.5 w-2.5 rounded-full transition-all duration-300
${i === current ? "bg-brand-orange scale-125" : "bg-white/30"}`}
/>
))}
</div>

{/* Prev / Next Buttons */}
<div className="flex justify-between mt-4 text-xs text-white/70">
<button
disabled={current === 0}
onClick={() => goTo(current - 1)}
className={`px-3 py-2 rounded-lg border border-white/10 backdrop-blur-sm
${current === 0 ? "opacity-30" : "active:scale-95"}`}
>
Prev
</button>
<button
disabled={current === steps.length - 1}
onClick={() => goTo(current + 1)}
className={`px-3 py-2 rounded-lg border border-white/10 backdrop-blur-sm
${current === steps.length - 1 ? "opacity-30" : "active:scale-95"}`}
>
Next
</button>
</div>
</div>
);
}
