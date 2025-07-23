import Image from "next/image";

interface UslugaOpisProps {
  image: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
}

export default function UslugaOpis({ image, title, shortDescription, longDescription }: UslugaOpisProps) {
  return (
    <div className=" md:px-20 grid md:grid-cols-2 gap-8 py-2 md:py-4 items-center">
      <div>
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="rounded-lg w-full aspect-[17/12] object-cover"
        />
      </div>
      <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl">
          {shortDescription}
        </h2>
      {longDescription.map((item, index) => (
        <p key={index} className="first-letter:pl-6 text-lg leading-relaxed">
          {item}
        </p>
      ))}
      </div>
    </div>
  );
} 