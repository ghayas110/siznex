"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  MonitorSmartphone,
  ShoppingBag,
  Users,
  Network,
  Layers,
  Radar,
  Grid3X3,
  PanelsTopLeft,
  LayoutTemplate,
  RefreshCw,
  PlugZap,
  ShieldCheck,
  FileCode2,
  Smartphone,
  AppWindow,
  ServerCog,
} from "lucide-react";

export default function WebsiteDevelopmentPage() {
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
        <title>Website & eCommerce Development Services | XpertVA</title>
        <meta
          name="description"
          content="XpertVA builds high-converting eCommerce sites, robust web platforms, custom apps, and SEO-ready WordPress solutions with modern architectures and conversion-driven UI/UX."
        />
        <meta
          property="og:title"
          content="XpertVA - Website & eCommerce Development Services"
        />
        <meta
          property="og:description"
          content="Work with XpertVA’s expert team for eCommerce development, WordPress, custom web & app development, microservices, headless commerce, and performance-focused digital experiences."
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
            {/* Hero Content */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-orange-300/80 mb-3">
                <MonitorSmartphone className="w-4 h-4" />
                Website & eCommerce Development
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Conversion-Driven Web & eCommerce Experiences
              </h1>
              <p className="text-gray-300 leading-relaxed mb-4 max-w-xl">
                XpertVA’s eCommerce website design and development services help
                you create exciting online experiences that attract demanding
                modern customers. Our developers specialize in
                conversion-focused UIs and high-efficiency eCommerce
                architectures.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">
                As a dependable and well-known web development partner, XpertVA
                combines deep technical intelligence with creative expertise. We
                work across eCommerce platforms, custom architectures, and
                modern WordPress ecosystems to build fast, secure, and scalable
                digital products.
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

            {/* Hero Contact Box */}
            <motion.div
              className="bg-[#141414] border border-[#222] rounded-2xl p-8 shadow-xl"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <h3 className="text-xl font-semibold mb-2">
                Schedule a Consultation Call
              </h3>
              <p className="text-sm text-gray-400 mb-5">
                Share your eCommerce, website, or app idea — our team will
                review your requirements and suggest the most suitable
                architecture and tech stack.
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
                  placeholder="Describe your requirement"
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

        {/* Intro / eCommerce Focus */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-4">
              Specialized eCommerce & Web Development Expertise
            </h2>
            <p className="text-gray-400 max-w-3xl mb-4">
              XpertVA’s web design and development team is highly proficient in
              specialized eCommerce development. We work with modern platforms,
              headless setups, and flexible architectures to support different
              eCommerce business models and growth strategies.
            </p>
            <p className="text-gray-400 max-w-3xl">
              Whether you are launching a new store, evolving from a niche
              eCommerce setup, or rebuilding an existing solution, we design
              scalable architectures and conversion-optimized experiences around
              your customers, products, and operations.
            </p>
          </motion.div>
        </section>

        {/* Areas of Expertise */}
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
              XpertVA’s Areas of Expertise in Web Development
            </h2>
            <p className="text-gray-400 max-w-3xl mb-10">
              From B2C and B2B eCommerce to marketplaces, headless commerce,
              microservices, and PWAs, we architect solutions that perform,
              scale, and convert.
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
                title: "B2C eCommerce",
                icon: ShoppingBag,
                desc: "Attractive UI and smart personalization based on customer journeys, traffic patterns, buying doubts, and acquisition channels — all designed for high conversion.",
              },
              {
                title: "B2B eCommerce",
                icon: Users,
                desc: "Solutions designed for rational buyers and complex decision cycles with customized experiences, negotiation workflows, and role-based access.",
              },
              {
                title: "Online Marketplaces",
                icon: Network,
                desc: "Multi-vendor platforms built around balanced workflows for admins, sellers, and end customers, keeping operations transparent and manageable.",
              },
              {
                title: "Microservices-based eCommerce",
                icon: Layers,
                desc: "Component-based architectures for independent scaling, fault isolation, and high resilience — ideal for fast-growing and complex businesses.",
              },
              {
                title: "Headless Commerce",
                icon: PanelsTopLeft,
                desc: "Decoupled front-ends for web, mobile, AR/VR, and smart devices, powered by APIs that connect flexible UIs to robust back-end operations.",
              },
              {
                title: "Progressive Web Applications (PWA)",
                icon: Radar,
                desc: "Single codebase for web and mobile experiences with responsive layouts, offline support, and app-like performance using modern PWA tooling.",
              },
              {
                title: "Online Multistore",
                icon: Grid3X3,
                desc: "Multi-storefront setups with carefully planned catalogs, languages, and configurations to support new regions, brands, and segments.",
              },
              {
                title: "Web Portals",
                icon: LayoutTemplate,
                desc: "Vendor, customer, and partner portals designed around clear objectives, tailored workflows, and scalable components for retail and service businesses.",
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

        {/* Main Web Development Services */}
        <section className="max-w-7xl mx-auto px-6 pb-24 border-t border-[#151515]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-3">
              The Main Web Development Services XpertVA Provides
            </h2>
            <p className="text-gray-400 max-w-3xl mb-8">
              We support you across the full lifecycle — from platform-based
              eCommerce builds to custom solutions, redesigns, integration, and
              audits.
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
                title: "Platform-Based eCommerce (Magento)",
                icon: MonitorSmartphone,
                desc: "Implementation, customization, and scaling of Magento-based solutions with a strong cost-to-quality balance and long-term maintainability.",
              },
              {
                title: "Custom eCommerce Development",
                icon: FileCode2,
                desc: "We transition from monolithic to modular architectures, add advanced tech like 3D and voice, and give your brand a unique functional and visual edge.",
              },
              {
                title: "eCommerce Migration",
                icon: RefreshCw,
                desc: "Migration from legacy or limiting platforms to more powerful and reliable architectures while preserving and safely transferring business data.",
              },
              {
                title: "eCommerce UI/UX Design",
                icon: LayoutTemplate,
                desc: "Research-driven UI/UX with audience targeting, competitor analysis, branding kits, and usability testing for engaging, user-friendly storefronts.",
              },
              {
                title: "Integrations & APIs",
                icon: PlugZap,
                desc: "API-based integrations connecting your store with ERPs, CRMs, payment gateways, shipping providers, and third-party services for automated flows.",
              },
              {
                title: "eCommerce Audits",
                icon: ShieldCheck,
                desc: "Deep audits of code quality, security, performance, and UX, followed by prioritized roadmaps to fix vulnerabilities and unlock growth opportunities.",
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

        {/* WordPress Development Section */}
        <section className="max-w-7xl mx-auto px-6 pb-24 border-t border-[#151515]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-3">
              WordPress Website Design & Development Services
            </h2>
            <p className="text-gray-400 max-w-3xl mb-4">
              With a talented team of WordPress specialists, XpertVA delivers
              strong digital solutions and engaging experiences. We offer
              SEO-smart, secure, and scalable WordPress builds with clean coding
              practices and on-time delivery.
            </p>
            <p className="text-gray-400 max-w-3xl mb-8">
              You can choose project-based engagement or hire dedicated
              WordPress developers from XpertVA to support ongoing improvements,
              maintenance, and feature development.
            </p>
          </motion.div>

          {/* WordPress Services */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Custom WordPress Website Development",
                icon: FileCode2,
                desc: "Years of expertise building clear, responsive, and high-quality WordPress sites using process-driven development.",
              },
              {
                title: "Theme Development & Customization",
                icon: LayoutTemplate,
                desc: "Enterprise-grade, optimized themes and one-of-a-kind designs that give your brand a recognizable and consistent visual identity.",
              },
              {
                title: "WooCommerce Development",
                icon: ShoppingBag,
                desc: "Growth-oriented WooCommerce stores and migrations that turn WordPress into a full-featured eCommerce engine.",
              },
              {
                title: "Plugin Development & Integration",
                icon: PlugZap,
                desc: "Custom and third-party plugins integrated using best coding practices to extend functionality at scale.",
              },
              {
                title: "Blog & Content Experiences",
                icon: FileCode2,
                desc: "Manageable, engaging blog layouts crafted for readability, sharing, and SEO performance.",
              },
              {
                title: "API & App Integrations",
                icon: ServerCog,
                desc: "API integrations and mobile app connections that extend your WordPress capabilities with flawless data sync.",
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

          {/* WordPress Expertise Highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Performance & Speed",
                desc: "Super-fast, fully optimized builds with performance best practices baked into every layer to improve engagement and conversions.",
              },
              {
                title: "SEO-Smart Web Solutions",
                desc: "Core SEO elements like meta tags, headings, alt text, and image optimization are implemented from day one to support marketing efforts.",
              },
              {
                title: "Clean, Functional, and Simple",
                desc: "Well-documented, standards-compliant code and intelligent structures that make your website easy to use and extend globally.",
              },
              {
                title: "Low Maintenance",
                desc: "No unethical customizations or fragile hacks — we follow CMS best practices to keep upgrades and maintenance straightforward.",
              },
              {
                title: "Built for Non-Tech Users",
                desc: "User-friendly WordPress backends and interfaces so non-technical teams can manage content and updates with confidence.",
              },
              {
                title: "Secure & Upgradable",
                desc: "Hardened security, spam protection, proper permissions, and safe upgrade paths to keep your WordPress site secure and future-ready.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold mb-2 text-orange-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Custom App Development Section */}
        <section className="max-w-7xl mx-auto px-6 pb-24 border-t border-[#151515]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-3">
              Custom App Development Services
            </h2>
            <p className="text-gray-400 max-w-3xl mb-8">
              Beyond websites and stores, XpertVA also designs and develops
              custom applications — from internal tools and dashboards to full
              SaaS platforms and mobile apps — tailored around your workflows
              and business logic.
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
                title: "Custom Web Applications",
                icon: AppWindow,
                desc: "Dashboards, portals, and operational tools that streamline processes and centralize your business data.",
              },
              {
                title: "Mobile & Cross-Platform Apps",
                icon: Smartphone,
                desc: "Mobile applications built with modern frameworks to provide seamless, on-the-go experiences for your customers and teams.",
              },
              {
                title: "SaaS Products & Platforms",
                icon: ServerCog,
                desc: "Multi-tenant SaaS architectures with secure authentication, billing, role-based access, and scalable infrastructure.",
              },
              {
                title: "System Integration & Automation",
                icon: PlugZap,
                desc: "Connecting your custom apps with external services, APIs, and automation workflows to eliminate manual work.",
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
                Schedule a Consultation Call
              </h2>
              <p className="text-gray-400 mb-4">
                Tell us about your eCommerce, website, or custom app plans. Our
                team will help you choose the right platform, architecture, and
                roadmap to launch or upgrade with confidence.
              </p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Understand your current setup and pain points</li>
                <li>• Get recommendations for tech stack and architecture</li>
                <li>• Plan timelines, scope, and growth milestones</li>
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
                <button className="bg-orange-200 text-black font-semibold py-3 rounded-lg hover:opacity-90 transition">
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
            Build Your Next Website, Store, or App with XpertVA
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            From eCommerce and WordPress to custom apps and modern web
            platforms, our team is ready to design, develop, and scale your next
            digital experience.
          </motion.p>
          <motion.a
            href="#consultation"
            className="bg-orange-300 text-black px-10 py-4 rounded-xl text-lg font-semibold hover:opacity-80 transition shadow-xl inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Start Your Project
          </motion.a>
        </section>
      </div>
    </>
  );
}
