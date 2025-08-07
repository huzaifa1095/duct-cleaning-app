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

      <h1 className="text-5xl font-bold text-center bg-base-200 py-10 pb-4">
        Customer Referral & Affiliate Rewards Program
      </h1>

      <div className="hero bg-base-200 h-auto pb-10">
        <div className="hero-content flex-col ">
          <img src="/j.webp" className="w-lg rounded-lg shadow-2xl" />
          <div className="flex justify-center items-center flex-col">
            <p className="py-6 pb-1 text-xl font-bold">
              RECEIVE A $25.00 CHECK AFTER WORK IS COMPLETED. FOR EACH CUSTOMER
              REFERRED
            </p>
            <p className="py-6 pt-2 text-sm font-bold w-md text-center">
              This Offer Can Not Be Combined With Any Other Promotional Offer Or
              Discount. This Offer Applies To Our Standard Duct Cleaning Prices.
              One Certificate Valid Per Service.
            </p>
            <button className="btn btn-primary w-xs">Apply now</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
