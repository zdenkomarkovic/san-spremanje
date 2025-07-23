interface UslugaHeaderProps {
  title: string;
}

export default function UslugaHeader({ title }: UslugaHeaderProps) {
  return (
    <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 py-2 md:py-4">
      {title}
    </h1>
  );
} 