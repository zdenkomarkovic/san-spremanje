export default function UslugaKontakt() {
  return (
    <div className="text-center py-2 md:py-4">
      <h3 className="text-2xl font-semibold text-primary mb-4">
        Kontaktirajte nas za besplatnu ponudu
      </h3>
      <p className="text-lg mb-6">
        Pozovite nas na <strong>065 608 8870</strong> ili pošaljite poruku za besplatnu 
        konsultaciju i ponudu prilagođenu vašim potrebama.
      </p>
      <a 
        href="tel:+381656088870"
        className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
      >
        Pozovite odmah
      </a>
    </div>
  );
} 