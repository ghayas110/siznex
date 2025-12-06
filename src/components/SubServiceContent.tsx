"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Clock, Shield, Trophy } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services-detailed";

interface SubServiceContentProps {
  serviceSlug: string;
  subServiceSlug: string;
}

export default function SubServiceContent({ serviceSlug, subServiceSlug }: SubServiceContentProps) {
  const service = services.find((s) => s.slug === serviceSlug);
  const subService = service?.details.find((d) => d.slug === subServiceSlug);

  if (!service || !subService) return null;

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full pt-36 pb-20 bg-gradient-to-br from-[#0d0d0d] via-[#111] to-[#0c0c0c] overflow-hidden">
        {/* Top Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.15),transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-300 transition mb-8"
          >
            <ArrowLeft size={20} />
            Back to {service.title}
          </Link>

          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <service.icon className={`w-12 h-12 ${service.color}`} />
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {subService.title}
              </h1>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-2xl text-lg mb-8">
              {subService.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="space-y-12 mb-20"
        >
          {/* Long Description */}
          {subService.longDescription && (
            <div className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                  {subService.longDescription}
                </p>
              </div>
            </div>
          )}

          {/* Dynamic Sections */}
          {subService.sections?.map((section, index) => (
            <div 
              key={index}
              className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-8 text-lg whitespace-pre-line">
                  {section.content}
                </p>
                
                {section.list && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.list.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-[#1a1a1a] p-4 rounded-xl border border-[#222]">
                        <CheckCircle2 className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Fallback for legacy data or if no sections exist */}
          {!subService.sections && (
            <div className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">How We Can Help</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  Our team of experts specializes in <strong>{subService.title}</strong> to help you achieve your business goals. 
                  We provide tailored solutions that are designed to meet your specific needs and drive results.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {(subService.benefits || [
                    "Expert Strategy & Execution",
                    "Data-Driven Approach",
                    "Continuous Optimization",
                    "Transparent Reporting",
                    "Dedicated Support Team",
                    "Scalable Solutions"
                  ]).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[#1a1a1a] p-4 rounded-xl border border-[#222]">
                      <CheckCircle2 className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Our Process Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(subService.process || [
              { title: "Analysis", description: "We start by analyzing your current status." },
              { title: "Strategy", description: "Developing a tailored plan for your goals." },
              { title: "Execution", description: "Implementing the strategy with precision." },
              { title: "Optimization", description: "Continuous monitoring and refining." },
            ]).map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-[#121212] border border-[#1f1f1f] p-6 rounded-2xl h-full hover:border-orange-300 transition group">
                  <div className="text-5xl font-bold text-[#222] group-hover:text-orange-300/20 transition mb-4">0{i + 1}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-[#222] transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose XpertVA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Trophy, title: "Proven Expertise", desc: "Years of experience delivering results for businesses like yours." },
              { icon: Clock, title: "Fast Turnaround", desc: "Efficient workflows to get your tasks done on time, every time." },
              { icon: Shield, title: "Reliable Support", desc: "Dedicated team available to assist you whenever you need." },
            ].map((item, i) => (
              <div key={i} className="bg-[#121212] border border-[#1f1f1f] p-8 rounded-2xl text-center hover:bg-[#161616] transition">
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-orange-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-b from-[#1a1a1a] to-[#0b0b0b] border-t border-[#222]">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          Get Started with {subService.title}
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          Contact us today to discuss your requirements and get a customized quote.
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
  );
}
