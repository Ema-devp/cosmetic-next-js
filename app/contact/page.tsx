"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    let valid = true;

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (form.message.length < 10) {
      newErrors.message =
        "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    setSuccess("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <>
      <Header />

      <main className="bg-[#f8f6f5] min-h-screen">

        {/* Hero */}
        <section className="relative h-[350px] overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/m4.png')",
    }}
  ></div>

  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
    <h1 className="text-5xl md:text-6xl text-white tracking-[6px] mb-4">
      CONTACT US
    </h1>

    <p className="text-white text-lg">
      We'd love to hear from you.
    </p>
  </div>
</section>
        {/* Contact Cards */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 text-center shadow-sm rounded">
              <h3 className="text-2xl mb-4">
                Address
              </h3>

              <p className="text-gray-500">
                Chattogram, Bangladesh
              </p>
            </div>

            <div className="bg-white p-8 text-center shadow-sm rounded">
              <h3 className="text-2xl mb-4">
                Email
              </h3>

              <p className="text-gray-500">
                emamurrashid33@gmail.com
              </p>
            </div>

            <div className="bg-white p-8 text-center shadow-sm rounded">
              <h3 className="text-2xl mb-4">
                Phone
              </h3>

              <p className="text-gray-500">
                +8801717192496
              </p>
            </div>

          </div>
        </section>

        {/* Form + Map */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-white p-10 shadow-sm rounded">

              <h2 className="text-4xl mb-8">
                Send Us A Message
              </h2>

              {success && (
                <div className="bg-green-100 text-green-700 p-4 rounded mb-6">
                  {success}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    className="w-full border p-4 rounded outline-none"
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    className="w-full border p-4 rounded outline-none"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    rows={7}
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    className="w-full border p-4 rounded resize-none outline-none"
                  />

                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="border border-black px-10 py-4 hover:bg-black hover:text-white transition"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div className="h-[600px] overflow-hidden rounded shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=Chattogram,Bangladesh&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}