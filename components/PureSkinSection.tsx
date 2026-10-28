import Image from "next/image";

export default function PureSkinSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="relative bg-[#f8f6f5] h-[350px] overflow-hidden">

        <Image
          src="/images/p1.png"
          alt=""
          fill
          className="object-cover"
        />

        <div className="absolute right-20 top-20 text-center">
          <p className="text-[60px] text-green-700 italic">
            Pure Skin Solution
          </p>

          <button className="mt-6 border border-black px-10 py-3 tracking-[3px] hover:bg-black hover:text-white transition">
            FIND BEAUTY
          </button>
        </div>
      </div>
    </section>
  );
}