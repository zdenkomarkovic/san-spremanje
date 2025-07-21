import { IconType } from "react-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";
import { LuTimerReset } from "react-icons/lu";
import { FaHome, FaBuilding, FaStore, FaIndustry, FaTools, FaBroom } from "react-icons/fa";
import { MdCleaningServices, MdApartment, MdBusinessCenter } from "react-icons/md";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "Usluge",
    list: [
      {
        title: "Redovno čišćenje",
        link: "/usluge/redovno-ciscenje",
      },
      {
        title: "Generalno čišćenje",
        link: "/usluge/generalno-ciscenje",
      },
      {
        title: "Čišćenje stanova i kuća",
        link: "/usluge/ciscenje-stanova-i-kuca",
      },
      {
        title: "Čišćenje lokala i kancelarija",
        link: "/usluge/ciscenje-lokala-i-kancelarija",
      },
      {
        title: "Čišćenje zgrada",
        link: "/usluge/ciscenje-zgrada",
      },
      {
        title: "Čišćenje posle adaptacija",
        link: "/usluge/ciscenje-posle-adaptacija",
      },
      {
        title: "Čišćenje novogradnje",
        link: "/usluge/ciscenje-novogradnje",
      },
    ],
  },
  {
    title: "O nama",
    link: "/o-nama",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface WorkList {
  id: number;
  title: string;
  text: string;
}

export const workList = [
  {
    id: 1,
    title: "Redovno čišćenje",
    text: "Održavanje čistoće vašeg prostora kroz redovne posete. Prilagođavamo se vašim potrebama i rasporedu, osiguravajući konzistentnu čistoću bez ometanja vašeg dnevnog ritma.",
    icon: FaBroom,
  },
  {
    id: 2,
    title: "Generalno čišćenje",
    text: "Temeljno čišćenje svih površina, uključujući teško dostupna mesta. Idealno za periodično održavanje ili pripremu prostora za posebne prilike.",
    icon: MdCleaningServices,
  },
  {
    id: 3,
    title: "Čišćenje stanova i kuća",
    text: "Kompletno čišćenje stambenih objekata sa pažljivošću prema vašoj imovini. Koristimo prirodna sredstva koja su bezbedna za porodicu i kućne ljubimce.",
    icon: FaHome,
  },
  {
    id: 4,
    title: "Čišćenje lokala i kancelarija",
    text: "Profesionalno čišćenje poslovnih prostora koje održava profesionalnu sliku vaše kompanije. Prilagođavamo se radnom vremenu i specifičnim potrebama.",
    icon: MdBusinessCenter,
  },
  {
    id: 5,
    title: "Čišćenje zgrada",
    text: "Čišćenje zajedničkih prostora, ulaza, stepeništa i fasada zgrada. Održavamo čistoću i sigurnost za sve stanare.",
    icon: FaBuilding,
  },
  {
    id: 6,
    title: "Čišćenje posle adaptacija",
    text: "Specijalizovano čišćenje posle građevinskih radova. Uklanjamo građevinski otpad, prašinu i ostatke materijala.",
    icon: FaTools,
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Marija S.",
    image: "/manikam.png",
    description:
      "San Spremanje je odličan izbor za čišćenje našeg stana! Tim je profesionalan, brz i pažljiv. Preporučujem svima koji traže kvalitetnu uslugu čišćenja u Novom Sadu.",
  },
  {
    id: 2,
    title: "Petar M.",
    image: "/puric.jpg",
    description:
      "Koristimo njihove usluge za čišćenje naše kancelarije već godinu dana. Redovno, pouzdano i uvek zadovoljni rezultatom. Atmosfera u kancelariji je sada mnogo prijatnija!",
  },
  {
    id: 3,
    title: "Ana K.",
    image: "/slep puric.jpg",
    description:
      "Posle adaptacije stana trebalo nam je temeljno čišćenje. San Spremanje je uradio fantastičan posao - uklonili su svu prašinu i ostatke građevinskih materijala. Preporučujem!",
  },
  {
    id: 4,
    title: "Dragan N.",
    image: "/puric slep.jpg",
    description:
      "Kao upravnik zgrade, mogu reći da je San Spremanje najbolji partner za održavanje čistoće zajedničkih prostora. Stanari su zadovoljni, a mi mirni.",
  },
  {
    id: 5,
    title: "Jelena R.",
    image: "/manikam.png",
    description:
      "Čišćenje novogradnje je bilo izazov, ali San Spremanje je savršeno obavio posao. Sada imamo čist i spreman stan za useljenje. Hvala!",
  },
];

export interface Cards1Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards1Data: Cards1Data[] = [
  {
    id: 1,
    icon: FaBroom,
    title: "Profesionalnost",
    text: "Tim iskusnih profesionalaca sa višegodišnjim iskustvom u čišćenju različitih tipova objekata.",
  },
  {
    id: 2,
    icon: FaHome,
    title: "Prirodna sredstva",
    text: "Koristimo ekološki prihvatljiva sredstva koja su bezbedna za vas, vašu porodicu i okolinu.",
  },
  {
    id: 3,
    icon: LuTimerReset,
    title: "Brzo i efikasno",
    text: "Opremljeni smo najmodernijom opremom za brzo i efikasno čišćenje svih površina.",
  },
  {
    id: 4,
    icon: FaBuilding,
    title: "Novi Sad i okolina",
    text: "Pružamo usluge čišćenja u Novom Sadu i široj okolini, sa fleksibilnim terminima.",
  },
];

export interface UslugaData {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: IconType;
  image: string;
  features: string[];
  benefits: string[];
  whenNeeded?: string[];
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const uslugeData: UslugaData[] = [
  {
    slug: "redovno-ciscenje",
    title: "Redovno čišćenje stanova i kuća",
    shortDescription: "Održavanje čistoće kroz redovne posete",
    longDescription: "Redovno čišćenje je idealno rešenje za održavanje čistoće vašeg prostora bez ometanja vašeg dnevnog ritma. Naš tim prilagođava se vašim potrebama i rasporedu, osiguravajući konzistentnu čistoću kroz redovne posete.",
    icon: FaBroom,
    image: "/hero1.jpg",
    features: [
      "Čišćenje svih površina (podovi, stolovi, police)",
      "Uklanjanje prašine sa svih površina",
      "Čišćenje kupatila i kuhinje",
      "Čišćenje prozora i ogledala",
      "Vakuiranje i pranje podova",
      "Čišćenje kupaonice i toaleta",
      "Odlaganje smeća",
      "Osvežavanje prostora"
    ],
    benefits: [
      "Profesionalno čišćenje",
      "Fleksibilni termini",
      "Redovne posete",
      "Prirodna sredstva"
    ],
    metadata: {
      title: "Redovno čišćenje stanova i kuća | San Spremanje Novi Sad",
      description: "Profesionalno redovno čišćenje stanova i kuća u Novom Sadu. Održavanje čistoće kroz redovne posete, prilagođeno vašem rasporedu. Kontakt: 065 608 8870",
      keywords: ["redovno čišćenje", "čišćenje stanova", "čišćenje kuća", "održavanje čistoće", "Novi Sad", "San Spremanje"]
    }
  },
  {
    slug: "generalno-ciscenje",
    title: "Generalno čišćenje stanova i kuća",
    shortDescription: "Temeljno čišćenje svih površina",
    longDescription: "Generalno čišćenje je temeljno čišćenje svih površina, uključujući teško dostupna mesta koja se obično preskaču u redovnom čišćenju. Idealno je za periodično održavanje ili pripremu prostora za posebne prilike.",
    icon: MdCleaningServices,
    image: "/hero2.jpg",
    features: [
      "Temeljno čišćenje svih površina (podovi, zidovi, plafoni)",
      "Čišćenje nameštaja i električnih uređaja",
      "Čišćenje prozora, ogledala i staklenih površina",
      "Čišćenje kuhinje i kupatila",
      "Čišćenje klima uređaja i ventilacija",
      "Vakuiranje i pranje svih vrsta podova",
      "Čišćenje teško dostupnih mesta",
      "Čišćenje garderobe i plakara",
      "Osvežavanje i dezinfekcija prostora",
      "Odlaganje smeća i reciklaža"
    ],
    benefits: [
      "Temeljno čišćenje",
      "Jednokratno",
      "Premium kvalitet",
      "Bezbedna sredstva"
    ],
    whenNeeded: [
      "Periodično održavanje (2-4 puta godišnje)",
      "Priprema za posebne prilike",
      "Nakon dugog perioda neaktivnosti",
      "Priprema za prodaju ili iznajmljivanje",
      "Nakon renoviranja ili adaptacije",
      "Sezonsko čišćenje"
    ],
    metadata: {
      title: "Generalno čišćenje stanova i kuća | San Spremanje Novi Sad",
      description: "Temeljno generalno čišćenje stanova i kuća u Novom Sadu. Kompletno čišćenje svih površina, uključujući teško dostupna mesta. Kontakt: 065 608 8870",
      keywords: ["generalno čišćenje", "temeljno čišćenje", "čišćenje stanova", "čišćenje kuća", "kompletno čišćenje", "Novi Sad", "San Spremanje"]
    }
  },
  {
    slug: "ciscenje-stanova-i-kuca",
    title: "Čišćenje stanova i kuća",
    shortDescription: "Kompletno čišćenje stambenih objekata",
    longDescription: "Vaš dom je vaše utočište, a mi razumemo koliko je važno da bude čist i zdrav. Pružamo profesionalne usluge čišćenja stanova i kuća sa pažljivošću prema vašoj imovini i potrebama vaše porodice.",
    icon: FaHome,
    image: "/hero3.jpg",
    features: [
      "Dnevne sobe i spavaće sobe",
      "Kuhinja i trpezarija",
      "Kupatila i toaleti",
      "Garderobe i plakari",
      "Hodnici i stepeništa",
      "Balkoni i terase",
      "Podrumi i tavanice",
      "Dvorišta i garaže"
    ],
    benefits: [
      "Stambeni objekti",
      "Profesionalno čišćenje",
      "Prirodna sredstva",
      "Prilagođeno porodici"
    ],
    metadata: {
      title: "Čišćenje stanova i kuća Novi Sad | San Spremanje",
      description: "Profesionalno čišćenje stanova i kuća u Novom Sadu. Kompletno čišćenje stambenih objekata sa pažljivošću prema vašoj imovini. Prirodna sredstva bezbedna za porodicu. Kontakt: 065 608 8870",
      keywords: ["čišćenje stanova", "čišćenje kuća", "čišćenje stambenih objekata", "Novi Sad", "San Spremanje", "profesionalno čišćenje"]
    }
  },
  {
    slug: "ciscenje-lokala-i-kancelarija",
    title: "Čišćenje lokala i kancelarija",
    shortDescription: "Profesionalno čišćenje poslovnih prostora",
    longDescription: "Prva utisak je najvažniji - to je zašto je čistoća vašeg poslovnog prostora ključna za održavanje profesionalne slike vaše kompanije. Pružamo specijalizovane usluge čišćenja lokala i kancelarija prilagođene poslovnim potrebama.",
    icon: MdBusinessCenter,
    image: "/hero2.jpg",
    features: [
      "Kancelarije i radne prostorije",
      "Recepcije i čekaonice",
      "Konferencijske sale",
      "Kuhinje i trpezarije",
      "Kupatila i toaleti",
      "Hodnici i stepeništa",
      "Ulazi i foyeri",
      "Parking prostori"
    ],
    benefits: [
      "Poslovni prostori",
      "Profesionalno čišćenje",
      "Fleksibilni termini",
      "Diskretnost"
    ],
    metadata: {
      title: "Čišćenje lokala i kancelarija Novi Sad | San Spremanje",
      description: "Profesionalno čišćenje lokala, kancelarija i poslovnih prostora u Novom Sadu. Održavanje profesionalne slike vaše kompanije. Kontakt: 065 608 8870",
      keywords: ["čišćenje lokala", "čišćenje kancelarija", "čišćenje poslovnih prostora", "Novi Sad", "San Spremanje", "profesionalno čišćenje"]
    }
  },
  {
    slug: "ciscenje-zgrada",
    title: "Čišćenje zgrada",
    shortDescription: "Čišćenje zajedničkih prostora zgrada",
    longDescription: "Čistoća zajedničkih prostora je ključna za kvalitet života svih stanara. Pružamo kompletnu uslugu čišćenja zgrada koja obuhvata sve zajedničke prostore, od ulaza i stepeništa do fasada i okolnih površina.",
    icon: FaBuilding,
    image: "/hero1.jpg",
    features: [
      "Ulazi i foyeri",
      "Stepeništa i hodnici",
      "Liftovi i lift-saone",
      "Podrumi i garaže",
      "Balkoni i terase",
      "Fasade i prozori",
      "Okolne površine",
      "Kontejneri za smeće"
    ],
    benefits: [
      "Zgrade i objekti",
      "Zajednički prostori",
      "Sigurnost stanara",
      "Saradnja sa upravnicima"
    ],
    metadata: {
      title: "Čišćenje zgrada Novi Sad | San Spremanje",
      description: "Profesionalno čišćenje zgrada i zajedničkih prostora u Novom Sadu. Čišćenje ulaza, stepeništa, fasada i zajedničkih prostora. Kontakt: 065 608 8870",
      keywords: ["čišćenje zgrada", "čišćenje zajedničkih prostora", "čišćenje ulaza", "čišćenje stepeništa", "Novi Sad", "San Spremanje"]
    }
  },
  {
    slug: "ciscenje-posle-adaptacija",
    title: "Čišćenje posle adaptacija i renoviranja",
    shortDescription: "Specijalizovano čišćenje posle građevinskih radova",
    longDescription: "Građevinski radovi ostavljaju za sobom ogromnu količinu prašine, ostataka materijala i građevinskog otpada. Naš tim je specijalizovan za čišćenje posle adaptacija i renoviranja, koristeći profesionalnu opremu i tehnike.",
    icon: FaTools,
    image: "/hero3.jpg",
    features: [
      "Uklanjanje građevinskog otpada",
      "Čišćenje prašine sa svih površina",
      "Čišćenje ostataka cementa i maltera",
      "Uklanjanje boje i lakova",
      "Čišćenje prozora i staklenih površina",
      "Čišćenje kuhinje i kupatila",
      "Čišćenje garderobe i plakara",
      "Dezinfekcija i osvežavanje",
      "Finalna kontrola kvaliteta"
    ],
    benefits: [
      "Građevinski otpad",
      "Profesionalna oprema",
      "Bezbednost",
      "Kvalitet rezultata"
    ],
    whenNeeded: [
      "Nakon renoviranja stanova",
      "Nakon adaptacije kancelarija",
      "Nakon građevinskih radova",
      "Nakon izolacije i fasade",
      "Nakon elektroinstalacija",
      "Nakon hidroinstalacija"
    ],
    metadata: {
      title: "Čišćenje posle adaptacija i renoviranja | San Spremanje Novi Sad",
      description: "Specijalizovano čišćenje posle građevinskih radova u Novom Sadu. Uklanjanje građevinskog otpada, prašine i ostataka materijala. Kontakt: 065 608 8870",
      keywords: ["čišćenje posle adaptacija", "čišćenje posle renoviranja", "čišćenje građevinskog otpada", "Novi Sad", "San Spremanje"]
    }
  },
  {
    slug: "ciscenje-novogradnje",
    title: "Čišćenje novogradnje",
    shortDescription: "Kompletna završna higijena pre useljenja",
    longDescription: "Novogradnja zahteva posebnu pažnju kada je u pitanju čišćenje. Građevinski radovi ostavljaju za sobom prašinu, ostatke materijala i građevinski otpad koji mora biti potpuno uklonjen pre useljenja.",
    icon: FaHome,
    image: "/hero1.jpg",
    features: [
      "Uklanjanje građevinskog otpada",
      "Čišćenje prašine sa svih površina",
      "Čišćenje ostataka cementa i maltera",
      "Uklanjanje boje i lakova",
      "Čišćenje prozora i staklenih površina",
      "Čišćenje kuhinje i kupatila",
      "Čišćenje garderobe i plakara",
      "Dezinfekcija i osvežavanje",
      "Finalna kontrola kvaliteta"
    ],
    benefits: [
      "Novogradnja",
      "Završna higijena",
      "Bezbednost",
      "Premium kvalitet"
    ],
    metadata: {
      title: "Čišćenje novogradnje Novi Sad | San Spremanje",
      description: "Kompletna završna higijena novogradnje u Novom Sadu. Čišćenje novih stanova i kuća pre useljenja. Kontakt: 065 608 8870",
      keywords: ["čišćenje novogradnje", "završna higijena", "čišćenje novih stanova", "čišćenje pre useljenja", "Novi Sad", "San Spremanje"]
    }
  }
];

export interface ServisCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const servisCardsData = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "Šlep automobila",
    text: "Vršimo šlep svih vrsta automobila, bez obzira na stanje vozila – havarisana, poluvozna ili ispravna.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Šlep motora",
    text: "Šlepamo motore, skutere, četvorotočkaše, motorne sanke i druga vozila brzo i sigurno.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Šlep kombija i kamiona",
    text: "Pružamo uslugu transporta kombija, kamiona i radnih mašina širom Srbije, uz sigurnost i brzinu.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Šlep vozila iz inostranstva",
    text: "Vršimo prevoz automobila iz inostranstva po najpovoljnijim cenama u Srbiji.",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pomoc na putu 0-24h",
    text: "Svakom može zatrebati u nekom trenutku, naročito u hitnim slučajevima. Kada je potrebna šlep služba u Čačku i na teritoriji Zlatibora.",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "Šlep lakog i teškog tereta",
    text: "Za vas prevozimo i laki i teški teret, kako u Čačku, tako i u drugim gradovima Srbije.",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "Šlep havarisanog vozila",
    text: "Ukoliko ste imali havariju na putu, tu smo da pokupimo vaše vozilo i bezbedno ga odšlepamo do servisa.",
  },
  {
    id: 8,
    icon: GiWeight,
    title: "Šlep radnih mašina",
    text: "Šlep radnih mašina do lokacije na kojoj mogu nastaviti s poslom, brzo i sigurno.",
  },
  {
    id: 9,
    icon: GiWeight,
    title: "Izvlačenje sajlom vozila van puta",
    text: "Izvlačenje vozila sa puta sajlom, pažljivo izvedeno kako bi se izbegla dodatna oštećenja vozila.",
  },
  {
    id: 10,
    icon: GiWeight,
    title: "Prevoz poljoprivrednih mašina",
    text: "Prevoz poljoprivrednih mašina, priključaka i opreme – idealno rešenje za one koje je lakše transportovati nego voziti, kao i za neispravne mašine.",
  },
];

export interface Cards2Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "Elektroinstalacije",
    text: "",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Elektro ormani",
    text: "",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Industrijski elektro ormani",
    text: "",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "Pružamo usluge izrade, montaže i održavanja elektro ormana za domaćinstva, poslovne prostore i industrijska postrojenja. Naš tim vodi računa o kvalitetu instalacija i bezbednosti sistema, uz poštovanje svih standarda i propisa.",
};

export interface Tim {
  name: string;
  title: string;
  image: string;
}

export const tim: Tim[] = [
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
];
