import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SliderSection from "@/components/SliderSection";
import NewsSlider from "@/components/NewsSlider";
import HeroSlideShow from "@/components/HeroSlideShow";
import CardSection from "@/components/CardSection";
import Mission from "@/components/Mission";

export default function Home() {
  return (
    <div>
      <div className="h-12 w-full bg-red-500 px-3 fixed z-20 gap-x-5 flex justify-center items-center">
        <h4 className="font-bold text-md sm:text-xl tracking-widest flex items-center gap-2">
          {/* <div className="inline-grid *:[grid-area:1/1]"> */}
          <div className="flex justify-center items-center">
            <div className="status absolute status-success status-xl animate-ping"></div>
            <div className="status status-info status-md"></div>
          </div>
          GET A FREE INSPECTION NOW!
        </h4>
        <button className="btn btn-soft btn-accent h-8">BOOK NOW!</button>
      </div>
      <div className="hero h-70 w-full pt-12 bg-black fixed -z-10">
        <div className="hero-content text-center w-full h-full p-0">
          <div className="relative w-full sm:w-[80%] h-full object-contain overflow-hidden">
            <Image
              src="/logo.jpeg"
              alt="logo"
              fill
              className="object-cover h-150 -z-10"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-70 bg-transparent"></div>

      <Navbar />

      <HeroSlideShow />
      <NewsSlider />
      <CardSection />
      <SliderSection />
      <Mission />
      <Footer />
    </div>
  );
}
