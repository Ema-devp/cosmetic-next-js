import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import FeaturedSection from "@/components/FeaturedSection";
import BeautyMatch from "@/components/BeautyMatch";
import PureSkinSection from "@/components/PureSkinSection";
import DoctorSection from "@/components/DoctorSection";
import BestSellerSlider from "@/components/BestSellerSlider";
import NatureSection from "@/components/NatureSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f8f6f5]">
      <Header />
      <HeroSlider />
      <FeaturedSection />
      <BeautyMatch />
      <PureSkinSection />
      <DoctorSection />
      <BestSellerSlider />
          <NatureSection />
                <Footer />
    </main>
  );
}