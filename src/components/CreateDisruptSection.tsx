'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

const sections = [
  { label: 'Create', bg: 'bg-create' },
  { label: 'Collaborate', bg: 'bg-collaborate' },
  { label: 'Disrupt', bg: 'bg-disrupt' },
];

const CreateDisruptSection = () => {
  const [activeBg, setActiveBg] = useState('');

  return (
    <div
      className={clsx(
        'transition-all duration-700 w-full bg-cover bg-center',
        activeBg
      )}
    >
      {sections.map((section, index) => {
        const { ref, inView } = useInView({
          triggerOnce: false,
          threshold: 0.5,
        });

        return (
          <div
            key={section.label}
            ref={ref}
            onMouseEnter={() => setActiveBg(section.bg)}
            onTouchStart={() => setActiveBg(section.bg)} // 👈 for mobile background change
            className={clsx(
              'min-h-64 border-t border-white flex items-center text-white transition-all duration-700',
              index === 2 && 'border-b',
              'px-6 sm:px-12 md:px-24',
              index % 2 === 0
                ? 'justify-start text-left'
                : 'justify-end text-right'
            )}
          >
            <h2
              className={clsx(
                'text-4xl sm:text-5xl md:text-7xl font-medium transform transition-all duration-700 ease-out',
                inView
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-10 opacity-50'
              )}
            >
              {section.label}
            </h2>
          </div>
        );
      })}

      {/* Description Section */}
      <div className="bg-black/60 text-white flex flex-col md:flex-row justify-end px-6 sm:px-12 py-12 space-y-8 md:space-y-0">
        <p className="text-base sm:text-lg md:w-1/2 leading-relaxed">
          A local DC digital design agency with global reach. At XpertVA, we view clients as creative partners.
        </p>
        <p className="text-base sm:text-lg md:w-1/2 leading-relaxed">
          Together, we transform digital platforms through the fusion of diverse ideas.
        </p>
      </div>
    </div>
  );
};

export default CreateDisruptSection;
