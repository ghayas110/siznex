"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  ShoppingCart,
  Search,
  SlidersHorizontal,
  Tags,
  Package,
  ClipboardList,
  BarChart3,
  DollarSign,
  Users,
  Star,
  CheckCircle2,
} from "lucide-react";

export default function AmazonEcommerceOperationsPage() {
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
        <title>
          Amazon E-Commerce Operations | Listings, Optimization & Store
          Management | XpertVA
        </title>
        <meta
          name="description"
          content="End-to-end Amazon e-commerce operations by XpertVA – product research, listings, optimization, inventory, PPC coordination and full store management."
        />
        <meta
          property="og:title"
          content="XpertVA - Amazon E-Commerce Operations Services"
        />
        <meta
          property="og:description"
          content="Let XpertVA manage your Amazon store end-to-end: product research, listing optimization, catalog management, inventory, reports and growth strategy."
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
              <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-orange-300/80 mb-3">
                <ShoppingCart className="w-4 h-4" />
                Amazon E-Commerce Operations
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Listings, Optimization & Full Amazon Store Management
              </h1>
              <p className="text-gray-300 leading-relaxed mb-4 max-w-xl">
                XpertVA helps you run a high-performing Amazon store with
                professional operations: product research, listing creation,
                SEO-driven optimization, catalog hygiene, and day-to-day account
                management.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">
                Whether you&apos;re launching your first product or scaling a
                multi-ASIN catalogue, our Amazon operations team focuses on
                visibility, conversions, and long-term account health so you can
                focus on strategy and growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#consultation"
                  className="inline-block bg-orange-300 text-black px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-85 transition shadow-lg"
                >
                  Schedule Consultation
                </a>
                <a
                  href="#services"
                  className="inline-block border border-[#333] text-gray-200 px-7 py-3 rounded-xl text-sm font-medium hover:border-orange-300/80 hover:text-orange-300 transition"
                >
                  View Services
                </a>
              </div>
            </motion.div>

            {/* Right: Consultation Form */}
            <motion.div
              className="bg-[#141414] border border-[#222] rounded-2xl p-8 shadow-xl"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <h3 className="text-xl font-semibold mb-2">
                Get Amazon Store Audit & Proposal
              </h3>
              <p className="text-sm text-gray-400 mb-5">
                Share your store details and goals — we&apos;ll review your
                listings and operations and propose an action plan.
              </p>
              <form className="flex flex-col gap-4">
                <input
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-orange-300 outline-none"
                  placeholder="Name"
                />
                <input
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-orange-300 outline-none"
                  placeholder="Email"
                />
                <input
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-orange-300 outline-none"
                  placeholder="Phone"
                />
                <textarea
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-orange-300 outline-none min-h-[96px]"
                  placeholder="Tell us about your Amazon store / goals"
                />
                <button className="bg-orange-300 text-black font-semibold py-3 rounded-lg hover:opacity-90 transition">
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

        {/* Overview Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-4">
              End-to-End Amazon Operations for Serious Sellers
            </h2>
            <p className="text-gray-400 max-w-3xl mb-4">
              XpertVA’s e-commerce operations team is built around Amazon — we
              combine data-driven product research, SEO-aligned listing
              optimization, and disciplined account operations to keep your
              store healthy and growing.
            </p>
            <p className="text-gray-400 max-w-3xl">
              From keyword research and creative content to stock control,
              pricing, and performance reporting, we handle the day-to-day
              workload while you focus on selecting products, negotiating with
              suppliers, and expanding your brand.
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
              Amazon Operations Services
            </h2>
            <p className="text-gray-400 max-w-3xl mb-10">
              Listings, optimization, product research, and full store
              management — built to increase visibility, conversions, and
              account stability.
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
                title: "Product & Market Research",
                icon: Search,
                desc: "Data-driven research to identify profitable niches, validate demand, analyze competition, and define launch opportunities.",
              },
              {
                title: "Listing Creation & Optimization",
                icon: SlidersHorizontal,
                desc: "SEO-friendly titles, bullet points, descriptions, A+ content and imagery crafted to rank and convert browsers into buyers.",
              },
              {
                title: "Keyword Targeting & SEO",
                icon: Tags,
                desc: "Backend keywords, structured copy, and ongoing keyword refinement to keep your listings aligned with high-intent search terms.",
              },
              {
                title: "Catalog & ASIN Management",
                icon: ClipboardList,
                desc: "Clean catalog structure, variation setup, suppression fixes, and listing hygiene to avoid confusion and policy issues.",
              },
              {
                title: "Inventory & Order Coordination",
                icon: Package,
                desc: "Monitoring stock levels, managing FBA/FBM flows, avoiding stockouts, and coordinating with your logistics or prep centers.",
              },
              {
                title: "Performance & Growth Reporting",
                icon: BarChart3,
                desc: "Regular reports on traffic, conversion, sales, and profitability with clear action items to improve key KPIs.",
              },
              {
                title: "Review & Reputation Support",
                icon: Star,
                desc: "Frameworks to encourage honest reviews, monitor feedback, and protect your brand reputation within Amazon policies.",
              },
              {
                title: "Pricing & Promotion Strategy",
                icon: DollarSign,
                desc: "Strategic pricing, coupons, deals, and promotional planning to boost visibility and profit while staying sustainable.",
              },
              {
                title: "Account Health & Compliance",
                icon: CheckCircle2,
                desc: "Proactive monitoring of policy warnings, performance metrics, and support tickets to prevent escalations and suspensions.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6 hover:border-orange-300 transition group"
              >
                <item.icon className="w-8 h-8 text-orange-300 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Operations Process */}
        <section className="max-w-7xl mx-auto px-6 pb-24 border-t border-[#151515]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-3">
              How We Run Your Amazon Store
            </h2>
            <p className="text-gray-400 max-w-3xl mb-8">
              A clear, repeatable operations framework keeps your store stable
              while we push for controlled growth.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Audit & Strategy",
                desc: "We review your current store, listings, metrics, and goals, then define a realistic operations and growth plan.",
              },
              {
                step: "02",
                title: "Setup & Optimization",
                desc: "We fix fundamentals, optimize listings, align keywords, and clean catalog issues before scaling traffic.",
              },
              {
                step: "03",
                title: "Ongoing Operations",
                desc: "Daily, weekly, and monthly routines for inventory, listing health, metrics tracking, and issue resolution.",
              },
              {
                step: "04",
                title: "Scale & Improve",
                desc: "We test new products, expand successful SKUs, refine pricing and content, and continuously improve KPIs.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6"
              >
                <p className="text-orange-300 text-sm font-semibold mb-1">
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

        {/* Team & Collaboration */}
        <section className="max-w-7xl mx-auto px-6 pb-24 border-t border-[#151515]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-3">
              Your Dedicated Amazon Ops Team
            </h2>
            <p className="text-gray-400 max-w-3xl mb-6">
              XpertVA works as an extension of your brand: we collaborate on
              strategy while taking ownership of the operational workload.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Account & Brand Alignment",
                icon: Users,
                desc: "We align on your brand voice, product positioning, and risk tolerance so operations match your long-term strategy.",
              },
              {
                title: "Transparent Reporting",
                icon: BarChart3,
                desc: "You receive clear summaries, dashboards, and action items so you always know what’s happening in your account.",
              },
              {
                title: "Scalable Partnership",
                icon: ShoppingCart,
                desc: "Start with a few ASINs or regions and gradually scale up management scope as results compound.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6"
              >
                <item.icon className="w-8 h-8 text-orange-300 mb-4" />
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
                Schedule an Amazon Operations Call
              </h2>
              <p className="text-gray-400 mb-4">
                Tell us about your catalog, current challenges, and revenue
                targets. We&apos;ll map out how XpertVA can support your Amazon
                operations.
              </p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Listing & account health review</li>
                <li>• Product & keyword opportunity overview</li>
                <li>• Suggested operations workflow & next steps</li>
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
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-orange-300 outline-none"
                  placeholder="Name"
                />
                <input
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-orange-300 outline-none"
                  placeholder="Email"
                />
                <input
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-orange-300 outline-none"
                  placeholder="Phone"
                />
                <textarea
                  className="bg-black border border-[#333] rounded-lg px-4 py-3 text-sm focus:border-orange-300 outline-none min-h-[96px]"
                  placeholder="Describe your requirement"
                />
                <button className="bg-orange-300 text-black font-semibold py-3 rounded-lg hover:opacity-90 transition">
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
                  q: "Do you manage Amazon stores end-to-end?",
                  a: "Yes. We can handle product research, listing creation, optimization, catalog management, inventory coordination, and reporting — or plug into specific areas if you already have an internal team.",
                },
                {
                  q: "Can I start with only a few products?",
                  a: "Absolutely. Many clients start with a small set of ASINs to test our workflow and then expand our scope once they see consistent results.",
                },
                {
                  q: "Do you also manage Amazon PPC?",
                  a: "This page focuses on operations, but we can coordinate with your PPC team or provide PPC support through our marketing services if needed.",
                },
                {
                  q: "How do you communicate and share updates?",
                  a: "We use your preferred tools — email, WhatsApp, Slack, ClickUp, Trello, or similar — and provide regular performance summaries and clear action lists.",
                },
                {
                  q: "Will I keep full access and control of my account?",
                  a: "Yes. You retain complete ownership. We work as authorized users with the necessary permissions to manage your store safely and transparently.",
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
                  <h4 className="text-lg font-semibold mb-2 text-orange-300">
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
            Let XpertVA Run Your Amazon Operations
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Hand over the operational load — from listings and optimization to
            catalog and account health — and focus on growing your brand.
          </motion.p>
          <motion.a
            href="#consultation"
            className="bg-orange-300 text-black px-10 py-4 rounded-xl text-lg font-semibold hover:opacity-80 transition shadow-xl inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Book a Strategy Call
          </motion.a>
        </section>
      </div>
    </>
  );
}
