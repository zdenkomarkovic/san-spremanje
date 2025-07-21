"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TestimonialData, testimonialData } from "@/constants/index";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testemonials = () => {
  return (
    <div className="py-16 container px-4 mx-auto bg-gradient-to-b from-gray-50 to-white">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Šta kažu naši klijenti
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Zadovoljstvo naših klijenata je naš najveći uspeh. Evo šta kažu o našim uslugama čišćenja.
        </p>
      </motion.div>

      <Carousel
        className="w-full overflow-hidden"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            stopOnInteraction: false,
            stopOnFocusIn: false,
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="flex gap-6">
          {testimonialData.map((testimonial, i) => (
            <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <motion.div 
                className="p-2 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <TestemonialCard testimonial={testimonial} />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default Testemonials;

const TestemonialCard = ({ testimonial }: { testimonial: TestimonialData }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-gray-100 flex items-center justify-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.title}
                  fill
                  className="object-cover"
                  onError={() => {
                    // Fallback će se automatski prikazati ako slika ne postoji
                  }}
                />
                {/* Fallback inicijali ako slika ne postoji */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary font-semibold text-sm">
                  {testimonial.title.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {testimonial.title}
                </CardTitle>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <FaStar 
                        className="w-4 h-4 text-yellow-400 fill-current" 
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <motion.div 
              className="text-primary/20"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <FaQuoteLeft className="w-8 h-8" />
            </motion.div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="relative">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base italic">
              "{testimonial.description}"
            </p>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <span className="text-xs text-gray-500 font-medium">
                  Zadovoljan klijent
                </span>
              </div>
              <div className="text-xs text-gray-400">
                San Spremanje
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
