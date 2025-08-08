import React from "react";
import Image from "next/image";

const CardSlim = ({ Img, Title, Para }) => {
  return (
    <div className="card bg-base-100 w-80 shadow-sm mx-auto">
      <figure className="px-10 mt-2 h-40">
        <Image
          width={200}
          height={120}
          src={Img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center pt-2">
        <h2 className="card-title">{Title}</h2>
        <p>{Para}</p>
        <div className="card-actions">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default CardSlim;
