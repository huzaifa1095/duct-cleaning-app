import React from "react";

import CardSimple from "@/components/CardSimple";

const CardSection = () => {
  return (
    <div className="bg-base-300 py-20 flex flex-col lg:flex-row gap-y-15 items-center lg:gap-x-15 justify-center w-full">
      <CardSimple
        Img={
          "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        }
        Title={"Card Title"}
        Para={
          "A card component has a figure, a body part, and inside body there are title and actions parts"
        }
      />
      <CardSimple
        Img={
          "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        }
        Title={"Card Title"}
        Para={
          "A card component has a figure, a body part, and inside body there are title and actions parts"
        }
      />
      <CardSimple
        Img={
          "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        }
        Title={"Card Title"}
        Para={
          "A card component has a figure, a body part, and inside body there are title and actions parts"
        }
      />
    </div>
  );
};

export default CardSection;
