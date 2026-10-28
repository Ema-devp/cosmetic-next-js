"use client";

import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function LoginModal({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl w-[400px] relative">

        <button
          className="absolute top-5 right-5"
          onClick={onClose}
        >
          <X />
        </button>

        <h2 className="text-3xl mb-8 text-center">
          Login
        </h2>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
          />

          <button className="w-full bg-black text-white py-3 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}