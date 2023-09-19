import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <div id="Navbar" className="md:block hidden text-white">
      <div className="container 2xl:max-w-screen-2xl px-10 mx-auto">
        <div className="flex justify-between items-center py-2">
          <Link href={"/"}>
            <Image
              src={"/brand-za-logo.png"}
              height={110}
              width={135}
              alt="Company Logo"
              className="w-20 object-cover"
            />
          </Link>
          <Navigation />
          <button className="py-3 px-4 btn-grad inline-flex items-center gap-2  rounded-full text-center">
            <BiDownload className="w-5 h-5 inline fill-white" />
            <span className="font-medium">Get the app</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  const navLinks = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "/#howItWorks",
      link: "How it Works",
    },

    {
      path: "#featureBrand",
      link: "Feature your brand",
    },

    {
      path: "/#contactUs",
      link: "Contact Us",
    },
  ];
  return (
    <nav className=" flex justify-between basis-5/12 font-inter  xl:text-base text-sm">
      {navLinks.map(({ path, link }) => (
        <Link
          key={path}
          href={path}
          className="hover:underline focus:underline focus:outline-none underline-offset-2"
        >
          {link}
        </Link>
      ))}
    </nav>
  );
}
