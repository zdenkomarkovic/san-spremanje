interface UslugaFeaturesProps {
  title: string;
  features: string[];
}

export default function UslugaFeatures({ title, features }: UslugaFeaturesProps) {
  const half = Math.ceil(features.length / 2);
  return (
    <div className="bg-gray-50 p-8 rounded-lg mb-8 py-2 md:py-4">
      <h3 className="text-2xl font-semibold text-primary mb-4">
        Šta uključuje {title.toLowerCase()}?
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {features.slice(0, half).map((feature, index) => (
          <ul key={index} className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              {feature}
            </li>
          </ul>
        ))}
        {features.slice(half).map((feature, index) => (
          <ul key={index} className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              {feature}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
} 