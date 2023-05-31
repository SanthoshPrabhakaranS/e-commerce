import React from "react";
import Hat from "../../assets/hat.jpg";
import Jacket from "../../assets/jacket.jpg";
import Sneakers from "../../assets/sneakers.jpg";
import Mens from "../../assets/men.jpg";
import Womens from "../../assets/women.jpg";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="w-full h-full max-w-[65rem] sm:mt-[8rem] md:mt-[12rem] mx-auto p-3 md:p-0">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div className="sm:col-span-1 relative overflow-hidden cursor-pointer">
          <Link href={`/shop/Hats`}>
            <Image
              className="w-full min-w-[300px] max-w-[400px] h-full max-h-[400px] mx-auto object-cover hover:scale-110 transition-all duration-[1.5s]"
              src={Hat}
              alt="hat"
            />
            <div className="absolute bottom-3 right-3">
              <h1 className="font-bold text-[1.3rem]">HATS</h1>
              <p className="text-[.8rem] font-light text-gray-500">SHOP NOW</p>
            </div>
          </Link>
        </div>
        <div className="sm:col-span-2 md:col-span-1 relative overflow-hidden cursor-pointer">
          <Link href={`/shop/Jackets`}>
            <Image
              className="w-full min-w-[300px] max-w-[400px] h-full max-h-[400px] mx-auto object-cover hover:scale-110 transition-all duration-[1.5s]"
              src={Jacket}
              alt="jacket"
            />
            <div className=" absolute bottom-3 right-3">
              <h1 className="font-bold text-[1.3rem]">JACKETS</h1>
              <p className="text-[.8rem] font-light text-gray-500">SHOP NOW</p>
            </div>
          </Link>
        </div>
        <div className="sm:col-span-3 md:col-span-1 relative overflow-hidden cursor-pointer">
          <Link href={`/shop/Sneakers`}>
            <Image
              className="w-full min-w-[300px] max-w-[400px] h-full max-h-[400px] mx-auto object-cover hover:scale-110 transition-all duration-[1.5s]"
              src={Sneakers}
              alt="sneakers"
            />
            <div className="absolute bottom-3 right-3">
              <h1 className="font-bold text-[1.3rem]">SNEAKERS</h1>
              <p className="text-[.8rem] font-light text-gray-500">SHOP NOW</p>
            </div>
          </Link>
        </div>
        <div className="sm:col-span-3 flex w-full gap-2">
          <div className="w-full relative overflow-hidden cursor-pointer">
            <Link href={`/shop/Womens`}>
              <Image
                className="w-full min-w-[300px] max-w-[600px] h-full max-h-[400px] object-cover hover:scale-110 transition-all duration-[1.5s]"
                src={Womens}
                alt="women"
              />
              <div className="absolute bottom-3 right-3">
                <h1 className="font-bold text-[1.3rem]">WOMENS</h1>
                <p className="text-[.8rem] font-light text-gray-500">
                  SHOP NOW
                </p>
              </div>
            </Link>
          </div>
          <div className="w-full relative overflow-hidden cursor-pointer">
            <Link href={`/shop/Mens`}>
              <Image
                className="w-full min-w-[300px] max-w-[600px] h-full max-h-[400px] object-cover hover:scale-110 transition-all duration-[1.5s]"
                src={Mens}
                alt="men"
              />
              <div className="absolute bottom-3 right-3">
                <h1 className="font-bold text-[1.3rem]">MENS</h1>
                <p className="text-[.8rem] font-light text-gray-500">
                  SHOP NOW
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
