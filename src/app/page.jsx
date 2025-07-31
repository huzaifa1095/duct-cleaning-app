import Image from "next/image";

import SlideShow from "@/components/SlideShow";

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <div className="h-12 w-full bg-red-500 px-3 fixed z-10 gap-x-5 flex justify-center items-center">
        <h4 className="font-bold text-md sm:text-xl tracking-widest">
          GET A FREE INSPECTION NOW!
        </h4>
        <button className="btn btn-soft btn-accent h-8">BOOK NOW!</button>
      </div>
      <div className="hero h-60 w-full pt-12 bg-black">
        <div className="hero-content text-center w-full h-full p-0">
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

      <nav>
        <div className="navbar bg-gradient-to-t to-slate-700 from-slate-800 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 z-1 rounded-box mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>lol boy</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="text-white text-lg">
                <a>Item 1</a>
              </li>
              <li>
                <details>
                  <summary className="text-white text-lg">Parent</summary>
                  <ul className="p-2 z-10 w-60">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="text-white text-lg">
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {/* <a className="btn">Button</a> */}
          </div>
        </div>
      </nav>

      <div
        className="hero h-160 relative bg-transparent"
        // style={{
        //   backgroundImage:
        //     "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        // }}
      >
        <div className="absolute h-160 w-full object-cover overflow-hidden">
          <SlideShow />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content z-10 text-neutral-content text-center">
          <div className="w-full">
            <h1 className="mb-5 text-5xl font-bold">
              Commercial Duct and Vent Cleaning
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary mr-8">Learn more</button>
            <button className="btn btn-secondary">Request a quote</button>
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
    </div>
  );
}
