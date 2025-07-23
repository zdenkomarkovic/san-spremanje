"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Cards1 from "@/components/Cards1";
import Statistika from "@/components/Statistika";
import Testimonials from "@/components/Testimonials";
import { cards1Data, uslugeData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import BackgroundImage from "@/components/BackgroundImage";
import Cta from "@/components/Cta";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Cards1 title="Zašto baš mi?" data={cards1Data} />
      <About />
      <Statistika />
      {/* Sekcija sa svim uslugama */}
      <section id="usluge" className="container mx-auto px-4 py-8">
        <div className="">
          <h2 className="mb-8">
            Naše usluge čišćenja
          </h2>
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Pružamo kompletnu uslugu čišćenja za sve vrste objekata u Novom Sadu i okolini. 
              Od redovnog održavanja do specijalizovanog čišćenja - mi smo tu da vaš prostor 
              uvek bude čist i prijatan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {uslugeData.slice(0, 4).map((usluga, index) => {
        
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: index * 0.15 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col justify-between">
                    <div className="relative h-56">
                      <Image
                        src={usluga.image}
                        alt={usluga.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                
                
                        <CardTitle className="text-center text-primary">{usluga.title}</CardTitle>
                  
                    </CardHeader>
                    <CardContent className="flex items-end justify-end">

                      <Link 
                        href={`/usluge/${usluga.slug}`}
                        className="pb-3   hover:font-bold transition-all duration-300"
                      >
                        Saznaj više...
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {uslugeData.slice(4, 7).map((usluga, index) => {
        
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: index * 0.15 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col justify-between">
                    <div className="relative h-56">
                      <Image
                        src={usluga.image}
                        alt={usluga.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                
                
                        <CardTitle className="text-center text-primary">{usluga.title}</CardTitle>
                  
                    </CardHeader>
                    <CardContent className="flex items-end justify-end">

                      <Link 
                        href={`/usluge/${usluga.slug}`}
                        className="pb-3   hover:font-bold transition-all duration-300"
                      >
                        Saznaj više...
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

        
        </div>
      </section>  
      <BackgroundImage/>
      <WhyUs/>
      <Cta/>
      <Testimonials />

    </div>
  );
}
