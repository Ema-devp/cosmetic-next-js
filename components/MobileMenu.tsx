"use client";

import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">

      <div className="bg-white h-full w-[280px] p-8">

        <button onClick={onClose}>
          <X />
        </button>

        <div className="mt-10 flex flex-col gap-6 uppercase">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Shop</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}