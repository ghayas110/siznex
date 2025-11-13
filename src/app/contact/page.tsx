'use client';

import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center px-4 sm:px-6 py-12 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
        {/* Left Form */}
        <div className="mt-16 sm:mt-0">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Lets Talk!</h2>
          <p className="text-sm text-gray-400 mb-8">
            Fill out the following to get your project started
          </p>
          <form className="space-y-6 w-full max-w-md">
            <div>
              <input
                type="text"
                placeholder="Your name*"
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-3 placeholder-gray-400 text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email*"
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-3 placeholder-gray-400 text-sm"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-3 placeholder-gray-400 text-sm resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition duration-300 text-sm"
            >
              Submit →
            </button>
          </form>
        </div>

        {/* Right Contact Info Box */}
        <div className="bg-[#2a2a2a] p-6 sm:p-8 rounded-md shadow-md w-full max-w-md mx-auto md:mx-0">
          <div className="mb-6">
            <p className="text-xs text-gray-400 mb-1">Find us:</p>
            <p className="text-sm font-medium leading-snug">
             XpertVA, EnglishTown, New Jersey 07726, USA
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xs text-gray-400 mb-1">Email us:</p>
            <p className="text-sm font-medium">hello@xpertva.com</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Call us:</p>
            <p className="text-sm font-medium">+17324906272</p>
          </div>
           <div>
            <p className="text-xs text-gray-400 mb-1">Whatsapp:</p>
            <p className="text-sm font-medium">+17324906272</p>
          </div>
        </div>
      </div>
    </div>
  );
}
