import Image from "next/image";
import React from "react";
import ContactImg from "../../assets/contact.jpg";

const Contact = () => {
  return (
    <div className="p-2 px-2 flex flex-col gap-10">
      <div className="w-full h-full max-h-[500px] relative flex justify-center items-center p-0 md:px-5">
        <Image
          src={ContactImg}
          alt="contact-img"
          height={600}
          width={"100%"}
          className="w-full h-full max-h-[500px] object-cover rounded"
        />
        <h1 className="absolute text-[2.2rem] font-semibold">Contact Us</h1>
      </div>
      <div className="w-full max-w-[900px] mx-auto border-b px-2">
        <p className="text-[1.1rem] text-gray-500">
          Frontend developer and Javascript engineer, Photochromic Lens
          enthusiast, practicing minimalist, and Pop Music & Jazz lover in
          search of flow. Working with my hands to make magic happen on the
          internet. View my Projects, Articles, Resumé, Contact Me, or send me
          an email at santhoshprabhakaran02@gmail.com.
        </p>
      </div>
      <div className="p-4 bg-gray-200 flex flex-col justify-center items-center ">
        <p className="font-semibold">Email: santhoshprabhakaran02@gmail.com</p>
        <p className="font-semibold">Website: www.santhosh.dev</p>
        <p className="font-semibold">LinkedIn: LinkedIn Profile</p>
      </div>
    </div>
  );
};

export default Contact;
