"use client";
import Image from "next/image";
import logo from "@/public/assets/images/logo.svg";
import menu from "@/public/assets/images/icon-menu.svg";
import close from "@/public/assets/images/icon-menu-close.svg";
import { useState } from "react";

const Nav = () => {
  const [navBar, setNavBar] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setNavBar(!navBar);
  };
  return (
    <nav className="flex  items-center justify-between p-6 xs:w-full">
      <div className="flex items-center">
        <Image src={logo} alt="logo de la marca" className="" />
      </div>
      <button
        onClick={handleClick}
        className="md:flex xs:flex lg:hidden p-6 bg-white"
        style={{ opacity: navBar ? 0 : 1, transition: "opacity 0.3s" }}
      >
        <Image src={menu} alt="menu" className="" />
      </button>
      <div className="md:hidden sm:hidden lg:flex xs:hidden">
        <ul className="flex gap-12 ">
          {["Home", "New", "Popular", "Trending", "Categories"].map(
            (item, index) => (
              <li key={index} className="hover:text-orange-500 cursor-pointer">
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      {/* MOBILE */}
      <div
        className={`xs:flex md:flex lg:hidden fixed top-0 right-0 w-96 h-screen bg-white transform ${
          navBar ? "translate-x-0" : "translate-x-full"
        } transition-transform ease-in-out duration-300`}
      >
        {navBar && (
          <div className="md:flex lg:hidden bg-white fixed  h-full">
            <ul className="flex flex-col gap-12 p-6  mt-16">
              <button className="hover:text-orange-500 cursor-pointer flex justify-end items-center ">
                <Image src={close} alt="close" onClick={handleClick} />
              </button>
              {["Home", "New", "Popular", "Trending", "Categories"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="hover:text-orange-500 cursor-pointer text-2xl"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
