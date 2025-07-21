import Image from "next/image";

interface UslugaOpisProps {
  image: string;
  title: string;
  shortDescription: string;
  longDescription: string;
}

export default function UslugaOpis({ image, title, shortDescription, longDescription }: UslugaOpisProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12 py-2 md:py-4">
      <div>
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary py-2 md:py-4">
          {shortDescription}
        </h2>
        <p className="text-lg leading-relaxed py-2 md:py-4">
          {longDescription}
        </p>
      </div>
    </div>
  );
} 