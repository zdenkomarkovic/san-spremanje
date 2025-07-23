interface UslugaFeaturesProps {
  title: string;
  features: string[];
}

export default function UslugaFeatures({ title, features }: UslugaFeaturesProps) {
  const half = Math.ceil(features.length / 2);
  return (
    <div className="flex flex-col md:flex-row md:gap-8 mx-auto justify-center mt-12">

   
    <div className="bg-gray-50 p-8 rounded-lg mb-8 py-2 md:py-4">
      <h3 className="text-2xl font-semibold text-primary mb-4">
        Šta uključuje {title.toLowerCase()}?
      </h3>
      <div className="w-fit   mx-auto">
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
    <div className="bg-gray-50 p-8 rounded-lg mb-8 py-2 md:py-4">
      <h3 className="text-2xl font-semibold text-primary mb-4">
        Prednosti našeg {title.toLowerCase()}
      </h3>
      <div className="w-fit   mx-auto">
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Višegodišnje iskustvo u čišćenju
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Prirodna i bezbedna sredstva
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Fleksibilni termini
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Pouzdanost i profesionalnost
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Prilagođavanje potrebama klijenata
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Konkurentne cene
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
} 