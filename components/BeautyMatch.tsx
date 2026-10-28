import Image from "next/image";

const products = [
  {
    name: "FACE PRIMER",
    price: "$65.00",
    image: "/images/m1.png",
  },
  {
    name: "MICELLAR WATER",
    price: "$65.00",
    image: "/images/m2.png",
  },
  {
    name: "NAIL POLISH",
    price: "$35.00",
    image: "/images/m3.png",
  },
  {
    name: "TONIC LOTION",
    price: "$45.00",
    image: "/images/m4.png",
  },
  {
    name: "POWDER PUFF",
    price: "$53.00",
    image: "/images/m5.png",
  },
  {
    name: "LIPSTICK MATTE",
    price: "$14.00",
    image: "/images/m6.png",
  },
  {
    name: "EYESHADOW GUARD",
    price: "$25.00",
    image: "/images/m7.png",
  },
  {
    name: "SOAP NATURAL",
    price: "$42.00",
    image: "/images/m8.png",
  },
];

export default function BeautyMatch() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-20">
        <p className="text-5xl text-gray-300 italic">
          perfect shades
        </p>

        <h2 className="text-5xl tracking-[4px] mt-4">
          FIND YOUR BEAUTY MATCH
        </h2>

        <p className="mt-3 text-gray-500 uppercase">
          AT VERO EOS ET ACCUSAMUS ET IUSTO
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-10">

        {products.map((product) => (
          <div
            key={product.name}
            className="text-center group"
          >
            <div className="relative h-[180px] mb-8">
              <Image
                src={product.image}
                alt=""
                fill
                className="object-contain group-hover:scale-110 transition duration-500"
              />
            </div>

            <h3 className="text-xl">
              {product.name}
            </h3>

            <p className="text-gray-500 mt-2">
              An dico accommodare ius, porro
            </p>

            <p className="mt-3 font-semibold">
              {product.price}
            </p>

            <div className="mt-3 text-gray-300">
              ★★★★★
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}