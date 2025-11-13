'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Swiper for testimonials
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from 'swiper/modules';

// Icons
import {

  FaEbay,
  FaPenNib,
  FaChartLine
} from "react-icons/fa";
import { SiShopify, SiWalmart } from "react-icons/si";

import { FaArrowRight, FaUsers, FaLaptopCode, FaHeadset, FaBullhorn, FaAmazon } from "react-icons/fa";
import { MdWork } from "react-icons/md";

// Leadership Images
import AliZaidi from '../../../public/leader1.jpg';
import EbraheemAzhar from '../../../public/leader2.jpg';

const stats = [
  { label: 'USERS WORLDWIDE', value: 500, suffix: '+' },
  { label: 'PROFESSIONAL WEBSITES', value: 310, suffix: '+' },
  { label: 'SATISFIED CUSTOMERS', value: 97, suffix: '%' },
  { label: '5 STAR RATINGS', value: 98, suffix: '%' },
];

function AnimatedNumber({ value, inView, suffix }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return setCount(0);

    const duration = 1200;
    const start = performance.now();

    function animate(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [inView, value]);

  return <span>{count}{suffix}</span>;
}

export default function TeamPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-semibold mb-6">About XpertVA</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Supporting businesses globally with expert eCommerce services.
          We believe in innovation, teamwork, and world-class results.
        </p>
      </section>

   <section className="py-16 px-6 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
  {[
    { icon: <FaAmazon className="text-4xl text-yellow-400" />, label: "Amazon Services" },
    { icon: <FaEbay className="text-4xl text-blue-400" />, label: "eBay Services" },
    { icon: <SiShopify className="text-4xl text-green-400" />, label: "Shopify Services" },
    { icon: <SiWalmart className="text-4xl text-blue-500" />, label: "Walmart Services" },
    { icon: <FaPenNib className="text-4xl text-pink-400" />, label: "Graphic Designing" },
    { icon: <FaChartLine className="text-4xl text-purple-400" />, label: "Data Driven Marketing" },
  ].map((item) => (
    <div
      key={item.label}
      className="flex flex-col items-center bg-gray-900 rounded-lg py-6 hover:bg-gray-800 transition"
    >
      {item.icon}
      <p className="mt-3 text-gray-300 text-sm">{item.label}</p>
    </div>
  ))}
</section>


      {/* STATS */}
      <section ref={ref} className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl sm:text-5xl font-semibold">
                <AnimatedNumber value={stat.value} inView={inView} suffix={stat.suffix} />
              </div>
              <p className="uppercase text-gray-400 text-xs mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold mb-10">Meet Our Creative Team</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-14 leading-relaxed">
          The core leadership behind XpertVA’s success.
        </p>

        <div className="flex flex-col sm:flex-row gap-14 justify-center">
          <div>
            <Image src={AliZaidi} alt="Ali Zaidi" width={180} height={180} className="rounded-xl shadow-lg" />
            <p className="mt-5 text-xl font-semibold">Ali Zaidi</p>
            <p className="text-gray-400 text-sm">CEO / Founder</p>
          </div>

          <div>
            <Image src={EbraheemAzhar} alt="Ebraheem Azhar" width={180} height={180} className="rounded-xl shadow-lg" />
            <p className="mt-5 text-xl font-semibold">Ebraheem Azhar</p>
            <p className="text-gray-400 text-sm">COO / Co-Founder</p>
          </div>
        </div>
      </section>

      {/* ⭐ TESTIMONIAL SLIDER */}
      <section className="py-24 px-6 bg-gray-900">
        <h2 className="text-4xl text-center font-semibold mb-12">Testimonials</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3300 }}
          spaceBetween={40}
          slidesPerView={1}
          className="max-w-3xl mx-auto"
        >
          {[
            "XpertVA helped scale my Amazon business beyond expectations. Their professionalism and deep understanding of eCommerce sets them apart.",
            "Outstanding service! My Shopify store saw instant improvement. Highly recommend their VA team.",
            "The best eCommerce support agency I’ve worked with—period. Amazing communication and results."
          ].map((text, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-gray-800 p-10 rounded-xl shadow-xl text-center">
                <p className="text-gray-300 italic text-lg">{text}</p>
                <p className="text-gray-500 mt-3 text-sm">— Client Review</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 💼 JOB OPENINGS */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-center">Career Openings</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Senior Amazon VA",
              icon: <FaUsers className="text-4xl text-blue-400" />,
              desc: "Looking for an experienced Amazon VA with deep expertise in Seller Central.",
            },
            {
              title: "Web Developer (Shopify / Next.js)",
              icon: <FaLaptopCode className="text-4xl text-green-400" />,
              desc: "Build world-class eCommerce websites for global clients.",
            },
            {
              title: "Customer Support VA",
              icon: <FaHeadset className="text-4xl text-yellow-400" />,
              desc: "Provide outstanding support across Amazon, Walmart & Shopify.",
            },
            {
              title: "Marketing Specialist",
              icon: <FaBullhorn className="text-4xl text-red-400" />,
              desc: "Run data-driven campaigns and optimize digital marketing funnels.",
            },
          ].map((job) => (
            <div key={job.title} className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:bg-gray-800 transition">
              <div className="mb-4">{job.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{job.desc}</p>
              <button className="flex items-center gap-2 text-blue-400 hover:underline">
                Apply Now <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
