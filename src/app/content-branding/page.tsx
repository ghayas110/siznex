"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  PenTool,
  ImageIcon,
  Video,
  Camera,
  Palette,
  Sparkles,
  Layers,
  Wand2,
} from "lucide-react";

export default function ContentBrandingPage() {
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
        <title>Content & Branding Services | XpertVA</title>
        <meta
          name="description"
          content="Brand identity, creative graphics, video editing, and product photography services by XpertVA to elevate your digital presence and storytelling."
        />
        <meta
          property="og:title"
          content="XpertVA - Content & Branding Services"
        />
        <meta
          property="og:description"
          content="Build a strong brand identity with creative design, high-end visuals, video content, and product photography that converts."
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
                <Palette className="w-4 h-4" />
                Content & Branding
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Brand Identity, Creative Content & Visual Storytelling
              </h1>
              <p className="text-gray-300 leading-relaxed mb-4 max-w-xl">
                XpertVA helps you build a consistent, memorable brand with
                strategic identity design, creative graphics, video content, and
                product photography that actually sells — not just looks pretty.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">
                From logos and visual systems to social media content, ads,
                product visuals, and editing, we create content experiences that
                match your positioning and speak clearly to your ideal
                customers.
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
                Get a Content & Branding Brief Review
              </h3>
              <p className="text-sm text-gray-400 mb-5">
                Share your brand, links, and goals — we&apos;ll review your
                visuals and suggest a practical roadmap for upgrades.
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
                  placeholder="Share your website / socials / requirements"
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

        {/* Overview */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-4">
              Content & Branding That Feels Cohesive Everywhere
            </h2>
            <p className="text-gray-400 max-w-3xl mb-4">
              Your customers experience your brand in pieces — a social post,
              an ad, a reel, a website section, a product image. Our job is to
              make all of those pieces feel like they clearly belong to you and
              move your audience towards action.
            </p>
            <p className="text-gray-400 max-w-3xl">
              We combine strategy, design, and production to build brand
              systems: identity, visual language, content formats, and assets
              that can be reused, scaled, and adapted to multiple platforms
              without losing consistency.
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
              Content & Branding Services
            </h2>
            <p className="text-gray-400 max-w-3xl mb-10">
              Brand identity, creative graphics, video editing, and product
              photography — built around your positioning and target audience.
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
                title: "Brand Identity Design",
                icon: PenTool,
                desc: "Logo, color palette, typography, and visual language that reflect your positioning and work across digital platforms.",
              },
              {
                title: "Creative Graphics & Social Content",
                icon: ImageIcon,
                desc: "Feed posts, carousels, stories, banners, and ad creatives designed for scroll-stopping impact and clarity.",
              },
              {
                title: "Video Editing & Short-Form Content",
                icon: Video,
                desc: "Edited reels, shorts, explainers, and product videos with pacing, captions, and hooks optimized for retention.",
              },
              {
                title: "Product Photography",
                icon: Camera,
                desc: "Clean product shots, lifestyle compositions, and ad-ready images that highlight your product’s value and details.",
              },
              {
                title: "Brand Systems & Content Kits",
                icon: Layers,
                desc: "Reusable templates, design systems, and content kits so your team can keep publishing on-brand, even at scale.",
              },
              {
                title: "Campaign Creative Direction",
                icon: Sparkles,
                desc: "Concepts, moodboards, and asset directions for launches, promos, and seasonal campaigns across platforms.",
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

        {/* Demo Portfolio / Image Section */}
        <section className="max-w-7xl mx-auto px-6 pb-24 border-t border-[#151515]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-3">Sample Visual Directions</h2>
            <p className="text-gray-400 max-w-3xl mb-8">
              Below are demo sections you can connect to your real portfolio
              images. Replace the image paths with your own brand shoots,
              social content, and campaign visuals.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Card 1 */}
            <motion.div
              variants={fadeUp}
              className="bg-[#141414] border border-[#1f1f1f] rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-52 bg-black">
                <Image
                  src="/images/brand.webp"
                  alt="Minimal brand identity mockup"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-orange-300 mb-1">
                  Brand Identity
                </p>
                <h3 className="text-lg font-semibold mb-1">
                  Minimal, Modern Visual System
                </h3>
                <p className="text-gray-400 text-sm">
                  Logo lockups, typography scales, and color usage built for
                  clean websites and social feeds.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUp}
              className="bg-[#141414] border border-[#1f1f1f] rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-52 bg-black">
                <Image
                  src="/images/brand.webp"
                  alt="Social media content grid preview"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-orange-300 mb-1">
                  Social Content
                </p>
                <h3 className="text-lg font-semibold mb-1">
                  Instagram & Ad Creative Set
                </h3>
                <p className="text-gray-400 text-sm">
                  Carousel posts, reels cover frames, and ad-ready visuals for
                  performance campaigns.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUp}
              className="bg-[#141414] border border-[#1f1f1f] rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-52 bg-black">
                <Image
                  src="/images/brand.webp"
                  alt="Product photography setup"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-orange-300 mb-1">
                  Product Photography
                </p>
                <h3 className="text-lg font-semibold mb-1">
                  Studio & Lifestyle Product Shots
                </h3>
                <p className="text-gray-400 text-sm">
                  Clean studio lighting plus lifestyle scenes that highlight
                  use-cases and product details.
                </p>
              </div>
            </motion.div>
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
            <h2 className="text-3xl font-bold mb-3">Our Creative Process</h2>
            <p className="text-gray-400 max-w-3xl mb-8">
              A structured, collaborative workflow — with enough flexibility to
              explore creative directions while staying aligned with your
              strategy.
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
                title: "Discovery & Brand Audit",
                desc: "We review your current visuals, messaging, and audience, then define goals and brand direction.",
              },
              {
                step: "02",
                title: "Concepts & Moodboards",
                desc: "We explore visual routes, references, and content ideas before locking in the creative direction.",
              },
              {
                step: "03",
                title: "Design & Production",
                desc: "We create graphics, videos, and photography assets following the agreed brand system.",
              },
              {
                step: "04",
                title: "Delivery & Content Kits",
                desc: "You receive ready-to-use assets plus templates and guidelines for ongoing content creation.",
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
                Schedule a Content & Branding Call
              </h2>
              <p className="text-gray-400 mb-4">
                Share your brand links, current issues, and goals. We&apos;ll
                outline how XpertVA can upgrade your visuals and content
                pipeline.
              </p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Brand & content audit highlights</li>
                <li>• Suggestions for quick visual wins</li>
                <li>• Long-term content & branding roadmap</li>
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

        {/* Final CTA */}
        <section className="py-20 text-center bg-gradient-to-b from-[#151515] to-[#0b0b0b] border-t border-[#222]">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Turn Your Brand into a Visual Experience
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Let XpertVA handle your brand identity, creative graphics, video
            editing, and product photography — so every touchpoint feels
            consistent, premium, and on-message.
          </motion.p>
          <motion.a
            href="#consultation"
            className="bg-orange-300 text-black px-10 py-4 rounded-xl text-lg font-semibold hover:opacity-80 transition shadow-xl inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Start Your Content & Branding Project
          </motion.a>
        </section>
      </div>
    </>
  );
}
