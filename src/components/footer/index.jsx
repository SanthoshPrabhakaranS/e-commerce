import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="p-5 flex flex-col md:flex-row gap-2 justify-between items-center border-t-2">
      <ul className="flex items-center gap-4">
        <li className="cursor-pointer text-gray-500 hover:text-black transition-all">
          <Link href={"/"}>
          Home
          </Link>
        </li>
        <li className="cursor-pointer text-gray-500 hover:text-black transition-all">
          <Link href={"/shop/Hats"}>
          Shop
          </Link>
        </li>
        <li className="cursor-pointer text-gray-500 hover:text-black transition-all whitespace-nowrap">
          <Link href={"/contact"}>
          Contact Us
          </Link>
        </li>
      </ul>
      <div>
        <p className="text-[.9rem]">@SanthoshWebDev</p>
      </div>
    </div>
  );
};

export default Footer;
