import Image from "next/image";

export default function NatureSection() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      {/* Top Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <h2 className="text-5xl font-light mb-8">
            NATURE IS OUR FRIEND
          </h2>

          <h4 className="uppercase tracking-[3px] text-sm mb-6 leading-7">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti
          </h4>

          <p className="text-gray-500 leading-8 mb-10">
            At vero eos et accusamus et iusto odio dignissimos ducimus
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate.
          </p>

          <button className="border border-black px-10 py-4 tracking-[4px] hover:bg-black hover:text-white duration-300">
            DISCOVER
          </button>
        </div>

        {/* Right */}
        <div className="relative h-[500px]">
          <Image
            src="/images/natural1.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-20">

        {/* Card 1 */}
        <div className="relative h-[140px] border bg-white overflow-hidden">
          <Image
            src="/images/natural2.png"
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute left-6 top-8">
            <h3 className="text-2xl tracking-[3px]">
              SEASON SALE
            </h3>

            <p className="italic text-gray-500 text-xl">
              UP TO 50% DISCOUNT
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative h-[140px] border bg-white overflow-hidden">
          <Image
            src="/images/natural3.png"
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute left-6 top-8">
            <h3 className="text-2xl tracking-[3px]">
              FREE SHIPPING
            </h3>

            <p className="italic text-gray-500 text-xl">
              FOR ORDERS OVER $150
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative h-[140px] border bg-white overflow-hidden">
          <Image
            src="/images/natural4.png"
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute left-6 top-8">
            <h3 className="text-2xl tracking-[3px]">
              MONEY BACK
            </h3>

            <p className="italic text-gray-500 text-xl">
              IF THE ITEM DIDN'T SUIT YOU
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}