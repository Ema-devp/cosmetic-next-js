"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-24">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-16">

        {/* Contact */}
        <div>
          <h3 className="text-xl tracking-[3px] mb-8">
            CONTACT
          </h3>

          <div className="space-y-3 text-gray-300 italic">
            <p>Address: Seestrasse 21, Zurich</p>
            <p>Email: biagiottitheme@gmail.com</p>
            <p>Phone: +99 411 75 39 12</p>
          </div>

          {/* Payment Icons */}
          <div className="flex gap-3 text-3xl mt-8">
            <FaCcVisa />
            <FaCcPaypal />
            <FaCcMastercard />
            <FaCcAmex />
          </div>
        </div>

        {/* Center */}
        <div className="text-center">

          <h1 className="text-5xl italic mb-8 font-light">
            biagiotti
          </h1>

          <p className="text-3xl leading-relaxed uppercase">
            An Oasis Of Online Beauty Built Specifically So Your New Cosmetics Site Can Take Everyone's Breath Away.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-10">
            <a
              href="#"
              className="w-12 h-12 border border-gray-500 flex items-center justify-center hover:bg-white hover:text-black duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-12 h-12 border border-gray-500 flex items-center justify-center hover:bg-white hover:text-black duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-12 h-12 border border-gray-500 flex items-center justify-center hover:bg-white hover:text-black duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-12 h-12 border border-gray-500 flex items-center justify-center hover:bg-white hover:text-black duration-300"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Collections */}
        <div className="text-center md:text-right">
          <h3 className="text-xl tracking-[3px] mb-8">
            COLLECTIONS
          </h3>

          <div className="space-y-4 text-gray-300 italic">
            <p>Glowing Skin Is A Result</p>
            <p>ABCDFH Beauty – Forever Young</p>
            <p>Pure Skin Solutions</p>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-10 text-sm uppercase tracking-[3px]">

          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms And Conditions</Link>
          <Link href="#">About</Link>
          <Link href="#">Shipping Info</Link>
          <Link href="#">Returns/Exchanges</Link>
          <Link href="#">Contact</Link>

        </div>
      </div>
    </footer>
  );
}