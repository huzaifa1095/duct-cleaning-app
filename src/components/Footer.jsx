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
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="fill-current cursor-pointer"
            viewBox="0 0 17 17"
          >
            <path
              fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
            />
          </svg>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current cursor-pointer"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
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
