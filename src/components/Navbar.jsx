import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky z-10 top-12">
      <div className="navbar h-20 bg-gradient-to-t from-slate-700 to-slate-800 shadow-sm">
        <div className="navbar-start lg:w-auto max-lg:justify-between max-lg:w-full mr-2 max-lg:mx-10">
          <Link href={"/"} className="btn btn-ghost h-[70px] pb-1 lg:ml-5">
            <Image
              src="/logo_notext.png"
              alt="logo_notext"
              width={100}
              height={88}
              className="object-contain cursor-pointer z-10"
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
        </div>
        <div className="navbar-center hidden lg:flex absolute w-full justify-center">
          <ul className="flex flex-row px-1 gap-5">
            <li className="text-white text-lg">
              <a className="btn btn-outline border-0 text-lg m-1">Home</a>
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
                    <a>Duct Cleaning</a>
                  </li>
                  <li>
                    <a>Referral & Affiliate Rewards Program</a>
                  </li>
                  <li>
                    <a>Dryer Vent Cleaning</a>
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
                    <a>Dryer Vent Cleaning</a>
                  </li>
                  <li>
                    <a>System inspection</a>
                  </li>
                  <li>
                    <a>Coil Cleaning</a>
                  </li>
                  <li>
                    <a>Exhaust Cleaning</a>
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
