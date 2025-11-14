'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useInView } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";
import CallToActionSection from '@/components/CallToActionSection';
import { servicesList } from '@/data/services';
import {
  Lightbulb,
  Palette,
  Rocket,
  Code,
  ShoppingCart,
  PenTool,
  Cpu,
  Globe,
  Zap,
} from "lucide-react";
import { i } from 'framer-motion/client';
import { useRouter } from 'next/navigation';


export default function ServicesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0)
  const router = useRouter();
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth(); // set initial width

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      const start = rect.top - windowHeight * 0.15;
      const end = rect.bottom - windowHeight * 0.85;

      let progress = 0;
      if (start < 0 && end > 0) {
        progress = Math.min(Math.max(-start / (sectionHeight - windowHeight * 0.3), 0), 1);
      } else if (start >= 0) {
        progress = 0;
      } else if (end <= 0) {
        progress = 1;
      }
      setScrollProgress(progress);
    };

    window.addEventListener('resize', updateWidth);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('resize', updateWidth);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const minFont = 18;
  const maxFont = 32;
  const fontSize = minFont + (maxFont - minFont) * Math.min(scrollProgress * 1.2, 1);

  return (
    <section className="text-white overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute top-0 inset-0 z-0">
        <Image
          src="/bg-services.jpg"
          alt="Work Background"
          width={1920}
          height={1000}
          objectFit="cover"
          className="opacity-80 w-full h-[600px]"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 md:px-10 pt-36 pb-20">
        <div className="mb-12 pt-32 pl-2 sm:pl-8 md:pt-40 md:pl-20 text-left max-w-4xl">
          <h1 className="text-[6vw] sm:text-[4.5vw] md:text-[2.2vw] font-light mb-4 leading-tight">
            We provide a full range of web services
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl">
            At XpertVA, we take a 360° approach to our projects. A successful digital experience requires the seamless integration of multiple elements, which is why our agency offers an array of services, from interface design to custom photography to digital marketing.
          </p>
        </div>

        {/* Carousel */}
      
{/* SERVICES — ANIMATED CARDS */}
<section className="relative bg-black text-white py-28 px-4 md:px-20">

  {/* Soft top gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-black to-black z-0 opacity-40"></div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-white text-[4vw] sm:text-[3vw] md:text-[2.2vw] mb-4 font-light">
      Our Professional Services
    </h2>
    <p className="text-gray-300 max-w-2xl mb-14">
      A complete suite of digital solutions designed to grow your brand and business.
    </p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {servicesList.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-[#111] border border-neutral-800 rounded-2xl p-8 hover:border-gray-600 transition-all hover:-translate-y-1 group shadow-md"
        onClick={() => router.push(`/${item.slug}`)}
        >
          <item.icon className="w-12 h-12 text-blue-400 mb-5 group-hover:scale-110 transition-all" />
          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
          <p className="text-gray-400">{item.desc}</p>
        </motion.div>
      ))}
    </div>

  </div>
</section>
{/* WHY CHOOSE US */}
<section className="relative bg-black text-white py-24 px-4 md:px-20">

  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-[4vw] sm:text-[3vw] md:text-[2.2vw] font-light mb-6">
      Why Choose Us
    </h2>
    <p className="text-gray-300 max-w-2xl mx-auto mb-16">
      We ensure premium quality, consistent communication, and real measurable results.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">

      {[
        { icon: Globe, title: "Global Expertise", desc: "We work with international clients across US, UK, UAE & Europe." },
        { icon: Zap, title: "Fast & Reliable", desc: "Quick delivery, transparent reports, and tracked progress." },
        { icon: Rocket, title: "Results Focused", desc: "Everything we do aims to grow your brand and revenue." },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="p-8 border border-neutral-800 rounded-2xl bg-[#0d0d0d] shadow-lg hover:border-gray-600 transition-all"
        >
          <item.icon className="w-12 h-12 mb-4 text-blue-400 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-400 text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>

</section>



      </div>
 
   

      <CallToActionSection />
    </section>
  );
}
// Professional Progress Bar Component
