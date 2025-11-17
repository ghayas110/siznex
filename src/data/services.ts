// import { i } from "framer-motion/client";
import { Lightbulb, Rocket, Code, ShoppingCart, PenTool, Cpu } from "lucide-react";
export interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
    slug: string;
}


export const servicesList: Service[] = [
  { 
    icon: Lightbulb, 
    title: "Virtual Assistant Services",  
    desc: "Amazon, eBay, Shopify & Walmart experts to manage your store end-to-end.",
    slug: "va"
  },
  { 
    icon: Rocket, 
    title: "Marketing Solutions", 
    desc: "SEO, social media, PPC and conversion-focused campaigns.",
    slug: "marketing-solutions"
  },
  { 
    icon: Code, 
    title: "Web Development", 
    desc: "Custom websites, WordPress, E-Commerce, UI/UX & branding.",
    slug: "web-development"
  },
  { 
    icon: ShoppingCart, 
    title: "Amazon Operations", 
    desc: "Listings, optimization, product research & full store management.",
    slug: "amazon-operation"
  },
  { 
    icon: PenTool, 
    title: "Content & Branding", 
    desc: "Brand identity, creative graphics, video editing & product photography.",
    slug: "content-branding"
  },
  { 
    icon: Cpu, 
    title: "Mobile App Development", 
    desc: "Custom mobile apps for iOS and Android with user-focused design.",
    slug: "mobile-app-development"
  },
];
