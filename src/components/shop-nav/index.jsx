import Link from "next/link";
import React from "react";

const ShopNav = ({ pathName }) => {
  const arr = ["Hats", "Womens", "Mens", "Jackets", "Sneakers"];
  return (
    <ul className="w-full flex flex-row overflow-x-scroll scroll-smooth gap-5 items-center justify-center text-gray-600 p-2 whitespace-nowrap">
      {arr.map((item, index) => {
        return (
          <li
            key={index}
            className={`cursor-pointer px-2 ${
              pathName.toLowerCase() === item.toLowerCase()
                ? "border-2 border-b-purple-500 border-transparent text-purple-500"
                : ""
            }`}
          >
            <Link href={`/shop/${item}`}>
            {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ShopNav;