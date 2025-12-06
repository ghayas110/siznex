import React from "react";
import Head from "next/head";
import { services } from "@/data/services-detailed";
import { notFound } from "next/navigation";
import SubServiceContent from "@/components/SubServiceContent";

interface PageProps {
  params: Promise<{
    slug: string;
    subSlug: string;
  }>;
}

export async function generateStaticParams() {
  const params: { slug: string; subSlug: string }[] = [];
  
  services.forEach((service) => {
    service.details.forEach((detail) => {
      params.push({
        slug: service.slug,
        subSlug: detail.slug,
      });
    });
  });
  
  return params;
}

export default async function SubServicePage({ params }: PageProps) {
  const { slug, subSlug } = await params;
  const service = services.find((s) => s.slug === slug);
  const subService = service?.details.find((d) => d.slug === subSlug);

  if (!service || !subService) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{subService.title} | {service.title} | XpertVA</title>
        <meta
          name="description"
          content={`Professional ${subService.title} services. ${subService.description}`}
        />
      </Head>
      <SubServiceContent serviceSlug={service.slug} subServiceSlug={subService.slug} />
    </>
  );
}
