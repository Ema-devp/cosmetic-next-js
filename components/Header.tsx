"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Heart,
  ShoppingBag,
  Menu,
  User,
} from "lucide-react";
import LoginModal from "./LoginModal";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [openLogin, setOpenLogin] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white py-3 text-center text-sm">
        Free shipping on international orders of $150+
      </div>

      {/* Header */}
      <header className="w-full border-b">
  <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">

          {/* Wishlist */}
          <div className="flex items-center gap-2">
            <Heart size={18} />
            <span className="hidden md:block">Wishlist</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-10 uppercase text-sm tracking-[3px]">
  <Link href="/" className="hover:text-gray-500 transition">
    Home
  </Link>

  <Link href="/about" className="hover:text-gray-500 transition">
    About Us
  </Link>

  <Link href="/blog" className="hover:text-gray-500 transition">
    Blog
  </Link>

  <Link href="/shop" className="hover:text-gray-500 transition">
    Shop
  </Link>

  <Link href="/portfolio" className="hover:text-gray-500 transition">
    Portfolio
  </Link>

  <Link href="/contact" className="hover:text-gray-500 transition">
    Contact
  </Link>
</nav>
          {/* Right */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setOpenLogin(true)}
              className="hidden lg:flex items-center gap-2"
            >
              <User size={18} />
              Login
            </button>

            <ShoppingBag size={20} />

            <button
              className="lg:hidden"
              onClick={() => setMobileMenu(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <LoginModal
        open={openLogin}
        onClose={() => setOpenLogin(false)}
      />

      <MobileMenu
        open={mobileMenu}
        onClose={() => setMobileMenu(false)}
      />
    </>
  );
}