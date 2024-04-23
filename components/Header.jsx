// components/Header.js
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="bg-yellow-500 text-white min-h-[400px] flex flex-col items-center justify-end">
      <p className="text-center text-black lg:text-4xl text-3xl font-semibold my-auto mt-32">
        Let's create something <br /> great together.
      </p>
      <div className="px-10">
        <div className="flex justify-between gap-5 mt-8">
          <Image
            src={"/hand-1.png"}
            width={100}
            height={100}
            className="lg:w-32 md:w-24 sm:w-20 w-12"
          ></Image>
          <Image
            src={"/hand-2.png"}
            width={100}
            height={100}
            className="lg:w-32 md:w-24 sm:w-20 w-12"
          ></Image>
          <Image
            src={"/hand-3.png"}
            width={100}
            height={100}
            className="lg:w-32 md:w-24 sm:w-20 w-12"
          ></Image>
          <Image
            src={"/hand-4.png"}
            width={100}
            height={100}
            className="lg:w-32 md:w-24 sm:w-20 w-12"
          ></Image>
          <Image
            src={"/hand-5.png"}
            width={100}
            height={100}
            className="lg:w-32 md:w-24 sm:w-20 w-12"
          ></Image>
          <Image
            src={"/hand-6.png"}
            width={100}
            height={100}
            className="lg:w-32 md:w-24 sm:w-20 w-12"
          ></Image>
        </div>
      </div>
    </header>
  );
};

export default Header;
