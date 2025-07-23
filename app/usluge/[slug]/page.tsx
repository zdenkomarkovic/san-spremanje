import { Metadata } from "next";
import { notFound } from "next/navigation";
import { uslugeData } from "@/constants";
import UslugaHeader from "./UslugaHeader";
import UslugaOpis from "./UslugaOpis";
import UslugaFeatures from "./UslugaFeatures";
import UslugaWhenNeeded from "./UslugaWhenNeeded";
import UslugaKontakt from "./UslugaKontakt";
import UslugaBenefiti from "./UslugaBenefiti";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;
  const usluga = uslugeData.find(u => u.slug === slug);
  
  if (!usluga) {
    return {
      title: "Usluga nije pronađena | San Spremanje",
      description: "Tražena usluga nije pronađena.",
    };
  }

  return {
    title: usluga.metadata.title,
    description: usluga.metadata.description,
    keywords: usluga.metadata.keywords,
  };
}

export async function generateStaticParams() {
  return uslugeData.map((usluga) => ({
    slug: usluga.slug,
  }));
}

export default async function UslugaPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const usluga = uslugeData.find(u => u.slug === slug);

  if (!usluga) {
    notFound();
  }

  return (
    <div className=" pt-20 pb-6">
    <div className="container mx-auto px-2 md:px-4">
      <UslugaHeader title={usluga.title} />
      <UslugaOpis image={usluga.image} title={usluga.title} shortDescription={usluga.shortDescription} longDescription={usluga.longDescription} />
      <UslugaBenefiti benefits={usluga.benefits} />
    </div>
      <UslugaKontakt />
      <UslugaFeatures title={usluga.title} features={usluga.features} />
      {usluga.whenNeeded && <UslugaWhenNeeded title={usluga.title} whenNeeded={usluga.whenNeeded} />}
    </div>
  );
} 