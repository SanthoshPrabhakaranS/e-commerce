import Link from "next/link";
import React from "react";

const HeroMiddleSection = () => {
  return (
    <div className="absolute flex flex-col justify-center items-center gap-3 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p className="text-[1.2rem]">New Arrivals</p>
      <h1 className="font-semibold text-[2.5rem]">
        Enjoy this <br /> Summer Trends{" "}
      </h1>
      <Link
        className="py-3 px-4 bg-black text-white  border border-black hover:bg-white hover:text-black text-[.9rem] transition-all rounded-sm"
        href={"/shop/Hats"}
      >
        SHOP NOW
      </Link>
    </div>
  );
};

export default HeroMiddleSection;
