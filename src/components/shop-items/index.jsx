import Image from "next/image";
import React from "react";

const ShopItems = ({ item, _addProductToCart }) => {
  const _priceCalc = (amount) => {
    // Convert the amount to a string
    amount = amount.toString();

    // Split the amount into rupees and paise
    var rupees = amount.split(".")[0];
    var paise = amount.split(".")[1];

    // Format rupees with commas for thousands, lakhs, and crores
    var formattedRupees = "";
    var rupeeLength = rupees.length;
    var counter = 0;

    for (var i = rupeeLength - 1; i >= 0; i--) {
      formattedRupees = rupees.charAt(i) + formattedRupees;
      counter++;

      if (counter === 3 && i !== 0) {
        formattedRupees = "," + formattedRupees;
        counter = 0;
      }
    }

    // Concatenate the rupees and paise with the currency symbol
    var formattedAmount = "₹" + formattedRupees;

    if (paise) {
      formattedAmount += "." + paise;
    }

    return formattedAmount;
  };

  return (
    <div className="shadow-sm border w-full max-w-[250px] h-full max-h-[290px] mx-auto rounded-md cursor-pointer relative group">
      <div className="w-full h-full absolute bottom-3 hidden group-hover:flex group-hover:bg-white opacity-30 items-end justify-center"></div>
      <button
        onClick={() =>
          _addProductToCart(
            item.productName,
            item.productImg,
            item._id,
            item.productPrice
          )
        }
        className="hidden bg-gray-300 opacity-90 group-hover:flex hover:bg-black hover:text-white px-9 py-2 absolute bottom-3 left-11 rounded font-semibold text-[.8rem]"
      >
        ADD TO CART
      </button>
      <Image
        src={item.productImg}
        alt="product-img"
        className="h-full max-h-[220px] w-full max-w-[250px] object-cover"
        height={250}
        width={250}
      />
      <div className="py-2 px-4">
        <p>{item.productName}</p>
        <h1 className="font-semibold">{_priceCalc(item.productPrice)}</h1>
      </div>
    </div>
  );
};

export default ShopItems;
