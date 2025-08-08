import React from "react";

import CardSimple from "@/components/CardSimple";

const CardSection = () => {
  return (
    <div className="bg-base-300">
      <h2 className="w-full text-center text-5xl py-10">Services</h2>
      <div className="bg-base-300 pb-20 flex flex-col lg:flex-row gap-y-15 items-center lg:gap-x-15 justify-center w-full">
        <CardSimple
          Img={"/residential-area.jpeg"}
          Title={"Residential duct cleaning"}
          Para={
            "A card component has a figure, a body part, and inside body there are title and actions parts"
          }
        />
        <CardSimple
          Img={"/industry-vents.jpg"}
          Title={"Commercial duct cleaning"}
          Para={
            "A card component has a figure, a body part, and inside body there are title and actions parts"
          }
        />
        {/* <CardSimple
        Img={"/industry-vents.jpg"}
        Title={"Card Title"}
        Para={
          "A card component has a figure, a body part, and inside body there are title and actions parts"
        }
      /> */}
      </div>
    </div>
  );
};

export default CardSection;
