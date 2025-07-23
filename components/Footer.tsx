"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className=" py-8 bg-primary text-white shadow-[0px_-2px_5px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" md:grid md:grid-cols-3 gap-8 mx-auto">
          <div>
            <ul className="pb-5 flex flex-col justify-around items-center md:items-start md:pb-0  md:space-y-2">
              <li>
                <Link href="/" className=" hover:scale-105 transition-all duration-300">
                  Početna
                </Link>
              </li>

              <li>
                <Link href="/#usluge" className=" hover:scale-105 transition-all duration-300">
                  Usluge
                </Link>
              </li>

              <li>
                  <Link href="/kontakt" className=" hover:scale-105 transition-all duration-300">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pb-5 md:pb-0">
            <div>
              {" "}
              <a href="tel:+381656088870">
                <p className="mx-auto md:mx-0 hover:scale-105 transition-all duration-300 w-fit">Telefon: 065 608 8870</p>
              </a>
            </div>
            <div>
              <a href="mailto:info@sanspremanje.rs" target={"_blank"}>
                <p className="text-wrap mx-auto md:mx-0 hover:scale-105 transition-all duration-300 w-fit">
                  Email: info@sanspremanje.rs
                </p>
              </a>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
                    <a href="#" target={"_blank"} className="hover:scale-110 transition-all duration-300">
                <Facebook />
              </a>
              <a href="#" target={"_blank"} className="hover:scale-110 transition-all duration-300">
                <Instagram />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 text-center">
            <h3 className="font-semibold mb-2 md:mb-4 text-white">
              San Spremanje
            </h3>

            <p className=" font-bold ">Jer sve počinje sa čistoćom!</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center text-center gap-2 md:gap-10 border-t-[1px] border-cool-green mt-10 pt-5">
          <p>&copy; 2025 San Spremanje. Sva prava zadržana.</p>
          <a href="https://www.manikamwebsolutions.com/" target="_blank" className="flex items-center gap-4">
            izrada sajta:{" "}
            <span className="font-bold hover:scale-105 transition-all duration-300"> ManikamWebSolutions</span>
          </a>{" "}
        </div>
      </div>
    </motion.footer>
  );
}
