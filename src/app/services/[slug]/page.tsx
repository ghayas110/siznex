"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services-detailed";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = React.use(params);
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

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
      {/* SEO Metadata - Note: In Next.js App Router, this should ideally be handled by generateMetadata */}
      <Head>
        <title>{service.title} | XpertVA</title>
        <meta
          name="description"
          content={`Professional ${service.title} to help you streamline operations and grow your business.`}
        />
      </Head>

      <div className="min-h-screen bg-[#0b0b0b] text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative w-full pt-36 pb-20 bg-gradient-to-br from-[#0d0d0d] via-[#111] to-[#0c0c0c] overflow-hidden">
          {/* Top Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.15),transparent_60%)]"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-300 transition mb-8"
            >
              <ArrowLeft size={20} />
              Back to Services
            </Link>

            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-4 mb-6">
                <service.icon className={`w-12 h-12 ${service.color}`} />
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {service.title}
                </h1>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-2xl text-lg mb-8">
                Comprehensive {service.title.toLowerCase()} solutions tailored to your business needs. 
                We handle the complexities so you can focus on growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Details Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-400 max-w-3xl">
              Our specialized team provides end-to-end support for all your {service.title} needs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {service.details.map((detail, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-8 hover:border-orange-300 transition group flex flex-col items-start"
              >
                <div className="bg-orange-500/10 p-3 rounded-lg mb-4 group-hover:bg-orange-500/20 transition">
                  <CheckCircle2 className="w-6 h-6 text-orange-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{detail.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {detail.description}
                </p>
                
                <div className="mt-auto pt-6">
                   <Link href={`/services/${service.slug}/${detail.slug}`} className="text-orange-300 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      Read More <ArrowUpRight size={14} />
                   </Link>
                </div>
              </motion.div>
            ))}
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
            Ready to Optimize Your {service.title}?
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-8"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            Get in touch with us today for a free consultation and see how we can help you scale.
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
