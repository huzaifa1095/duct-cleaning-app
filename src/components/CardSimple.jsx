import React from "react";

const CardSimple = ({ Img, Title, Para }) => {
  return (
    <div className="card cursor-pointer bg-base-100 hover:ring-2 ring-slate-300 w-70 md:w-96 shadow-2xl shadow-blue-300">
      <figure>
        <img src={Img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Title}</h2>
        <p>{Para}</p>
        <div className="card-actions justify-end mt-2">
          <button className="btn btn-primary lg:hidden">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default CardSimple;
