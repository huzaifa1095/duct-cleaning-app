import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky z-10 top-12">
      <div className="navbar h-20 bg-gradient-to-t from-slate-700 to-slate-800 shadow-sm">
        <div className="navbar-start lg:w-auto max-lg:justify-between max-lg:w-full mr-2 ml-0 md:mx-10">
          <Link
            href={"/"}
            className="flex items-center justify-center btn btn-ghost h-[70px] w-50 lg:pb-1 lg:ml-5"
          >
            <Image
              src="/logo_notext.png"
              alt="logo_notext"
              width={100}
              height={88}
              className="object-contain cursor-pointer z-10 max-lg:hidden"
            />
            <Image
              src="/logo.png"
              alt="logo_notext"
              width={500}
              height={88}
              className="object-contain cursor-pointer z-10 lg:hidden"
            />
          </Link>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content gap-y-2 bg-base-100 z-1 rounded-box mt-3 w-52 pb-6 p-4 shadow"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <a>Residential</a>
                <ul className="p-2">
                  <li>
                    <Link href={"/residential/duct-cleaning"}>
                      Duct Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href={"/residential/referral-program"}>
                      Referral & Affiliate Rewards Program
                    </Link>
                  </li>
                  <li>
                    <Link href={"/residential/dryer-vent-cleaning"}>
                      Dryer Vent Cleaning
                    </Link>
                  </li>
                </ul>
              </li>
              <details>
                <summary>Commercial</summary>

                <ul className="p-2 ml-2">
                  <li>
                    <Link href={"/commercial/dryer-vent-cleaning"}>
                      Dryer Vent Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href={"/commercial/system-inspection"}>
                      System inspection
                    </Link>
                  </li>
                  <li>
                    <Link href={"/commercial/coil-cleaning"}>
                      Coil Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href={"/commercial/exhaust-cleaning"}>
                      Exhaust Cleaning
                    </Link>
                  </li>
                </ul>
              </details>

              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex absolute w-full justify-center">
          <ul className="flex flex-row px-1 gap-5">
            <li className="text-white text-lg">
              <Link href={"/"} className="btn btn-outline border-0 text-lg m-1">
                Home
              </Link>
            </li>
            <li>
              <div className="dropdown dropdown-hover dropdown-start">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-outline border-0 text-lg m-1 z-20"
                >
                  Residential
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
                >
                  <li>
                    <Link href={"/residential/duct-cleaning"}>
                      Duct Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href={"/residential/referral-program"}>
                      Referral & Affiliate Rewards Program
                    </Link>
                  </li>
                  <li>
                    <Link href={"/residential/dryer-vent-cleaning"}>
                      Dryer Vent Cleaning
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown dropdown-hover dropdown-start">
                <a
                  tabIndex={0}
                  role="button"
                  className="btn btn-outline border-0 text-lg m-1 z-10"
                >
                  Commercial
                </a>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
                >
                  <li>
                    <Link href={"/commercial/dryer-vent-cleaning"}>
                      Dryer Vent Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href={"/commercial/system-inspection"}>
                      System inspection
                    </Link>
                  </li>
                  <li>
                    <Link href={"/commercial/coil-cleaning"}>
                      Coil Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href={"/commercial/exhaust-cleaning"}>
                      Exhaust Cleaning
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="text-white">
              <a className="btn btn-outline border-0 text-lg m-1">Contact</a>
            </li>
          </ul>
        </div>
        {/* <div className="navbar-end">
            <a className="btn">Button</a>
          </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
