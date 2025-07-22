import { Metadata } from "next";
import { notFound } from "next/navigation";
import { uslugeData } from "@/constants";
import UslugaHeader from "./UslugaHeader";
import UslugaOpis from "./UslugaOpis";
import UslugaBenefiti from "./UslugaBenefiti";
import UslugaFeatures from "./UslugaFeatures";
import UslugaWhenNeeded from "./UslugaWhenNeeded";
import UslugaPrednosti from "./UslugaPrednosti";
import UslugaKontakt from "./UslugaKontakt";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default async function UslugaPage({ params }: Props) {
  const slug = params.slug;
  const usluga = uslugeData.find(u => u.slug === slug);

  if (!usluga) {
    notFound();
  }

  return (
    <div className="w-full py-20 px-4">
      <UslugaHeader title={usluga.title} />
      <UslugaOpis image={usluga.image} title={usluga.title} shortDescription={usluga.shortDescription} longDescription={usluga.longDescription} />
      <UslugaBenefiti benefits={usluga.benefits} />
      <UslugaFeatures title={usluga.title} features={usluga.features} />
      {usluga.whenNeeded && <UslugaWhenNeeded title={usluga.title} whenNeeded={usluga.whenNeeded} />}
      <UslugaPrednosti title={usluga.title} />
      <UslugaKontakt />
    </div>
  );
} 