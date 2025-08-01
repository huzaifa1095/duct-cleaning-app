import React from "react";

const CardSimple = ({ Img, Title, Para }) => {
  return (
    <div className="card cursor-pointer bg-base-100 hover:ring-2 ring-slate-300 w-96 shadow-2xl shadow-blue-300">
      <figure>
        <img src={Img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Title}</h2>
        <p>{Para}</p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default CardSimple;
