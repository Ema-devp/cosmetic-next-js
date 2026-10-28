import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f8f6f5] py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h1 className="text-5xl tracking-[6px] mb-4">
              BLOG
            </h1>

            <p className="text-gray-500">
              Beauty tips, skincare secrets and cosmetic trends.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2 space-y-12">

              <article className="bg-white p-6 shadow-sm">
                <img
                  src="/images/b1.png"
                  className="w-full h-[400px] object-cover"
                />

                <h2 className="text-3xl mt-8 mb-4">
                  Glowing Skin Is A Result Of Proper Skincare
                </h2>

                <p className="text-gray-500">
                  Discover the best skincare routine for healthy,
                  glowing skin using natural cosmetic products.
                </p>
              </article>

              <article className="bg-white p-6 shadow-sm">
                <img
                  src="/images/b2.png"
                  className="w-full h-[400px] object-cover"
                />

                <h2 className="text-3xl mt-8 mb-4">
                  Organic Products For Everyday Beauty
                </h2>

                <p className="text-gray-500">
                  Learn how organic beauty products can improve
                  your skincare routine naturally.
                </p>
              </article>

              <article className="bg-white p-6 shadow-sm">
                <img
                  src="/images/b3.png"
                  className="w-full h-[400px] object-cover"
                />

                <h2 className="text-3xl mt-8 mb-4">
                  The Secret Of Natural Makeup
                </h2>

                <p className="text-gray-500">
                  Create a fresh and elegant look with natural
                  makeup techniques.
                </p>
              </article>
            </div>

            {/* Sidebar */}
            <div className="space-y-12">

              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-2xl mb-6">
                  About Author
                </h3>

                <img
                  src="/images/m4.png"
                  className="w-full h-64 object-cover mb-4"
                />

                <p className="text-gray-500">
                  Sharing beauty and skincare knowledge for
                  modern cosmetic lovers.
                </p>
              </div>

              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-2xl mb-6">
                  Categories
                </h3>

                <ul className="space-y-3 text-gray-500">
                  <li>Beauty</li>
                  <li>Organic</li>
                  <li>Skincare</li>
                  <li>Makeup</li>
                  <li>Fashion</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}