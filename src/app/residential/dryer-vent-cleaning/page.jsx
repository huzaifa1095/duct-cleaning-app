import Image from "next/image";
import ReactMarkdown from "react-markdown";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Para = `
## Dryer Vent Cleaning Special — Save $200 Today!

### Add Dryer Vent Cleaning to Your Visit for Just **$75**

While we’re already at your home for duct cleaning, you can get your **dryer vent professionally cleaned** at a heavily discounted rate — **just $75** (normally $275).

🎉 **That’s a $200 savings!**

---

### ✅ Why Dryer Vent Cleaning Matters

- **Clothes taking longer to dry?**  
- **Dryer feeling hotter than usual?**  
- **Want to save on energy bills?**

Professional dryer vent cleaning:

- Prevents **fire hazards**
- **Improves drying time**
- **Extends appliance life**
- Reduces **energy costs**

> _Safety experts and manufacturers recommend annual cleaning._

---

### 🛠️ How to Claim This Offer

No extra appointment needed.

👉 **Just ask our on-site service coordinator** to add dryer vent cleaning to your invoice during your duct cleaning visit — **only $75** (plus tax, if applicable).

`;

const Para2 = `
## Fire Risk Alert 🔥 : Protect Your Home from Dryer Fires  
**Based on U.S. Consumer Product Safety Commission (CPSC) Guidance**  
_CPSC Document #5022 | Updated June 2003_

Each year, thousands of house fires in the U.S. are caused by clogged clothes dryer vents.  
In **1998 alone**, over **15,600 fires**, **20 deaths**, and **370 injuries** were linked to dryers — most due to **lint buildup**.

---

### ⚠️ What Causes These Fires?

Lint buildup inside the dryer or exhaust duct can:

- ❌ Block airflow  
- 🔥 Cause overheating  
- 💥 Ignite and start a fire  

---

### ✅ How to Reduce the Risk

- Clean the **lint filter** before or after **every load**.  
- Check drying time — **longer-than-normal drying** may signal a blocked vent or duct.  
- Clean the **dryer vent and exhaust duct** regularly.  
- Inspect the **outside vent** while the dryer is running — if **little or no air is escaping**, it’s likely blocked.  
- Clean **behind the dryer** to remove hidden lint.  
- Have a **professional clean the inside of the dryer chassis** periodically.  
- Replace **plastic or foil ducting** with **rigid or semi-rigid metal ducts** to maximize airflow and reduce fire risk.  
- Be cautious when drying clothes exposed to **flammable chemicals** (e.g. gasoline, oils, cleaning agents).  
  - Wash them thoroughly.  
  - Dry on **lowest heat** or **hang-dry** if possible.  

---

### 🧯 Stay Safe. Schedule Regular Dryer Vent Cleaning.

Don’t wait until there’s a problem.  
**Protect your home and family** by having your dryer vent cleaned at least **once a year** by certified professionals.

📞 **Contact Ducts and Vents at 1-786-952-3349** to schedule your service today.

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

      <h1 className="text-5xl bg-base-200 text-center font-bold pt-10">
        Residential Dryer Vent Cleaning
      </h1>
      <div className="hero bg-base-200 min-h-screen py-10 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="ml-20">
            <div className="prose prose-sm  my-5 ">
              <ReactMarkdown>{Para}</ReactMarkdown>
            </div>
            <button className="btn btn-primary">Get Free Estimate</button>
          </div>
          <img
            src="/Dryer-Vent-Cleaning.jpg"
            className="w-lg rounded-lg shadow-2xl"
          />
        </div>
      </div>
      <div className="hero bg-base-200 min-h-screen py-10 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/Dryer-Vent-House-Fire.jpg"
            className="w-xl rounded-lg shadow-2xl"
          />
          <div className="mr-20">
            {/* <h1 className="text-5xl font-bold">
              Residential Dryer Vent Cleaning
            </h1> */}
            <div className="prose prose-sm  my-5 ">
              <ReactMarkdown>{Para2}</ReactMarkdown>
            </div>
            <button className="btn btn-primary">Get Free Estimate</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
