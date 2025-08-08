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

      <h1 className="text-5xl font-bold bg-base-200 w-full text-center pt-10">
        Commercial System Inspection
      </h1>
      <div className="hero bg-base-200 h-325">
        <div className="hero-content flex-col">
          <img
            src="/ac-repair.jpg"
            className="w-200 p-2 rounded-xl shadow-2xl"
          />
          <div className="flex justify-center items-center flex-col">
            <p class="text-center text-balance leading-relaxed w-200">
              It is recommended and outlined in{" "}
              <strong>ASHRAE Standard 180</strong> that your Air Conveyance
              System be inspected on a regular schedule to ensure it is clean,
              functioning properly, and operating efficiently. Regular
              inspections not only reduce energy costs and extend the life of
              your HVAC system, but also help maintain a healthier indoor
              environment for building occupants.
            </p>

            <p class="mt-4 text-balance text-center w-200">
              Proactive maintenance prevents costly breakdowns and supports
              better indoor air quality. At <strong>DuctsandVents</strong>, our
              certified technicians can inspect your system, identify issues,
              and provide tailored solutions to keep your HVAC system in top
              condition.
            </p>

            <div class="mt-6">
              <a
                href="tel:+17869523349"
                class="inline-block px-6 py-3 rounded-sm bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
              >
                Call to Schedule: (786) 952-3349
              </a>
            </div>

            <hr class="my-4 border-gray-200" />

            <h2 class="text-lg font-medium">We provide services in:</h2>

            <div class="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 justify-items-center">
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                TX
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                FL
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                CA
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                AL
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                AZ
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                CO
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                CT
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                GA
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                IL
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                IN
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                MA
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                MI
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                MN
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                MO
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                NV
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                NY
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                OK
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                OR
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                PA
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                SC
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                TN
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                VT
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                VA
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                WA
              </span>
              <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                WV
              </span>
            </div>

            <p class="mt-8 text-sm text-gray-100">
              Contact our Air Duct &amp; Vent Cleaning team today at{" "}
              <a href="tel:+17869523349" class="text-blue-400 underline">
                1-786-952-3349
              </a>{" "}
              to schedule your annual inspection.
            </p>

            <p class="mt-2 text-xs text-gray-400">
              This information references recommendations from ASHRAE Standard
              180 for regular inspection of air conveyance systems.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
