"use client";

export default function Cta() {
    return (
      <div className="bg-primary py-2 md:py-4 text-white">
        <div className="container mx-auto px-2 md:px-32 flex flex-col md:flex-row items-center md:gap-6">
       <div>
         <h3 className="text-3xl text-center md:text-left font-semibold text-white mb-2  md:mb-4">
          Kontaktirajte nas za besplatnu ponudu
        </h3>
        <p className="mb-3 md:mb-6 text-center md:text-left">
          Pozovite nas na <strong>065 608 8870</strong> ili pošaljite poruku za besplatnu
          konsultaciju i ponudu prilagođenu vašim potrebama.
        </p>
        </div>
        <a
          href="tel:+381656088870"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
              (window as any).gtag_report_conversion('tel:+381656088870');
            }
          }}
          className="px-6 py-3 h-fit text-nowrap bg-white text-primary rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Pozovite odmah
        </a>
      </div>
      </div>
    );
  } 