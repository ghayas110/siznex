'use client';

import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

const MenuModal = ({ onClose }: { onClose: () => void }) => {
  const leftMenu = ['Home', 'Work', 'Services'];
  const rightMenu = ['Team', 'Blog', 'Contact'];

  // Ensure consistent rendering
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this component only runs on the client
  }, []);

  if (!isClient) return null; // Avoid rendering on the server

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-between items-center px-12 py-10">
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-6 right-8 text-sm text-white flex items-center gap-1">
        Close <X size={14} />
      </button>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex justify-between w-full max-w-4xl gap-20 mt-20">
          {/* Left Column */}
          <div className="space-y-6 text-left">
            {leftMenu.map((item, index) => (
              <div key={`left-${index}`} className="flex items-center gap-3">
                <span className="text-sm text-gray-500 font-mono">{`0${index + 1}`}</span>
                <span className="text-5xl font-light">{item}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-left">
            {rightMenu.map((item, index) => (
              <div key={`right-${index}`} className="flex items-center gap-3">
                <span className="text-sm text-gray-500 font-mono">{`0${index + 4}`}</span>
                <span className="text-5xl font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer with social icons */}
        <div className="flex items-center gap-4 text-sm text-white mt-10 opacity-70">
          <span>©</span>
          <span className="hover:underline cursor-pointer">Careers ↗</span>
          <div className="flex gap-4 ml-4">
            <span className="cursor-pointer">📸</span>
            <span className="cursor-pointer">🐦</span>
            <span className="cursor-pointer">📘</span>
            <span className="cursor-pointer">🔗</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
