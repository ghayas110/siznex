"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Smartphone,
  AppWindow,
  Code2,
  Cpu,
  Cloud,
  ShieldCheck,
  Rocket,
  Gauge,
  Layers,
  Bug,
  LineChart,
} from "lucide-react";

export default function MobileAppDevelopmentPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Mobile App Development Services | XpertVA</title>
        <meta
          name="description"
          content="XpertVA builds high-performance mobile apps for iOS and Android with user-focused design, scalable architectures, and ongoing support."
        />
        <meta
          property="og:title"
          content="XpertVA - Mobile App Development Services"
        />
        <meta
          property="og:description"
          content="Custom mobile app development, UI/UX, backend APIs, integrations, and full lifecycle support for iOS and Android."
        />
        <meta property="og:image" content="/og-xpertva.png" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-[#0b0b0b] text-white overflow-hidden">
        {/* Hero / Banner */}
        <section className="relative w-full pt-36 pb-40 bg-gradient-to-br from-[#0d0d0d] via-[#111] to-[#0c0c0c] overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.18),transparent_60%)]" />

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left: Text */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-brand-orange/80 mb-3">
                <Smartphone className="w-4 h-4" />
                Mobile App Development
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Build Mobile Apps Users Love to Use Daily
              </h1>
              <p className="text-gray-300 leading-relaxed mb-4 max-w-xl">
                XpertVA designs and develops mobile apps that are fast, stable,
                and easy to use — combining clean UI, robust architecture, and
                real-world business logic for iOS and Android.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">
                From MVPs to full-scale products, we handle product discovery,
                UX flows, development, API integrations, testing, and store
                deployment so your app is ready for real users and growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#consultation"
                  className="inline-block bg-brand-orange text-black px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-85 transition shadow-lg"
                >
                  Schedule Consultation
                </a>
                <a
                  href="#services"
                  className="inline-block border border-[#333] text-gray-200 px-7 py-3 rounded-xl text-sm font-medium hover:border-brand-orange/80 hover:text-brand-orange transition"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>

            {/* Right: Contact Box */}
            <motion.div
              className="bg-[#141414] border border-[#222] rounded-2xl p-8 shadow-xl"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <h3 className="text-xl font-semibold mb-2">
                Get Your App Idea Reviewed
              </h3>
              <p className="text-sm text-gray-400 mb-5">
                Share your app concept, features, or existing prototype — we’ll
                review and suggest a practical roadmap and tech stack.
              </p>
              <form className="flex flex-col gap-4">
                <input
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-brand-orange outline-none"
                  placeholder="Name"
                />
                <input
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-brand-orange outline-none"
                  placeholder="Email"
                />
                <input
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-brand-orange outline-none"
                  placeholder="Phone"
                />
                <textarea
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-brand-orange outline-none min-h-[96px]"
                  placeholder="Briefly describe your app idea / requirements"
                />
                <button className="bg-brand-orange text-black font-semibold py-3 rounded-lg hover:opacity-90 transition">
                  Submit
                </button>
              </form>
            </motion.div>
          </div>

          {/* Wave */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 200"
            fill="none"
          >
            <path
              fill="#0b0b0b"
              d="M0 67L48 77.3C96 87 192 107 288 107.3C384 107 480 87 576 82.7C672 80 768 93 864 90.7C960 88 1056 67 1152 58.7C1248 53 1344 60 1392 64L1440 67V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V67Z"
            />
          </svg>
        </section>

        {/* Overview */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-4">
              From Concept to App Store-Ready Product
            </h2>
            <p className="text-gray-400 max-w-3xl mb-4">
              We don’t just code screens — we design complete mobile
              experiences. That means clear user flows, intuitive navigation,
              strong performance, and stable integrations with your backend and
              third-party services.
            </p>
            <p className="text-gray-400 max-w-3xl">
              Whether you&apos;re building a customer-facing app, internal tool,
              marketplace, or SaaS companion app, XpertVA supports you across
              strategy, design, engineering, and long-term maintenance.
            </p>
          </motion.div>
        </section>

        {/* Core Services */}
        <section
          id="services"
          className="max-w-7xl mx-auto px-6 pb-24 pt-4 border-t border-[#151515]"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-3">
              Mobile App Development Services
            </h2>
            <p className="text-gray-400 max-w-3xl mb-10">
              Strategy, design, development, integrations, and lifecycle
              support — everything you need to launch and grow a mobile product.
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
              {
                title: "Product Strategy & Discovery",
                icon: Rocket,
                desc: "We clarify goals, define user personas, prioritize features, and shape an MVP or phase-based roadmap that fits your budget.",
              },
              {
                title: "UI/UX Design for Mobile",
                icon: AppWindow,
                desc: "Wireframes, user flows, and high-fidelity designs that feel natural on mobile — with attention to typography, spacing, and usability.",
              },
              {
                title: "iOS & Android Development",
                icon: Smartphone,
                desc: "Native and cross-platform development with clean, maintainable code and architecture that’s ready to scale.",
              },
              {
                title: "Backend & API Development",
                icon: Cpu,
                desc: "Secure, well-structured APIs, admin panels, and databases that power your app and integrate with your existing systems.",
              },
              {
                title: "3rd-Party Integrations",
                icon: Cloud,
                desc: "Payments, push notifications, analytics, maps, chat, and more — integrated cleanly and safely into your app.",
              },
              {
                title: "Testing, QA & Optimization",
                icon: Gauge,
                desc: "Manual and automated testing, performance profiling, and optimization to keep your app responsive and reliable.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6 hover:border-brand-orange transition group"
              >
                <item.icon className="w-8 h-8 text-brand-orange mb-4 group-hover:scale-110 transition" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Tech & Capabilities */}
        <section className="max-w-7xl mx-auto px-6 pb-24 border-t border-[#151515]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-3">
              Architecture, Quality & Long-Term Stability
            </h2>
            <p className="text-gray-400 max-w-3xl mb-8">
              We design your app&apos;s foundation to be stable and adaptable —
              so adding new features, platforms, or integrations later is easier
              and less risky.
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
              {
                title: "Scalable Architecture",
                icon: Layers,
                desc: "Modular code structure, clear separation of concerns, and patterns that support new features without breaking old ones.",
              },
              {
                title: "Security & Best Practices",
                icon: ShieldCheck,
                desc: "Secure APIs, proper auth flows, safe data storage, and protection against common mobile vulnerabilities.",
              },
              {
                title: "App Store & Play Store Deployment",
                icon: Rocket,
                desc: "We help with store listings, screenshots, descriptions, and guide you through Apple & Google submission requirements.",
              },
              {
                title: "Monitoring & Analytics",
                icon: LineChart,
                desc: "Analytics, crash reporting, and event tracking setups so you can see how users really interact with your app.",
              },
              {
                title: "Maintenance & Feature Updates",
                icon: Bug,
                desc: "Ongoing support for bug fixes, OS updates, dependency upgrades, and iterative improvements.",
              },
              {
                title: "Performance-Focused Builds",
                icon: Gauge,
                desc: "Smaller bundles, efficient networking, and smooth animations to keep your app feeling fast and polished.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6"
              >
                <item.icon className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="max-w-7xl mx-auto px-6 pb-24 border-t border-[#151515]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-3">
              Our Mobile App Development Process
            </h2>
            <p className="text-gray-400 max-w-3xl mb-8">
              A clear, transparent workflow — built to reduce risk, keep you
              informed, and ship usable releases early.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                desc: "We align on goals, audience, features, timelines, and success metrics for your app.",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                desc: "We create UX flows and UI screens, then share interactive prototypes for feedback.",
              },
              {
                step: "03",
                title: "Development & QA",
                desc: "We build the app in milestones, with regular demos and iterative testing and QA.",
              },
              {
                step: "04",
                title: "Launch & Support",
                desc: "We assist with app store submissions and provide ongoing support and improvements.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6"
              >
                <p className="text-brand-orange text-sm font-semibold mb-1">
                  {item.step}
                </p>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Consultation Section */}
        <section
          id="consultation"
          className="py-24 bg-[#111] border-t border-[#222]"
        >
          <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl font-bold mb-4">
                Schedule a Mobile App Strategy Call
              </h2>
              <p className="text-gray-400 mb-4">
                Tell us where you are — idea stage, prototype, or existing app —
                and we’ll outline how XpertVA can help you move to the next
                level.
              </p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Clarify features and priorities</li>
                <li>• Discuss tech stack & architecture options</li>
                <li>• Get an estimated timeline and phases</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-[#141414] border border-[#222] rounded-2xl p-6 shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <form className="flex flex-col gap-4">
                <input
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-brand-orange outline-none"
                  placeholder="Name"
                />
                <input
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-brand-orange outline-none"
                  placeholder="Email"
                />
                <input
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-brand-orange outline-none"
                  placeholder="Phone"
                />
                <textarea
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-brand-orange outline-none min-h-[96px]"
                  placeholder="Describe your app idea / current app"
                />
                <button className="bg-brand-orange text-black font-semibold py-3 rounded-lg hover:opacity-90 transition">
                  Submit
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-[#101010] border-t border-[#222]">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2
              className="text-3xl font-bold mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-6">
              {[
                {
                  q: "Can you help if I only have an idea and no designs?",
                  a: "Yes. We often start from scratch with clients — we’ll help with discovery, UX flows, and full UI design before development begins.",
                },
                {
                  q: "Do you build for both iOS and Android?",
                  a: "Yes. We can build cross-platform apps for both stores, or focus on a single platform first depending on your strategy and budget.",
                },
                {
                  q: "Can you integrate with my existing backend or ERP/CRM?",
                  a: "In most cases, yes. We’ll review your existing systems and design clean, secure integrations via APIs or middleware.",
                },
                {
                  q: "Will I own the code?",
                  a: "Yes. You retain full ownership of the code, assets, and IP. We can also hand over documentation and support onboarding your internal team.",
                },
                {
                  q: "Do you offer ongoing maintenance?",
                  a: "We do. We can continue as your long-term technical partner for updates, fixes, and new feature releases.",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-6 bg-[#161616] border border-[#222] rounded-xl"
                >
                  <h4 className="text-lg font-semibold mb-2 text-brand-orange">
                    {faq.q}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 text-center bg-gradient-to-b from-[#151515] to-[#0b0b0b] border-t border-[#222]">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Ready to Launch Your Mobile App with XpertVA?
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Let’s turn your idea into a real, usable app — with solid UX,
            reliable engineering, and a roadmap for growth.
          </motion.p>
          <motion.a
            href="#consultation"
            className="bg-brand-orange text-black px-10 py-4 rounded-xl text-lg font-semibold hover:opacity-80 transition shadow-xl inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Book Your Strategy Call
          </motion.a>
        </section>
      </div>
    </>
  );
}
