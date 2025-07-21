interface UslugaWhenNeededProps {
  title: string;
  whenNeeded: string[];
}

export default function UslugaWhenNeeded({ title, whenNeeded }: UslugaWhenNeededProps) {
  const half = Math.ceil(whenNeeded.length / 2);
  return (
    <div className="bg-blue-50 p-8 rounded-lg mb-8 py-2 md:py-4">
      <h3 className="text-2xl font-semibold text-primary mb-4">
        Kada je potrebno {title.toLowerCase()}?
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {whenNeeded.slice(0, half).map((item, index) => (
          <ul key={index} className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              {item}
            </li>
          </ul>
        ))}
        {whenNeeded.slice(half).map((item, index) => (
          <ul key={index} className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              {item}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
} 