import React, { useEffect, useState } from "react";
import { Shop, Menu, Left } from "../../icons/icons";
import Link from "next/link";
import Storage from "@/storage/storage";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import {useSelector } from "react-redux";
import Cart from "../cart";

const NavBar = () => {
  const _Storage = new Storage();
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const userName = _Storage.getItem("username");
  const cart = useSelector((state) => state.reducer.cart);

  const _toggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const _logOut = () => {
    _Storage.clearStorage();
    router.push("/");
  };

  const _toggleCart = () => {
    setToggleCart(!toggleCart)
  }

  const _showUsername = () => {
    return (
      <Popover placement="top-start">
        <PopoverHandler>
          <Button className="!bg-white !text-gray-500 !border-none !shadow-none !p-0 !lowercase font-normal !z-50">
            {" "}
            <p className="flex items-center">
              <span>{Left}</span> {userName}
            </p>
          </Button>
        </PopoverHandler>
        <PopoverContent>
          <span
            onClick={() => _logOut()}
            className="text-gray-500 cursor-pointer"
          >
            Logout
          </span>
        </PopoverContent>
      </Popover>
    );
  };

  return (
    <nav className="px-3 md:px-8 py-3 w-full flex flex-col gap-2 md:flex-row justify-between items-start md:items-center relative">
    { toggleCart ? <Cart _toggleCart={_toggleCart} /> : null}
      <div className="w-full flex justify-between">
        {/* Logo */}
        <h1 className={`font-black text-[1.4rem]`}>
          Sho
          <p
            className={`rotate-[18deg] text-purple-600 inline-block font-medium text-[1.4rem]`}
          >
            p
          </p>
          eee
        </h1>
        <span onClick={_toggleMenu} className="flex md:hidden">
          {Menu}
        </span>
      </div>
      <ul
        className={`w-full flex flex-col md:flex-row gap-3 md:gap-5 md:justify-end text-gray-500 transition-all duration-500 z-40 sm:absolute md:relative bg-white left-0 sm:p-3 md:p-0 ${
          toggleMenu
            ? "translate-y-[20%]"
            : "sm:-translate-y-[110%] md:-translate-y-[0%]"
        }`}
      >
        <li
          onClick={() => setToggleMenu(false)}
          className={`cursor-pointer hover:text-black ${
            router.pathname === "/" ? "text-purple-500" : ""
          }`}
        >
          <Link href={"/"}>Home</Link>
        </li>
        <li
          onClick={() => setToggleMenu(false)}
          className={`cursor-pointer hover:text-black ${
            router.pathname.includes("/shop") ? "text-purple-500" : ""
          }`}
        >
          <Link href={"/shop/Hats"}>Shop</Link>
        </li>
        <li
          onClick={() => setToggleMenu(false)}
          className={`cursor-pointer hover:text-black ${
            router.pathname === "/contact" ? "text-purple-500" : ""
          }`}
        >
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li
          onClick={toggleMenu ? _logOut : null}
          className={`cursor-pointer hover:text-black ${
            router.pathname.includes("/auth") ? "text-purple-500" : ""
          }`}
        >
          {userName ? (
            _showUsername()
          ) : (
            <Link onClick={() => setToggleMenu(false)} href={"/auth/signin"}>
              Sign In
            </Link>
          )}
        </li>
        <li onClick={_toggleCart} className="cursor-pointer hover:text-black relative ">
          <span className="absolute font-semibold top-[-7px] right-0 text-[.9rem] text-gray-600">
            {cart.length}
          </span>
          {Shop}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
