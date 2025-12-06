import React from "react";
import Head from "next/head";
import { services } from "@/data/services-detailed";
import { notFound } from "next/navigation";
import ServiceDetailContent from "@/components/ServiceDetailContent";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{service.title} | XpertVA</title>
        <meta
          name="description"
          content={`Professional ${service.title} to help you streamline operations and grow your business.`}
        />
      </Head>
      <ServiceDetailContent serviceSlug={service.slug} />
    </>
  );
}
