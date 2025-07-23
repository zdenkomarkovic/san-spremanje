"use client";

import Image from "next/image";
import { ArrowRightIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-black/60">
       <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" />
      <Image
        src="/hero1.jpg"
        alt="San Spremanje logo"
        fill
        className="object-cover h-full w-full z-0"
        priority
      />
      <div className="relative flex flex-col gap-6 w-full items-center justify-center text-white z-[1] text-center">
        <h1 className="text-white">
          San Spremanje
        </h1>
        <h2 className="text-background font-medium md:text-[1.5rem] text-lg max-w-[800px] px-4">
          Jer sve počinje sa čistoćom! Profesionalno čišćenje bez kompromisa
        </h2>
        <p className="text-background/90 font-medium md:text-[1.2rem] text-base max-w-[700px] px-4">
          Spremamo sve što vi ne stižete: stanove, kuće, lokale, poslovne prostore, 
          prostorije posle adaptacije i novogradnju
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <Link href="/#usluge">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-foreground px-4 py-2 md:px-8 md:py-3 rounded-full font-medium"
            >
              Naše usluge
              <ArrowRightIcon className="w-[18px]" />
            </motion.button>
          </Link>
          <a href="tel:+381656088870">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-transparent border-background border-[1px] rounded-full px-4 md:px-8 md:py-3 py-2 font-medium"
            >
              <PhoneIcon className="w-[18px]" />
              065 608 8870
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
