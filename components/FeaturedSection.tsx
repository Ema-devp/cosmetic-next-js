import Image from "next/image";

export default function FeaturedSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Left Big Card */}
        <div className="relative h-[500px] overflow-hidden">
          <Image
            src="/images/b3.png"
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute top-12 right-12 text-right">
            <p className="text-6xl text-gray-300 italic">
              Bamboo
            </p>

            <h2 className="text-4xl text-gray-400 italic">
              Collection
            </h2>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">

          {/* Natural Cosmetic */}
          <div className="relative h-[238px] overflow-hidden">
            <Image
              src="/images/b2.png"
              alt=""
              fill
              className="object-cover"
            />

            <div className="absolute left-10 top-10">
              <h3 className="text-3xl tracking-[4px]">
                NATURAL COSMETICS
              </h3>

              <p className="text-5xl text-gray-300 italic">
                Organic
              </p>
            </div>
          </div>

          {/* Gift of Nature */}
          <div className="relative h-[238px] overflow-hidden">
            <Image
              src="/images/b1.png"
              alt=""
              fill
              className="object-cover"
            />

            <div className="absolute left-10 top-10">
              <h3 className="text-3xl tracking-[4px]">
                GIFT OF NATURE
              </h3>

              <p className="text-5xl text-gray-300 italic">
                Special
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}