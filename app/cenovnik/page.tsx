import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCheck, FaInfoCircle, FaClock, FaRulerCombined, FaBroom, FaExclamationTriangle } from "react-icons/fa";
import Cta from "@/components/Cta";
import BackgroundImage from "@/components/BackgroundImage";

export const metadata: Metadata = {
  title: "Cenovnik | San Spremanje Novi Sad",
  description: "Transparentni cenovnik usluga čišćenja - BASIC, STANDARD i PREMIUM paketi. Redovno čišćenje stanova i kuća u Novom Sadu. Kontakt: 065 608 8870",
  keywords: ["cenovnik", "cene čišćenja", "San Spremanje", "Novi Sad", "paketi čišćenja", "redovno održavanje"],
};

export default function Cenovnik() {
  return (
    <div className="pb-12">
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-6 mt-6">
          Cenovnik Usluga
        </h1>
        <p className="text-center text-lg mb-14 max-w-3xl mx-auto">
          Transparentne cene i jasno definisani paketi za vaš mir i sigurnost
        </p>

        {/* PAKETI ZA REDOVNO ČIŠĆENJE (minimum 4 sata) */}
        <section className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FaClock className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-primary text-center">
              Paketi za redovno čišćenje
            </h2>
          </div>
          <p className="text-center text-lg mb-8 text-gray-600">
            Minimum 4 sata - Hemija obezbeđuje klijent
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* BASIC paket */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-3xl">🟢</span>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">BASIC paket</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">900 RSD</div>
                <p className="text-gray-600">po satu</p>
                <div className="mt-2 p-2 bg-green-50 rounded">
                  <p className="font-semibold text-green-700">Minimum: 4 sata</p>
                  <p className="text-sm text-green-600">(ukupno 3.600 RSD)</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4 text-center italic">
                  Hemija: klijentova
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Usisavanje i brisanje podova</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Brisanje prašine (dostupne površine)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Kupatilo – osnovno čišćenje</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Kuhinja – radne površine i sudopera</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Pražnjenje kanti za smeće</span>
                  </li>
                </ul>
                <div className="mt-6 p-3 bg-gray-50 rounded text-center">
                  <p className="text-sm font-medium text-gray-700">
                    ➡ Namenjeno za održavane stanove
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* STANDARD paket */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow border-2 border-blue-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-500"></div>
              <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                NAJTRAŽENIJI
              </div>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-3xl">🔵</span>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">STANDARD paket</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">1.000 RSD</div>
                <p className="text-gray-600">po satu</p>
                <div className="mt-2 p-2 bg-blue-50 rounded">
                  <p className="font-semibold text-blue-700">Minimum: 4 sata</p>
                  <p className="text-sm text-blue-600">(ukupno 4.000 RSD)</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4 text-center italic">
                  Hemija: klijentova
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Sve iz BASIC paketa</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Detaljnije čišćenje kupatila</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Brisanje kuhinjskih frontova spolja</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Brisanje prekidača i kvaka</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Ravne površine nameštaja</span>
                  </li>
                </ul>
                <div className="mt-6 p-3 bg-blue-50 rounded text-center">
                  <p className="text-sm font-medium text-blue-700">
                    ➡ Najtraženiji paket za redovno održavanje
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* PREMIUM paket */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute top-0 left-0 w-full h-2 bg-purple-500"></div>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-3xl">🟣</span>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">PREMIUM paket</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">1.200 RSD</div>
                <p className="text-gray-600">po satu</p>
                <div className="mt-2 p-2 bg-purple-50 rounded">
                  <p className="font-semibold text-purple-700">Minimum: 4 sata</p>
                  <p className="text-sm text-purple-600">(ukupno 4.800 RSD)</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4 text-center italic">
                  Hemija: klijentova
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Sve iz STANDARD paketa</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Detaljno kupatilo (pločice, slavine)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Kuhinja – sudopera, ploča, frontovi</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Brisanje vrata i gelendera</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Zamena posteljine (po potrebi)</span>
                  </li>
                </ul>
                <div className="mt-6 p-3 bg-purple-50 rounded text-center">
                  <p className="text-sm font-medium text-purple-700">
                    ➡ Za klijente koji žele maksimalnu čistoću
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* REDOVNO ČIŠĆENJE – CENE PO m² */}
        <section className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FaRulerCombined className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-primary text-center">
              Redovno čišćenje – Cene po m²
            </h2>
          </div>
          <p className="text-center text-lg mb-8 text-gray-600">
            Minimum 40 m² - Hemija obezbeđuje klijent
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* BASIC po m² */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-3xl">🟢</span>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">BASIC</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">120 RSD</div>
                <p className="text-gray-600">po m²</p>
                <div className="mt-2 p-2 bg-green-50 rounded">
                  <p className="font-semibold text-green-700">Minimum: 40 m²</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Usisavanje i brisanje podova</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Brisanje prašine (dostupne površine)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Kupatilo – osnovno čišćenje</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Kuhinja – radne površine i sudopera</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Pražnjenje kanti za smeće</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* STANDARD po m² */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow border-2 border-blue-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-500"></div>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-3xl">🔵</span>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">STANDARD</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">135 RSD</div>
                <p className="text-gray-600">po m²</p>
                <div className="mt-2 p-2 bg-blue-50 rounded">
                  <p className="font-semibold text-blue-700">Minimum: 40 m²</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Sve iz BASIC paketa</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Detaljnije čišćenje kupatila</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Brisanje kuhinjskih frontova spolja</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Prekidači, kvake</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Ravne površine nameštaja</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* PREMIUM po m² */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute top-0 left-0 w-full h-2 bg-purple-500"></div>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-3xl">🟣</span>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">PREMIUM</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">150 RSD</div>
                <p className="text-gray-600">po m²</p>
                <div className="mt-2 p-2 bg-purple-50 rounded">
                  <p className="font-semibold text-purple-700">Minimum: 40 m²</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Sve iz STANDARD paketa</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Detaljno kupatilo (pločice, slavine)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Kuhinja – frontovi, sudopera, ploča</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Brisanje vrata i gelendera</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Zamena posteljine (po potrebi)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* VAŽNE NAPOMENE */}
        <section className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FaInfoCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-primary text-center">
              Važne napomene
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaRulerCombined className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Cena važi za redovno održavanje</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Paketi su namenjeni za stanove koji se redovno održavaju
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaBroom className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Hemija obezbeđuje klijent</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Za sve navedene pakete klijent obezbeđuje sredstva za čišćenje
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaExclamationTriangle className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Generalno čišćenje, prozori, rerna, frižider – posebna cena</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Ove usluge se naplaćuju odvojeno prema dogovoru
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaClock className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Ako je prostor zapušten → prelazak na generalno čišćenje</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Za zapuštene prostore primenjuju se cene generalnog čišćenja
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Cta />
      </div>
      <BackgroundImage />
    </div>
  );
}
