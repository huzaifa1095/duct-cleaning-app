import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer relative sm:footer-horizontal bg-base-900 text-base-content p-10">
      <aside>
        <Image
          src="/logo_notext.png"
          alt="logo"
          width={150}
          height={150}
          className="object-contain"
        />
        <p className="font-bold">
          Ducts And Vents Ltd.
          <br />
          From every state, we clean it straight.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>

      <div className="absolute w-full flex justify-center bottom-0 font-bold bg-stone-300 text-black dark:bg-stone-900 dark:text-white text-[0.6rem] ">
        <p>
          Website produced by{" "}
          <a
            href="https://www.abdurr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            abdurr.com
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
