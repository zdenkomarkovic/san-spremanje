"use client";

import Image from "next/image";

const About = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto py-7 md:py-12 space-y-5 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <h2 className=" text-6xl text-primary text-center py-10 font-gagalin">
          San Spremanje – Jer sve počinje sa čistoćom!
        </h2>
        <p className=" first-letter:pl-6 text-lg md:text-3xl">
          San Spremanje je vaš pouzdani partner za profesionalno čišćenje u Novom Sadu i okolini. 
          Sa višegodišnjim iskustvom i posvećenošću kvalitetu, pružamo kompletnu uslugu čišćenja 
          za sve vrste objekata - od stambenih prostora do poslovnih zgrada.
        </p>
        <div className="space-y-5 block">
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Naša misija je jednostavna - da vaš prostor bude čist, zdrav i prijatan za život i rad. 
            Koristimo najmoderniju opremu i ekološki prihvatljiva sredstva koja su bezbedna za vas, 
            vašu porodicu i okolinu. Tim iskusnih profesionalaca prilagođava se vašim potrebama i 
            rasporedu, osiguravajući da čišćenje bude efikasno i neometa vaš dnevni ritam.
          </p>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            U ponudi imamo <span className="font-bold">redovno i generalno čišćenje</span>, 
            <span className="font-bold">čišćenje stanova i kuća</span>, 
            <span className="font-bold">čišćenje lokala i kancelarija</span>, 
            <span className="font-bold">čišćenje zgrada</span>, kao i 
            <span className="font-bold">specijalizovano čišćenje posle adaptacija i renoviranja</span>. 
            Posebno se ističemo u čišćenju novogradnje, gde uklanjamo sve ostatke građevinskih radova 
            i pripremamo prostor za useljenje.
          </p>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Radimo <span className="font-bold">temeljno, brzo i profesionalno</span>, 
            koristeći <span className="font-bold">efikasna prirodna sredstva</span> i 
            opremljeni smo za sve izazove - od prašine do građevinskog otpada. 
            Naš tim je dostupan u Novom Sadu i okolini, sa fleksibilnim terminima 
            koji odgovaraju vašim potrebama.
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Profesionalno čišćenje - San Spremanje"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default About;
