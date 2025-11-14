"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { Search, BarChart3, ShieldCheck, ShoppingCart, PenTool } from "lucide-react";

export default function VirtualAssistantPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Professional Virtual Assistant Services | XpertVA</title>
        <meta
          name="description"
          content="Get professional virtual assistant services for business operations, research, content support, ecommerce assistance, customer support, Amazon support, and more."
        />
        <meta property="og:title" content="XpertVA - Professional Virtual Assistant Services" />
        <meta
          property="og:description"
          content="Delegate your work smartly — research, admin tasks, ecommerce, Amazon support, customer support, content assistance, PPC support, and business management."
        />
        <meta property="og:image" content="/og-xpertva.png" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-[#0b0b0b] text-white overflow-hidden">

        {/* Hero Section */}
        <section className="relative w-full pt-36 pb-40 bg-gradient-to-br from-[#0d0d0d] via-[#111] to-[#0c0c0c] overflow-hidden">
          {/* Top Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.15),transparent_60%)]"></div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Professional Virtual Assistance for Your Business
              </h1>
              <p className="text-gray-300 leading-relaxed mb-6">
                XpertVA helps you streamline operations, optimize workflows, manage your online presence, 
                and support your ecommerce or Amazon stores — so you can focus on growth while we handle the workload.
              </p>

              <a
                href="#services"
                className="inline-block bg-orange-300 text-black px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-85 transition shadow-lg"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Contact Box */}
            <motion.div
              className="bg-[#141414] border border-[#222] rounded-2xl p-8 shadow-xl"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <h3 className="text-xl font-semibold mb-4">Get Free Consultation</h3>
              <form className="flex flex-col gap-4">
                <input className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-orange-300 outline-none" placeholder="Your Name" />
                <input className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-orange-300 outline-none" placeholder="Email Address" />
                <input className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-orange-300 outline-none" placeholder="Phone Number" />
                <button className="bg-orange-300 text-black font-semibold py-3 rounded-lg hover:opacity-90 transition">
                  Submit
                </button>
              </form>
            </motion.div>
          </div>

          {/* Wave */}
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 200" fill="none">
            <path
              fill="#0b0b0b"
              d="M0 67L48 77.3C96 87 192 107 288 107.3C384 107 480 87 576 82.7C672 80 768 93 864 90.7C960 88 1056 67 1152 58.7C1248 53 1344 60 1392 64L1440 67V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V67Z"
            />
          </svg>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-4">Our Virtual Assistant Expertise</h2>
            <p className="text-gray-400 max-w-3xl mb-12">
              Efficient, reliable, and highly skilled virtual support services that help you manage your business smoothly.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: "Business Research", icon: Search },
              { label: "Competitor Analysis", icon: BarChart3 },
              { label: "Amazon & Ecommerce Support", icon: ShoppingCart },
              { label: "Administrative Assistance", icon: ShieldCheck },
              { label: "Listing & Content Optimization", icon: PenTool },
              { label: "Customer Support & Communication", icon: ShieldCheck },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6 hover:border-orange-300 transition group"
              >
                <item.icon className="w-8 h-8 text-orange-300 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Professional support covering all aspects of {item.label.toLowerCase()}.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-[#111] border-t border-[#222]">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2 className="text-3xl font-bold mb-10" initial="hidden" whileInView="visible" variants={fadeUp}>
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-6">
              {[
                {
                  q: "What is a virtual assistant?",
                  a: "A virtual assistant (VA) is a skilled professional who remotely supports your business with tasks like research, communication, content handling, admin work, project management, customer support, and ecommerce operations."
                },
                {
                  q: "How can a VA help my business grow?",
                  a: "By taking over repetitive and time-consuming tasks, a VA helps you focus on sales, strategy, and business expansion — improving productivity and saving operational costs."
                },
                {
                  q: "Do you offer Amazon or ecommerce-related support?",
                  a: "Yes! We assist with Amazon PPC, product research, listing optimization, A+ content, store management, competitor analysis, and daily operations."
                },
                {
                  q: "Is communication easy with your virtual assistants?",
                  a: "Absolutely — our VAs maintain consistent communication via WhatsApp, email, Zoom, Google Workspace, and preferred project management tools."
                },
                {
                  q: "Do you provide customized VA plans?",
                  a: "Yes, we offer flexible hourly, weekly, and monthly service packages tailored to your needs."
                }
              ].map((faq, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" className="p-6 bg-[#161616] border border-[#222] rounded-xl">
                  <h4 className="text-lg font-semibold mb-2 text-orange-300">{faq.q}</h4>
                  <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center bg-gradient-to-b from-[#1a1a1a] to-[#0b0b0b] border-t border-[#222]">
          <motion.h2 className="text-4xl font-bold mb-4" initial="hidden" whileInView="visible" variants={fadeUp}>
            Work Smarter with Professional Virtual Assistance
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-6"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            Let our experts manage your operations, communication, and ecommerce tasks while you focus on scaling your business.
          </motion.p>
          <motion.a
            href="#contact"
            className="bg-orange-300 text-black px-10 py-4 rounded-xl text-lg font-semibold hover:opacity-80 transition shadow-xl inline-block"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            Book Free Consultation
          </motion.a>
        </section>
      </div>
    </>
  );
}
