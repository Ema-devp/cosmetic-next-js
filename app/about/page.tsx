import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f8f6f5] min-h-screen">

        {/* Hero */}
        <section
          className="h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/m4.png')",
          }}
        >
          <div className="bg-white/80 px-12 py-8 text-center">
            <h1 className="text-5xl tracking-[6px]">
              ABOUT US
            </h1>

            <p className="text-gray-500 mt-4">
              Luxury skincare inspired by nature.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <Image
                src="/images/m1.png"
                alt="About"
                width={700}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>

            <div>
              <h2 className="text-5xl mb-8">
                Our Story
              </h2>

              <p className="text-gray-600 leading-8 mb-6">
                We believe beauty begins with healthy skin.
                Our mission is to create natural cosmetic
                products that make every person feel
                confident and beautiful.
              </p>

              <p className="text-gray-600 leading-8 mb-8">
                Every product is carefully crafted using
                premium ingredients inspired by nature,
                providing a luxurious skincare experience.
              </p>

              <button className="border border-black px-8 py-4 hover:bg-black hover:text-white transition">
                Discover More
              </button>
            </div>

          </div>
        </section>

        {/* Statistics */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-4 gap-10 text-center">

              <div>
                <h3 className="text-5xl mb-4">10+</h3>
                <p className="text-gray-500">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-5xl mb-4">5000+</h3>
                <p className="text-gray-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-5xl mb-4">100+</h3>
                <p className="text-gray-500">
                  Premium Products
                </p>
              </div>

              <div>
                <h3 className="text-5xl mb-4">24/7</h3>
                <p className="text-gray-500">
                  Customer Support
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl mb-6">
              Why Choose Us
            </h2>

            <p className="text-gray-500">
              Premium quality products designed for your beauty.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-10 text-center shadow-sm rounded-lg">
              <h3 className="text-3xl mb-4">
                Natural Ingredients
              </h3>

              <p className="text-gray-500">
                Carefully selected organic ingredients for healthy skin.
              </p>
            </div>

            <div className="bg-white p-10 text-center shadow-sm rounded-lg">
              <h3 className="text-3xl mb-4">
                Cruelty Free
              </h3>

              <p className="text-gray-500">
                We never test our products on animals.
              </p>
            </div>

            <div className="bg-white p-10 text-center shadow-sm rounded-lg">
              <h3 className="text-3xl mb-4">
                Premium Quality
              </h3>

              <p className="text-gray-500">
                Luxury cosmetics made with passion and care.
              </p>
            </div>

          </div>
        </section>

        {/* Team */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-20">
              <h2 className="text-5xl mb-6">
                Meet Our Team
              </h2>

              <p className="text-gray-500">
                Passionate people behind our beauty products.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">

              <div className="text-center">
                <Image
                  src="/images/green 1.png"
                  alt=""
                  width={350}
                  height={400}
                  className="rounded-lg mx-auto"
                />

                <h3 className="text-2xl mt-6">
                  Emma Wilson
                </h3>

                <p className="text-gray-500">
                  Founder
                </p>
              </div>

              <div className="text-center">
                <Image
                  src="/images/pink.png"
                  alt=""
                  width={350}
                  height={400}
                  className="rounded-lg mx-auto"
                />

                <h3 className="text-2xl mt-6">
                  Sophia Brown
                </h3>

                <p className="text-gray-500">
                  Skin Specialist
                </p>
              </div>

              <div className="text-center">
                <Image
                  src="/images/p1.png"
                  alt=""
                  width={350}
                  height={400}
                  className="rounded-lg mx-auto"
                />

                <h3 className="text-2xl mt-6">
                  Olivia Smith
                </h3>

                <p className="text-gray-500">
                  Beauty Expert
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}