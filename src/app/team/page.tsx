'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import leadershipImg1 from '../../../public/leader1.jpg';
import leadershipImg2 from '../../../public/leader2.jpg';
import leadershipImg3 from '../../../public/leader3.jpg';

const stats = [
  { label: 'Employees', value: 50, suffix: '+' },
  { label: 'Projects', value: 300, suffix: '+' },
  { label: 'Years of experience', value: 5, suffix: '+' },
  { label: 'Awards', value: 20, suffix: '+' },
];

function AnimatedNumber({ value, inView, suffix }: { value: number; inView: boolean; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    const duration = 1200;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    }
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function TeamPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="text-black bg-white min-h-screen">
      {/* Section 1: Stats & Video */}
      <section className="py-24 px-4 sm:px-6" ref={ref}>
        <h2 className="text-2xl sm:text-[2.2rem] md:text-[2.8vw] font-light mx-auto leading-tight mb-16 max-w-4xl text-center">
          We’re a team of nimble, highly skilled individuals with diverse creative backgrounds
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-2">
                <AnimatedNumber value={stat.value} inView={inView} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 text-sm sm:text-base md:text-lg tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <video
            ref={videoRef}
            className="w-full rounded-xl aspect-video"
            controls
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Section 2: Diversity */}
      <section className="py-20 px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Commitment To Diversity</h2>
          <p className="text-black text-sm sm:text-base">
            DesignInDC has an unwavering commitment to diversity. Unlike other agencies, our commitment is not rhetoric but rather a central component that makes up the essence of our company. Working with a diverse team, as it relates to age, gender, and ethnicity, has played a key role in our firm's success.
            <br /><br />
            As a creative agency, we believe not only in diversity as it relates to race, but diversity in thought. This is why we prioritize hiring talent from various backgrounds, ages, and genders, as it fosters different viewpoints and cultivates creative synergy.
          </p>
        </div>
        <div className="md:w-1/2 max-w-xs sm:max-w-md mx-auto">
          <Image
            src={leadershipImg1}
            alt="Diversity"
            className="rounded-xl w-full h-auto object-cover"
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* Section 3: Leadership */}
      <section className="py-20 px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Our Leadership</h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-10">
          {[{
            src: leadershipImg1,
            name: 'Ziad Foty',
            title: 'CEO'
          }, {
            src: leadershipImg2,
            name: 'Robert M',
            title: 'COO'
          }, {
            src: leadershipImg3,
            name: 'Nancy Szarkowski',
            title: 'CCO (Chief Creative Officer)'
          }].map(({ src, name, title }) => (
            <div key={name} className="flex flex-col items-center">
              <Image src={src} alt={name} className="rounded-xl" width={160} height={160} />
              <p className="mt-4 text-base sm:text-lg font-medium">{name}</p>
              <p className="text-xs sm:text-sm text-gray-400">{title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
