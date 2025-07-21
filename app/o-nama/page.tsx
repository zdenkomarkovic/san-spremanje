import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaBroom, FaUsers, FaShieldAlt, FaStar } from "react-icons/fa";

export const metadata: Metadata = {
  title: "O nama | San Spremanje Novi Sad",
  description: "Upoznajte San Spremanje - vašeg pouzdanog partnera za profesionalno čišćenje u Novom Sadu. Višegodišnje iskustvo i posvećenost kvalitetu. Kontakt: 065 608 8870",
  keywords: ["o nama", "San Spremanje", "profesionalno čišćenje", "Novi Sad", "iskustvo", "kvalitet"],
};

export default function ONama() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8">
          O nama
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image
              src="/hero1.jpg"
              alt="San Spremanje tim"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">
              San Spremanje - Vaš pouzdani partner za čišćenje
            </h2>
            <p className="text-lg leading-relaxed">
              San Spremanje je agencija za profesionalno čišćenje sa višegodišnjim iskustvom 
              u pružanju kvalitetnih usluga čišćenja u Novom Sadu i okolini. Naša misija je 
              jednostavna - da vaš prostor bude čist, zdrav i prijatan za život i rad.
            </p>
            <p className="text-lg leading-relaxed">
              Sa timom iskusnih profesionalaca i najmodernijom opremom, pružamo kompletnu 
              uslugu čišćenja za sve vrste objekata - od stambenih prostora do poslovnih zgrada.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <FaBroom className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Profesionalnost</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Tim iskusnih profesionalaca sa višegodišnjim iskustvom</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <FaUsers className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Posvećenost</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Posvećeni smo kvalitetu i zadovoljstvu klijenata</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <FaShieldAlt className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Pouzdanost</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Pouzdani partner koji uvek ispunjava obećanja</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <FaStar className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>Kvalitet</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Najviši standardi kvaliteta u svemu što radimo</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Naša misija i vizija
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-primary mb-3">Misija</h4>
              <p className="text-lg leading-relaxed">
                Naša misija je da pružimo profesionalne usluge čišćenja koje održavaju 
                čistoću, zdravlje i komfor u vašem prostoru. Koristimo prirodna sredstva 
                i najmoderniju opremu za postizanje najviših standarda kvaliteta.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-3">Vizija</h4>
              <p className="text-lg leading-relaxed">
                Težimo da postanemo najpouzdaniji partner za čišćenje u Novom Sadu i okolini, 
                prepoznati po kvalitetu, pouzdanosti i posvećenosti zadovoljstvu klijenata.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Naše vrednosti
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Profesionalnost u svemu što radimo
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Pouzdanost i ispunjavanje obećanja
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Posvećenost kvalitetu
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Ekološka odgovornost
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Briga o zdravlju klijenata
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Kontinuirano poboljšanje
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Zašto izabrati San Spremanje?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Višegodišnje iskustvo u čišćenju
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Tim iskusnih profesionalaca
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Najmodernija oprema
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Prirodna i bezbedna sredstva
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Fleksibilni termini
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Konkurentne cene
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Kontaktirajte nas
          </h3>
          <p className="text-lg mb-6">
            Pozovite nas na <strong>065 608 8870</strong> ili pošaljite poruku na 
            <strong> info@sanspremanje.rs</strong> za besplatnu konsultaciju.
          </p>
          <a 
            href="tel:+381656088870"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Pozovite odmah
          </a>
        </div>
      </div>
    </div>
  );
} 