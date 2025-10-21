'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CallToActionSection from '@/components/CallToActionSection';

const servicesData = [
  {
    title: 'Web Design & Development',
    image: 'https://designindc.com/wp-content/uploads/2022/12/web-dev@2x.jpg',
    link: 'https://designindc.com/services/web-design-development/',
    items: [
      'Web Design',
      'Web Development',
      'UI / UX Design',
      'Corporate Web Design',
      'Wordpress Development',
      'E-commerce Web Development',
      'Website Maintenance',
      'Custom Web Design',
    ],
  },
  {
    title: 'App Development',
    image: 'https://designindc.com/wp-content/uploads/2023/02/app-dev@2x.jpg',
    link: 'https://designindc.com/services/app-development/',
    items: [
      'Web Applications',
      'Mobile App Development',
      'Intranet Portal Development',
      'Custom CRM / CMS Development',
      'API Integration',
      'CRM Integration',
      'Custom LMS Development',
      'QA Testing',
      'React Development',
      'Laravel / PHP',
      'Node.js',
    ],
  },
  {
    title: 'Videography & Photography',
    image: 'https://designindc.com/wp-content/uploads/2023/02/media@2x.jpg',
    link: 'https://designindc.com/services/videography-photography/',
    items: [
      'Pre-Production',
      'Video Production',
      'Post-Production',
      'Animation',
      'Motion Graphics',
      '3D Rendering',
      'Scripting',
      'Product Photography',
      'Headshots',
    ],
  },
  {
    title: 'Design & Branding',
    image: 'https://designindc.com/wp-content/uploads/2023/02/design@2x.jpg',
    link: 'https://designindc.com/services/design-branding/',
    items: [
      'UI / UX Design',
      'Design Audit',
      'Prototyping',
      'Logo Design',
      'Graphic Design',
      'Product Design',
      'Style Guides',
    ],
  },
  {
    title: 'Marketing',
    image: 'https://designindc.com/wp-content/uploads/2023/02/marketing@2x.jpg',
    link: 'https://designindc.com/services/marketing/',
    items: [
      'Strategy',
      'Sales Consulting',
      'Content Marketing',
      'SEO',
      'Paid Ads / PPC',
      'Social Media',
    ],
  },
];

export default function ServicesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

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

  const maxTranslateX = windowWidth * (servicesData.length - 1);
  const translateX = -scrollProgress * maxTranslateX;

  const minFont = 18;
  const maxFont = 32;
  const fontSize = minFont + (maxFont - minFont) * Math.min(scrollProgress * 1.2, 1);

  return (
    <section className="text-white overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute top-0 inset-0 z-0">
        <Image
          src="/bg-services.png"
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
            At DesignInDC, we take a 360° approach to our projects. A successful digital experience requires the seamless integration of multiple elements, which is why our agency offers an array of services, from interface design to custom photography to digital marketing.
          </p>
        </div>

        {/* Carousel */}
      
      </div>

      <CallToActionSection />
    </section>
  );
}
