import React from 'react'
import { FaBroom, FaHome, FaBuilding, FaStar } from "react-icons/fa";

export default function WhyUs() {
  return (
    <div className="container mx-auto px-2 md:px-4 bg-gray-50 p-8 rounded-lg my-8">
    <h2 className=" mb-4">
      Zašto izabrati San Spremanje?
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="text-center">
        <FaBroom className="w-12 h-12 text-primary mx-auto mb-4" />
        <h4 className="font-semibold mb-2">Profesionalnost</h4>
        <p className="text-sm">Tim iskusnih profesionalaca sa višegodišnjim iskustvom</p>
      </div>
      <div className="text-center">
        <FaHome className="w-12 h-12 text-primary mx-auto mb-4" />
        <h4 className="font-semibold mb-2">Prirodna sredstva</h4>
        <p className="text-sm">Ekološki prihvatljiva sredstva bezbedna za porodicu</p>
      </div>
      <div className="text-center">
        <FaStar className="w-12 h-12 text-primary mx-auto mb-4" />
        <h4 className="font-semibold mb-2">Brzo i efikasno</h4>
        <p className="text-sm">Opremljeni smo najmodernijom opremom za brzo čišćenje</p>
      </div>
      <div className="text-center">
        <FaBuilding className="w-12 h-12 text-primary mx-auto mb-4" />
        <h4 className="font-semibold mb-2">Novi Sad i okolina</h4>
        <p className="text-sm">Pružamo usluge u Novom Sadu i široj okolini</p>
      </div>
    </div>
  </div>
  )
}