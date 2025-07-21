"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Cards1 from "@/components/Cards1";
import Statistika from "@/components/Statistika";
import Testimonials from "@/components/Testimonials";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import { cards1Data, uslugeData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaBroom, FaHome, FaBuilding, FaTools, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Cards1 title="Zašto baš mi?" data={cards1Data} />
      <Statistika />
      {/* Sekcija sa svim uslugama */}
      <section id="usluge" className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8">
            Naše usluge čišćenja
          </h1>
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Pružamo kompletnu uslugu čišćenja za sve vrste objekata u Novom Sadu i okolini. 
              Od redovnog održavanja do specijalizovanog čišćenja - mi smo tu da vaš prostor 
              uvek bude čist i prijatan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {uslugeData.map((usluga, index) => {
              const IconComponent = usluga.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={usluga.image}
                        alt={usluga.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-8 h-8 text-primary" />
                        <CardTitle className="text-xl">{usluga.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{usluga.shortDescription}</p>
                      <Link 
                        href={`/usluge/${usluga.slug}`}
                        className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Saznaj više
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-4 text-center">
              Zašto izabrati San Spremanje?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <FaBroom className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Profesionalnost</h4>
                <p className="text-sm">Tim iskusnih profesionalaca sa višegodišnjim iskustvom</p>
              </div>
              <div className="text-center">
                <FaHome className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Prirodna sredstva</h4>
                <p className="text-sm">Ekološki prihvatljiva sredstva bezbedna za porodicu</p>
              </div>
              <div className="text-center">
                <FaStar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Brzo i efikasno</h4>
                <p className="text-sm">Opremljeni smo najmodernijom opremom za brzo čišćenje</p>
              </div>
              <div className="text-center">
                <FaBuilding className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Novi Sad i okolina</h4>
                <p className="text-sm">Pružamo usluge u Novom Sadu i široj okolini</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Kontaktirajte nas za besplatnu ponudu
            </h3>
            <p className="text-lg mb-6">
              Pozovite nas na <strong>065 608 8870</strong> ili pošaljite poruku za besplatnu 
              konsultaciju i ponudu prilagođenu vašim potrebama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+381656088870"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Pozovite odmah
              </a>
              <Link 
                href="/kontakt"
                className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Kontakt forma
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <PozoviteNasOdmah />
    </div>
  );
}
