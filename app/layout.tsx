import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "San Spremanje - Profesionalno čišćenje stanova, kuća i poslovnih prostora | Novi Sad",
  description:
    "San Spremanje pruža profesionalne usluge čišćenja stanova, kuća, lokala i poslovnih prostora u Novom Sadu i okolini. Redovno i generalno čišćenje, čišćenje posle adaptacija i novogradnje.",
  icons: {
    icon: "/16x16.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "čišćenje",
    "san spremanje",
    "čišćenje stanova",
    "čišćenje kuća",
    "čišćenje lokala",
    "čišćenje poslovnih prostora",
    "čišćenje zgrada",
    "čišćenje posle adaptacije",
    "čišćenje novogradnje",
    "profesionalno čišćenje",
    "Novi Sad",
    "redovno čišćenje",
    "generalno čišćenje",
  ],
  alternates: {
    canonical: "https://www.ciscenjenovisad.rs/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17759228735"
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17759228735');
        `}
      </Script>
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-17759228735/3r0yCImo0ckbEL-moZRC',
                'event_callback': callback
            });
            return false;
          }
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted  text-lg md:text-xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
