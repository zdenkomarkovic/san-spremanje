"use client";

import Image from "next/image";
import about from "../public/about.jpg";

const About = () => {
  return (<div className="relative">
      <Image
    src="/bg.jpg"
    alt="San Spremanje"
    fill
    className="object-[80%_center] md:object-center object-cover h-full w-full z-0"
    priority
  />
    <div className="container relative px-2 md:px-4 mx-auto py-7 md:py-12 space-y-5 z-[1] flex flex-col md:flex-row items-center gap-10 text-white">
     
      <div className=" space-y-10">
        <h2 className="text-white z-[1]">
          San Spremanje – Jer sve počinje sa čistoćom!
        </h2>
   <div className="grid grid-cols-1 md:grid-cols-2 items-center">
    <div className="flex flex-col gap-4">
         <p className=" first-letter:pl-6">
          San Spremanje je vaš pouzdani partner za profesionalno čišćenje u Novom Sadu i okolini. 
          Sa višegodišnjim iskustvom i posvećenošću kvalitetu, pružamo kompletnu uslugu čišćenja 
          za sve vrste objekata - od stambenih prostora do poslovnih zgrada.
        </p>
          <p className=" first-letter:pl-6">
            Naša misija je jednostavna - da vaš prostor bude čist, zdrav i prijatan za život i rad. 
            Koristimo najmoderniju opremu i ekološki prihvatljiva sredstva koja su bezbedna za vas, 
            vašu porodicu i okolinu. Tim iskusnih profesionalaca prilagođava se vašim potrebama i 
            rasporedu, osiguravajući da čišćenje bude efikasno i neometa vaš dnevni ritam.
          </p>
          <p className=" first-letter:pl-6">
            U ponudi imamo <span className="font-bold">redovno i generalno čišćenje</span>, 
            <span className="font-bold">čišćenje stanova i kuća</span>, 
            <span className="font-bold">čišćenje lokala i kancelarija</span>, 
            <span className="font-bold">čišćenje zgrada</span>, kao i 
            <span className="font-bold">specijalizovano čišćenje posle adaptacija i renoviranja</span>. 
            Posebno se ističemo u čišćenju novogradnje, gde uklanjamo sve ostatke građevinskih radova 
            i pripremamo prostor za useljenje.
          </p>
          </div> 
           
                 <div className="">
        {/* <Image
          src={about}
          alt="Profesionalno čišćenje - San Spremanje"
          width={500}
          height={500}
          className="rounded-2xl w-full shadow-lg object-cover"
        /> */}
      </div> </div> 
        <div className="space-y-5 block">

          <p className=" first-letter:pl-6">
            Radimo <span className="font-bold">temeljno, brzo i profesionalno</span>, 
            koristeći <span className="font-bold">efikasna prirodna sredstva</span> i 
            opremljeni smo za sve izazove - od prašine do građevinskog otpada. 
            Naš tim je dostupan u Novom Sadu i okolini, sa fleksibilnim terminima 
            koji odgovaraju vašim potrebama.
          </p>
        </div>
      </div>

    </div>
    </div>
  );
};

export default About;
