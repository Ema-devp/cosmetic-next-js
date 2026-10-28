import Image from "next/image";

export default function DoctorSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Image */}
        <div className="relative h-[550px]">
          <Image
            src="/images/d1.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-5xl tracking-[4px] mb-6">
            DOCTOR J. DAVID
          </h2>

          <h3 className="uppercase font-semibold tracking-[2px] leading-8 mb-8">
            AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO DIGNISSIMOS
            DUCIMUS QUI BLANDITIIS PRAESENTIUM VOLUPTATUM
            DELENITI ATQUE CORRUPTI.
          </h3>

          <p className="text-gray-500 leading-8 mb-8">
            At vero eos et accusamus et iusto odio dignissimos
            ducimus blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate provident.
          </p>

          <p className="text-6xl text-gray-300 italic">
            Krista
          </p>
        </div>
      </div>
    </section>
  );
}