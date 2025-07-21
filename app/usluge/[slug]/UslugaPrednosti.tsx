interface UslugaPrednostiProps {
  title: string;
}

export default function UslugaPrednosti({ title }: UslugaPrednostiProps) {
  return (
    <div className="bg-green-50 p-8 rounded-lg mb-8 py-2 md:py-4">
      <h3 className="text-2xl font-semibold text-primary mb-4">
        Prednosti našeg {title.toLowerCase()}
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
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
  );
} 