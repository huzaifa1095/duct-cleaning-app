import Image from "next/image";

import Navbar from "@/components/Navbar";
import SlideShow from "@/components/SlideShow";
import Footer from "@/components/Footer";
import CardSimple from "@/components/CardSimple";
import SliderSection from "@/components/SliderSection";

export default function Home() {
  return (
    <div>
      <div className="h-12 w-full bg-red-500 px-3 fixed z-20 gap-x-5 flex justify-center items-center">
        <h4 className="font-bold text-md sm:text-xl tracking-widest">
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

      {/* <div className="w-100 h-100 bg-amber-900 sticky z-10 top-0"></div> */}

      <Navbar />

      <div
        className="hero h-200 relative bg-transparent"
        // style={{
        //   backgroundImage:
        //     "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        // }}
      >
        <div className="absolute -z-10 h-auto w-full object-cover overflow-hidden">
          <SlideShow />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content z-5 text-neutral-content text-center">
          <div className="w-full">
            <h1 className="mb-5 text-5xl text-shadow-xl text-shadow-black font-bold">
              Commercial Duct and Vent Cleaning
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary mr-8">Learn more</button>
            <button className="btn btn-success">Request a quote</button>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 h-100 ">
        <div className="hero-content flex-col px-30 lg:flex-row-reverse">
          <img
            src="https://www.ductandvent.com/Data/components/home-first-feature/US-Naval-Ship.jpg"
            className="w-md rounded-lg shadow-2xl"
          />

          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="bg-base-300 py-20 flex flex-row gap-x-10 justify-center w-full">
        <CardSimple
          Img={
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          Title={"Card Title"}
          Para={
            "A card component has a figure, a body part, and inside body there are title and actions parts"
          }
        />
        <CardSimple
          Img={
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          Title={"Card Title"}
          Para={
            "A card component has a figure, a body part, and inside body there are title and actions parts"
          }
        />
        <CardSimple
          Img={
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          Title={"Card Title"}
          Para={
            "A card component has a figure, a body part, and inside body there are title and actions parts"
          }
        />
      </div>

      <SliderSection />

      <Footer />
    </div>
  );
}
