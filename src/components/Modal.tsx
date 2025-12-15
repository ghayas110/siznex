'use client';

import { X } from 'lucide-react';

const Modal = ({ onClose }: { onClose: () => void }) => {

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-start  z-50">
      <div className="relative w-full max-w-xl xl:mx-50 md:mx-20 mx-8 bg-transparent py-12 text-white">
        <button
          onClick={onClose}
          className="fixed top-5 right-5 text-gray-400 hover:text-white"
        >
          <X size={44} />
        </button>

        <div className="text-left">
          <h2 className="text-5xl font-bold mb-2">Let’s talk!</h2>
          <p className="text-xl text-white mb-8">
            Fill out the following to get your project started
          </p>

          <form
             action="mailto:hello@xpertva.com"
             method="post"
             encType="text/plain"
             className="space-y-6"
           >
            <div>
              <input
                 id="fullName"
                 name="fullName"
                 placeholder="Your full name*"
                 required
                 className="w-full bg-transparent border-b border-white text-white py-2 px-1 placeholder-white focus:outline-none"
               />
            </div>
            <div>
              <input
                 id="email"
                 name="email"
                 type="email"
                 placeholder="Your email address*"
                 required
                 className="w-full bg-transparent border-b border-white text-white py-2 px-1 placeholder-white focus:outline-none"
               />
            </div>
            <div>
               <input
                 id="phone"
                 name="phone"
                 placeholder="Your phone number*"
                 required
                 className="w-full bg-transparent border-b border-white text-white py-2 px-1 placeholder-white focus:outline-none"
               />
            </div>
            <div>
               <input
                 id="message"
                 name="message"
                 placeholder="Your message*"
                 required
                 className="w-full bg-transparent border-b border-white text-white py-2 px-1 placeholder-white focus:outline-none"
               />
            </div>  

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
