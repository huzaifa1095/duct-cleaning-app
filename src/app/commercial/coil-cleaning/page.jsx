import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResidentialDuctCleaning() {
  return (
    <div>
      <div className="h-12 w-full bg-red-500 px-3 fixed z-20 gap-x-2 md:gap-x-5 flex justify-center items-center">
        <h4 className="font-bold text-xs md:text-md sm:text-xl tracking-widest flex items-center gap-2">
          {/* <div className="inline-grid *:[grid-area:1/1]"> */}
          <div className="flex justify-center items-center">
            <div className="status absolute status-success status-xl animate-ping"></div>
            <div className="status status-info status-md"></div>
          </div>
          GET A FREE INSPECTION NOW!
        </h4>
        <button className="btn btn-soft btn-accent h-8">BOOK NOW!</button>
      </div>
      <div className="hero h-50 md:h-70 w-full pt-12 bg-black fixed -z-10">
        <div className="hero-content w-full h-full p-0">
          <div className="relative w-full sm:w-[80%] h-full object-contain overflow-hidden">
            <Image
              src="/logo.jpeg"
              alt="logo"
              fill
              className="object-cover -z-10"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-50 md:h-70 bg-transparent"></div>

      <Navbar />

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Commercial Coil Cleaning</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
