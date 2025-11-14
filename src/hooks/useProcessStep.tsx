import { Lightbulb, Palette, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react";

export default function useProcessSteps() {
const steps = [
{
id: 1,
title: "Ideate",
phase: "01 • Discovery",
description:
"We begin by learning about your goals, audience, and the problem we aim to solve.",
image: "/images/hero-app-1.svg",
icon: Lightbulb,
accent: "orange-300",
direction: "left",
},
{
id: 2,
title: "Design",
phase: "02 • Creative",
description:
"We plan user flows, UI components, and craft a polished design system.",
image: "/images/hero-app-2.svg",
icon: Palette,
accent: "blue-500",
direction: "right",
},
{
id: 3,
title: "Develop",
phase: "03 • Engineering",
description:
"We build with quality code, scalability, and performance in mind.",
image: "/images/hero-app-develop.svg",
icon: Code,
accent: "green-500",
direction: "left",
},
{
id: 4,
title: "Test",
phase: "04 • QA",
description:
"We test your product thoroughly across real devices and use‑cases.",
image: "/images/hero-app-1.svg",
icon: TestTube,
accent: "purple-500",
direction: "right",
},
{
id: 5,
title: "Launch",
phase: "05 • Deployment",
description:
"We deploy smoothly and ensure everything runs perfectly from day one.",
image: "/images/hero-app-2.svg",
icon: Rocket,
accent: "yellow-500",
direction: "left",
},
{
id: 6,
title: "Support",
phase: "06 • Growth",
description:
"We stay with you — updates, improvements, support, and scaling.",
image: "/images/hero-app-support.svg",
icon: HeadphonesIcon,
accent: "red-500",
direction: "right",
},
];

return { steps };
}
