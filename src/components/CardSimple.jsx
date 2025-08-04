import Link from "next/link";
import React from "react";

const CardSimple = ({ Img, Title, Para }) => {
  return (
    <Link
      href={"/"}
      className="card cursor-pointer group bg-base-100 hover:ring-2 ring-slate-300 w-70 md:w-96 shadow-2xl shadow-blue-300"
    >
      <figure>
        <img
          className="group-hover:scale-[105%] duration-200 ease-in-out"
          src={Img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Title}</h2>
        <p>{Para}</p>
        <div className="card-actions justify-end mt-2">
          <button className="btn btn-primary lg:hidden">Book Now</button>
        </div>
      </div>
    </Link>
  );
};

export default CardSimple;
