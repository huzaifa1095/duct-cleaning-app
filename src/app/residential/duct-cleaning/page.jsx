import Image from "next/image";
import ReactMarkdown from "react-markdown";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Para = `
## How Clean Is the Air You Breathe?

Your home’s air may be circulating more than just comfort — it could also be moving dust, bacteria, mold, and allergens. At **DuctsandVents**, we help you breathe cleaner, healthier air by professionally cleaning your HVAC ducts and vents.

## ✅ What Our Service Does:
- Removes **dust, mold, bacteria, and mites** from your heating and cooling system
- Reduces **asthma and allergy symptoms** through cleaner airflow
- Improves **HVAC efficiency**, lowering your energy bills
- Decreases **indoor dust buildup**, making your home cleaner
- Creates a safer, healthier environment for your family

## Certified Professionals You Can Trust
Our technicians are trained in accordance with **OSHA safety standards** and **IAQA (Indoor Air Quality Association)** best practices to ensure your home’s air quality is restored safely and effectively.

---

📞 **Contact our Air Duct & Vent Cleaning experts today:**  
**1-786-952-3349**  
Or book online and take a deep breath of truly clean air.
`;

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

      <div className="hero bg-base-200 min-h-screen py-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="w-md rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Residential Duct Cleaning</h1>
            <div className="prose prose-sm mr-20 m-5 ml-0">
              <ReactMarkdown>{Para}</ReactMarkdown>
            </div>
            <button className="btn btn-primary">Get Free Estimate</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
