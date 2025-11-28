"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  Search,
  Target,
  FileText,
  Link2,
  Share2,
  Gauge,
  Mail,
  LineChart,
  Globe2,
  Users,
  Rocket,
  Megaphone,
} from "lucide-react";

export default function MarketingSolutionsPage() {
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
        <title>Marketing Solutions & SEO Services | XpertVA</title>
        <meta
          name="description"
          content="Data-driven marketing solutions and SEO services by XpertVA. We help you get found everywhere online, improve rankings, and grow your e-commerce and online business."
        />
        <meta
          property="og:title"
          content="XpertVA - Marketing Solutions & SEO Services"
        />
        <meta
          property="og:description"
          content="Let XpertVA plan, execute, and optimize your digital marketing, SEO, social media, and e-commerce growth strategies."
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
                <Megaphone className="w-4 h-4" />
                Marketing Solutions & SEO
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Get Found Everywhere Your Customers Search
              </h1>
              <p className="text-gray-300 leading-relaxed mb-4 max-w-xl">
                Like every online and physical business, you want customers to
                be able to find you anywhere on the internet. XpertVA, your
                dedicated marketing and SEO partner, optimizes your website and
                content so you rank higher on Google and turn clicks into
                customers.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">
                From search engine optimization to digital marketing strategy,
                e-commerce growth, social media, and email campaigns, we handle
                the details so your brand stands out and scales profitably.
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

            {/* Right: Consultation Form */}
            <motion.div
              id="contact"
              className="bg-[#141414] border border-[#222] rounded-2xl p-8 shadow-xl"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <h3 className="text-xl font-semibold mb-2">
                Schedule a Consultation Call
              </h3>
              <p className="text-sm text-gray-400 mb-5">
                Tell us about your business and goals — our team will review and
                propose a tailored marketing & SEO plan.
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
                <button className="bg-orange-300 text-black bg-white font-semibold py-3 rounded-lg hover:opacity-90 transition">
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

        {/* SEO & Strategy Intro */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-4">
              Strategic SEO & Marketing Foundations
            </h2>
            <p className="text-gray-400 max-w-3xl mb-4">
              SEO is the strategy of optimizing your content so it shows higher
              in search results. Our SEO experts at XpertVA build your website
              on platforms that support easy customization and content updates,
              and give you the tools required to optimize every segment of your
              website.
            </p>
            <p className="text-gray-400 max-w-3xl mb-4">
              Once the foundations are in place, we take care of critical
              details such as internal linking structures, metadata, and
              on-page elements — all aligned with SEO best practices and Google
              guidelines — to steadily improve your rankings through organic,
              non-paid traffic.
            </p>
            <p className="text-gray-400 max-w-3xl">
              Because Google wants to deliver the best possible information to
              its users, our focus is to ensure search engines recognize your
              content as the most relevant answer to specific search queries,
              especially for your e-commerce and online business niche.
            </p>
          </motion.div>
        </section>

        {/* Core Marketing & SEO Services */}
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
              Core Marketing & SEO Services
            </h2>
            <p className="text-gray-400 max-w-3xl mb-10">
              Our e-commerce professional team combines keyword targeting,
              technical SEO, content creation, and performance marketing to help
              you generate more traffic, leads, and sales.
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
                title: "Keyword Targeting & Implementation",
                icon: Target,
                desc: "We research, identify, and implement SEO-friendly keywords in your product listings, pages, and descriptions to generate more leads and make it easier for shoppers to find your offers.",
              },
              {
                title: "Content Creation",
                icon: FileText,
                desc: "Clear product descriptions, engaging visuals, and rich content (including A+ content / EBC) help customers understand your products and make confident purchase decisions.",
              },
              {
                title: "Link Building",
                icon: Link2,
                desc: "High-quality, relevant link building drives organic traffic and strengthens your authority, improving rankings and visibility across competitive search terms.",
              },
              {
                title: "Social Media Marketing",
                icon: Share2,
                desc: "We promote your products and listings across social platforms to boost sales volume, conversions, and brand awareness, especially for marketplaces and e-commerce stores.",
              },
              {
                title: "Page Speed Optimization",
                icon: Gauge,
                desc: "We optimize hosting, assets, cache, and redirects to improve page load time — delivering better user experience, higher engagement, and stronger search visibility.",
              },
              {
                title: "Email Marketing",
                icon: Mail,
                desc: "Strategic email campaigns help nurture relationships, build your brand, and generate higher ROI from both new and existing customers.",
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

        {/* SEO Process Section */}
        <section className="max-w-7xl mx-auto px-6 pb-24 border-t border-[#151515]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-bold mb-3">
              What Search Engine Optimization Services Do We Provide?
            </h2>
            <p className="text-gray-400 max-w-3xl mb-10">
              Our SEO process is structured, consistent, and aligned with your
              bigger business goals. Whether you&apos;re growing an online
              store, building a brand, or increasing organic traffic, we
              customize SEO strategies around your objectives.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Make an SEO plan */}
            <motion.div
              variants={fadeUp}
              className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6"
            >
              <LineChart className="w-7 h-7 text-orange-300 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Make an SEO Plan</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We begin by defining clear goals: more traffic, higher sales,
                stronger brand awareness, or all three. Our team builds an SEO
                roadmap, sets KPIs, and decides how and when performance will be
                measured — ensuring your SEO efforts are trackable and aligned
                with long-term growth.
              </p>
            </motion.div>

            {/* Do keyword research */}
            <motion.div
              variants={fadeUp}
              className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6"
            >
              <Search className="w-7 h-7 text-orange-300 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Do Keyword Research</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Using professional research tools and market insight, we
                identify the topics, phrases, and search queries your audience
                actually uses. We group related terms, choose primary and
                supporting keywords, and map them to specific pages to build
                topic authority rather than chasing single keywords.
              </p>
            </motion.div>

            {/* Optimize page speed */}
            <motion.div
              variants={fadeUp}
              className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6"
            >
              <Gauge className="w-7 h-7 text-orange-300 mb-3" />
              <h3 className="text-lg font-semibold mb-2">
                Optimize Page Speed
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Page load time is a critical ranking factor and a core part of
                user experience. We optimize images, code, fonts, and features
                so your site loads fast without sacrificing design, helping both
                users and search engines favor your brand.
              </p>
            </motion.div>

            {/* Metadata & Alt text */}
            <motion.div
              variants={fadeUp}
              className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6"
            >
              <Globe2 className="w-7 h-7 text-orange-300 mb-3" />
              <h3 className="text-lg font-semibold mb-2">
                Metadata & Alternative Text
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                We craft compelling title tags and meta descriptions so Google
                and users clearly understand your pages. Strong metadata
                improves click-through rates, which in turn supports better
                rankings.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We also write descriptive alt text for images, improving both
                accessibility and image search visibility — helping your brand
                appear in more places across Google.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Digital Marketing & Social Media */}
        <section className="max-w-7xl mx-auto px-6 pb-24 border-t border-[#151515]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-bold mb-3">
              Digital Marketing & Growth Services
            </h2>
            <p className="text-gray-400 max-w-3xl mb-6">
              At XpertVA, our digital marketing specialists conduct market
              research, study your competitors, position your pricing, and
              develop campaigns that keep your messaging profitable and aligned
              with your brand.
            </p>
            <p className="text-gray-400 max-w-3xl mb-8">
              We monitor trends in ad consumption, optimize placements, and
              manage your presence across multiple platforms to ensure your
              campaigns reach the right customers and convert into revenue.
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
                title: "Social Media Campaign Management",
                icon: Share2,
                desc: "We create, administer, and organize your social media campaigns while tracking key KPIs and performance across platforms.",
              },
              {
                title: "Performance Tracking & Analytics",
                icon: LineChart,
                desc: "Our team monitors website traffic, ad metrics, and sales trends, adjusting strategies to maximize ROI and growth.",
              },
              {
                title: "Content & Creative Strategy",
                icon: FileText,
                desc: "From landing pages and blog posts to social content and email copy, we design communications that stay on-brand and convert.",
              },
              {
                title: "Email & Funnel Marketing",
                icon: Mail,
                desc: "We plan and implement email sequences, nurturing flows, and remarketing campaigns to drive repeat purchases and loyalty.",
              },
              {
                title: "SEO & On-Page Optimization",
                icon: Globe2,
                desc: "We oversee SEO and UX, enhance content, and continually optimize pages to respond to user behavior and search intent.",
              },
              {
                title: "Collaboration & Brand Support",
                icon: Users,
                desc: "Our team collaborates closely with your internal teams and fulfillment partners to keep your brand consistent across every touchpoint.",
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

        {/* Why XpertVA Section */}
        <section className="max-w-7xl mx-auto px-6 pb-24 border-t border-[#151515]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-bold mb-3">
              Why Partner with XpertVA for Digital Marketing?
            </h2>
            <p className="text-gray-400 max-w-3xl mb-5">
              XpertVA prides itself on trustworthiness, reliability, and
              dedication. Digital marketing means working closely with both your
              team and your customers — so it&apos;s essential that your
              marketing partner is consistent, strategic, and dependable.
            </p>
            <p className="text-gray-400 max-w-3xl mb-5">
              Our specialists go the extra mile to complete tasks on time,
              deliver projects according to the roadmap, and stay calm under
              pressure. Many of our clients stay with us long-term because they
              know that when they trust us with their business, they get real,
              measurable value in return.
            </p>
            <p className="text-gray-400 max-w-3xl">
              We stay on top of the latest trends, tools, and best practices,
              and think strategically about every campaign: setting objectives,
              analyzing data, and choosing the best course of action to increase
              your leads, conversions, and overall growth.
            </p>
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
                Share your current situation, goals, and challenges. Our team
                will review your website and online presence and suggest a
                practical roadmap for SEO and digital marketing.
              </p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Understand where you are vs. where you want to be</li>
                <li>• Get clear SEO & marketing recommendations</li>
                <li>• See how XpertVA can help you scale profitably</li>
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
                  q: "What types of businesses can XpertVA help?",
                  a: "We work with e-commerce brands, service businesses, online stores, and physical businesses that want to strengthen their online presence, improve rankings, and generate more leads and sales.",
                },
                {
                  q: "Is SEO better than paid ads?",
                  a: "Both have their place. SEO builds long-term, organic visibility and authority, while paid ads can generate quick traffic. We often combine both in a strategy, but our SEO work is always aligned with your long-term business goals.",
                },
                {
                  q: "Can you manage my social media and email marketing as well?",
                  a: "Yes. Beyond SEO, we handle social media campaigns, content planning, email marketing, funnels, and performance tracking to create a complete marketing engine for your business.",
                },
                {
                  q: "How do you measure success?",
                  a: "We define success together using KPIs such as organic traffic, search rankings, conversions, revenue, and engagement. We then track, report, and optimize based on real performance data.",
                },
                {
                  q: "How soon can I see results?",
                  a: "SEO and organic marketing usually take time — typically several weeks to a few months for meaningful movement. However, we prioritize quick wins while building a sustainable, long-term growth strategy.",
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
            Let XpertVA Build Your Growth Engine
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            From SEO and content to social media, email, and full-funnel
            strategy, our team is ready to help you grow faster and smarter.
          </motion.p>
          <motion.a
            href="#consultation"
            className="bg-orange-300 text-black px-10 py-4 rounded-xl text-lg font-semibold hover:opacity-80 transition shadow-xl inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Book Your Consultation
          </motion.a>
        </section>
      </div>
    </>
  );
}
