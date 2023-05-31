import Image from "next/image";
import React from "react";
import Model from "../../assets/model.jpg";
import Watch from "../../assets/watch.jpg";

const NewComes = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-5 items-center justify-center">
      <div className="w-[100%] lg:w-[50%] relative flex justify-start items-center">
        <div className="absolute p-5">
          <h1 className="text-[1.6rem] lg:text-[2.2rem] font-semibold">New Arrival</h1>
          <p className="text-[1.1rem] lg:text-[1.6rem]">On Eligible Items in stock for now</p>
        </div>
        <Image
          src={Watch}
          alt="watch"
          className="w-full h-full max-h-[400px] object-cover"
        />
      </div>
      <div className="w-[100%] lg:w-[50%] relative flex justify-start items-center">
        <div className="absolute p-5 text-gray-600">
          <h1 className="text-[1.6rem] lg:text-[2.2rem] font-semibold ">Summer Sales Off</h1>
          <p className="text-[1.1rem] lg:text-[1.6rem]">On Eligible Items off prices in stick</p>
        </div>
        <Image
          src={Model}
          alt="model"
          className="w-full h-full max-h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default NewComes;
