"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

type SuccessStory = {
  id: number;
  clientName: string;
  clientRole?: string;
  projectTitle: string;
  description: string;
  imageAlt?: string;
  imageUrl: string; // placeholder
  logoUrl?: string; // placeholder
};

const successStories: SuccessStory[] = [

  {
    id: 2,
    clientName: "1st Quarter Sales",
    // clientRole: "CEO, NovaCraft Apparel",
    projectTitle: "Virtual Assistant Service Boosted Sales by 3x",
    description:
      "Closed 4,308 order items in the first quarter, delivering $976,715.50 in ordered product sales and building a strong revenue foundation for the year..",
    imageAlt: "project preview",
    imageUrl: "/1st-quarter.jpg",
    // logoUrl: "/images/logos/novacraft-logo.svg",
  },
  {
    id: 3,
    clientName: "Last Quarter Sales",
    // clientRole: "Virtual Assistant Service Boosted Sales by 3x",
    projectTitle: "Virtual Assistant Service Boosted Sales by 6x",
    description:
      "Achieved 54,039 order items over three months, generating $9,226,488.00 in ordered product sales and sustaining high-volume, high-value growth.",
    imageAlt: "Horizon Ventures dashboard",
    imageUrl: "/last-quarter.jpg",
    // logoUrl: "/images/logos/horizon-logo.svg",
  },
  {
  id: 1,
  clientName: "Last Three Months Sales",
  // clientRole: "Founder, Brightline Studio",
  projectTitle: "Virtual Assistant Service Boosted Sales by 10x",
  description:
    "Processed 7,638 order items last quarter, resulting in $2,086,577.20 in ordered product sales and reinforcing consistent, profitable performance.",
  imageAlt: "project preview",
  imageUrl: "/SDS.jpg", // 🔁 Replace with real image
  // logoUrl: "/images/logos/brightline-logo.svg", // 🔁 Replace with client logo
},

];

export default function SuccessStoriesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  // Determine how many cards per view based on screen width
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // tablet
      } else {
        setCardsPerView(3); // desktop
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Create pages of stories based on cardsPerView
  const pages = useMemo(() => {
    const chunks: SuccessStory[][] = [];
    for (let i = 0; i < successStories.length; i += cardsPerView) {
      chunks.push(successStories.slice(i, i + cardsPerView));
    }
    return chunks;
  }, [cardsPerView]);

  const totalPages = pages.length;

  const goToPage = (index: number) => {
    if (index < 0) {
      setCurrentPage(totalPages - 1);
    } else if (index >= totalPages) {
      setCurrentPage(0);
    } else {
      setCurrentPage(index);
    }
  };

  const handlePrev = () => goToPage(currentPage - 1);
  const handleNext = () => goToPage(currentPage + 1);

  // Auto-play with hover pause
  useEffect(() => {
    if (isHovered || totalPages <= 1) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5500); // 5.5s per slide

    return () => clearInterval(interval);
  }, [isHovered, totalPages]);

  // Touch/swipe for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartXRef.current;
    if (startX === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    const threshold = 50; // px
    if (diff > threshold) {
      // swipe left
      handleNext();
    } else if (diff < -threshold) {
      // swipe right
      handlePrev();
    }

    touchStartXRef.current = null;
  };

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-4 sm:px-6 lg:px-10"
    >
      {/* Floating decorative accents */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/90 mb-4">
            <Quote className="h-3 w-3" />
            CLIENT WINS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            Success Stories
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-300">
            Real results from brands who trusted us. Explore how we helped them
            grow, scale, and succeed.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Track */}
          <div className="overflow-hidden rounded-3xl border border-white/5 bg-slate-900/60 backdrop-blur-xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentPage * 100}%` }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {pages.map((page, pageIndex) => (
                <div
                  key={pageIndex}
                  className="min-w-full grid gap-6 p-5 sm:p-8 md:p-10 lg:p-12
                             sm:grid-cols-2 lg:grid-cols-3"
                >
                  {page.map((story) => (
                    <motion.article
                      key={story.id}
                      whileHover={{
                        scale: 1.02,
                        boxShadow:
                          "0 24px 60px rgba(15, 23, 42, 0.75)",
                      }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-slate-900/80"
                    >
                      {/* Image placeholder */}
                      <div className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden">
                        {/* Replace with <Image> if using next/image */}
                        <div className="h-full w-full bg-slate-800/80">
                          <div className="h-full w-full bg-gradient-to-tr from-cyan-500/40 via-blue-500/40 to-slate-900/60 flex items-center justify-center">
                          <Image
                              src={story.imageUrl}
                              alt={story.imageAlt || "Success story image"}
                              width={400}
                              height={300}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>

                        {/* Optional client logo overlay */}
                        {story.logoUrl && (
                          <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-100 backdrop-blur-md">
                            CLIENT LOGO
                          </div>
                        )}
                      </div>

                      {/* Body */}
                      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <h3 className="text-sm sm:text-base font-semibold text-white">
                              {story.clientName}
                            </h3>
                            <p className="text-xs sm:text-[13px] text-slate-300/80">
                              {story.clientRole}
                            </p>
                          </div>
                          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-emerald-300/90">
                            Case Study
                          </span>
                        </div>

                        <p className="text-[13px] sm:text-sm font-medium text-cyan-200">
                          {story.projectTitle}
                        </p>

                        <p className="text-[12px] sm:text-[13px] leading-relaxed text-slate-300">
                          {story.description}
                        </p>

                        <div className="mt-auto flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2 text-[11px] text-slate-400">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span>Verified client results</span>
                          </div>
                      
                        </div>
                      </div>
                    </motion.article>
                  ))}

                  {/* If last page has fewer than cardsPerView, fill with invisible placeholders for alignment */}
                  {page.length < cardsPerView &&
                    Array.from({ length: cardsPerView - page.length }).map(
                      (_, i) => (
                        <div key={`placeholder-${i}`} className="hidden lg:block" />
                      )
                    )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between gap-4">
            {/* Left side: arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous success story"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-100 shadow-sm transition hover:border-cyan-400/60 hover:bg-slate-900"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next success story"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-100 shadow-sm transition hover:border-cyan-400/60 hover:bg-slate-900"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Right side: dots / progress indicators */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => {
                const isActive = index === currentPage;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToPage(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className="group relative h-2.5"
                  >
                    <span
                      className={`block rounded-full transition-all ${
                        isActive
                          ? "w-7 bg-cyan-400"
                          : "w-2.5 bg-slate-600 group-hover:bg-slate-400"
                      } h-2.5`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
