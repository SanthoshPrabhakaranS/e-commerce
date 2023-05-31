import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center pt-[2rem] pb-[2rem]">
      <div className="text-center">
        <h1 className="text-[2.6rem]">Stay In Touch</h1>
        <p className="text-[1.2rem]">
          Get Briefings from our shop experts today.
        </p>
      </div>
      <Link
        className="py-3 px-4 bg-black border border-black text-white hover:bg-white hover:text-black text-[.9rem] transition-all rounded-sm"
        href={"/shop"}
      >
        CONTACT US
      </Link>
    </div>
  );
};

export default Contact;
