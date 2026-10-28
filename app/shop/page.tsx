import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Pink Lipstick",
    price: "$49.00",
    image: "/images/pink.png",
  },
  {
    id: 2,
    name: "Natural Serum",
    price: "$55.00",
    image: "/images/green bottle.png",
  },
  {
    id: 3,
    name: "Face Cream",
    price: "$39.00",
    image: "/images/badami 1.png",
  },
  {
    id: 4,
    name: "Nail Polish",
    price: "$25.00",
    image: "/images/green 1.png",
  },
  {
    id: 5,
    name: "Organic Lotion",
    price: "$65.00",
    image: "/images/pink.png",
  },
  {
    id: 6,
    name: "Beauty Serum",
    price: "$45.00",
    image: "/images/green bottle.png",
  },
];

export default function ShopPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f8f6f5] min-h-screen">

        {/* Hero */}
        <section
          className="h-[350px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('/images/natural3.png')",
          }}
        >
          <div className="bg-white/80 px-12 py-8">
            <h1 className="text-5xl tracking-[6px]">
              SHOP
            </h1>
          </div>
        </section>

        {/* Top */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <h2 className="text-4xl">
              Cosmetic Collection
            </h2>

            <p className="text-gray-500">
              Showing {products.length} products
            </p>

          </div>
        </section>

        {/* Products */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-10 text-center shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-2xl mt-8">
                  {product.name}
                </h3>

                <p className="text-gray-500 mt-3">
                  {product.price}
                </p>

                <button className="mt-6 border border-black px-8 py-3 hover:bg-black hover:text-white transition">
                  Add To Cart
                </button>
              </div>
            ))}

          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto text-center px-6">

            <h2 className="text-4xl mb-6">
              Join Our Beauty Newsletter
            </h2>

            <p className="text-gray-500 mb-8">
              Get updates about new cosmetic products and offers.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your Email"
                className="border px-5 py-4 w-full md:w-[400px]"
              />

              <button className="bg-black text-white px-10 py-4">
                Subscribe
              </button>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}